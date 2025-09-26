const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');

// Create organized directory structure
const directories = {
  'assets/icons': ['favicon.ico', 'favicon.png', 'favicon-16x16.png', 'apple-touch-icon.png'],
  'assets/logos': ['logo.png', 'logo192.png', 'logo512.png'],
  'assets/university-logos': [
    'Birmingham-logo.svg',
    'birmingham-university-logo.svg',
    'brunel-logo.svg',
    'cardiff-logo.svg',
    'cardiff-university-logo.svg',
    'Nottingham-logo.svg',
    'nottingham-university-logo.svg',
    'sussex-university-logo.svg'
  ],
  'assets/partner-images': [
    'partners-1.webp',
    'partners-2.webp',
    'partners-3.webp',
    'partners-4.webp',
    'partners-5.webp',
    'partners-6.webp'
  ],
  'assets/university-images': [
    'aust.webp',
    'QMUL.jpg.jpeg',
    'royalhollway.jpeg'
  ],
  'config': ['asset-manifest.json', 'manifest.json', 'robots.txt']
};

// Create directories
Object.keys(directories).forEach(dir => {
  const fullPath = path.join(buildDir, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Move files to organized directories
Object.entries(directories).forEach(([dir, files]) => {
  files.forEach(file => {
    const sourcePath = path.join(buildDir, file);
    const destPath = path.join(buildDir, dir, file);
    
    if (fs.existsSync(sourcePath)) {
      fs.renameSync(sourcePath, destPath);
      console.log(`Moved ${file} to ${dir}/`);
    }
  });
});

// Update index.html paths
const indexPath = path.join(buildDir, 'index.html');
if (fs.existsSync(indexPath)) {
  let htmlContent = fs.readFileSync(indexPath, 'utf8');
  
  // Update icon paths
  htmlContent = htmlContent.replace(/href="\.\/favicon\.ico"/g, 'href="./assets/icons/favicon.ico"');
  htmlContent = htmlContent.replace(/href="\.\/favicon-16x16\.png"/g, 'href="./assets/icons/favicon-16x16.png"');
  htmlContent = htmlContent.replace(/href="\.\/favicon\.png"/g, 'href="./assets/icons/favicon.png"');
  htmlContent = htmlContent.replace(/href="\.\/apple-touch-icon\.png"/g, 'href="./assets/icons/apple-touch-icon.png"');
  htmlContent = htmlContent.replace(/href="\.\/manifest\.json"/g, 'href="./config/manifest.json"');
  
  fs.writeFileSync(indexPath, htmlContent);
  console.log('✅ Updated index.html paths');
}

console.log('✅ Build folder organized successfully!');
console.log('📁 Organized structure:');
console.log('├── assets/');
console.log('│   ├── icons/');
console.log('│   ├── logos/');
console.log('│   ├── university-logos/');
console.log('│   ├── partner-images/');
console.log('│   └── university-images/');
console.log('├── config/');
console.log('├── static/');
console.log('└── index.html');
