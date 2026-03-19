import os
import re

filepath = r"c:\Users\Ankit Raj Sharma\Desktop\VARDAAN NOTES\vardaannotes\ICSE\Class 10\Chemistry\02ChemicalBonding\ChapterNotes.html"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

css_new = """    <style>
        /* --- CSS VARIABLES & THEME --- */
        :root {
            --paper-bg: #ffffff;
            --ink-color: #000000;
            --accent-color: #000000;
            --yellow-bg: #fffde7;
            --yellow-border: #fdd835;
            --green-bg: #e8f5e9;
            --green-border: #43a047;
            --blue-bg: #e3f2fd;
            --blue-border: #1e88e5;
            --pink-bg: #fce4ec;
            --pink-border: #d81b60;
            --red-border: #d32f2f;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
        }

        body {
            background-color: var(--paper-bg);
            color: var(--ink-color);
            font-family: 'Outfit', sans-serif;
            line-height: 1.6;
            min-height: 100vh;
            position: relative;
        }

        html, body { overflow-x: hidden; width: 100%; }
        html { transition: filter 0.3s ease; }
        html.dark-mode { filter: invert(1) hue-rotate(180deg); }
        html.dark-mode img:not(.watermark-image), 
        html.dark-mode .video-container, html.dark-mode .formula-box,
        html.dark-mode .practice-box, html.dark-mode .img-placeholder { filter: invert(1) hue-rotate(180deg) !important; }

        .watermark-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; pointer-events: none; z-index: 9999; }
        .watermark-image { width: 600px; max-width: 80%; height: auto; opacity: 0.05; transition: opacity 0.3s ease; }
        html.dark-mode .watermark-image { opacity: 0.08 !important; }

        .paper-sheet { background-color: var(--paper-bg); width: 210mm; max-width: 100%; margin: 0 auto; padding: 20mm; position: relative; z-index: 10; }
        @media screen and (max-width: 800px) { .paper-sheet { width: 95%; margin: 10px auto; padding: 15px; } }

        .theme-toggle { position: absolute; top: 20px; right: 20px; width: 44px; height: 44px; border-radius: 50%; background: #f0f0f0; border: none; cursor: pointer; z-index: 1000; display: flex; align-items: center; justify-content: center; overflow: hidden; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); }
        html.dark-mode .theme-toggle { filter: invert(1) hue-rotate(180deg); background: #e0e0e0; }
        .icon-sun, .icon-moon { position: absolute; }
        .icon-sun { opacity: 0; transform: scale(0.5) rotate(-90deg); }
        html.dark-mode .icon-moon { opacity: 0; transform: scale(0.5) rotate(90deg); }
        html.dark-mode .icon-sun { opacity: 1; transform: scale(1) rotate(0deg); }

        h1 { font-size: 3.5rem; font-weight: 800; margin-bottom: 0.5rem; letter-spacing: -2px; text-align: center; color: #000; }
        h2 { font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem; border-bottom: 2px solid var(--ink-color); padding-bottom: 0.5rem; }
        h3 { font-size: 1.2rem; font-weight: 500; margin-top: 1.5rem; margin-bottom: 0.5rem; }
        p, li { color: #333; margin-bottom: 1rem; font-size: 1.1rem; }
        ul, ol { margin-bottom: 1rem; padding-left: 25px; }

        table { width: 100%; border-collapse: collapse; margin: 2rem 0; font-size: 1rem; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        th, td { border: 1px solid #e0e0e0; padding: 10px 12px; text-align: center; vertical-align: middle; }
        th { background: #b71c1c; color: white; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; border: 1px solid #b71c1c; }
        tr:nth-child(even) { background-color: #fafafa; }
        tr:hover { background-color: #ffebee; }

        /* Components */
        .syllabus-box { background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0; }
        .syllabus-header { font-weight: 700; text-transform: uppercase; font-size: 0.8rem; color: #64748b; display: block; margin-bottom: 0.5rem; }
        
        .formula-box { border: 2px solid #000; box-shadow: 4px 4px 0px #000; padding: 1.5rem; padding-top: 1.8rem; margin: 2rem 0; position: relative; background-color: #fff; text-align: center; }
        .formula-pill { position: absolute; top: -12px; right: 20px; background: #000; color: #fff; padding: 2px 10px; font-size: 0.75rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }
        
        .master-tip { border: 2px dashed var(--red-border); background-color: #fffaf0; padding: 1rem; margin: 1.5rem 0; border-radius: 8px; font-style: italic; }
        .tip-header { font-weight: 700; color: var(--red-border); font-style: normal; display: block; margin-bottom: 0.5rem; }
        
        .concept-green { background-color: var(--green-bg); padding: 1rem; margin-bottom: 1rem; border-radius: 4px; }
        .concept-blue { background-color: var(--blue-bg); padding: 1rem; margin-bottom: 1rem; border-radius: 4px; }
        .concept-pink { background-color: var(--pink-bg); padding: 1rem; margin-bottom: 1rem; border-radius: 4px; }
        
        .img-placeholder-container { margin: 2rem 0; text-align: center; }
        .img-placeholder { width: 100%; height: auto; min-height: 20px; background-color: transparent; border: none; display: flex; align-items: center; justify-content: center; flex-direction: column; padding: 10px 0; text-align: center; overflow: hidden; }
        .img-placeholder img { max-width: 70%; height: auto; display: block; border-radius: 8px; margin: 0 auto; }
        .img-caption { margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic; }
        
        .practice-box { background-color: #fff8e1; border: 2px solid #ff6f00; border-radius: 8px; padding: 1.5rem; margin: 2rem 0; box-shadow: 4px 4px 0 rgba(255, 111, 0, 0.2); }
        .practice-header { font-weight: 700; color: #d35400; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 1px; margin-bottom: 0.5rem; display: block; border-bottom: 1px dashed #d35400; padding-bottom: 5px; }
        .q-tag { background: #d35400; color: #fff; padding: 2px 6px; border-radius: 4px; font-size: 0.75rem; margin-right: 5px; vertical-align: middle; }
        
        /* Specific for questions */
        .question { margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #ffe0b2; }
        .question:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
        .header-branding { text-align: center; margin-bottom: 2rem; }
        .header-sub { color: #64748b; font-size: 1rem; font-weight: 500; display: block; margin-bottom: 0.5rem; }
        .header-team { font-size: 0.9rem; color: #94a3b8; display: block; }
        .header-comet { font-size: 0.75rem; color: #cbd5e1; text-transform: uppercase; letter-spacing: 2px; margin-top: 0.5rem; display: block; }
        .text-highlight { font-weight: 700; color: #d32f2f; }
        mjx-container { overflow: visible !important; max-width: 100% !important; }
        
        @media print { .paper-sheet { width: 100%; border: none; padding: 0; box-shadow: none; } .theme-toggle { display: none; } }
    </style>"""

