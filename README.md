# Kuduu - AI-Powered Healthcare Landing Page

A modern, responsive landing page for Kuduu, an AI-powered healthcare platform that predicts, prevents, and personalizes patient care.

## 🚀 Features

- **Modern Design**: Dark theme with blue/purple accents
- **Responsive**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Built with Framer Motion for engaging interactions
- **Interactive Forms**: Email collection with validation and feedback
- **Performance Optimized**: Built with Next.js 14 and Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kuduu.io
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment to Netlify

### Option 1: Deploy via Netlify UI

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click "New site from Git"
4. Choose your repository
5. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
6. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build the project:
```bash
npm run build
```

3. Deploy:
```bash
netlify deploy --prod --dir=.next
```

### Option 3: Drag & Drop

1. Build the project:
```bash
npm run build
```

2. Drag the `.next` folder to Netlify's deploy area

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main landing page
├── components/
│   ├── Logo.tsx             # Kuduu logo component
│   └── EmailForm.tsx        # Email collection form
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary blue: `#3B82F6`
- Accent purple: `#8B5CF6`
- Background: `#000000`
- Text: `#FFFFFF`

### Content
Update the content in `src/app/page.tsx` to match your needs:
- Hero section text
- Feature descriptions
- Benefits list
- Founder's story

### Logo
Replace the logo in `src/components/Logo.tsx` with your actual logo design.

## 📧 Email Collection

The email forms are currently set up to simulate submission. To make them functional:

1. Set up an email service (Mailchimp, ConvertKit, etc.)
2. Update the `handleSubmit` function in `src/components/EmailForm.tsx`
3. Add your API endpoint and authentication

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Performance

- Optimized images and assets
- Lazy loading for animations
- Minimal bundle size
- Fast loading times

## 📄 License

© 2025 — Kuduu Platforms LLC

---

Built with ❤️ using Next.js and Tailwind CSS
