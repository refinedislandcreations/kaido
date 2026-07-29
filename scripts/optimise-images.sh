#!/usr/bin/env bash
# scripts/optimise-images.sh
# Compress and resize homepage images for web performance.
# Usage: bash scripts/optimise-images.sh
# Requires: cwebp (brew install webp)
#
# Originals are backed up to assets/images/originals/ before overwriting.

set -euo pipefail

IMAGES_DIR="assets/images"
ORIGINALS_DIR="${IMAGES_DIR}/originals"

check_deps() {
  if ! command -v cwebp &>/dev/null; then
    echo "❌  cwebp not found. Install via: brew install webp"
    exit 1
  fi
}

backup_if_needed() {
  local file="$1"
  local base
  base=$(basename "$file")
  if [[ ! -f "${ORIGINALS_DIR}/${base}" ]]; then
    mkdir -p "$ORIGINALS_DIR"
    cp "$file" "${ORIGINALS_DIR}/${base}"
    echo "  📦 Backed up ${base}"
  fi
}

compress() {
  local src="$1"
  local dest="$2"
  local quality="$3"
  local width="$4"

  if [[ ! -f "$src" ]]; then
    echo "  ⚠️  Source not found: $src — skipping"
    return
  fi

  local args=(-q "$quality")
  if [[ "$width" -gt 0 ]]; then
    args+=(-resize "$width" 0)
  fi

  cwebp "${args[@]}" "$src" -o "$dest" 2>/dev/null
  local before after
  before=$(stat -f%z "$src" 2>/dev/null || stat -c%s "$src")
  after=$(stat -f%z "$dest" 2>/dev/null || stat -c%s "$dest")
  local saved=$(( (before - after) * 100 / before ))
  echo "  ✅ $(basename "$dest"): $((before/1024))KB → $((after/1024))KB (${saved}% saved)"
}

main() {
  check_deps
  echo "🔧 Optimising homepage images..."
  echo ""

  for img in \
    "${IMAGES_DIR}/homepage-hero-banner.webp" \
    "${IMAGES_DIR}/homepage-setup.webp" \
    "${IMAGES_DIR}/homepage-feature-3.webp" \
    "${IMAGES_DIR}/homepage-feature-4.webp"; do
    [[ -f "$img" ]] && backup_if_needed "$img"
  done

  echo ""
  echo "📐 Compressing images..."

  compress "${ORIGINALS_DIR}/homepage-hero-banner.webp" \
    "${IMAGES_DIR}/homepage-hero-banner.webp" 72 2560

  compress "${ORIGINALS_DIR}/homepage-setup.webp" \
    "${IMAGES_DIR}/homepage-setup.webp" 72 2560

  compress "${ORIGINALS_DIR}/homepage-feature-3.webp" \
    "${IMAGES_DIR}/homepage-feature-3.webp" 75 1440

  compress "${ORIGINALS_DIR}/homepage-feature-4.webp" \
    "${IMAGES_DIR}/homepage-feature-4.webp" 75 1440

  echo ""
  echo "✨ Done! Rebuild Jekyll to see the changes:"
  echo "   bundle exec jekyll serve"
}

main "$@"
