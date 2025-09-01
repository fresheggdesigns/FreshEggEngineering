# Quick Setup Guide

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Setup
```bash
# Copy the example environment file
cp env.example .env.local

# Edit .env.local and add your Formspree form ID
NEXT_PUBLIC_FORMSPREE_ID=your-formspree-form-id
```

### 3. Add Your Content

#### Replace Placeholder Images
- Add your project images to `public/images/`
- Follow the naming convention in `public/images/placeholder.txt`
- Recommended: 800x600px for covers, 1200x800px for details

#### Update Project Data
- Edit `app/data/projects.ts` with your actual projects
- Update the hero content in `app/components/Hero.tsx`
- Customize the about section in `app/components/About.tsx`

#### Add 3D Models (Optional)
- Add `.glb` files to `public/models/`
- Reference them in your project data with `modelUrl`

### 4. Run Development Server
```bash
npm run dev
```

### 5. Deploy to Vercel
1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy!

## 📝 Content Checklist

- [ ] Replace all placeholder images
- [ ] Update project data in `projects.ts`
- [ ] Customize hero title and subtitle
- [ ] Update about section with your bio
- [ ] Add your contact information
- [ ] Set up Formspree form
- [ ] Add your social media links
- [ ] Replace favicon.ico
- [ ] Test contact form functionality
- [ ] Test on mobile devices

## 🎨 Customization Tips

### Colors
Edit the CSS variables in `app/globals.css`:
```css
:root {
  --g1: radial-gradient(...); /* Primary gradient */
  --g2: radial-gradient(...); /* Secondary gradient */
  --g3: radial-gradient(...); /* Tertiary gradient */
}
```

### Typography
Change fonts in `app/layout.tsx`:
```typescript
import { Inter } from 'next/font/google'
// Replace with your preferred font
```

### Animations
Adjust animation settings in components or `tailwind.config.ts`

## 🔧 Troubleshooting

### Common Issues

1. **Images not loading**: Check file paths in `public/images/`
2. **Form not working**: Verify Formspree ID in `.env.local`
3. **Build errors**: Run `npm run lint` to check for issues
4. **Styling issues**: Ensure Tailwind CSS is properly configured

### Performance Tips

- Optimize images before adding them
- Keep 3D models under 10MB
- Test on slow connections
- Use Next.js Image component for all images

## 📞 Support

- Check the main README.md for detailed documentation
- Review component files for customization options
- Test thoroughly before deploying
