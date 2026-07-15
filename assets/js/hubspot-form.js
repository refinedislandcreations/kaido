  // --- HubSpot programmatic submission for custom form ---
  (function () {
    const COUNTRY_CODES = [
      { value: "+376", iso: "AD" },
      { value: "+971", iso: "AE" },
      { value: "+93", iso: "AF" },
      { value: "+1-268", iso: "AG" },
      { value: "+1-264", iso: "AI" },
      { value: "+355", iso: "AL" },
      { value: "+374", iso: "AM" },
      { value: "+599", iso: "AN" },
      { value: "+244", iso: "AO" },
      { value: "+672", iso: "AQ" },
      { value: "+54", iso: "AR" },
      { value: "+1-684", iso: "AS" },
      { value: "+43", iso: "AT" },
      { value: "+61", iso: "AU" },
      { value: "+297", iso: "AW" },
      { value: "+994", iso: "AZ" },
      { value: "+387", iso: "BA" },
      { value: "+1-246", iso: "BB" },
      { value: "+880", iso: "BD" },
      { value: "+32", iso: "BE" },
      { value: "+226", iso: "BF" },
      { value: "+359", iso: "BG" },
      { value: "+973", iso: "BH" },
      { value: "+257", iso: "BI" },
      { value: "+229", iso: "BJ" },
      { value: "+590", iso: "BL" },
      { value: "+1-441", iso: "BM" },
      { value: "+673", iso: "BN" },
      { value: "+591", iso: "BO" },
      { value: "+55", iso: "BR" },
      { value: "+1-242", iso: "BS" },
      { value: "+975", iso: "BT" },
      { value: "+267", iso: "BW" },
      { value: "+375", iso: "BY" },
      { value: "+501", iso: "BZ" },
      { value: "+1", iso: "CA" },
      { value: "+61", iso: "CC" },
      { value: "+243", iso: "CD" },
      { value: "+236", iso: "CF" },
      { value: "+242", iso: "CG" },
      { value: "+41", iso: "CH" },
      { value: "+225", iso: "CI" },
      { value: "+682", iso: "CK" },
      { value: "+56", iso: "CL" },
      { value: "+237", iso: "CM" },
      { value: "+86", iso: "CN" },
      { value: "+57", iso: "CO" },
      { value: "+269", iso: "KM" },
      { value: "+506", iso: "CR" },
      { value: "+53", iso: "CU" },
      { value: "+238", iso: "CV" },
      { value: "+599", iso: "CW" },
      { value: "+61", iso: "CX" },
      { value: "+357", iso: "CY" },
      { value: "+420", iso: "CZ" },
      { value: "+49", iso: "DE" },
      { value: "+253", iso: "DJ" },
      { value: "+45", iso: "DK" },
      { value: "+1-767", iso: "DM" },
      { value: "+1-809", iso: "DO" },
      { value: "+1-829", iso: "DO" },
      { value: "+1-849", iso: "DO" },
      { value: "+213", iso: "DZ" },
      { value: "+593", iso: "EC" },
      { value: "+372", iso: "EE" },
      { value: "+20", iso: "EG" },
      { value: "+212", iso: "EH" },
      { value: "+291", iso: "ER" },
      { value: "+34", iso: "ES" },
      { value: "+251", iso: "ET" },
      { value: "+358", iso: "FI" },
      { value: "+679", iso: "FJ" },
      { value: "+500", iso: "FK" },
      { value: "+691", iso: "FM" },
      { value: "+298", iso: "FO" },
      { value: "+33", iso: "FR" },
      { value: "+241", iso: "GA" },
      { value: "+44", iso: "GB" },
      { value: "+1-473", iso: "GD" },
      { value: "+995", iso: "GE" },
      { value: "+44-1481", iso: "GG" },
      { value: "+233", iso: "GH" },
      { value: "+350", iso: "GI" },
      { value: "+299", iso: "GL" },
      { value: "+220", iso: "GM" },
      { value: "+224", iso: "GN" },
      { value: "+240", iso: "GQ" },
      { value: "+30", iso: "GR" },
      { value: "+502", iso: "GT" },
      { value: "+1-671", iso: "GU" },
      { value: "+245", iso: "GW" },
      { value: "+592", iso: "GY" },
      { value: "+852", iso: "HK" },
      { value: "+504", iso: "HN" },
      { value: "+385", iso: "HR" },
      { value: "+509", iso: "HT" },
      { value: "+36", iso: "HU" },
      { value: "+62", iso: "ID" },
      { value: "+353", iso: "IE" },
      { value: "+972", iso: "IL" },
      { value: "+44-1624", iso: "IM" },
      { value: "+91", iso: "IN" },
      { value: "+246", iso: "IO" },
      { value: "+964", iso: "IQ" },
      { value: "+98", iso: "IR" },
      { value: "+354", iso: "IS" },
      { value: "+39", iso: "IT" },
      { value: "+44-1534", iso: "JE" },
      { value: "+1-876", iso: "JM" },
      { value: "+962", iso: "JO" },
      { value: "+81", iso: "JP" },
      { value: "+254", iso: "KE" },
      { value: "+996", iso: "KG" },
      { value: "+855", iso: "KH" },
      { value: "+686", iso: "KI" },
      { value: "+269", iso: "KM" },
      { value: "+1-869", iso: "KN" },
      { value: "+850", iso: "KP" },
      { value: "+82", iso: "KR" },
      { value: "+965", iso: "KW" },
      { value: "+1-345", iso: "KY" },
      { value: "+7", iso: "KZ" },
      { value: "+856", iso: "LA" },
      { value: "+961", iso: "LB" },
      { value: "+1-758", iso: "LC" },
      { value: "+423", iso: "LI" },
      { value: "+94", iso: "LK" },
      { value: "+231", iso: "LR" },
      { value: "+266", iso: "LS" },
      { value: "+370", iso: "LT" },
      { value: "+352", iso: "LU" },
      { value: "+371", iso: "LV" },
      { value: "+218", iso: "LY" },
      { value: "+212", iso: "MA" },
      { value: "+377", iso: "MC" },
      { value: "+373", iso: "MD" },
      { value: "+382", iso: "ME" },
      { value: "+590", iso: "MF" },
      { value: "+261", iso: "MG" },
      { value: "+692", iso: "MH" },
      { value: "+389", iso: "MK" },
      { value: "+223", iso: "ML" },
      { value: "+95", iso: "MM" },
      { value: "+976", iso: "MN" },
      { value: "+853", iso: "MO" },
      { value: "+1-670", iso: "MP" },
      { value: "+222", iso: "MR" },
      { value: "+1-664", iso: "MS" },
      { value: "+356", iso: "MT" },
      { value: "+230", iso: "MU" },
      { value: "+960", iso: "MV" },
      { value: "+265", iso: "MW" },
      { value: "+52", iso: "MX" },
      { value: "+60", iso: "MY" },
      { value: "+258", iso: "MZ" },
      { value: "+264", iso: "NA" },
      { value: "+687", iso: "NC" },
      { value: "+227", iso: "NE" },
      { value: "+234", iso: "NG" },
      { value: "+505", iso: "NI" },
      { value: "+31", iso: "NL" },
      { value: "+47", iso: "NO" },
      { value: "+977", iso: "NP" },
      { value: "+674", iso: "NR" },
      { value: "+683", iso: "NU" },
      { value: "+64", iso: "NZ" },
      { value: "+968", iso: "OM" },
      { value: "+507", iso: "PA" },
      { value: "+51", iso: "PE" },
      { value: "+689", iso: "PF" },
      { value: "+675", iso: "PG" },
      { value: "+63", iso: "PH" },
      { value: "+92", iso: "PK" },
      { value: "+48", iso: "PL" },
      { value: "+64", iso: "PN" },
      { value: "+1-787", iso: "PR" },
      { value: "+1-939", iso: "PR" },
      { value: "+970", iso: "PS" },
      { value: "+351", iso: "PT" },
      { value: "+680", iso: "PW" },
      { value: "+595", iso: "PY" },
      { value: "+974", iso: "QA" },
      { value: "+262", iso: "RE" },
      { value: "+40", iso: "RO" },
      { value: "+381", iso: "RS" },
      { value: "+7", iso: "RU" },
      { value: "+250", iso: "RW" },
      { value: "+966", iso: "SA" },
      { value: "+677", iso: "SB" },
      { value: "+248", iso: "SC" },
      { value: "+249", iso: "SD" },
      { value: "+46", iso: "SE" },
      { value: "+65", iso: "SG" },
      { value: "+290", iso: "SH" },
      { value: "+386", iso: "SI" },
      { value: "+47", iso: "SJ" },
      { value: "+421", iso: "SK" },
      { value: "+232", iso: "SL" },
      { value: "+378", iso: "SM" },
      { value: "+221", iso: "SN" },
      { value: "+252", iso: "SO" },
      { value: "+597", iso: "SR" },
      { value: "+211", iso: "SS" },
      { value: "+239", iso: "ST" },
      { value: "+503", iso: "SV" },
      { value: "+1-721", iso: "SX" },
      { value: "+963", iso: "SY" },
      { value: "+268", iso: "SZ" },
      { value: "+1-649", iso: "TC" },
      { value: "+235", iso: "TD" },
      { value: "+228", iso: "TG" },
      { value: "+66", iso: "TH" },
      { value: "+992", iso: "TJ" },
      { value: "+690", iso: "TK" },
      { value: "+670", iso: "TL" },
      { value: "+993", iso: "TM" },
      { value: "+216", iso: "TN" },
      { value: "+676", iso: "TO" },
      { value: "+90", iso: "TR" },
      { value: "+1-868", iso: "TT" },
      { value: "+688", iso: "TV" },
      { value: "+886", iso: "TW" },
      { value: "+255", iso: "TZ" },
      { value: "+380", iso: "UA" },
      { value: "+256", iso: "UG" },
      { value: "+1", iso: "US" },
      { value: "+598", iso: "UY" },
      { value: "+998", iso: "UZ" },
      { value: "+379", iso: "VA" },
      { value: "+1-784", iso: "VC" },
      { value: "+58", iso: "VE" },
      { value: "+1-284", iso: "VG" },
      { value: "+1-340", iso: "VI" },
      { value: "+84", iso: "VN" },
      { value: "+678", iso: "VU" },
      { value: "+681", iso: "WF" },
      { value: "+685", iso: "WS" },
      { value: "+383", iso: "XK" },
      { value: "+967", iso: "YE" },
      { value: "+262", iso: "YT" },
      { value: "+27", iso: "ZA" },
      { value: "+260", iso: "ZM" },
      { value: "+263", iso: "ZW" },
    ];

    const forms = document.querySelectorAll("form[data-form-id]");
    forms.forEach(form => {
      const HUBSPOT_PORTAL_ID = form.getAttribute("data-portal-id") || "242242619";
      const HUBSPOT_FORM_GUID = form.getAttribute("data-form-id") || "ff30bcc6-46b5-49d4-8670-92bb1eded1ab";

    const submitBtn = form.querySelector('button[type="submit"]');
    const firstNameInput =
      form.querySelector('[data-hs-name="firstname"]') ||
      form.querySelector('input[placeholder="First name"]');
    const lastNameInput =
      form.querySelector('[data-hs-name="lastname"]') ||
      form.querySelector('input[placeholder="Last name"]');
    const emailInput =
      form.querySelector('[data-hs-name="email"]') ||
      form.querySelector('input[type="email"]');
    const phoneCodeInput = form.querySelector("#enquiry-phone-code");
    const phoneCodeOptions = form.querySelector("#enquiry-phone-code-options");
    const phoneNumberInput = form.querySelector("#enquiry-phone-number");
    const locationSelect =
      form.querySelector('[data-hs-name="location"]') ||
      form.querySelector("#locationSelect");
    const outsideCountryInput =
      form.querySelector('[data-hs-name="country"]') ||
      form.querySelector("#outsideIndonesiaField input");
    const outsideCountryField = form.querySelector("#outsideIndonesiaField");
    const intendedUseSelect =
      form.querySelector('[data-hs-name="intended_use"]') ||
      form.querySelector("#intendedUseSelect");
    const otherUseInput =
      form.querySelector('[data-hs-name="other_intended_use"]') ||
      form.querySelector("#otherUseField input");
    const otherUseField = form.querySelector("#otherUseField");
    const statusBox = form.querySelector("[data-form-status]");

    if (form) form.noValidate = true;

    if (phoneCodeOptions) {
      COUNTRY_CODES.forEach(({ value, iso }) => {
        const option = document.createElement("option");
        option.value = `${iso} ${value}`;
        phoneCodeOptions.appendChild(option);
      });
    }

    // --- Spam prevention helpers ---
    const DISPOSABLE_DOMAINS = [
      "mailinator.com",
      "10minutemail.com",
      "yopmail.com",
      "guerrillamail.com",
      "maildrop.cc",
      "trashmail.com",
      "tempmail.net",
      "tempmail.org",
      "mail-temp.org",
    ];

    function isDisposableEmail(email) {
      try {
        const domain = email.split("@").pop().toLowerCase();
        return DISPOSABLE_DOMAINS.some((d) => domain.endsWith(d));
      } catch (e) {
        return false;
      }
    }

    // set form timestamp on load
    try {
      const tsInput = form.querySelector("[data-form-timestamp]");
      if (tsInput) tsInput.value = Date.now().toString();
      if (form) form.dataset.formStart = Date.now().toString();
    } catch (e) {}

    const hubspotOptionValues = {
      location: {
        Bali: "Bali",
        Lombok: "Lombok",
        Jakarta: "Jakarta",
        "Elsewhere in Indonesia": "Elsewhere in Indonesia",
        "Outside Indonesia": "Outside Indonesia",
      },
      intended_use: {
        "Private Residence": "Private",
        Gym: "Gym",
        "Hospitality/Resort": "Hospitality/Resort",
        "Wellness Operator": "Wellness Operator",
        "Luxury Yacht": "Luxury Yacht",
        Others: "Others",
      },
    };

    function getHubSpotOptionValue(fieldName, selectedValue) {
      return hubspotOptionValues[fieldName]?.[selectedValue] || selectedValue;
    }

    function normalizePhoneNumber(value) {
      return value.replace(/\D/g, "");
    }

    function normalizePhoneCode(value) {
      const match = value.match(/\+?(\d{1,4})/);
      return match ? `+${match[1]}` : "";
    }

    function buildInternationalPhone() {
      const countryCode = phoneCodeInput
        ? normalizePhoneCode(phoneCodeInput.value)
        : "";
      const localNumber = phoneNumberInput
        ? normalizePhoneNumber(phoneNumberInput.value)
        : "";

      if (!countryCode || !localNumber) return "";
      return `${countryCode}${localNumber}`;
    }

    function setStatus(message) {
      if (!statusBox) return;
      statusBox.textContent = message;
      statusBox.classList.toggle("hidden", !message);
    }

    function setFieldError(fieldName, message) {
      const errorBox = form.querySelector(`[data-error-for="${fieldName}"]`);
      const controls = form.querySelectorAll(
        `[data-validation-field="${fieldName}"]`,
      );

      controls.forEach((control) => {
        control.setAttribute("aria-invalid", message ? "true" : "false");
      });

      if (!errorBox) return;
      errorBox.textContent = message;
      errorBox.classList.toggle("hidden", !message);
    }

    function clearStatusesAndErrors() {
      setStatus("");
      [
        "firstname",
        "lastname",
        "email",
        "phone",
        "location",
        "country",
        "intended_use",
        "other_intended_use",
      ].forEach((fieldName) => setFieldError(fieldName, ""));
    }

    function toggleConditionalFields() {
      const isOutsideIndonesia =
        locationSelect && locationSelect.value === "Outside Indonesia";
      const isOtherUse =
        intendedUseSelect && intendedUseSelect.value === "Others";

      if (outsideCountryField) {
        outsideCountryField.classList.toggle("hidden", !isOutsideIndonesia);
      }
      if (outsideCountryInput) {
        outsideCountryInput.required = isOutsideIndonesia;
        if (!isOutsideIndonesia) outsideCountryInput.value = "";
        if (!isOutsideIndonesia) setFieldError("country", "");
      }

      if (otherUseField) {
        otherUseField.classList.toggle("hidden", !isOtherUse);
      }
      if (otherUseInput) {
        otherUseInput.required = isOtherUse;
        if (!isOtherUse) otherUseInput.value = "";
        if (!isOtherUse) setFieldError("other_intended_use", "");
      }
    }

    if (locationSelect) {
      locationSelect.addEventListener("change", toggleConditionalFields);
    }
    if (intendedUseSelect) {
      intendedUseSelect.addEventListener("change", toggleConditionalFields);
    }
    toggleConditionalFields();

    form.querySelectorAll("[data-validation-field]").forEach((field) => {
      const fieldName = field.getAttribute("data-validation-field");
      if (!fieldName) return;

      const clearField = () => setFieldError(fieldName, "");
      field.addEventListener("input", clearField);
      field.addEventListener("change", clearField);
    });

    function setLoading(isLoading) {
      if (!submitBtn) return;
      submitBtn.disabled = isLoading;
      submitBtn.setAttribute("aria-busy", isLoading ? "true" : "false");
      submitBtn.textContent = isLoading ? "Sending..." : "Submit Enquiry";
    }

    function showThanks() {
      form.classList.add("hidden");
      const modal = document.getElementById("enquiry-thanks-modal");
      if (modal) {
        console.log("Enquiry: showing modal", modal);
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
      } else {
        console.warn(
          "Enquiry: modal not found, falling back to inline message",
        );
        const wrapper = document.createElement("div");
        wrapper.className = "text-center p-6";
        wrapper.innerHTML =
          '<p class="font-semibold">Thank you — we&rsquo;ll be in touch within 24 hours.</p>';
        form.parentNode.replaceChild(wrapper, form);
      }
    }

    function validate() {
      clearStatusesAndErrors();
      let isValid = true;
      let firstInvalidField = null;

      if (!firstNameInput || !firstNameInput.value.trim()) {
        setFieldError("firstname", "Please enter your first name.");
        isValid = false;
        firstInvalidField = firstInvalidField || firstNameInput;
      } else if (firstNameInput.value.trim().length > 30) {
        setFieldError(
          "firstname",
          "First name must be 30 characters or fewer.",
        );
        isValid = false;
        firstInvalidField = firstInvalidField || firstNameInput;
      }
      if (!lastNameInput || !lastNameInput.value.trim()) {
        setFieldError("lastname", "Please enter your last name.");
        isValid = false;
        firstInvalidField = firstInvalidField || lastNameInput;
      } else if (lastNameInput.value.trim().length > 30) {
        setFieldError("lastname", "Last name must be 30 characters or fewer.");
        isValid = false;
        firstInvalidField = firstInvalidField || lastNameInput;
      }
      if (!emailInput || !emailInput.value.trim()) {
        setFieldError("email", "Please enter your email.");
        isValid = false;
        firstInvalidField = firstInvalidField || emailInput;
      } else {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!re.test(emailInput.value.trim())) {
          setFieldError("email", "Please enter a valid email address.");
          isValid = false;
          firstInvalidField = firstInvalidField || emailInput;
        } else if (isDisposableEmail(emailInput.value.trim())) {
          setFieldError(
            "email",
            "Disposable email addresses are not permitted.",
          );
          isValid = false;
          firstInvalidField = firstInvalidField || emailInput;
        }
      }
      if (!phoneCodeInput || !normalizePhoneCode(phoneCodeInput.value)) {
        setFieldError(
          "phone",
          "Please search and choose your country code, then enter your number.",
        );
        isValid = false;
        firstInvalidField =
          firstInvalidField || phoneCodeInput || phoneNumberInput;
      }
      if (!phoneNumberInput || !phoneNumberInput.value.trim()) {
        setFieldError("phone", "Please enter the rest of your phone number.");
        isValid = false;
        firstInvalidField =
          firstInvalidField || phoneNumberInput || phoneCodeInput;
      }
      if (
        phoneNumberInput &&
        normalizePhoneNumber(phoneNumberInput.value).length < 5
      ) {
        setFieldError(
          "phone",
          "Please enter at least 5 digits for the phone number.",
        );
        isValid = false;
        firstInvalidField = firstInvalidField || phoneNumberInput;
      }
      if (!locationSelect || !locationSelect.value) {
        setFieldError("location", "Please select your location.");
        isValid = false;
        firstInvalidField = firstInvalidField || locationSelect;
      }
      if (!intendedUseSelect || !intendedUseSelect.value) {
        setFieldError("intended_use", "Please select your intended use.");
        isValid = false;
        firstInvalidField = firstInvalidField || intendedUseSelect;
      }
      if (
        locationSelect &&
        locationSelect.value === "Outside Indonesia" &&
        (!outsideCountryInput || !outsideCountryInput.value.trim())
      ) {
        setFieldError("country", "Please specify your country or region.");
        isValid = false;
        firstInvalidField = firstInvalidField || outsideCountryInput;
      }

      if (
        intendedUseSelect &&
        intendedUseSelect.value === "Others" &&
        (!otherUseInput || !otherUseInput.value.trim())
      ) {
        setFieldError(
          "other_intended_use",
          "Please specify your intended use.",
        );
        isValid = false;
        firstInvalidField = firstInvalidField || otherUseInput;
      }

      // honeypot check
      const hp = form.querySelector('[name="hp_field"]');
      if (hp && hp.value && hp.value.trim().length > 0) {
        setStatus("Submission blocked.");
        return false;
      }

      // minimum time (5s) check
      const start = form.dataset.formStart
        ? parseInt(form.dataset.formStart, 10)
        : 0;
      if (start && Date.now() - start < 5000) {
        setStatus("Please take a moment before submitting the form.");
        return false;
      }

      // throttle via localStorage (30s)
      try {
        const last = localStorage.getItem("kaido_last_submit");
        if (last && Date.now() - parseInt(last, 10) < 30000) {
          setStatus("Please wait a moment before submitting again.");
          return false;
        }
      } catch (e) {}

      if (
        !isValid &&
        firstInvalidField &&
        typeof firstInvalidField.focus === "function"
      ) {
        firstInvalidField.focus();
      }

      return isValid;
    }

    const submitHandler = async (e) => {
      e.preventDefault();
      if (!validate()) {
        return;
      }

      const phoneValue = buildInternationalPhone();

      const fields = [];
      if (firstNameInput && firstNameInput.value)
        fields.push({ name: "firstname", value: firstNameInput.value });
      if (lastNameInput && lastNameInput.value)
        fields.push({ name: "lastname", value: lastNameInput.value });
      
      const instrumentInput = form.querySelector('input[name="instrument"]:checked');
      if (instrumentInput && instrumentInput.value) {
        fields.push({ name: "instrument_of_interest", value: instrumentInput.value });
      }
      if (emailInput && emailInput.value)
        fields.push({ name: "email", value: emailInput.value });
      if (phoneValue)
        fields.push({
          name: "hs_whatsapp_phone_number",
          value: phoneValue,
        });
      if (phoneValue)
        fields.push({
          name: "phone",
          value: phoneValue,
        });
      if (locationSelect && locationSelect.value)
        fields.push({
          name: "location",
          value: getHubSpotOptionValue("location", locationSelect.value),
        });
      if (
        locationSelect &&
        locationSelect.value === "Outside Indonesia" &&
        outsideCountryInput &&
        outsideCountryInput.value
      ) {
        fields.push({ name: "country", value: outsideCountryInput.value });
      }
      if (intendedUseSelect && intendedUseSelect.value)
        fields.push({
          name: "intended_use",
          value: getHubSpotOptionValue("intended_use", intendedUseSelect.value),
        });
      if (
        intendedUseSelect &&
        intendedUseSelect.value === "Others" &&
        otherUseInput &&
        otherUseInput.value
      ) {
        fields.push({
          name: "other_intended_use",
          value: otherUseInput.value,
        });
      }

      const body = {
        fields,
        submittedAt: Date.now().toString(),
        context: {
          pageUri: window.location.href,
          pageName: document.title,
        },
      };

      try {
        console.log("Enquiry: submitting to HubSpot", body);
        setLoading(true);

        // persist throttle timestamp
        try {
          localStorage.setItem("kaido_last_submit", Date.now().toString());
        } catch (e) {}

        const res = await fetch(
          `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          },
        );

        console.log(
          "Enquiry: HubSpot response",
          res && res.status,
          res && res.statusText,
        );

        if (!res.ok) {
          const errorText = await res.text();
          console.error("Enquiry: HubSpot returned non-OK response", {
            status: res.status,
            body: errorText,
          });
          
          let specificError = "HubSpot rejected the enquiry submission.";
          try {
            const errorObj = JSON.parse(errorText);
            if (errorObj.errors && errorObj.errors.length > 0) {
              specificError = errorObj.errors[0].message;
            } else if (errorObj.message) {
              specificError = errorObj.message;
            }
          } catch(e) {}
          
          throw new Error(specificError);
        }

        showThanks();
      } catch (err) {
        console.error("HubSpot submission error", err);
        
        let msg = "Sorry, the enquiry could not be submitted. Please try again or contact us directly.";
        
        if (err instanceof TypeError) {
          msg = "Network error. If you are using an ad-blocker or strict privacy shields, it may be blocking the submission. Please temporarily disable it and try again.";
        } else if (err.message && err.message !== "HubSpot rejected the enquiry submission.") {
          msg = "Submission issue: " + err.message + " Please try again or contact us directly.";
        }
        
        setStatus(msg);
      } finally {
        setLoading(false);
      }
    };

    form.addEventListener("submit", submitHandler);

    // Modal close handling for enquiry-thanks-modal
    const modal = document.getElementById("enquiry-thanks-modal");
    if (modal) {
      const closeBtn = modal.querySelector("[data-enquiry-close]");
      const closeModal = () => {
        if (modal.contains(document.activeElement)) {
          document.activeElement.blur();
        }
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
        // reset and show form again
        try {
          form.reset();
        } catch (e) {}
        toggleConditionalFields();
        clearStatusesAndErrors();
        if (form.classList.contains("hidden")) form.classList.remove("hidden");
      };
      if (closeBtn) closeBtn.addEventListener("click", closeModal);
      modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("is-open"))
          closeModal();
      });
    }
    });
  })();
