

async function testHubSpot() {
  const url = "https://api.hsforms.com/submissions/v3/integration/submit/242242619/ff30bcc6-46b5-49d4-8670-92bb1eded1ab";
  
  const body = {
    fields: [
      { name: "firstname", value: "Test" },
      { name: "lastname", value: "Test" },
      { name: "email", value: "test@example.com" },
      { name: "hs_whatsapp_phone_number", value: "+1234567890" },
      { name: "phone", value: "+1234567890" },
      { name: "location", value: "Bali" },
      { name: "intended_use", value: "Private" },
      { name: "instrument_of_interest", value: "phantom" }
    ],
    submittedAt: Date.now().toString(),
    context: {
      pageUri: "http://localhost:4000",
      pageName: "Test Page"
    }
  };

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    
    const text = await res.text();
    console.log("Status:", res.status);
    console.log("Response:", text);
  } catch (err) {
    console.error("Error:", err);
  }
}

testHubSpot();
