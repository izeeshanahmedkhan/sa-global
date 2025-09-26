const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');

function getDirectoryStructure(dir, prefix = '', maxDepth = 3, currentDepth = 0) {
  if (currentDepth >= maxDepth) return '';
  
  let result = '';
  const items = fs.readdirSync(dir).sort();
  
  items.forEach((item, index) => {
    const itemPath = path.join(dir, item);
    const isLast = index === items.length - 1;
    const currentPrefix = isLast ? '└── ' : '├── ';
    const nextPrefix = prefix + (isLast ? '    ' : '│   ');
    
    result += `${prefix}${currentPrefix}${item}\n`;
    
    if (fs.statSync(itemPath).isDirectory()) {
      result += getDirectoryStructure(itemPath, nextPrefix, maxDepth, currentDepth + 1);
    }
  });
  
  return result;
}

console.log('📁 Current Build Structure:');
console.log('build/');
console.log(getDirectoryStructure(buildDir));

console.log('\n📊 File Count by Category:');
const stats = {
  'Icons': 0,
  'Logos': 0,
  'University Logos': 0,
  'Partner Images': 0,
  'University Images': 0,
  'Config Files': 0,
  'Static Assets': 0,
  'Other': 0
};

function countFiles(dir, category = 'Other') {
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const itemPath = path.join(dir, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      if (item === 'icons') countFiles(itemPath, 'Icons');
      else if (item === 'logos') countFiles(itemPath, 'Logos');
      else if (item === 'university-logos') countFiles(itemPath, 'University Logos');
      else if (item === 'partner-images') countFiles(itemPath, 'Partner Images');
      else if (item === 'university-images') countFiles(itemPath, 'University Images');
      else if (item === 'config') countFiles(itemPath, 'Config Files');
      else if (item === 'static') countFiles(itemPath, 'Static Assets');
      else countFiles(itemPath, 'Other');
    } else {
      stats[category]++;
    }
  });
}

countFiles(buildDir);

Object.entries(stats).forEach(([category, count]) => {
  if (count > 0) {
    console.log(`  ${category}: ${count} files`);
  }
});

console.log('\n✅ Build folder is clean and organized!');
