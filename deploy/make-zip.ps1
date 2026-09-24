# Builds dist/comida.com.py and packs it into deploy/comida.com.py.zip for Hostinger (upload + extract in public_html).
# Includes .htaccess and php/; excludes logs, research, plan, docs, source maps and anything that looks like credentials.
$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $PSScriptRoot
$site = Join-Path $repo 'dist\comida.com.py'
$zip = Join-Path $PSScriptRoot 'comida.com.py.zip'
Push-Location $repo
try {
  node engine/build-site.mjs --site=comida; if ($LASTEXITCODE -ne 0) { throw 'build failed' }
  node engine/verify.mjs --site=comida; if ($LASTEXITCODE -ne 0) { throw 'verify failed' }
} finally { Pop-Location }
if (Test-Path $zip) { Remove-Item $zip -Force }
$exclude = '\.(log|map|env)$|(^|[\\/])(logs|research|plan|docs|node_modules)([\\/]|$)|private-config|config\.private|\.env\.'
Add-Type -AssemblyName System.IO.Compression, System.IO.Compression.FileSystem
$archive = [System.IO.Compression.ZipFile]::Open($zip, 'Create')
$count = 0
try {
  Get-ChildItem -LiteralPath $site -Recurse -File -Force | ForEach-Object {
    $rel = $_.FullName.Substring($site.Length + 1)
    if ($rel -match $exclude) { return }
    # Forward slashes so Linux extracts real folders, not names with backslashes.
    [void][System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($archive, $_.FullName, $rel.Replace([char]92, [char]47), 'Optimal')
    $count++
  }
} finally { $archive.Dispose() }
$size = [math]::Round((Get-Item $zip).Length / 1MB, 2)
Write-Output "Zip OK: $zip ($count files, $size MB)"
