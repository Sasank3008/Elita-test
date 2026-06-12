/**
 * 🛂 Passport Seva - Login Automation Script
 * 
 * Automates the login flow for Passport Seva Online Portal
 * URL: https://services2.passportindia.gov.in/forms/PreLogin
 * 
 * Uses: Passport Automation MCP (Browser Automation)
 * 
 * ⚠️  SECURITY: Use environment variables for credentials.
 *     Never hardcode credentials in this file.
 */

// ─────────────────────────────────────────────
// Configuration
// ─────────────────────────────────────────────
const CONFIG = {
  BASE_URL: 'https://services2.passportindia.gov.in',
  LOGIN_URL: 'https://services2.passportindia.gov.in/forms/PreLogin',
  HOME_URL: 'https://services2.passportindia.gov.in/forms/Home/homeScreen',
  SERVICES_URL: 'https://services2.passportindia.gov.in/forms/apply/index',

  // ⚠️  Use environment variables in production
  CREDENTIALS: {
    loginId: process.env.PASSPORT_LOGIN_ID || '',   // Set via env var
    password: process.env.PASSPORT_PASSWORD || '',  // Set via env var
  },

  TIMEOUTS: {
    pageLoad: 10000,     // 10 seconds for full page load
    afterLogin: 3000,    // 3 seconds after login click
    navigation: 2000,    // 2 seconds between navigations
  },

  SELECTORS: {
    loginIdField: 'input[name="loginId"]',
    continueBtn: 'button[type="submit"], input[type="submit"], .btn-continue',
    passwordField: 'input[type="password"]',
    signInBtn: 'button[type="submit"], input[type="submit"], .btn-signin',
  }
};

// ─────────────────────────────────────────────
// Step 1: Open PreLogin Page
// ─────────────────────────────────────────────
async function openPreLoginPage(page) {
  console.log('🌐 Step 1: Opening PreLogin page...');
  await page.goto(CONFIG.LOGIN_URL);
  await page.waitForTimeout(CONFIG.TIMEOUTS.pageLoad);
  console.log(`✅ Page loaded: ${await page.title()}`);
}

// ─────────────────────────────────────────────
// Step 2: Enter Login ID
// ─────────────────────────────────────────────
async function enterLoginId(page, loginId) {
  console.log('📧 Step 2: Entering Login ID...');
  await page.waitForSelector(CONFIG.SELECTORS.loginIdField);
  await page.fill(CONFIG.SELECTORS.loginIdField, loginId);
  console.log('✅ Login ID entered.');
}

// ─────────────────────────────────────────────
// Step 3: Click Continue
// ─────────────────────────────────────────────
async function clickContinue(page) {
  console.log('▶️  Step 3: Clicking Continue...');
  await page.click(CONFIG.SELECTORS.continueBtn);
  await page.waitForTimeout(CONFIG.TIMEOUTS.navigation);
  console.log('✅ Navigated to Password screen.');
}

// ─────────────────────────────────────────────
// Step 4: Enter Password
// ─────────────────────────────────────────────
async function enterPassword(page, password) {
  console.log('🔑 Step 4: Entering Password...');
  await page.waitForSelector(CONFIG.SELECTORS.passwordField);
  await page.fill(CONFIG.SELECTORS.passwordField, password);
  console.log('✅ Password entered.');
}

// ─────────────────────────────────────────────
// Step 5: Click Sign In
// ─────────────────────────────────────────────
async function clickSignIn(page) {
  console.log('🔐 Step 5: Clicking Sign In...');
  await page.click(CONFIG.SELECTORS.signInBtn);
  await page.waitForTimeout(CONFIG.TIMEOUTS.afterLogin);
  console.log('✅ Sign In clicked.');
}

// ─────────────────────────────────────────────
// Step 6: Verify Home Page
// ─────────────────────────────────────────────
async function verifyHomePage(page) {
  console.log('🏠 Step 6: Verifying Home Page...');
  const currentUrl = page.url();

  if (currentUrl.includes('/Home/homeScreen')) {
    console.log('✅ Login Successful! Home page reached.');
    console.log(`📍 Current URL: ${currentUrl}`);
    return true;
  } else {
    console.error('❌ Login may have failed. Current URL:', currentUrl);
    return false;
  }
}

// ─────────────────────────────────────────────
// Main Login Workflow
// ─────────────────────────────────────────────
async function loginToPassportSeva(page) {
  const { loginId, password } = CONFIG.CREDENTIALS;

  if (!loginId || !password) {
    throw new Error(
      '❌ Credentials not set! Please set PASSPORT_LOGIN_ID and PASSPORT_PASSWORD environment variables.'
    );
  }

  console.log('');
  console.log('════════════════════════════════════════');
  console.log('  🛂 Passport Seva Login Automation');
  console.log('════════════════════════════════════════');

  try {
    await openPreLoginPage(page);
    await enterLoginId(page, loginId);
    await clickContinue(page);
    await enterPassword(page, password);
    await clickSignIn(page);
    const success = await verifyHomePage(page);

    if (success) {
      console.log('');
      console.log('════════════════════════════════════════');
      console.log('  ✅ Login Complete! You are now on the');
      console.log('     Passport Seva Home Page.');
      console.log('════════════════════════════════════════');
      console.log('');
      console.log('🧭 Available Navigation:');
      console.log('   - 🏠 Home');
      console.log('   - 🛂 Services');
      console.log('   - 📋 My Applications');
      console.log('   - 💰 Fee Details');
      console.log('   - 📄 Document Advisor');
      console.log('   - 🚪 Logout');
    }

    return success;
  } catch (error) {
    console.error('❌ Login workflow failed:', error.message);
    throw error;
  }
}

// ─────────────────────────────────────────────
// Navigate to Services
// ─────────────────────────────────────────────
async function navigateToServices(page) {
  console.log('🛂 Navigating to Services...');
  await page.goto(CONFIG.SERVICES_URL);
  await page.waitForTimeout(CONFIG.TIMEOUTS.navigation);
  console.log('✅ Services page loaded.');
}

// ─────────────────────────────────────────────
// Navigate to My Applications
// ─────────────────────────────────────────────
async function navigateToMyApplications(page) {
  console.log('📋 Navigating to My Applications...');
  // Click "My Applications" from navigation menu
  await page.click('a:has-text("My Applications"), [href*="applications"]');
  await page.waitForTimeout(CONFIG.TIMEOUTS.navigation);
  console.log('✅ My Applications page loaded.');
}

// ─────────────────────────────────────────────
// Exports
// ─────────────────────────────────────────────
module.exports = {
  CONFIG,
  loginToPassportSeva,
  openPreLoginPage,
  enterLoginId,
  clickContinue,
  enterPassword,
  clickSignIn,
  verifyHomePage,
  navigateToServices,
  navigateToMyApplications,
};
