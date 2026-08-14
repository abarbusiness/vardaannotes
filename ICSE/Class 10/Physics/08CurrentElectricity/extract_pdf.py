import sys

pdf_path = r"c:\Users\Ankit Raj Sharma\Desktop\VARDAAN NOTES\vardaannotes\ICSE\Class 10\Physics\08CurrentElectricity\Chapter 08 Current Electricity.pdf"
out_path = r"c:\Users\Ankit Raj Sharma\Desktop\VARDAAN NOTES\vardaannotes\ICSE\Class 10\Physics\08CurrentElectricity\pdf_extracted_text.txt"

text = ""
try:
    import pypdf
    reader = pypdf.PdfReader(pdf_path)
    for i, page in enumerate(reader.pages):
        text += f"\n=== PAGE {i+1} ===\n" + page.extract_text()
except Exception as e:
    text += f"Error with pypdf: {e}\n"
    try:
        import pdfplumber
        with pdfplumber.open(pdf_path) as pdf:
            for i, page in enumerate(pdf.pages):
                text += f"\n=== PAGE {i+1} ===\n" + page.extract_text()
    except Exception as e2:
        text += f"Error with pdfplumber: {e2}\n"

with open(out_path, "w", encoding="utf-8") as f:
    f.write(text)

print("Saved to", out_path)
