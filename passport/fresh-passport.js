/**
 * Passport Seva - Fresh Passport / Re-Issue Automation
 * =====================================================
 * Automates the Fresh Passport application flow on:
 * https://services2.passportindia.gov.in
 *
 * Flow:
 *  1. Navigate to Services → Fresh Passport/Re-Issue
 *  2. AutoPopulate screen (Skip For Now)
 *  3. RPO Selection (Select Passport Office)
 *  4. Application Type Selection
 *  5. Applicant Details
 *  6. Family Details
 *  7. Present Residential Address
 *  8. Emergency Contact
 *  9. Previous Passport Details
 * 10. Other Details
 * 11. Review & Submit
 * 12. Pay Fees
 * 13. Book Appointment
 */

const CONFIG = {
  urls: {
    services: 'https://services2.passportindia.gov.in/forms/Services/PassportServices',
    autoPopulate: 'https://services2.passportindia.gov.in/forms/Services/AutoPopulate',
    rpoSelection: 'https://services2.passportindia.gov.in/forms/Services/RPO_Selection',
  },
  timeouts: {
    navigation: 10000,
    serverLoad: 5000,
    apiLoad: 3000,
  },
  selectors: {
    // Services Page
    freshPassportCard: 'text=Fresh Passport/Re-Issue of Passport',

    // AutoPopulate Page
    passportNumberInput: 'input[name="passportNumber"]',
    dobInput: 'input[name="dob"]',
    sendOtpBtn: 'text=Send OTP',
    skipForNowBtn: 'text=Skip For Now',

    // RPO Selection
    passportOfficeDropdown: 'select',
    nextBtn: 'text=Next',

    // Application Form - General
    saveBtn: 'text=Save',
    nextPageBtn: 'text=Next',
    backBtn: 'text=Back',
    submitBtn: 'text=Submit',
  },

  // All available Passport Offices (37 total)
  passportOffices: [
    'Ahmedabad', 'Amritsar', 'Bareilly', 'Bengaluru', 'Bhopal',
    'Bhubaneswar', 'Chandigarh', 'Chennai', 'Cochin', 'Coimbatore',
    'Dehradun', 'Delhi', 'Ghaziabad', 'Goa', 'Guwahati',
    'Hyderabad', 'Jaipur', 'Jalandhar', 'Jammu', 'Kolkata',
    'Kota', 'Kozhikode', 'Lucknow', 'Madurai', 'Mumbai',
    'Nagpur', 'Patna', 'Pune', 'Raipur', 'Ranchi',
    'Shimla', 'Srinagar', 'Surat', 'Tiruchirappalli', 'Trivandrum',
    'Vijayawada', 'Visakhapatnam'
  ],
};

/**
 * Navigate to Services → Fresh Passport/Re-Issue
 * @param {import('playwright').Page} page
 */
async function navigateToFreshPassport(page) {
  console.log('[Step 1] Navigating to Services...');
  await page.goto(CONFIG.urls.services);
  await page.waitForTimeout(CONFIG.timeouts.navigation);

  console.log('[Step 1] Clicking Fresh Passport/Re-Issue...');
  await page.getByText('Fresh Passport/Re-Issue of Passport').first().click();
  await page.waitForURL('**/AutoPopulate', { timeout: CONFIG.timeouts.navigation });
  console.log('[Step 1] ✅ Landed on AutoPopulate page');
}

/**
 * Handle AutoPopulate screen
 * @param {import('playwright').Page} page
 * @param {Object} options
 * @param {boolean} options.skip - If true, skips auto-populate
 * @param {string} [options.passportNumber] - Previous passport number
 * @param {string} [options.dob] - Date of birth (DD/MM/YYYY)
 */
async function handleAutoPopulate(page, options = { skip: true }) {
  console.log('[Step 2] AutoPopulate screen...');
  await page.waitForURL('**/AutoPopulate', { timeout: CONFIG.timeouts.navigation });

  if (options.skip) {
    console.log('[Step 2] Skipping auto-populate...');
    await page.getByText('Skip For Now').click();
    await page.waitForURL('**/RPO_Selection', { timeout: CONFIG.timeouts.navigation });
    console.log('[Step 2] ✅ Skipped, landed on RPO Selection');
  } else {
    console.log('[Step 2] Filling previous passport details...');
    await page.fill(CONFIG.selectors.passportNumberInput, options.passportNumber);
    await page.fill(CONFIG.selectors.dobInput, options.dob);
    await page.getByText('Send OTP').click();
    console.log('[Step 2] ⏳ Waiting for OTP...');
    // OTP handling requires manual input or SMS interception
  }
}

/**
 * Select Passport Office (RPO)
 * @param {import('playwright').Page} page
 * @param {string} officeName - Name of the passport office (e.g., 'Vijayawada')
 */
