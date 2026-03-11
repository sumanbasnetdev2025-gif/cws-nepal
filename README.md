# 🌐 Complete Web Solutions Nepal — Official Website

A modern, full-stack company website built with **Next.js 14**, **Tailwind CSS**, and **shadcn/ui**.

---

## ✨ Features

- 🎨 **Stunning Modern Design** — Syne + DM Sans typography, blue/cyan gradient palette
- 📧 **Working Contact Form** — Messages delivered to `cwsolutions2025@gmail.com` via Nodemailer
- 📩 **Auto-Reply Emails** — Clients instantly receive a branded confirmation email
- 💬 **WhatsApp Integration** — Floating WhatsApp button + direct links
- 📱 **Fully Responsive** — Pixel-perfect on mobile, tablet, and desktop
- ⚡ **Next.js App Router** — Fast, SEO-optimized with metadata
- 🔒 **Secure API Route** — Server-side email sending, no credentials exposed

---

## 🗂️ Project Structure

```
cws-nepal/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # Email API endpoint
│   ├── globals.css             # Global styles & design tokens
│   ├── layout.tsx              # Root layout + metadata
│   └── page.tsx                # Main page (assembles all sections)
├── components/
│   ├── Navbar.tsx              # Sticky navigation
│   ├── Hero.tsx                # Hero section
│   ├── Services.tsx            # 8 services grid
│   ├── About.tsx               # About + CEO card
│   ├── Process.tsx             # How we work (5 steps)
│   ├── Portfolio.tsx           # Project showcase
│   ├── Testimonials.tsx        # Client reviews
│   ├── Contact.tsx             # Contact form + info
│   └── Footer.tsx              # Footer with links
├── .env.example                # Environment variables template
├── package.json
├── tailwind.config.ts
└── next.config.js
```

---

## 🚀 Setup & Installation

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Configure Environment Variables

```bash
cp .env.example .env.local
```

Then edit `.env.local`:

```env
EMAIL_USER=cwsolutions2025@gmail.com
EMAIL_PASS=your_gmail_app_password_here
```

> **⚠️ IMPORTANT: Use a Gmail App Password, NOT your regular password.**
> 
> **How to get an App Password:**
> 1. Go to [myaccount.google.com](https://myaccount.google.com)
> 2. Security → Enable **2-Step Verification** (required)
> 3. Search **"App passwords"** in the search bar
> 4. Select **Mail** → Generate → Copy the 16-character password
> 5. Paste it into `EMAIL_PASS` in `.env.local`

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
npm run build
npm start
```

---

## 🌍 Deployment (Recommended: Vercel)

1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Add environment variables in Vercel dashboard:
   - `EMAIL_USER` = `cwsolutions2025@gmail.com`
   - `EMAIL_PASS` = your Gmail App Password
4. Deploy! ✅

---

## 📬 How the Contact Form Works

When a user submits the form:

1. **API Route** (`/api/contact`) receives the POST request
2. **Nodemailer** sends a notification email to `cwsolutions2025@gmail.com` with all form details
3. **Auto-reply** is sent to the user's email confirming receipt
4. The form shows a **success state** with a thank-you message

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary Blue | `#1a56db` |
| Accent Cyan | `#06b6d4` |
| Navy | `#0d2340` |
| Display Font | Syne |
| Body Font | DM Sans |

---

## 📞 Contact Information

| | |
|--|--|
| 📧 Email | cwsolutions2025@gmail.com |
| 📞 Phone | +977-9704738463 |
| 💬 WhatsApp | +977-9704738463 |
| 📘 Facebook | [CWS Nepal](https://www.facebook.com/profile.php?id=61574606891054) |
| 👤 CEO | Suman Basnet |
| 📍 Location | Kathmandu, Nepal |

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Email**: Nodemailer (Gmail SMTP)
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Syne + DM Sans)
- **Deployment**: Vercel (recommended)
