# Saish Ugale — Dual-Lens Portfolio Website

A premium, interactive personal portfolio built for **Saish Ugale** (Developer & Technical Product Manager). This portfolio features a unique "Dual-Lens" interface, letting visitors toggle the focus of the site between a **Software Engineering** view and a **Technical Product Management** view, dynamically reordering layout sections and tailoring content based on the role.

Live at: [saishugale.me](http://saishugale.me)

---

## 🌟 Key Features

* **Dual-Lens Perspective**: Instantly switch the website's focus between **Developer (Dev)** and **Product Manager (PM)**.
* **Dynamic Section Reordering**: Leverages Framer Motion's `layout` transitions to animate the repositioning of page sections when switching perspectives.
* **Tactile Aesthetics**: Features modern typography, sleek gradients, a custom cursor, subtle glassmorphism card styling, and an animated tactile grain background overlay.
* **3D Parallax Profile Card**: A custom-built mouse-interactive card with 3D rotation based on cursor hover coordinates.
* **Google Student Ambassador Spotlight**: Showcases his leadership role and achievements as a Top 10 Google Student Ambassador in India.
* **Resend Contact Form**: Fully integrated contact panel with form-validation and email transmission via Resend API.

---

## 🛠️ Technology Stack

* **Framework**: Next.js 16.2 (App Router, Turbopack)
* **Frontend**: React 19, HTML5, Vanilla CSS
* **Animations**: Framer Motion 12
* **Styling**: Tailwind CSS 4, PostCSS
* **Icons**: Lucide React
* **Email API**: Resend Node SDK

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v18 or higher)
* npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SaishUgale/SaishUgale.github.io.git
   cd SaishUgale.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Setup environment variables:
   Create a `.env.local` file in the root directory and add your Resend API Key:
   ```env
   RESEND_API_KEY=re_your_free_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 📦 Deployment & Custom Domain Configuration

### Option 1: Deployment on Vercel (Recommended)

To preserve the dynamic functionality of the `/api/contact` email handler:

1. Import this repository into [Vercel](https://vercel.com).
2. Add the `RESEND_API_KEY` to the **Environment Variables** in the Vercel project settings.
3. In project settings, add your custom domain: `saishugale.me`.
4. In your **Namecheap DNS Settings**, add the following records:
   * **A Record**: Host `@`, Value `76.76.21.21`, TTL Automatic
   * **CNAME Record**: Host `www`, Value `cname.vercel-dns.com.`, TTL Automatic

### Option 2: Deployment on GitHub Pages

If you prefer to host directly on GitHub Pages:

1. Modify `next.config.ts` to output a static site:
   ```typescript
   import type { NextConfig } from "next";

   const nextConfig: NextConfig = {
     output: 'export',
     // any other options...
   };

   export default nextConfig;
   ```
2. Enable GitHub Actions for Pages deployment or push the `out` build directory.
3. Note that the dynamic contact form API endpoint `/api/contact` will not run on GitHub Pages (static files only). You will need to replace the endpoint with a client-side solution (like Formspree or Web3Forms).
4. Configure Namecheap A/CNAME records to point to GitHub Pages IPs (`185.199.108.153` to `185.199.111.153`) and your user domain `saishugale.github.io`.
