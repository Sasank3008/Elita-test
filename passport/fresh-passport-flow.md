# Fresh Passport / Re-Issue — Full Application Flow

> **Purpose:** Document all steps, screens, fields, and options encountered when applying for a Fresh Passport or Re-Issue on Passport Seva portal.
> **Portal:** https://services2.passportindia.gov.in
> **Last Updated:** June 2026

---

## 🗺️ Flow Overview

```
Login
  └── Services
        └── Fresh Passport / Re-Issue of Passport
              └── Step 1: AutoPopulate (existing passport check)
              └── Step 2: Select Passport Office (RPO Selection)
              └── Step 3: Application Type Selection
              └── Step 4: Applicant Details (Personal Info)
              └── Step 5: Family Details
              └── Step 6: Present Residential Address
              └── Step 7: Emergency Contact
              └── Step 8: Previous Passport / Identity Details
              └── Step 9: Other Details (Criminal Record etc.)
              └── Step 10: Review & Submit
              └── Step 11: Pay Fees
              └── Step 12: Book Appointment
```

---

## 📋 Step-by-Step Screens

---

### STEP 0: Login
- **URL:** `https://services2.passportindia.gov.in/forms/PreLogin`
- **Fields:**
  | Field | Type | Notes |
  |-------|------|-------|
  | Login ID | Text | Email address |
  | Continue | Button | Proceeds to password screen |
  | Password | Password | Case-sensitive |
  | Sign In | Button | Authenticates user |

---

### STEP 1: AutoPopulate Screen
- **URL:** `https://services2.passportindia.gov.in/forms/Services/AutoPopulate`
- **Purpose:** If applicant has a previous passport, entering details here auto-fills the form
- **Fields:**
  | Field | Type | Notes |
  |-------|------|-------|
  | Passport Number* | Text | Previous passport number |
  | Date of Birth (DD/MM/YYYY)* | Date | With calendar picker |
  | Send OTP | Button | Sends OTP to registered mobile |
  | Skip For Now | Button | Skips auto-populate, starts fresh |

> 💡 **Tip:** Click "Skip For Now" for fresh applicants with no prior passport.

---

### STEP 2: Select Passport Office (RPO Selection)
- **URL:** `https://services2.passportindia.gov.in/forms/Services/RPO_Selection`
- **Purpose:** Select the Passport Office (Regional Passport Office) under which you will apply
- **Fields:**
  | Field | Type | Notes |
  |-------|------|-------|
  | Passport Office* | Dropdown | Mandatory |
  | Next | Button | Proceeds to application form |

- **Available Passport Offices (37 total):**

  | # | Office | # | Office |
  |---|--------|---|--------|
  | 1 | Ahmedabad | 20 | Kolkata |
  | 2 | Amritsar | 21 | Kota |
  | 3 | Bareilly | 22 | Kozhikode |
  | 4 | Bengaluru | 23 | Lucknow |
  | 5 | Bhopal | 24 | Madurai |
  | 6 | Bhubaneswar | 25 | Mumbai |
  | 7 | Chandigarh | 26 | Nagpur |
  | 8 | Chennai | 27 | Patna |
  | 9 | Cochin | 28 | Pune |
  | 10 | Coimbatore | 29 | Raipur |
  | 11 | Dehradun | 30 | Ranchi |
  | 12 | Delhi | 31 | Shimla |
  | 13 | Ghaziabad | 32 | Srinagar |
  | 14 | Goa | 33 | Surat |
  | 15 | Guwahati | 34 | Tiruchirappalli |
  | 16 | Hyderabad | 35 | Trivandrum |
  | 17 | Jaipur | 36 | Vijayawada |
  | 18 | Jalandhar | 37 | Visakhapatnam |
  | 19 | Jammu | | |

> ⚠️ **Note:** The dropdown may appear pre-selected based on the user's profile/location. The account used had **Vijayawada** pre-selected.

---

### STEP 3: Application Type Selection
- **URL:** `https://services2.passportindia.gov.in/forms/Services/ApplicationType` *(expected)*
- **Fields:**
  | Field | Type | Options |
  |-------|------|---------|
  | Application Type* | Radio | Fresh / Re-Issue |
  | Passport Type* | Radio | Normal / Tatkal |
  | Validity Required* | Radio | 10 Years / 5 Years (minor) |
  | Page Count* | Radio | 36 Pages / 60 Pages |

---

