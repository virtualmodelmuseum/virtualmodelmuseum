$ErrorActionPreference = "Stop"

$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $Root

$IndexPath = Join-Path $Root "index.html"
$CssSource = Join-Path $Root "_seo_model_links\assets\internal-model-links.css"
$SnippetPath = Join-Path $Root "_seo_model_links\model-links-snippet.html"
$CssDestDir = Join-Path $Root "assets"
$CssDest = Join-Path $CssDestDir "internal-model-links.css"

function Read-Utf8($Path) {
  return [System.IO.File]::ReadAllText($Path, [System.Text.Encoding]::UTF8)
}

function Write-Utf8($Path, $Text) {
  $Utf8NoBom = New-Object System.Text.UTF8Encoding($false)
  [System.IO.File]::WriteAllText($Path, $Text, $Utf8NoBom)
}

if (!(Test-Path $IndexPath)) {
  Write-Host ""
  Write-Host "ERRORE: non trovo index.html in questa cartella." -ForegroundColor Red
  Write-Host "Esegui questo file nella cartella principale del sito."
  Write-Host ""
  Read-Host "Premi Invio per uscire"
  exit 1
}

if (!(Test-Path $CssSource) -or !(Test-Path $SnippetPath)) {
  Write-Host ""
  Write-Host "ERRORE: manca la cartella _seo_model_links." -ForegroundColor Red
  Write-Host "Copia anche la cartella _seo_model_links nella cartella principale del sito."
  Write-Host ""
  Read-Host "Premi Invio per uscire"
  exit 1
}

New-Item -ItemType Directory -Force -Path $CssDestDir | Out-Null
Copy-Item $CssSource $CssDest -Force

$Stamp = Get-Date -Format "yyyyMMdd_HHmmss"
Copy-Item $IndexPath "$IndexPath.bak_model_links_$Stamp" -Force

$Index = Read-Utf8 $IndexPath
$Snippet = Read-Utf8 $SnippetPath

# Add CSS link in head if missing
if ($Index -notmatch 'assets/internal-model-links\.css') {
  $Index = [regex]::Replace(
    $Index,
    '(?is)</head>',
    '  <link rel="stylesheet" href="assets/internal-model-links.css">' + "`r`n" + '</head>',
    1
  )
}

# Remove previous version of the block if present
$Index = [regex]::Replace(
  $Index,
  '(?is)\s*<!-- VMM INTERNAL MODEL LINKS START -->.*?<!-- VMM INTERNAL MODEL LINKS END -->\s*',
  "`r`n",
  1
)

# Insert before the closing body
$Index = [regex]::Replace(
  $Index,
  '(?is)</body>',
  $Snippet + "`r`n" + '</body>',
  1
)

Write-Utf8 $IndexPath $Index

Write-Host ""
Write-Host "FATTO: aggiunti link interni a tutte le pagine modello." -ForegroundColor Green
Write-Host "Ora apri index.html e scorri in fondo alla home per controllare il nuovo blocco."
Write-Host "Poi fai commit e push con GitHub Desktop."
Write-Host ""
Read-Host "Premi Invio per uscire"