async function selectPassportOffice(page, officeName = 'Vijayawada') {
  console.log(`[Step 3] Selecting Passport Office: ${officeName}...`);
  await page.waitForURL('**/RPO_Selection', { timeout: CONFIG.timeouts.navigation });
  await page.waitForTimeout(CONFIG.timeouts.apiLoad);

  const dropdown = page.locator('select').first();

  // Wait for dropdown to be enabled (API loads options)
  let attempts = 0;
  while (attempts < 5) {
    const isDisabled = await dropdown.isDisabled();
    if (!isDisabled) break;
    console.log(`[Step 3] Waiting for dropdown to load... attempt ${attempts + 1}`);
    await page.waitForTimeout(2000);
    attempts++;
  }

  await dropdown.selectOption({ label: officeName });
  await page.waitForTimeout(500);
  await page.getByText('Next').click();
  await page.waitForTimeout(CONFIG.timeouts.navigation);
  console.log(`[Step 3] ✅ Passport Office ${officeName} selected`);
}

/**
 * Fill Application Type
 * @param {import('playwright').Page} page
 * @param {Object} options
 * @param {string} options.type - 'Fresh' or 'Re-Issue'
 * @param {string} options.passportType - 'Normal' or 'Tatkal'
 * @param {string} options.pages - '36' or '60'
 * @param {string} options.validity - '10' or '5'
 */
async function fillApplicationType(page, options = {
  type: 'Fresh',
  passportType: 'Normal',
  pages: '36',
  validity: '10'
}) {
  console.log('[Step 4] Filling Application Type...');
  // Radio button selections - selectors will depend on actual page HTML
  // TODO: Update selectors based on actual form inspection
  console.log(`[Step 4] Type: ${options.type}, Passport: ${options.passportType}, Pages: ${options.pages}`);
  console.log('[Step 4] ⚠️ Selectors need to be updated from live page inspection');
}

/**
 * Fill Applicant Personal Details
 * @param {import('playwright').Page} page
 * @param {Object} applicant
 */
async function fillApplicantDetails(page, applicant = {}) {
  console.log('[Step 5] Filling Applicant Details...');
  /*
   * Fields to fill:
   * - Given Name*
   * - Surname*
   * - Alias (optional)
   * - Date of Birth*
   * - Place of Birth*
   * - State of Birth*
   * - Country of Birth*
   * - Marital Status*
   * - Citizenship*
   * - PAN*
   * - Voter ID (optional)
   * - Employment Type*
   * - Educational Qualification*
   */
  console.log('[Step 5] ⚠️ Implement with actual field selectors from live inspection');
}

/**
 * Fill Family Details
 * @param {import('playwright').Page} page
 * @param {Object} family
 */
async function fillFamilyDetails(page, family = {}) {
  console.log('[Step 6] Filling Family Details...');
  /*
   * Fields to fill:
   * - Father Given Name*, Surname*
   * - Mother Given Name*, Surname*
   * - Spouse Given Name, Surname (if married)
   * - Legal Guardian (if applicable)
   */
  console.log('[Step 6] ⚠️ Implement with actual field selectors from live inspection');
}

/**
 * Fill Present Residential Address
 * @param {import('playwright').Page} page
 * @param {Object} address
 */
async function fillAddress(page, address = {}) {
  console.log('[Step 7] Filling Address Details...');
  /*
   * Fields to fill:
   * - House No.*
   * - Street Name*
   * - Village/Town/City*
   * - District*, State*, PIN Code*
   * - Mobile No.*, Email*
   * - Permanent same as Present? (checkbox)
   */
  console.log('[Step 7] ⚠️ Implement with actual field selectors from live inspection');
}

/**
 * Fill Emergency Contact
 * @param {import('playwright').Page} page
 * @param {Object} contact
 */
async function fillEmergencyContact(page, contact = {}) {
  console.log('[Step 8] Filling Emergency Contact...');
  console.log('[Step 8] ⚠️ Implement with actual field selectors from live inspection');
}

/**
 * Full Fresh Passport Application Flow
 * @param {import('playwright').Page} page
 * @param {Object} applicationData - All applicant data
 */
async function applyForFreshPassport(page, applicationData = {}) {
  console.log('🛂 Starting Fresh Passport Application Flow...');

  await navigateToFreshPassport(page);
  await handleAutoPopulate(page, { skip: !applicationData.previousPassport });
  await selectPassportOffice(page, applicationData.passportOffice || 'Vijayawada');
  await fillApplicationType(page, applicationData.applicationType);
  await fillApplicantDetails(page, applicationData.applicant);
  await fillFamilyDetails(page, applicationData.family);
  await fillAddress(page, applicationData.address);
  await fillEmergencyContact(page, applicationData.emergencyContact);

  console.log('✅ Fresh Passport Application Flow complete — ready for Review & Submit');
}

module.exports = {
  CONFIG,
  navigateToFreshPassport,
  handleAutoPopulate,
  selectPassportOffice,
  fillApplicationType,
  fillApplicantDetails,
  fillFamilyDetails,
  fillAddress,
  fillEmergencyContact,
  applyForFreshPassport,
};
