#!/usr/bin/env node
const https = require("https");
const fs = require("fs");
const path = require("path");

const FONTS_DIR = path.join(__dirname, "../assets/fonts");
const OUT_CSS = path.join(__dirname, "../assets/css/fonts.css");
const CHROME_UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
const GOOGLE_FONTS_URL = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap";

function get(url, headers = {}) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(get(res.headers.location, headers));
      }
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => resolve(Buffer.concat(chunks)));
      res.on("error", reject);
    }).on("error", reject);
  });
}

function slugify(family, weight, style) {
  return `${family.toLowerCase().replace(/\s+/g, "-")}-${style}-${weight}`;
}

async function main() {
  if (!fs.existsSync(FONTS_DIR)) fs.mkdirSync(FONTS_DIR, { recursive: true });
  console.log("Fetching Google Fonts CSS...");
  const css = (await get(GOOGLE_FONTS_URL, { "User-Agent": CHROME_UA })).toString();

  const lines = css.split("\n");
  let currentBlock = null;
  let prevComment = "";
  const latinBlocks = [];

  for (const line of lines) {
    const commentMatch = line.match(/\/\*\s*(.+?)\s*\*\//);
    if (commentMatch) prevComment = commentMatch[1];
    if (line.includes("@font-face")) {
      currentBlock = { comment: prevComment, lines: [line] };
    } else if (currentBlock) {
      currentBlock.lines.push(line);
      if (line.includes("}")) {
        if (currentBlock.comment === "latin") latinBlocks.push(currentBlock.lines.join("\n"));
        currentBlock = null;
      }
    }
  }

  console.log(`Found ${latinBlocks.length} latin @font-face blocks`);
  const fontFaceDeclarations = [];

  for (const block of latinBlocks) {
    const familyMatch = block.match(/font-family:\s*'([^']+)'/);
    const weightMatch = block.match(/font-weight:\s*(\d+)/);
    const styleMatch = block.match(/font-style:\s*(\w+)/);
    const srcMatch = block.match(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+\.woff2)\)/);
    const displayMatch = block.match(/font-display:\s*(\w+)/);

    if (!familyMatch || !weightMatch || !srcMatch) continue;

    const family = familyMatch[1];
    const weight = weightMatch[1];
    const style = styleMatch ? styleMatch[1] : "normal";
    const display = displayMatch ? displayMatch[1] : "swap";
    const woff2Url = srcMatch[1];
    const filename = `${slugify(family, weight, style)}.woff2`;
    const localPath = path.join(FONTS_DIR, filename);

    if (!fs.existsSync(localPath)) {
      console.log(`Downloading ${family} ${weight} ${style}...`);
      const buffer = await get(woff2Url);
      fs.writeFileSync(localPath, buffer);
      console.log(`  Saved ${filename} (${buffer.length} bytes)`);
    } else {
      console.log(`Already exists: ${filename}`);
    }

    fontFaceDeclarations.push(
      `@font-face {\n  font-family: '${family}';\n  font-style: ${style};\n  font-weight: ${weight};\n  font-display: ${display};\n  src: url('/assets/fonts/${filename}') format('woff2');\n}`
    );
  }

  const cssOut = fontFaceDeclarations.join("\n\n") + "\n";
  fs.writeFileSync(OUT_CSS, cssOut);
  console.log(`Written ${fontFaceDeclarations.length} @font-face rules to ${OUT_CSS}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
