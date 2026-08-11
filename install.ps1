param(
    [Parameter(Position = 0)]
    [string]$Pet
)

$ErrorActionPreference = "Stop"
$Repository = "yeony-park/paws-on-codex"
$BaseUrl = if ($env:PAWS_ON_CODEX_BASE_URL) {
    $env:PAWS_ON_CODEX_BASE_URL.TrimEnd("/")
} else {
    "https://raw.githubusercontent.com/$Repository/main"
}
$AvailablePets = @("chapssari", "mandu")

if ($Pet -eq "--list") {
    Write-Output "chapssari`t찹쌀이"
    Write-Output "mandu`t만두"
    exit 0
}

if ([string]::IsNullOrWhiteSpace($Pet) -or $Pet -notin $AvailablePets) {
    Write-Error "Usage: install.ps1 <chapssari|mandu> or install.ps1 --list"
}

$CodexHome = if ($env:CODEX_HOME) {
    $env:CODEX_HOME
} else {
    Join-Path $HOME ".codex"
}
$PetDirectory = Join-Path (Join-Path $CodexHome "pets") $Pet
$TempDirectory = Join-Path ([System.IO.Path]::GetTempPath()) ("paws-on-codex-" + [guid]::NewGuid())

New-Item -ItemType Directory -Path $TempDirectory | Out-Null

try {
    $PetJson = Join-Path $TempDirectory "pet.json"
    $Spritesheet = Join-Path $TempDirectory "spritesheet.webp"

    Invoke-WebRequest -UseBasicParsing "$BaseUrl/pets/$Pet/pet.json" -OutFile $PetJson
    Invoke-WebRequest -UseBasicParsing "$BaseUrl/pets/$Pet/spritesheet.webp" -OutFile $Spritesheet

    New-Item -ItemType Directory -Force -Path $PetDirectory | Out-Null
    Copy-Item -Force $PetJson (Join-Path $PetDirectory "pet.json")
    Copy-Item -Force $Spritesheet (Join-Path $PetDirectory "spritesheet.webp")

    Write-Output "Installed $Pet to $PetDirectory"
    Write-Output "Refresh or restart Codex, then select your new pet."
} finally {
    Remove-Item -Recurse -Force $TempDirectory -ErrorAction SilentlyContinue
}