### STEP 4: Applicant Details (Personal Information)
- **Expected Fields:**
  | Field | Type | Notes |
  |-------|------|-------|
  | Given Name* | Text | First name |
  | Surname* | Text | Last name |
  | Alias/Known As | Text | Optional |
  | Changed Name | Checkbox | Yes/No |
  | Date of Birth* | Date | DD/MM/YYYY |
  | Place of Birth* | Text | City of birth |
  | State of Birth* | Dropdown | Indian state |
  | Country of Birth* | Dropdown | India (default) |
  | Marital Status* | Dropdown | Single/Married/Divorced/Widowed/Separated |
  | Citizenship* | Dropdown | By Birth / By Descent / By Registration / By Naturalisation |
  | PAN* | Text | 10-character PAN |
  | Voter ID | Text | Optional |
  | Employment Type* | Dropdown | Government / Private / Self-Employed / Not Employed / Retired / Student / Homemaker |
  | Educational Qualification* | Dropdown | 8th Pass and below / 9th Pass / Matriculation / etc. |

---

### STEP 5: Family Details
- **Expected Fields:**
  | Field | Type | Notes |
  |-------|------|-------|
  | Father's Given Name* | Text | |
  | Father's Surname* | Text | |
  | Mother's Given Name* | Text | |
  | Mother's Surname* | Text | |
  | Spouse Given Name | Text | If married |
  | Spouse Surname | Text | If married |
  | Legal Guardian Given Name | Text | If applicable |
  | Legal Guardian Surname | Text | If applicable |

---

### STEP 6: Present Residential Address
- **Expected Fields:**
  | Field | Type | Notes |
  |-------|------|-------|
  | House No.* | Text | |
  | Street Name* | Text | |
  | Village/Town/City* | Text | |
  | District* | Dropdown | |
  | State* | Dropdown | |
  | PIN Code* | Text | 6-digit |
  | Mobile No.* | Text | 10-digit |
  | Email* | Text | Pre-filled from login |
  | Permanent Address Same as Present | Checkbox | Yes/No |

---

### STEP 7: Emergency Contact
- **Expected Fields:**
  | Field | Type | Notes |
  |-------|------|-------|
  | Name* | Text | |
  | Address* | Text | |
  | Mobile No.* | Text | |

---

### STEP 8: Previous Passport / Identity Details
- **Expected Fields:**
  | Field | Type | Notes |
  |-------|------|-------|
  | Has Old Passport | Radio | Yes/No |
  | Old Passport No. | Text | If yes |
  | Date of Issue | Date | If yes |
  | Date of Expiry | Date | If yes |
  | Place of Issue | Text | If yes |
  | Reason for Re-Issue | Dropdown | Expired / Damaged / Lost / Additional Booklet / Change in Details |

---

### STEP 9: Other Details
- **Expected Fields:**
  | Field | Type | Notes |
  |-------|------|-------|
  | Arrest/Conviction | Radio | Yes/No |
  | Deportation | Radio | Yes/No |
  | Passport Revoked/Impounded | Radio | Yes/No |
  | Applied for Renunciation | Radio | Yes/No |
  | Other Country Passport Held | Radio | Yes/No |

---

### STEP 10: Review & Submit
- All entered data is displayed for review
- **Actions:** Edit (go back to any step) | Submit

---

### STEP 11: Pay Fees
- **Fee Structure:**

  | Type | 36 Pages | 60 Pages |
  |------|----------|----------|
  | Normal (Fresh/Re-Issue) | ₹1,500 | ₹2,000 |
  | Tatkal (Fresh/Re-Issue) | ₹3,500 | ₹4,000 |
  | Minor (below 18) | ₹1,000 | — |
  | Lost/Damaged Passport | ₹3,000 | ₹3,500 |

- **Payment Methods:** Credit Card / Debit Card / Net Banking / UPI / SBI Wallet

---

### STEP 12: Book Appointment
- After successful payment, user selects:
  | Field | Type | Notes |
  |-------|------|-------|
  | PSK/POPSK Location* | Dropdown | Based on RPO selected |
  | Available Date* | Calendar | Show available slots |
  | Time Slot* | Dropdown | Morning/Afternoon slots |

---

## ⚠️ Known Issues / Observations

| Issue | Details |
|-------|---------|
| Server Error on RPO Page | "Sorry, can't talk to our servers right now" — transient API error |
| Dropdown Disabled State | Passport Office dropdown shows as disabled initially, loads after API call |
| Auto-populated RPO | Account had Vijayawada pre-selected based on previous applications |
| Session Timeout | Portal may expire session after ~20 minutes of inactivity |

---

## 🔁 Navigation Summary

```
Services → Fresh Passport/Re-Issue
  → AutoPopulate (Skip For Now if fresh)
  → RPO_Selection (Select Passport Office → Next)
  → ApplicationType (Fresh/Tatkal/Pages)
  → Applicant Details
  → Family Details
  → Present Address
  → Emergency Contact
  → Previous Passport
  → Other Details
  → Review → Submit → Pay → Book Appointment
```

---

## 📁 Related Files
- `passport/login.js` — Login automation script
- `passport/fresh-passport-flow.md` — This file (application flow documentation)
