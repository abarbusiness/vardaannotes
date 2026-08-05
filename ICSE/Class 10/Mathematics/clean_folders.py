import os
import shutil

base_dir = os.path.dirname(os.path.abspath(__file__))

# Folder mapping: merge source into target and remove source
folder_mapping = {
    "01GST": "01ValueAddedTax",
    "03LinearInequations": "04LinearInequations",
    "04QuadraticEquations": "05QuadraticEquations",
    "05RatioandProportion": "07RatioAndProportion",
    "06Factorisation": "08RemainderAndFactorTheorems",
    "07Matrices": "09Matrices",
    "08ArithmeticGeometricProgression": "10ArithmeticProgression",
    "09CoordinateGeometry": "14EquationOfALine",
    "10Similarity": "15Similarity",
    "11Circles": "17Circles",
    "12Mensuration": "20CylinderConeAndSphere",
    "13Trigonometry": "21TrigonometricalIdentities",
    "14Statistics": "24MeasuresOfCentralTendency",
    "15Probability": "25Probability"
}

print("Starting Mathematics directory cleanup...")

for src_name, dst_name in folder_mapping.items():
    src_path = os.path.join(base_dir, src_name)
    dst_path = os.path.join(base_dir, dst_name)
    
    if not os.path.exists(src_path):
        continue
        
    os.makedirs(dst_path, exist_ok=True)
    
    # Copy any non-existing files to destination
    for root, dirs, files in os.walk(src_path):
        rel_path = os.path.relpath(root, src_path)
        target_dir = dst_path if rel_path == "." else os.path.join(dst_path, rel_path)
        os.makedirs(target_dir, exist_ok=True)
        
        for file_name in files:
            src_file = os.path.join(root, file_name)
            dst_file = os.path.join(target_dir, file_name)
            
            if file_name == "ChapterNotes.html":
                if os.path.exists(dst_file):
                    dst_size = os.path.getsize(dst_file)
                    src_size = os.path.getsize(src_file)
                    if dst_size < 500 and src_size >= 500:
                        shutil.copy2(src_file, dst_file)
                        print(f"[NOTE] Updated {dst_name}/ChapterNotes.html from {src_name}")
                else:
                    shutil.copy2(src_file, dst_file)
            else:
                if not os.path.exists(dst_file):
                    shutil.copy2(src_file, dst_file)
                    print(f"[FILE] Copied {file_name} to {dst_name}")

    # Remove the duplicate source directory
    try:
        shutil.rmtree(src_path)
        print(f"[SUCCESS] Removed old duplicate folder: {src_name}")
    except Exception as e:
        print(f"[ERROR] Could not remove {src_name}: {e}")

print("\nCleanup complete! Only the 25 official textbook chapter folders remain.")
