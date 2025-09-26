# PowerShell script to organize build folder
param(
    [string]$BuildPath = "..\build"
)

Write-Host "🗂️  Organizing build folder..." -ForegroundColor Cyan

# Create directory structure
$directories = @(
    "assets\icons",
    "assets\logos", 
    "assets\university-logos",
    "assets\partner-images",
    "assets\university-images",
    "config"
)

foreach ($dir in $directories) {
    $fullPath = Join-Path $BuildPath $dir
    if (!(Test-Path $fullPath)) {
        New-Item -ItemType Directory -Path $fullPath -Force | Out-Null
        Write-Host "✅ Created directory: $dir" -ForegroundColor Green
    }
}

# Move files to organized directories
$fileMoves = @{
    "assets\icons" = @("favicon.ico", "favicon.png", "favicon-16x16.png", "apple-touch-icon.png")
    "assets\logos" = @("logo.png", "logo192.png", "logo512.png")
    "assets\university-logos" = @("Birmingham-logo.svg", "birmingham-university-logo.svg", "brunel-logo.svg", "cardiff-logo.svg", "cardiff-university-logo.svg", "Nottingham-logo.svg", "nottingham-university-logo.svg", "sussex-university-logo.svg")
    "assets\partner-images" = @("partners-1.webp", "partners-2.webp", "partners-3.webp", "partners-4.webp", "partners-5.webp", "partners-6.webp")
    "assets\university-images" = @("aust.webp", "QMUL.jpg.jpeg", "royalhollway.jpeg")
    "config" = @("asset-manifest.json", "manifest.json", "robots.txt")
}

foreach ($targetDir in $fileMoves.Keys) {
    $files = $fileMoves[$targetDir]
    foreach ($file in $files) {
        $sourcePath = Join-Path $BuildPath $file
        $destPath = Join-Path $BuildPath (Join-Path $targetDir $file)
        
        if (Test-Path $sourcePath) {
            Move-Item -Path $sourcePath -Destination $destPath -Force
            Write-Host "📁 Moved $file to $targetDir\" -ForegroundColor Yellow
        }
    }
}

# Update index.html paths
$indexPath = Join-Path $BuildPath "index.html"
if (Test-Path $indexPath) {
    $htmlContent = Get-Content $indexPath -Raw
    
    # Update icon paths
    $htmlContent = $htmlContent -replace 'href="\.\/favicon\.ico"', 'href="./assets/icons/favicon.ico"'
    $htmlContent = $htmlContent -replace 'href="\.\/favicon-16x16\.png"', 'href="./assets/icons/favicon-16x16.png"'
    $htmlContent = $htmlContent -replace 'href="\.\/favicon\.png"', 'href="./assets/icons/favicon.png"'
    $htmlContent = $htmlContent -replace 'href="\.\/apple-touch-icon\.png"', 'href="./assets/icons/apple-touch-icon.png"'
    $htmlContent = $htmlContent -replace 'href="\.\/manifest\.json"', 'href="./config/manifest.json"'
    
    Set-Content -Path $indexPath -Value $htmlContent
    Write-Host "✅ Updated index.html paths" -ForegroundColor Green
}

Write-Host ""
Write-Host "✅ Build folder organized successfully!" -ForegroundColor Green
Write-Host "📁 Organized structure:" -ForegroundColor Cyan
Write-Host "├── assets/"
Write-Host "│   ├── icons/"
Write-Host "│   ├── logos/"
Write-Host "│   ├── university-logos/"
Write-Host "│   ├── partner-images/"
Write-Host "│   └── university-images/"
Write-Host "├── config/"
Write-Host "├── static/"
Write-Host "└── index.html"
