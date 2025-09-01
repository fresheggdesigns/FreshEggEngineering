# Precision3D - Engineering Portfolio

A modern, single-page portfolio website for 3D modeling and engineering renders. Built with Next.js, TypeScript, and Tailwind CSS, featuring a dark theme with engineering-inspired design elements.

## 🚀 Features

- **Modern Design**: Dark theme with Cursor-inspired gradients and engineering grid motifs
- **Responsive Layout**: Optimized for all device sizes
- **Interactive Projects**: Filterable project grid with modal lightbox
- **3D Model Support**: Optional 3D model viewer integration
- **Contact Form**: Formspree integration with validation
- **Smooth Animations**: Framer Motion for performant animations
- **Accessibility**: WCAG AA compliant with keyboard navigation
- **SEO Optimized**: Meta tags and structured data

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
├── app/
│   ├── components/          # React components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── ProjectCard.tsx # Individual project card
│   │   ├── ProjectModal.tsx # Project modal/lightbox
│   │   ├── ProjectGrid.tsx # Projects grid with filters
│   │   ├── ContactForm.tsx # Contact form
│   │   └── Footer.tsx      # Footer
│   ├── data/
│   │   └── projects.ts     # Project data and types
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Main page
├── lib/
│   ├── filters.ts          # Project filtering logic
│   └── validation.ts       # Form validation schemas
├── public/
│   ├── images/             # Project images
│   └── models/             # 3D model files
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd FreshEggEngineering
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your Formspree form ID:
   ```
   NEXT_PUBLIC_FORMSPREE_ID=your-formspree-form-id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Adding Projects

### 1. Update Project Data

Edit `app/data/projects.ts` to add or modify projects:

```typescript
export const PROJECTS: Project[] = [
  {
    id: "your-project-id",
    title: "Your Project Title",
    year: 2024,
    categories: ["Renders", "Schematics"], // Choose from: Renders, Schematics, Prototyping, Simulation
    tools: ["Fusion 360", "KeyShot"], // List of tools used
    cover: "/images/your-project-cover.jpg",
    images: ["/images/your-project-1.jpg", "/images/your-project-2.jpg"],
    modelUrl: "/models/your-project.glb", // Optional 3D model
    description: "Brief description of your project..."
  },
  // Add more projects...
];
```

### 2. Add Project Images

1. Add your project images to `public/images/`
2. Use descriptive filenames (e.g., `project-name-cover.jpg`)
3. Recommended sizes:
   - Cover images: 800x600px (4:3 aspect ratio)
   - Detail images: 1200x800px (3:2 aspect ratio)

### 3. Add 3D Models (Optional)

1. Add your 3D model files to `public/models/`
2. Supported formats: `.glb` (recommended), `.usdz`, `.obj`
3. Keep file sizes under 10MB for web performance
4. Optimize models for web viewing

## 🎨 Customization

### Colors and Theme

The design uses CSS custom properties for easy theming. Edit `app/globals.css`:

```css
:root {
  --g1: radial-gradient(600px 400px at 10% 10%, rgba(76,29,149,0.4), transparent 60%);
  --g2: radial-gradient(500px 300px at 90% 30%, rgba(2,132,199,0.35), transparent 60%);
  --g3: radial-gradient(600px 400px at 50% 90%, rgba(16,185,129,0.25), transparent 60%);
  --background: #0b0f17;
  --foreground: #ffffff;
}
```

### Typography

The site uses Inter font. To change fonts, update `app/layout.tsx`:

```typescript
import { Inter } from 'next/font/google'
// Change to your preferred font
```

### Content

- **Hero Section**: Edit `app/components/Hero.tsx`
- **About Section**: Edit `app/components/About.tsx`
- **Contact Info**: Edit `app/components/ContactForm.tsx` and `app/components/Footer.tsx`

## 📧 Contact Form Setup

### Formspree Integration

1. **Create a Formspree account** at [formspree.io](https://formspree.io)
2. **Create a new form** and get your form ID
3. **Add the form ID** to your `.env.local` file:
   ```
   NEXT_PUBLIC_FORMSPREE_ID=your-form-id
   ```
4. **Test the form** to ensure it's working correctly

### Alternative Form Services

You can easily switch to other form services by modifying `app/components/ContactForm.tsx`:

- **Netlify Forms**: Use `netlify` attribute
- **EmailJS**: Replace fetch with EmailJS SDK
- **Custom API**: Point to your own endpoint

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard
   - Deploy!

### Other Platforms

The project is compatible with:
- **Netlify**: Use `npm run build` and deploy the `out` folder
- **GitHub Pages**: Configure for static export
- **AWS S3**: Upload build files to S3 bucket

## 🔧 Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## 📱 Performance

The site is optimized for performance:

- **Images**: Next.js Image component with lazy loading
- **Animations**: Reduced motion support for accessibility
- **Code Splitting**: Automatic code splitting with Next.js
- **SEO**: Meta tags and structured data
- **Accessibility**: WCAG AA compliant

## 🎯 SEO Optimization

- Meta tags in `app/layout.tsx`
- Open Graph and Twitter Card support
- Semantic HTML structure
- Alt text for all images
- Structured data for projects

## 🔒 Security

- Honeypot field for spam protection
- Form validation with Zod
- Environment variables for sensitive data
- No sensitive data in client-side code

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

If you have questions or need help:

1. Check the documentation above
2. Search existing issues
3. Create a new issue with detailed information

## 🎨 Design Credits

- **Inspiration**: Cursor website design
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **Colors**: Custom engineering-inspired palette

---

Built with ❤️ for the engineering community.
