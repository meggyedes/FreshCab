# 🚗 FreshCab Car Interior Detailing Website

A modern, responsive website for a mobile car interior detailing service in the Netherlands. Built with clean HTML, CSS, and JavaScript - no frameworks required.

## 🌟 Features

- **Fully Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Fast Loading** - Optimized for performance with lazy loading images
- **SEO Friendly** - Semantic HTML and proper meta tags
- **Mobile-First** - Designed with mobile users in mind (16px minimum font size)
- **Smooth Animations** - Fade-in effects, hover animations, and scroll-triggered animations
- **Interactive Elements** - FAQ accordion, mobile menu, contact form
- **WhatsApp Integration** - Direct booking via WhatsApp

## 📁 Project Structure

```
FreshCab/
├── index.html              # Home page
├── services.html           # Services & Pricing page
├── gallery.html            # Gallery page with before/after photos
├── contact.html            # Contact page with form
├── css/
│   └── styles.css         # All styles (mobile-first, responsive)
├── js/
│   └── main.js            # Interactive features and animations
├── images/
│   ├── gallery/           # Before/after photos
│   ├── README.md          # Image guidelines
│   └── placeholder-generator.html  # Tool to create placeholder images
├── netlify.toml           # Netlify configuration
├── _redirects             # Netlify redirects
└── README.md              # This file
```

## 🚀 Quick Start

### Local Development

1. **Clone or download this repository**
   ```bash
   cd FreshCab
   ```

2. **Open in a browser**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

3. **View the website**
   - Navigate to `http://localhost:8000` in your browser

### Deploy to Netlify

#### Option 1: Drag & Drop (Easiest)
1. Go to [Netlify](https://www.netlify.com/)
2. Sign up or log in
3. Drag the entire `FreshCab` folder to the Netlify dashboard
4. Your site is live! 🎉

#### Option 2: Git Integration (Recommended)
1. Push your code to GitHub, GitLab, or Bitbucket
2. Log in to [Netlify](https://www.netlify.com/)
3. Click "New site from Git"
4. Connect your repository
5. Netlify will automatically deploy your site

#### Option 3: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

## ⚙️ Customization

### 1. Update Contact Information

✅ **COMPLETED** - All contact information has been updated:

- Phone: +36 70 600 2511 (WhatsApp)
- Email: soosdanielmarcel@gmail.com
- Location: Dongestraat 1, 4388 VJ, Netherlands
- WhatsApp Username: @adanisoos

**Files to update:**
- `index.html`
- `services.html`
- `gallery.html`
- `contact.html`
- `js/main.js`

### 2. Add Your Photos

Replace placeholder images with actual photos:

1. **About Section Image**
   - Add `images/about-placeholder.jpg` (600x600px recommended)
   - Photo of you or your service in action

2. **Gallery Images**
   - Add 8 before/after photos to `images/gallery/`
   - Name them: `before-after-1.jpg` through `before-after-8.jpg`
   - Recommended size: 800x600px
   - See `images/README.md` for detailed guidelines

**Tip:** Use `images/placeholder-generator.html` to create temporary placeholders

### 3. Customize Colors

Edit CSS variables in `css/styles.css`:

```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --primary-dark: #1e40af;       /* Darker shade */
    --accent-color: #f59e0b;       /* Accent/highlight color */
    /* ... */
}
```

### 4. Update Pricing

Edit the pricing packages in `services.html`:
- Modify package names, prices, and features
- Add or remove packages as needed
- Update add-on services and prices

### 5. Modify Business Hours

Update business hours in `contact.html`:
```html
<li><strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM</li>
<li><strong>Saturday:</strong> 9:00 AM - 5:00 PM</li>
<li><strong>Sunday:</strong> By appointment only</li>
```

### 6. Edit Testimonials

Update customer reviews in `index.html`:
- Change names and testimonial text
- Add or remove testimonial cards

## 📱 Pages Overview

### Home Page (`index.html`)
- Hero section with call-to-action buttons
- About Me section
- How It Works (4-step process)
- Customer testimonials
- FAQ section
- Call-to-action section

### Services & Pricing (`services.html`)
- Three pricing tiers (Basic, Standard, Premium)
- Vehicle type pricing (Sedan/Wagon vs SUV/Minivan)
- Optional add-on services
- Direct WhatsApp booking links

### Gallery (`gallery.html`)
- 8 before/after photo showcases
- Grid layout with hover effects
- Optimized image loading

### Contact (`contact.html`)
- Multiple contact methods (WhatsApp, Phone, Email)
- Service area information
- Business hours
- Contact form with WhatsApp integration

## 🎨 Design Features

- **Color Scheme**: Blue primary (#2563eb) with orange accent (#f59e0b)
- **Typography**: Inter font family (clean, modern)
- **Animations**: Fade-in on scroll, hover effects, smooth transitions
- **Mobile Menu**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Anchor links scroll smoothly
- **FAQ Accordion**: Expandable/collapsible questions

## 🔧 Technical Details

- **No Build Process**: Pure HTML/CSS/JS - no compilation needed
- **No Dependencies**: No npm packages or frameworks
- **Modern CSS**: CSS Grid, Flexbox, CSS Variables
- **Vanilla JavaScript**: No jQuery or other libraries
- **Lazy Loading**: Images load as needed for better performance
- **SEO Optimized**: Semantic HTML, meta tags, alt text

## 📊 Performance

- Optimized for fast loading
- Lazy loading images
- Minified CSS/JS (via Netlify)
- Compressed images recommended
- Mobile-first responsive design

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 To-Do After Setup

- [x] Replace contact information with FreshCab details ✅
- [x] Update branding from "Dani" to "FreshCab" ✅
- [x] Update service area to Netherlands ✅
- [x] Remove contact form (using direct WhatsApp links) ✅
- [ ] Upload real photos (about section + 8 gallery images)
- [ ] Customize pricing if needed (currently in EUR)
- [ ] Update business hours if needed
- [ ] Test WhatsApp links
- [ ] Test on mobile devices
- [ ] Set up custom domain on Netlify (optional)

## 🆘 Support & Issues

If you encounter any issues:
1. Check that all file paths are correct
2. Ensure images are in the correct directories
3. Verify phone numbers are in correct format (no spaces or special characters)
4. Test on multiple browsers
5. Check browser console for JavaScript errors

## 📄 License

This project is created for Dani's Car Interior Detailing business. Feel free to modify and use as needed.

## 🙏 Credits

- Font: [Inter](https://fonts.google.com/specimen/Inter) by Google Fonts
- Icons: Unicode emoji characters
- Design: Custom design for mobile car detailing service

---

**Built with ❤️ for FreshCab Car Interior Detailing**

For questions or support, contact: soosdanielmarcel@gmail.com

