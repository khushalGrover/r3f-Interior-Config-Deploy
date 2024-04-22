
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useCustomization } from "../../constants/Customization";
export function Part3(props) {
	const { nodes, materials } = useGLTF("./models2/part-3.gltf");
	const { codeOBJ } = useCustomization();

	return (
		<group {...props} dispose={null}>
			<group
				position={[20.104, 2.204, -20.289]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			>
				<mesh
					geometry={nodes.Material2190.geometry}
					material={materials.sehpa_mermer__marble}
				/>
				<mesh
					geometry={nodes.Material2190_1.geometry}
					material={materials.material_12}
				/>
				<mesh
					geometry={nodes.Material2190_2.geometry}
					material={materials["23_brushed_dark_steel_metal"]}
				/>
				<mesh
					geometry={nodes.Material2190_3.geometry}
					material={
						materials["16_Terrazzo_surface_PBR_texture-seamless"]
					}
				/>
				<mesh
					geometry={nodes.Material2190_4.geometry}
					material={materials.material}
				/>
			</group>
			<group
				position={[20.48, 2.695, -21.879]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			>
				<mesh
					geometry={nodes.Material2256.geometry}
					material={
						materials["16_Terrazzo_surface_PBR_texture-seamless"]
					}
				/>
				<mesh
					geometry={nodes.Material2256_1.geometry}
					material={materials.material}
				/>
				<mesh
					geometry={nodes.Material2256_2.geometry}
					material={materials.Translucent_Glass_Gray}
				/>
				<mesh
					geometry={nodes.Material2256_3.geometry}
					material={materials["23_brushed_dark_steel_metal"]}
				/>
				<mesh
					geometry={nodes.Material2256_4.geometry}
					material={
						materials["31_brushed_copper_metal_texture-seamless"]
					}
				/>
				<mesh
					geometry={nodes.Material2256_5.geometry}
					material={materials.brushed_aluminium}
				/>
				<mesh
					geometry={nodes.Material2256_6.geometry}
					material={
						materials["31_brushed_copper_metal_texture-seamless_6"]
					}
				/>
				<mesh
					geometry={nodes.Material2256_7.geometry}
					material={materials.sehpa_mermer__marble}
				/>
				<mesh
					geometry={nodes.Material2256_8.geometry}
					material={materials.material_12}
				/>
			</group>
			<group
				// chair-A
				visible={codeOBJ["ktChair"] === 1}
				position={[20.138, 2.148, -18.874]}
				rotation={[-Math.PI / 2, 0, -0.281]}
				scale={0.021}
			>
				<mesh
					geometry={nodes.Material2187.geometry}
					material={materials["23_brushed_dark_steel_metal"]}
				/>
				<mesh
					geometry={nodes.Material2187_1.geometry}
					material={materials.material_12}
				/>
				<mesh
					geometry={nodes.Material2187_2.geometry}
					material={
						materials["31_brushed_copper_metal_texture-seamless"]
					}
				/>
				<mesh
					geometry={nodes.Material2187_3.geometry}
					material={materials.material}
				/>
			</group>
			<mesh
				visible={codeOBJ["ktChair"] === 2}
				geometry={nodes["k-Chair-B"].geometry}
				material={materials.Lamed_chair}
				position={[20.154, 2.234, -18.731]}
				rotation={[Math.PI, -0.35, Math.PI]}
			/>
			<group
				visible={codeOBJ["D"] === 4}
				position={[20.09, 2.827, -19.883]}
				rotation={[0, 1.571, 0]}
				scale={0.01}
			>
				<mesh
					geometry={nodes.pipa4_material_2_0001.geometry}
					material={materials["metal.001"]}
				/>
				<mesh
					geometry={nodes.pipa4_material_2_0001_1.geometry}
					material={materials["rubber.001"]}
				/>
			</group>
			<mesh
				geometry={nodes["k-Tap002"].geometry}
				material={materials["metal.001"]}
				position={[20.072, 2.711, -19.861]}
				rotation={[0, 1.571, 0]}
				scale={0.01}
				visible={codeOBJ["D"] === 2}
			/>
			<mesh
				geometry={nodes["k-Tap003"].geometry}
				material={materials["metal.001"]}
				position={[20.063, 2.702, -19.841]}
				rotation={[0, 1.571, 0]}
				scale={0.01}
				visible={codeOBJ["D"] === 1}
			/>
			<group
				position={[20.084, 2.672, -19.85]}
				rotation={[0, 1.571, 0]}
				scale={0.01}
				visible={codeOBJ["D"] === 6}
			>
				<mesh
					geometry={nodes.pipa7_material3_0001.geometry}
					material={materials["metal.001"]}
				/>
				<mesh
					geometry={nodes.pipa7_material3_0001_1.geometry}
					material={materials["rubber.001"]}
				/>
			</group>
			<mesh
				geometry={nodes["k-Tap004"].geometry}
				material={materials["metal.001"]}
				position={[20.073, 2.701, -19.87]}
				rotation={[0, 1.571, 0]}
				scale={0.01}
				visible={codeOBJ["D"] === 7}
			/>
			<mesh
				geometry={nodes["k-Tap006"].geometry}
				material={materials["metal.001"]}
				position={[20.089, 2.688, -19.888]}
				rotation={[0, 1.571, 0]}
				scale={0.01}
				visible={codeOBJ["D"] === 3}
			/>
			<mesh
				geometry={nodes["k-Tap001"].geometry}
				material={materials["metal.001"]}
				position={[20.099, 2.744, -19.866]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
				visible={codeOBJ["D"] === 5}
			/>
			<group
				position={[20.108, 3.433, -19.59]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
				visible={codeOBJ["F"] === 3}
			>
				<mesh
					geometry={nodes.Material2263.geometry}
					material={materials.Translucent_Glass_Gray}
				/>
				<mesh
					geometry={nodes.Material2263_1.geometry}
					material={
						materials["26_old_dirty_copper_metal_texture-seamless"]
					}
				/>
				<mesh
					geometry={nodes.Material2263_2.geometry}
					material={materials.Color_M07}
				/>
			</group>
			<group
				position={[20.108, 3.485, -19.588]}
				visible={codeOBJ["F"] === 1}
			>
				<mesh
					geometry={nodes.Circle001.geometry}
					material={materials["Car plastic dark"]}
				/>
				<mesh
					geometry={nodes.Circle001_1.geometry}
					material={materials["filament_Light "]}
				/>
				<mesh
					geometry={nodes.Circle001_2.geometry}
					material={materials["metal.002"]}
				/>
				<mesh
					geometry={nodes.Circle001_3.geometry}
					material={materials.Steel}
				/>
				<mesh
					geometry={nodes.Circle001_4.geometry}
					material={materials.Glass}
				/>
			</group>
			<group
				position={[20.094, 3.491, -19.588]}
				visible={codeOBJ["F"] === 2}
				scale={0.001}
			>
				<mesh
					geometry={nodes.Mesh154.geometry}
					material={materials["tepa.001"]}
				/>
				<mesh
					geometry={nodes.Mesh154_1.geometry}
					material={materials["xlor up.001"]}
				/>
				<mesh
					geometry={nodes.Mesh154_2.geometry}
					material={materials["lampa.001"]}
				/>
				<mesh
					geometry={nodes.Mesh154_3.geometry}
					material={materials["xrom.001"]}
				/>
				<mesh
					geometry={nodes.Mesh154_4.geometry}
					material={materials["Material #29.001"]}
				/>
				<mesh
					geometry={nodes.Mesh154_5.geometry}
					material={materials["Material #30.001"]}
				/>
				<mesh
					geometry={nodes.Mesh154_6.geometry}
					material={materials["simi.001"]}
				/>
				<mesh
					geometry={nodes.Mesh154_7.geometry}
					material={materials["01 wood.001"]}
				/>
				<mesh
					geometry={nodes.Mesh154_8.geometry}
					material={materials["01.001"]}
				/>
				<mesh
					geometry={nodes.Mesh154_9.geometry}
					material={materials["02 wood.001"]}
				/>
				<mesh
					geometry={nodes.Mesh154_10.geometry}
					material={materials["02.001"]}
				/>
				<mesh
					geometry={nodes.Mesh154_11.geometry}
					material={materials["03 wood.001"]}
				/>
				<mesh
					geometry={nodes.Mesh154_12.geometry}
					material={materials["03.001"]}
				/>
			</group>
			<group
				position={[28.932, 2.084, -15.55]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			>
				<mesh
					geometry={nodes.Material2183.geometry}
					material={materials.Pale_lancelot_oak_PBR}
				/>
				<mesh
					geometry={nodes.Material2183_1.geometry}
					material={materials.material_12}
				/>
			</group>
			<group
				position={[28.951, 2.193, -15.583]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			>
				<mesh
					geometry={nodes.Material2192.geometry}
					material={materials.Pale_lancelot_oak_PBR}
				/>
				<mesh
					geometry={nodes.Material2192_1.geometry}
					material={materials.PDM_Leather_BandB_AC_Lounge_2}
				/>
			</group>
			<mesh
				geometry={nodes["H-Pic-4"].geometry}
				material={materials.Summer_Evening}
				position={[31.7, 3.507, -16.106]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			/>
			<mesh
				geometry={nodes["H-Pic-2"].geometry}
				material={materials.House_With_A_Yellow_Seat}
				position={[31.7, 4.948, -16.106]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			/>
			<mesh
				geometry={nodes["H-Pic-1"].geometry}
				material={materials["Mid_Century_-_Fallingwater-final"]}
				position={[31.7, 4.948, -17.687]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			/>
			<mesh
				geometry={nodes["H-Pic-3"].geometry}
				material={materials["Mid_Century_-Paraty-House-Brazil"]}
				position={[31.7, 3.507, -17.687]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			/>
			<group
				position={[31.698, 4.255, -16.923]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			>
				<mesh
					geometry={nodes.Material2319.geometry}
					material={materials.material}
				/>
				<mesh
					geometry={nodes.Material2319_1.geometry}
					material={materials.Color_008}
				/>
			</group>
			<group
				position={[29.116, 1.853, -15.543]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			>
				<mesh
					geometry={nodes.Material2322.geometry}
					material={
						materials[
							"Camel___Ivory_Rug__Labyrinth__-_Jonathan_Adler"
						]
					}
				/>
				<mesh
					geometry={nodes.Material2322_1.geometry}
					material={materials.Dense_Rattan}
				/>
			</group>
			<group
				position={[22.899, 2.696, -13.442]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			>
				<mesh
					geometry={nodes.Material2210.geometry}
					material={materials.auto}
				/>
				<mesh
					geometry={nodes.Material2210_1.geometry}
					material={materials.blad1}
				/>
				<mesh
					geometry={nodes.Material2210_2.geometry}
					material={materials.blad2}
				/>
				<mesh
					geometry={nodes.Material2210_3.geometry}
					material={materials.zand1}
				/>
			</group>
			<group position={[29.003, 2.245, -15.618]}>
				<mesh
					geometry={nodes.Plane005.geometry}
					material={materials.Armchair}
				/>
				<mesh
					geometry={nodes.Plane005_1.geometry}
					material={materials.Black}
				/>
			</group>
			<group
				position={[24.428, 2.096, -9.852]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			>
				<mesh
					geometry={nodes.Material2033.geometry}
					material={materials.material}
				/>
				<mesh
					geometry={nodes.Material2033_1.geometry}
					material={materials.Color_008}
				/>
				<mesh
					geometry={nodes.Material2033_2.geometry}
					material={materials["Texture_2.jpeg"]}
				/>
				<mesh
					geometry={nodes.Material2033_3.geometry}
					material={materials.Translucent_Glass_Gray}
				/>
			</group>
			<group
				position={[29.845, 2.133, -9.627]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			>
				<mesh
					geometry={nodes.Material2043.geometry}
					material={materials.material}
				/>
				<mesh
					geometry={nodes.Material2043_1.geometry}
					material={materials["1_16"]}
				/>
				<mesh
					geometry={nodes.Material2043_2.geometry}
					material={materials.Plain_Natural_Blackout}
				/>
			</group>
		</group>
	);
}

useGLTF.preload("./models2/part-3.gltf");
