# Hassan Jewellers - Setup & Installation Guide

## 🚀 Quick Start Guide

Follow these steps to get the Hassan Jewellers website running on your local machine.

### 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0.0 or higher)
  - Download from: https://nodejs.org/
  - Check version: `node --version`
- **npm** (comes with Node.js) or **yarn**
  - Check npm version: `npm --version`

### 📥 Installation Steps

#### 1. Download the Project Files

If you received the project as a ZIP file:
1. Extract the ZIP file to your desired location
2. Open terminal/command prompt in the extracted folder

#### 2. Install Dependencies

```bash
# Navigate to the project directory (if not already there)
cd hassan-jewellers-nextjs

# Install all required packages
npm install
```

This will install all necessary dependencies including:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- Canvas Confetti

#### 3. Start the Development Server

```bash
# Start the development server
npm run dev
```

#### 4. View the Website

Open your web browser and go to:
```
http://localhost:3000
```

You should see the Hassan Jewellers website with:
- ✨ Stunning lamp animation
- 🎨 Luxury gold theme
- 📱 Responsive design
- 🌙 Dark/light mode toggle
- 💬 WhatsApp button
- 🎉 Interactive animations

---

## 📂 Project Structure

```
hassan-jewellers-nextjs/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles & animations
│   ├── layout.tsx               # Root layout with metadata
│   └── page.tsx                 # Main homepage (uses all sections)
├── components/
│   ├── layout/
│   │   └── MainLayout.tsx       # Main layout wrapper
│   ├── sections/                # Individual page sections
│   │   ├── Header.tsx           # Navigation & floating elements
│   │   ├── HeroSection.tsx      # Lamp + Aurora hero
│   │   ├── AboutSection.tsx     # Company information
│   │   ├── DeliverySection.tsx  # Pan India delivery features
│   │   ├── CollectionsSection.tsx # Jewelry collections
│   │   ├── ReviewsSection.tsx   # Customer testimonials
│   │   ├── GallerySection.tsx   # Showroom images
│   │   ├── ContactSection.tsx   # Contact form & info
│   │   └── Footer.tsx           # Footer with links
│   ├── ui/                      # Reusable UI components
│   │   ├── floating-navbar.tsx  # Sticky navigation
│   │   ├── animated-button.tsx  # Letter-by-letter hover
│   │   ├── card-spotlight.tsx   # Interactive cards
│   │   ├── colorful-text.tsx    # Animated text effects
│   │   ├── aurora-background.tsx # Background animations
│   │   ├── background-beams.tsx # Animated pathways
│   │   ├── animated-testimonials.tsx # Scrolling reviews
│   │   ├── theme-toggle.tsx     # Dark/light switcher
│   │   ├── whatsapp-button.tsx  # Floating WhatsApp
│   │   ├── party-popper.tsx     # Confetti animation
│   │   └── ... (other UI components)
│   ├── hassan-lamp.tsx          # Custom lamp component
│   └── lamp-demo.tsx            # Lamp demo component
├── lib/
│   └���─ utils.ts                 # Tailwind utility functions
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── package.json                 # Dependencies & scripts
└── README.md                    # Project documentation
```

---

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start development server on http://localhost:3000

# Production
npm run build        # Build the application for production
npm start           # Start the production server

# Maintenance
npm run lint        # Run ESLint for code quality
npm run type-check  # Check TypeScript types
```

---

## 🎨 Customization Guide

### 🎯 Modifying Sections

Each section is a separate component in `components/sections/`. To modify:

#### Edit Content
```typescript
// Example: Update company information in AboutSection.tsx
const companyInfo = {
  yearsOfExperience: "30+",  // Change this
  happyCustomers: "50K+",    // Change this
  description: "Your new description..." // Update this
};
```

#### Add New Sections
1. Create new component in `components/sections/`
2. Import and add to `app/page.tsx`

```typescript
// app/page.tsx
import NewSection from "@/components/sections/NewSection";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <NewSection />  {/* Add here */}
      <AboutSection />
      {/* ... other sections */}
    </MainLayout>
  );
}
```

### 🎨 Theme Customization

#### Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  gold: {
    DEFAULT: "#D4AF37",  // Change primary gold
    500: "#YOUR_COLOR",  // Custom shades
  },
  luxury: {
    "rich-black": "#0D1117",  // Dark theme
    "pearl": "#F8F6F0",       // Light theme
  }
}
```

#### Fonts
Edit `app/layout.tsx`:
```typescript
import { YourFont } from 'next/font/google'

const yourFont = YourFont({ subsets: ['latin'] })
```

### 📱 Contact Information

Update contact details in:
- `components/sections/ContactSection.tsx`
- `components/sections/Footer.tsx`
- `components/ui/whatsapp-button.tsx`

### 🖼️ Images

Replace placeholder images with your own:
- Gallery images in `GallerySection.tsx`
- Collection images in `CollectionsSection.tsx`
- Customer photos in `ReviewsSection.tsx`

---

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect to Vercel
3. Deploy automatically

### Netlify
1. Run `npm run build`
2. Upload `dist` folder to Netlify

### Traditional Hosting
1. Run `npm run build`
2. Upload generated files to your server

---

## 🔧 Troubleshooting

### Common Issues

#### 1. Dependencies Not Installing
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### 2. Port 3000 Already in Use
```bash
# Use different port
npm run dev -- --port 3001
```

#### 3. Build Errors
```bash
# Check TypeScript errors
npm run type-check

# Fix linting issues
npm run lint --fix
```

### 4. Styling Issues
- Check if Tailwind CSS is properly configured
- Ensure all CSS variables are defined in `globals.css`

---

## 📞 Support

If you encounter any issues:

1. Check this guide first
2. Review the console for error messages
3. Ensure all dependencies are properly installed
4. Check that you're using Node.js 18 or higher

---

## 🎯 Next Steps

After successfully running the website:

1. **Customize Content**: Update text, images, and contact information
2. **Add Your Branding**: Replace placeholder content with your jewelry store details
3. **Test Responsiveness**: Check on different devices and screen sizes
4. **SEO Optimization**: Update metadata in `app/layout.tsx`
5. **Deploy**: Choose a hosting platform and deploy your site

---

## 📄 File Locations for Common Changes

| What to Change | File Location |
|----------------|---------------|
| Company Info | `components/sections/AboutSection.tsx` |
| Contact Details | `components/sections/ContactSection.tsx` |
| Phone Number | `components/ui/whatsapp-button.tsx` |
| Navigation Menu | `components/sections/Header.tsx` |
| Colors & Theme | `tailwind.config.ts` |
| Global Styles | `app/globals.css` |
| Page Title & SEO | `app/layout.tsx` |
| Footer Content | `components/sections/Footer.tsx` |

---

**🎉 Congratulations! Your Hassan Jewellers website is now ready to showcase your luxury jewelry collection!**
