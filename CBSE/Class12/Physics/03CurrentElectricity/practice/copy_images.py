import os
import shutil

src_dir = r"C:\Users\Ankit Raj Sharma\.gemini\antigravity-ide\brain\241b3a48-f446-4845-8653-304f654ca98b"
dest_dir = r"c:\Users\Ankit Raj Sharma\Desktop\VARDAAN NOTES\vardaannotes\CBSE\Class12\Physics\03CurrentElectricity\practice\Images"

os.makedirs(dest_dir, exist_ok=True)

file_mapping = {
    "level0_cell_circuit_1783805000098.png": "Level0_Q33_CellCircuit.png",
    "level0_kirchhoff_junction_1783805008248.png": "Level0_Q38_KirchhoffJunction.png",
    "level0_wheatstone_bridge_1783805017216.png": "Level0_Q43_WheatstoneBridge.png",
    "level1_ohmic_graph_1783805025311.png": "Level1_Q7_OhmicGraph.png",
    "level1_semiconductor_1783805034035.png": "Level1_Q19_SemiconductorGraph.png",
    "level1_loop_rule_1783805042346.png": "Level1_Q38_LoopRule.png",
    "level1_metre_bridge_1783805051742.png": "Level1_Q44_MetreBridge.png",
    "level1_potentiometer_1783805059771.png": "Level1_Q49_PotentiometerEMF.png",
    "level2_vi_temp_1783805078238.png": "Level2_Q8_VITempGraph.png",
    "level2_resistivity_1783805086392.png": "Level2_Q19_ResistivityGraphs.png",
    "level2_cell_vi_1783805095307.png": "Level2_Q31_CellVIGraph.png",
    "level2_twoloop_1783805104068.png": "Level2_Q37_TwoLoopCircuit.png",
    "level2_metrebridge_1783805114821.png": "Level2_Q43_MetreBridgeShunt.png",
    "level2_potentiometer_int_1783805129812.png": "Level2_Q49_PotentiometerInternalRes.png",
    "level3_unbalanced_bridge_1783805139256.png": "Level3_Q3_UnbalancedBridge.png",
    "level3_truncated_cone_1783805147865.png": "Level3_Q11_TruncatedCone.png",
    "level3_adv_potentiometer_1783805156842.png": "Level3_Q21_AdvPotentiometer.png"
}

for src, dest in file_mapping.items():
    src_path = os.path.join(src_dir, src)
    dest_path = os.path.join(dest_dir, dest)
    if os.path.exists(src_path):
        shutil.copy2(src_path, dest_path)
        print(f"Copied {src} to {dest}")
    else:
        print(f"Warning: {src} not found in {src_dir}")