content = re.sub(r'<style>.*?</style>', css_new, content, flags=re.DOTALL)

header_old = """<h1>Chemical Bonding</h1>
        <p style="text-align:center;color:#616161;margin-bottom:3rem;font-weight:600;font-size:1.2rem;letter-spacing:2px;text-transform:uppercase;">ICSE Class 10 Chemistry • Chapter 02</p>"""
header_new = """<div class="header-branding">
            <h1>Chemical Bonding</h1>
            <span class="header-sub">ICSE Class 10 Chemistry • Chapter 02</span>
            <span class="header-team">Created by Team Vardaan with ❤️</span>
            <span class="header-comet">Powered by vardaan comet</span>
        </div>"""
content = content.replace(header_old, header_new)

content = content.replace('<div class="note-box" style="background:#f3e5f5; border-left-color:#8e24aa;">', '<div class="syllabus-box">')
content = content.replace('<p><strong>SYLLABUS OVERVIEW:</strong></p>', '<span class="syllabus-header">SYLLABUS OVERVIEW:</span>')
content = content.replace('class="definition-box"', 'class="concept-green"')
content = content.replace('class="rule-box"', 'class="concept-blue"')
content = content.replace('class="exception-box"', 'class="concept-pink"')
content = content.replace('class="note-box"', 'class="master-tip"')
content = content.replace('class="master-tip" style="background:#e8f5e9; border-left-color:#2e7d32;"', 'class="master-tip"')

content = re.sub(r'<div class="figure-placeholder">\s*<div class="figure-title">(.*?)</div>\s*<div class="image-prompt">(.*?)</div>\s*</div>',
    r'''<div class="img-placeholder-container">
            <div class="img-placeholder">
                <p><em>[\1]</em></p>
            </div>
            <p class="img-caption">\2</p>
        </div>''', content, flags=re.DOTALL)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updates applied.")
