const fs = require('fs');
const path = require('path');

console.log('Running post-build script...');

// Copy .htaccess to build folder
const htaccessSrc = path.join(__dirname, '../public/.htaccess');
const htaccessDest = path.join(__dirname, '../build/.htaccess');

try {
  if (fs.existsSync(htaccessSrc)) {
    fs.copyFileSync(htaccessSrc, htaccessDest);
    console.log('✓ Copied .htaccess to build folder');
  } else {
    console.log('⚠ .htaccess not found in public folder');
  }
} catch (err) {
  console.error('✗ Error copying .htaccess:', err.message);
}

console.log('Post-build script completed!');

