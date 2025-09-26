# SA Global - Study Abroad Consultant

A modern, responsive website for SA Global Study Abroad Consultant services.

## Features

- 🎓 **Study Abroad Services**: Comprehensive information about study abroad opportunities
- 🌍 **Destination Guide**: 7 major study destinations (Canada, USA, Ireland, New Zealand, Singapore, UK, UAE)
- 🏫 **University Partners**: Information about partner universities and institutions
- 📱 **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- 🎨 **Modern UI**: Clean, professional design with smooth animations
- ⚡ **Performance Optimized**: Fast loading with optimized assets

## Technology Stack

- **Frontend**: React 19.1.1
- **Routing**: React Router DOM 7.9.1
- **Styling**: Tailwind CSS 3.4.17
- **Build Tool**: Create React App
- **Email Service**: EmailJS

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd sa-global
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Production Build

### Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder and automatically organizes the files into a clean structure.

### Organized Build Structure

The build process automatically organizes files into a clean structure:

```
build/
├── assets/
│   ├── icons/           # Favicons and app icons
│   ├── logos/           # Company logos
│   ├── university-logos/ # University partner logos
│   ├── partner-images/  # Partner company images
│   └── university-images/ # University images
├── config/              # Configuration files
├── static/              # CSS, JS, and media files
└── index.html           # Main HTML file
```

### Build Scripts

- `npm run build` - Build and organize files automatically
- `npm run build:clean` - Build without organization (raw build)
- `npm run build:production` - Production build without source maps
- `npm run organize` - Organize existing build folder
- `npm run build:structure` - Display organized build structure
- `npm run serve` - Serve production build locally

### Serve Production Build

```bash
npm run serve
```

This serves the production build locally on port 3000.

## Deployment

The app is ready for deployment to any static hosting service:

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use GitHub Actions or deploy manually
- **AWS S3**: Upload the `build` folder contents

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Layout.js       # Main layout component
│   ├── HeroSlider.jsx  # Hero section carousel
│   └── BlogPost.js     # Blog post component
├── pages/              # Page components
│   ├── Home.js         # Homepage
│   ├── About.js        # About page
│   ├── Services.js     # Services page
│   ├── Universities.js # Universities page
│   ├── Blog.js         # Blog page
│   └── Contact.js      # Contact page
├── assets/             # Static assets
│   ├── content.js      # Website content data
│   ├── imageLinks.js   # Image imports and exports
│   └── images/         # Image assets
├── App.js              # Main app component
├── App.css             # Global styles
└── index.js            # App entry point
```

## Features Overview

### Homepage Sections
- **Hero Carousel**: Dynamic slides with call-to-action
- **Study Abroad Consultants**: 7 destination countries in seamless grid
- **University Recommendations**: Endless carousel with swipe controls
- **Partners Universities**: Partner institutions showcase
- **Our Partners**: Educational partner logos
- **Services Overview**: Key services offered
- **Why Choose Us**: Benefits and features
- **Blog Preview**: Latest articles and insights

### Responsive Design
- **Mobile First**: Optimized for mobile devices
- **Tablet Friendly**: Adapted layouts for tablet screens
- **Desktop Enhanced**: Full features on desktop screens
- **Touch Support**: Swipe controls for carousels

### Performance Features
- **Optimized Images**: Compressed and properly sized images
- **Lazy Loading**: Images load as needed
- **Code Splitting**: Automatic code splitting for faster loading
- **SEO Optimized**: Meta tags and structured data

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under UNLICENSED - all rights reserved.

## Support

For support and inquiries, please contact SA Global through the website contact form.

---

**SA Global** - Your trusted partner in international education.