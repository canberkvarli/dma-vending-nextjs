# Production Setup Guide

This document outlines the production-ready features and setup requirements for the DMA Healthy Vending website.

## ✅ Completed Production Features

### 1. SEO Optimization
- Enhanced metadata with Open Graph and Twitter Card support
- Proper title templates and descriptions
- Canonical URLs via `metadataBase`
- Robots meta tags for search engine optimization
- Viewport configuration for mobile devices

### 2. Security Headers
- Security headers configured in `next.config.ts`:
  - Strict Transport Security (HSTS)
  - X-Frame-Options
  - X-Content-Type-Options
  - X-XSS-Protection
  - Referrer-Policy
  - Permissions-Policy

### 3. Performance Optimizations
- Image optimization with AVIF and WebP support
- Compression enabled
- SWC minification (enabled by default in Next.js 16+)
- React Strict Mode enabled
- Production source maps disabled for security
- Optimized for Vercel Edge Network

### 4. SEO Files
- `app/robots.ts` - Dynamic robots.txt generation
- `app/sitemap.ts` - Dynamic sitemap generation
- `public/manifest.json` - PWA manifest file

### 5. Environment Variables
- `.env.example` - Template for required environment variables

## 📋 Required Actions Before Production

### 1. Favicon Files ✅
All favicon files have been created in the `public/` directory:

- **`icon.png`** - 32x32px PNG icon (for browser favicon)
- **`icon-192.png`** - 192x192px PNG icon (for PWA)
- **`icon-512.png`** - 512x512px PNG icon (for PWA)
- **`apple-icon.png`** - 180x180px PNG icon (for Apple devices)

These were automatically generated from your existing logo files.

### 2. Environment Variables ✅
Your `.env.local` file is already set up. Make sure it includes:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
CONTACT_TO_EMAIL=your-email@example.com
WEB3FORMS_ACCESS_KEY=your-web3forms-access-key
WEB3FORMS_ENDPOINT=https://api.web3forms.com/submit
```

### 3. Open Graph Image
Consider creating a dedicated Open Graph image (1200x630px) for better social media sharing. Update the `openGraph.images` URL in `app/layout.tsx` if you create a custom one.

### 4. Search Engine Verification
Add verification codes to `app/layout.tsx` in the `verification` object:
- Google Search Console
- Bing Webmaster Tools
- Yandex (if needed)

### 5. Analytics (Optional)
Consider adding:
- Google Analytics
- Google Tag Manager
- Other analytics tools as needed

## 🚀 Vercel Deployment

Since you're deploying on Vercel, the following applies:

### Environment Variables in Vercel
1. Go to your Vercel project settings
2. Navigate to **Settings → Environment Variables**
3. Add all variables from `.env.local`:
   - `NEXT_PUBLIC_SITE_URL` - Your production domain (e.g., `https://dmahealthyvending.com`)
   - `CONTACT_TO_EMAIL` - Email for contact form submissions
   - `WEB3FORMS_ACCESS_KEY` - Your Web3Forms API key
   - `WEB3FORMS_ENDPOINT` - (Optional, defaults to `https://api.web3forms.com/submit`)

### Vercel-Specific Features
- ✅ Automatic HTTPS/SSL (no configuration needed)
- ✅ Global CDN (automatic)
- ✅ Automatic deployments on git push
- ✅ Preview deployments for PRs
- ✅ Edge Network optimization
- ✅ Image optimization (Next.js Image component works automatically)

### Custom Domain Setup
1. In Vercel dashboard, go to **Settings → Domains**
2. Add your custom domain
3. Update `NEXT_PUBLIC_SITE_URL` environment variable to match
4. Vercel will automatically configure DNS and SSL

## 🚀 Deployment Checklist

- [x] Create favicon files (`icon.png`, `apple-icon.png`) ✅
- [ ] Set all environment variables in Vercel dashboard
- [ ] Update `NEXT_PUBLIC_SITE_URL` to production domain in Vercel
- [ ] Test contact form with production credentials
- [ ] Verify all images load correctly
- [ ] Test on mobile devices
- [x] Run `npm run build` to ensure no build errors ✅
- [ ] Push to main branch (Vercel will auto-deploy)
- [ ] Verify deployment works correctly
- [ ] Set up custom domain (if not already done)
- [ ] Set up monitoring and error tracking (Vercel Analytics available)
- [ ] Submit sitemap to search engines (e.g., `https://yourdomain.com/sitemap.xml`)

## 📝 Notes

- The favicon.ico in `app/` directory is automatically handled by Next.js
- The sitemap and robots.txt are dynamically generated
- All security headers are automatically applied
- Image optimization is handled automatically by Next.js

