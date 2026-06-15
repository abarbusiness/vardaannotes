# PowerShell script to replace Comic Sans font-family with Montserrat across all HTML files
Get-ChildItem -Path '.' -Recurse -Filter *.html | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $new = $content -replace "font-family: 'Comic Sans MS', 'Comic Sans', cursive;", "font-family: 'Montserrat', sans-serif;"
    Set-Content $_.FullName -Value $new
}
