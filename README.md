# KPF Academy — Website

Premium fitness education website built with Next.js 14 (App Router), TypeScript, and CSS Modules.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your Google Sheets webhook URL and Meta Pixel ID

# 3. Run development server
npm run dev

# 4. Open http://localhost:3000
```

---

## Production Build

```bash
npm run build
npm start
```

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `GOOGLE_SHEET_WEBHOOK_URL` | Yes (for leads) | Google Apps Script Web App URL that writes to Sheet1 |
| `NEXT_PUBLIC_META_PIXEL_ID` | Optional | Meta Pixel ID for ad tracking |
| `NEXT_PUBLIC_SITE_URL` | Optional | Your production domain |

### Google Sheets Setup

1. Open your Google Sheet (Sheet1 must have these headers in Row 1):
   `Timestamp | Name | Phone | Email | Program | Format | Goal | Timeline | Seriousness | City | Message | Source`

2. Go to **Extensions → Apps Script** and paste:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.name || "",
    data.phone || "",
    data.email || "",
    data.program || data.interest || "",
    data.format || "",
    data.goal || "",
    data.timeline || "",
    data.seriousness || "",
    data.city || "",
    data.message || "",
    data.source || "",
  ]);
  return ContentService
    .createTextOutput(JSON.stringify({ result: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. **Deploy → New Deployment → Web App**
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Copy the deployment URL and paste into `.env.local` as `GOOGLE_SHEET_WEBHOOK_URL`

---

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About KPF |
| `/programs` | Programs Overview |
| `/programs/advanced-personal-training` | Personal Training Program |
| `/programs/sports-nutrition` | Sports Nutrition Program |
| `/programs/gym-management` | Gym Management Program |
| `/programs/workshops` | Workshops Program |
| `/online-learning` | Online Learning |
| `/offline-learning` | Offline Learning / Locations |
| `/workshops` | Workshops & Masterclasses |
| `/faculty` | Faculty |
| `/career-support` | Career Support |
| `/blog` | Blog / Insights |
| `/blog/[slug]` | Blog Post |
| `/contact` | Contact |
| `/apply` | Apply Now |
| `/privacy-policy` | Privacy Policy |
| `/terms` | Terms & Conditions |

---

## Lead Flow

Every form on the site (Apply page, Contact page, Lead Popup, Homepage form) POSTs to `/api/lead`. The API route writes to Google Sheets (Sheet1). After submission, users are directed to WhatsApp with a pre-filled message to +91 72082 99269.

---

## Deployment

Deploy to **Vercel** (recommended):

1. Push to GitHub
2. Import to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

---

## Tech Stack

- **Next.js 14** — App Router
- **TypeScript**
- **CSS Modules** — No Tailwind, no external UI library
- **Google Sheets** — Lead CRM via Apps Script webhook
- **WhatsApp** — Post-lead conversion via wa.me deep links
- **Meta Pixel** — Ad tracking (optional)
