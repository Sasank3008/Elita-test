# 🛂 Passport Seva Automation

Automated workflow for **Passport Seva Online Portal** (`https://services2.passportindia.gov.in`) using the **Passport Automation MCP (Browser Automation)**.

---

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Workflow Overview](#workflow-overview)
- [Step-by-Step Guide](#step-by-step-guide)
- [Login Script](#login-script)
- [Home Page Overview](#home-page-overview)
- [Available Services](#available-services)
- [Notes & Security](#notes--security)

---

## ✅ Prerequisites

- Passport Automation MCP running locally
- Valid Passport Seva account credentials
- Browser automation tools configured in your session

---

## 🔄 Workflow Overview

```
Open PreLogin Page
      ↓
Enter Login ID (email)
      ↓
Click Continue
      ↓
Enter Password
      ↓
Click Sign In
      ↓
🏠 Home Page Reached
```

---

## 📖 Step-by-Step Guide

| Step | Action | Details |
|------|--------|---------|
| 1️⃣ | **Open PreLogin Page** | Navigate to `https://services2.passportindia.gov.in/forms/PreLogin` |
| 2️⃣ | **Wait for page load** | Wait ~10 seconds for full page load |
| 3️⃣ | **Enter Login ID** | Type your registered email in the Login ID field |
| 4️⃣ | **Click Continue** | Click the "Continue" button to proceed to password screen |
| 5️⃣ | **Enter Password** | Type your password in the Password field |
| 6️⃣ | **Click Sign In** | Click the "Sign In" button to authenticate |
| 7️⃣ | **Home Page** ✅ | Successfully redirected to `https://services2.passportindia.gov.in/forms/Home/homeScreen` |

---

## 🏠 Home Page Overview

After successful login, the Home page displays:

### 📝 Saved/Draft Applications
- Lists partially saved applications with ARN numbers
- Can be resumed from where you left off

### 📋 Submitted Applications
- Lists all submitted applications
- Shows ARN / File No., Submission Date, Payment Status, and Appointment Date

### 🧭 Navigation Menu
| Menu Item | Description |
|-----------|-------------|
| 🏠 Home | Dashboard / Home screen |
| 🛂 Services | Apply for passport services |
| 📋 My Applications | View all submitted & draft applications |
| 💰 Fee Details | Check applicable fees |
| 📄 Document Advisor | Know required documents |
| 🚪 Logout | Sign out of the portal |

---

## 🛂 Available Services

### Application Services
| Service | Description |
|---------|-------------|
| 📘 Fresh Passport / Re-Issue | New 36/60-page Ordinary passport or re-issue |
| 🔍 Police Clearance Certificate (PCC) | For citizenship, employment, visa purposes |
| 🪪 Identity Certificate | For stateless persons |
| 📄 Surrender Certificate | For renouncing Indian citizenship |
| 🔎 Background Verification for GEP | GEP background verification |
| 🟤 Diplomatic/Official Passport | For diplomatic status |
| 🚧 Line of Control (LoC) Permit | Apply for LoC Permit |

### Miscellaneous Services
| Service | Description |
|---------|-------------|
| ⚖️ Log Appeal | File appeal against adverse actions |
| 📅 Check Appointment Availability | Check available slots |

### Locator Services
| Service | Description |
|---------|-------------|
| 🏢 Locate Passport Seva Kendra | Find nearest PSK or POPSK |
| 🚔 Know Your Police Station | Find nearest police station |
| 🌍 Locate Mission/Post Abroad | Find India's missions abroad |

---

## 🔐 Notes & Security

> ⚠️ **IMPORTANT**: Never hardcode credentials in scripts. Use environment variables.

```bash
# Set credentials as environment variables
export PASSPORT_LOGIN_ID="your_email@example.com"
export PASSPORT_PASSWORD="your_password"
```

- Always log out after completing your session
- Change your password regularly
- Do not share credentials in chat or version control

---

## 🚀 Usage

```bash
# Run the login automation
node passport/login.js
```

---

*Automated using EliteA + Passport Automation MCP*
