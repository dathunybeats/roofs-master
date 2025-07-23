# 🏠 Roofing Website Template - Quick Setup Guide

This template is designed for **cold outreach campaigns** - allowing you to quickly deploy 10-20 professional roofing websites for different markets.

## 🚀 Quick Deploy to Vercel

1. **Fork this repository** on GitHub
2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your forked repository
   - Deploy (takes ~2 minutes)

## ⚡ Customization Checklist

### Essential Changes (5 minutes per site):
- [ ] **Company Name**: Update "Roofit" throughout `app/page.tsx`
- [ ] **Location**: Change "Alabama" to your target market
- [ ] **Phone Number**: Update contact information
- [ ] **Hero Image**: Replace `/public/yyYhQHFqAUi9h1nO5lH9iqGVY7o.png`
- [ ] **Domain**: Configure custom domain in Vercel

### Find & Replace Locations:
```bash
# Company Name (appears ~15 times)
"Roofit" → "Your Company Name"

# Location (appears ~8 times)  
"Alabama" → "Your State/City"
"Birmingham, AL" → "Your City, State"

# Phone Number
"(555) 123-4567" → "Your Phone"

# Email
"info@roofit.com" → "your@email.com"
```

## 🎯 Cold Outreach Strategy

### Template Variations:
1. **Location-Based**: Dallas Roofing, Houston Roofing, etc.
2. **Service-Based**: Emergency Roofing, Commercial Roofing, etc.
3. **Niche-Based**: Historic Home Roofing, Solar Roofing, etc.

### SEO Optimization:
- Update `<title>` tags in `app/layout.tsx`
- Modify meta descriptions
- Add location-specific keywords
- Update image alt texts

## 📱 Features Included

✅ **Responsive Design** - Mobile & Desktop optimized  
✅ **Contact Forms** - Lead capture on hero section  
✅ **Service Pages** - Professional service descriptions  
✅ **Testimonials** - Social proof section  
✅ **FAQ Section** - Common questions answered  
✅ **Fast Loading** - Optimized images and code  
✅ **SEO Ready** - Meta tags and structured data  

## 🛠 Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📊 Analytics & Tracking

Add your tracking codes in `app/layout.tsx`:
- Google Analytics
- Facebook Pixel  
- Call tracking numbers
- Heat mapping tools

## 🚀 Deployment Platforms

### Vercel (Recommended - Free)
- Automatic deployments from GitHub
- Custom domains included
- Global CDN
- Analytics included

### Alternatives:
- **Netlify**: Similar to Vercel
- **GitHub Pages**: Free static hosting
- **AWS Amplify**: More advanced features

## 💡 Tips for Cold Outreach

1. **Create 5-10 variations** with different:
   - Company names
   - Local phone numbers
   - Target locations
   - Service focus

2. **Use local imagery** when possible
3. **Add local testimonials** (with permission)  
4. **Include local service areas** in content
5. **Set up call tracking** to measure results

## 🔄 Batch Creation Workflow

1. Fork template repository
2. Create new branch for each site: `dallas-roofing`, `houston-roofing`
3. Use VS Code find/replace for bulk changes
4. Deploy each branch to separate Vercel project
5. Configure custom domains
6. Track performance with analytics

---

**Need Help?** This template is designed to be self-service, but if you need customization assistance, consider hiring a developer for bulk modifications.

**License**: MIT - Use commercially, modify freely.