# Virtual Model Museum - Strong SEO homepage link patch
$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$IndexPath = Join-Path $Root "index.html"
$StylePath = Join-Path $Root "assets\style.css"

function Read-Utf8($Path) { return [System.IO.File]::ReadAllText($Path, [System.Text.Encoding]::UTF8) }
function Write-Utf8($Path, $Text) {
  $Utf8NoBom = New-Object System.Text.UTF8Encoding($false)
  [System.IO.File]::WriteAllText($Path, $Text, $Utf8NoBom)
}

if (!(Test-Path $IndexPath)) {
  Write-Host "ERROR: index.html not found. Put this update in the main site folder." -ForegroundColor Red
  exit 1
}

$Stamp = Get-Date -Format "yyyyMMdd_HHmmss"
Copy-Item $IndexPath "$IndexPath.bak_strong_seo_$Stamp"

$Index = Read-Utf8 $IndexPath

if ($Index -notmatch 'rel=["'']sitemap["'']') {
  $HeadBlock = @"
  <!-- VMM STRONG SEO HEAD START -->
  <link rel="sitemap" type="application/xml" href="/virtualmodelmuseum/sitemap.xml">
  <meta name="googlebot" content="index, follow, max-image-preview:large">
  <!-- VMM STRONG SEO HEAD END -->
"@
  $Index = [regex]::Replace($Index, '(?is)</head>', $HeadBlock + "`r`n</head>", 1)
}

if ($Index -notmatch 'VMM STRONG SEO LINKS START') {
  $LinksBlock = @"
  <!-- VMM STRONG SEO LINKS START -->
  <nav class="seo-footer-links" aria-label="Indexed model pages">
    <a href="models/">All model pages</a>
    <a href="categories/aircraft/">Aircraft</a>
    <a href="categories/cars/">Cars</a>
    <a href="categories/military-vehicles/">Military vehicles</a>
    <a href="categories/ships/">Ships</a>
    <a href="categories/motorcycles/">Motorcycles</a>
  </nav>
  <!-- VMM STRONG SEO LINKS END -->
"@
  $Index = [regex]::Replace($Index, '(?is)</body>', $LinksBlock + "`r`n</body>", 1)
}

Write-Utf8 $IndexPath $Index

if (Test-Path $StylePath) {
  $Style = Read-Utf8 $StylePath
  if ($Style -notmatch 'VMM strong SEO footer links') {
    $Css = @"

/* VMM strong SEO footer links */
.seo-footer-links{
  max-width:1180px;
  margin:0 auto 2.2rem;
  padding:0 1.25rem 1.5rem;
  display:flex;
  gap:.55rem;
  flex-wrap:wrap;
  color:var(--muted);
}
.seo-footer-links a{
  border:1px solid var(--line);
  border-radius:999px;
  padding:.42rem .65rem;
  text-decoration:none;
  background:rgba(36,39,46,.72);
  color:inherit;
}
.seo-footer-links a:hover{filter:brightness(1.12)}
"@
    Write-Utf8 $StylePath ($Style.TrimEnd() + "`r`n" + $Css + "`r`n")
  }
}

Write-Host ""
Write-Host "Strong SEO homepage links applied." -ForegroundColor Green
Write-Host "Next: commit and push with GitHub Desktop."
Read-Host "Press Enter to close"
