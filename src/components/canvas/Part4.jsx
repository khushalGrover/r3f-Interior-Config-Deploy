

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
// import { useCustomization } from '../../constants/Customization'

export function Part4(props) {
  const { nodes, materials } = useGLTF('./models2/part-4.gltf')
  // const { codeOBJ } = userCustomization()

  return (
		<group {...props} dispose={null}>
			<group
				position={[21.172, 4.839, -16.517]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			>
				<mesh
					geometry={nodes.Material2363.geometry}
					material={materials.Color_008}
				/>
				<mesh
					geometry={nodes.Material2363_1.geometry}
					material={materials.PDM_Leather_BandB_AC_Lounge_2_18}
				/>
				<mesh
					geometry={nodes.Material2363_2.geometry}
					material={materials.Oak_2}
				/>
				<mesh
					geometry={nodes.Material2363_3.geometry}
					material={materials.material_12}
				/>
			</group>
			<group
				position={[21.78, 4.942, -18.168]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			>
				<mesh
					geometry={nodes.Material2364.geometry}
					material={materials.material}
				/>
				<mesh
					geometry={nodes.Material2364_1.geometry}
					material={materials.Color_008}
				/>
			</group>
			<mesh
				geometry={nodes.Material2282.geometry}
				material={materials.material}
				position={[20.761, 4.76, -17.982]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			/>
			<mesh
				geometry={nodes.Material2287.geometry}
				material={materials.material}
				position={[20.817, 4.744, -17.984]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			/>
			<group
				position={[20.693, 4.636, -18.006]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			>
				<mesh
					geometry={nodes.Material2369.geometry}
					material={materials.Charred_Timber_11}
				/>
				<mesh
					geometry={nodes.Material2369_1.geometry}
					material={materials.material_12}
				/>
			</group>
			<group
				position={[19.85, 4.865, -17.547]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			>
				<mesh
					geometry={nodes.Material2174_1.geometry}
					material={materials.AAAA}
				/>
				<mesh
					geometry={nodes.Material2174_2.geometry}
					material={materials.Corduroy}
				/>
				<mesh
					geometry={nodes.Material2174_3.geometry}
					material={materials.Corduroy_17}
				/>
				<mesh
					geometry={nodes.Material2174_4.geometry}
					material={materials.Geometric_Natural_Jacquard}
				/>
			</group>
			<mesh
				geometry={nodes.Material2180.geometry}
				material={materials.material_15_19}
				position={[20.682, 6.302, -18.77]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			/>
			<mesh
				geometry={nodes.Material2173.geometry}
				material={materials.material_12}
				position={[20.686, 4.933, -18.643]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			/>
			<group
				position={[20.839, 4.499, -17.622]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			>
				<mesh
					geometry={nodes.Material2378.geometry}
					material={
						materials[
							"Camel___Ivory_Rug__Labyrinth__-_Jonathan_Adler"
						]
					}
				/>
				<mesh
					geometry={nodes.Material2378_1.geometry}
					material={materials.Dense_Rattan}
				/>
			</group>
			<mesh
				geometry={nodes.Material2293.geometry}
				material={materials.material_12}
				position={[20.773, 6.308, -18.746]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			/>
			<mesh
				geometry={nodes.Material2294.geometry}
				material={materials.Color_008}
				position={[21.037, 6.942, -18.625]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			/>
			<mesh
				geometry={nodes.Material2296.geometry}
				material={materials.Concrete_and_Wood_02}
				position={[19.281, 6.11, -17.583]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			/>
			<group
				position={[19.287, 6.112, -17.58]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			>
				<mesh
					geometry={nodes.Material2388.geometry}
					material={materials.Color_008}
				/>
				<mesh
					geometry={nodes.Material2388_1.geometry}
					material={materials.material}
				/>
			</group>
			<group
				position={[22.788, 5.355, -18.483]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			>
				<mesh
					geometry={nodes.Material2355.geometry}
					material={materials.material}
				/>
				<mesh
					geometry={nodes.Material2355_1.geometry}
					material={materials.zand1}
				/>
				<mesh
					geometry={nodes.Material2355_2.geometry}
					material={materials.blad1}
				/>
				<mesh
					geometry={nodes.Material2355_3.geometry}
					material={materials.blad2}
				/>
			</group>
			<group
				position={[23.567, 3.651, -13.696]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			>
				<mesh
					geometry={nodes.Material2345.geometry}
					material={materials.blad1}
				/>
				<mesh
					geometry={nodes.Material2345_1.geometry}
					material={materials.blad2}
				/>
			</group>
			<group
				position={[22.889, 4.839, -14.358]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			>
				<mesh
					geometry={nodes.Material2354.geometry}
					material={materials.Color_008}
				/>
				<mesh
					geometry={nodes.Material2354_1.geometry}
					material={materials.PDM_Leather_BandB_AC_Lounge_2_18}
				/>
				<mesh
					geometry={nodes.Material2354_2.geometry}
					material={materials.Oak_2}
				/>
				<mesh
					geometry={nodes.Material2354_3.geometry}
					material={materials.material_12}
				/>
			</group>
			<mesh
				geometry={nodes.Material2274.geometry}
				material={materials.material}
				position={[23.974, 4.674, -14.019]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			/>
			<mesh
				geometry={nodes.Material2163.geometry}
				material={materials.Pale_lancelot_oak_PBR}
				position={[24.013, 4.694, -14.594]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			/>
			<mesh
				geometry={nodes.Material2273.geometry}
				material={materials.material}
				position={[23.865, 4.99, -14.534]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			/>
			<mesh
				geometry={nodes.Material2162.geometry}
				material={materials.zand1}
				position={[23.4, 3.968, -13.604]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			/>
			<mesh
				geometry={nodes.Material4001.geometry}
				material={materials.Oak_20}
				position={[23.188, 4.845, -14.274]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			/>
			<group
				position={[23.309, 4.514, -14.613]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			>
				<mesh
					geometry={nodes.Material2350.geometry}
					material={materials.Persian_Rug_blue}
				/>
				<mesh
					geometry={nodes.Material2350_1.geometry}
					material={materials.Dense_Rattan}
				/>
			</group>
			<mesh
				geometry={nodes.Material2001.geometry}
				material={materials.Concrete_and_Wood}
				position={[19.281, 6.11, -14.654]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			/>
			<group
				position={[19.287, 6.111, -14.651]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			>
				<mesh
					geometry={nodes.Material2025.geometry}
					material={materials.Color_008}
				/>
				<mesh
					geometry={nodes.Material2025_1.geometry}
					material={materials.material}
				/>
			</group>
			<mesh
				geometry={nodes.Material2118.geometry}
				material={materials.material}
				position={[19.274, 6.111, -14.651]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			/>
			<group
				position={[21.78, 4.942, -18.168]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			>
				<mesh
					geometry={nodes.Material2044.geometry}
					material={materials.material_50}
				/>
				<mesh
					geometry={nodes.Material2044_1.geometry}
					material={materials.White_Painted_Stone_Tall_Green}
				/>
				<mesh
					geometry={nodes.Material2044_2.geometry}
					material={materials.material}
				/>
				<mesh
					geometry={nodes.Material2044_3.geometry}
					material={materials["23_brushed_dark_steel_metal"]}
				/>
			</group>
			<mesh
				geometry={nodes.Material2102.geometry}
				material={materials.material}
				position={[23.309, 4.511, -14.613]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			/>
			<group
				position={[20.787, 4.704, -13.926]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			>
				<mesh
					geometry={nodes.Material2357.geometry}
					material={materials.Color_F19}
				/>
				<mesh
					geometry={nodes.Material2357_1.geometry}
					material={materials.material}
				/>
				<mesh
					geometry={nodes.Material2357_2.geometry}
					material={materials.Grass}
				/>
			</group>
			<mesh
				geometry={nodes.Material2249.geometry}
				material={materials.Plain_Natural_Blackout}
				position={[15.897, 5.118, -19.559]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			/>
			<mesh
				geometry={nodes.Material2211.geometry}
				material={materials.material}
				position={[15.339, 4.306, -19.161]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			/>
			<group
				position={[15.823, 5.964, -18.537]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			>
				<mesh
					geometry={nodes.Material2463.geometry}
					material={materials.material_47}
				/>
				<mesh
					geometry={nodes.Material2463_1.geometry}
					material={materials.material}
				/>
			</group>
			<mesh
				geometry={nodes.Material2056.geometry}
				material={materials.Plain_Natural_Blackout_Sheer}
				position={[14.802, 5.631, -17.887]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			/>
			<mesh
				geometry={nodes.Material2046.geometry}
				material={materials.Plain_Natural_Blackout_Sheer}
				position={[15.926, 5.674, -19.692]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			/>
			<group
				position={[15.912, 4.504, -17.825]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			>
				<mesh
					geometry={nodes.Material2462.geometry}
					material={
						materials[
							"Camel___Ivory_Rug__Labyrinth__-_Jonathan_Adler"
						]
					}
				/>
				<mesh
					geometry={nodes.Material2462_1.geometry}
					material={materials.Dense_Rattan}
				/>
			</group>
			<mesh
				geometry={nodes.Material2385.geometry}
				material={materials.material}
				position={[19.081, 6.003, -18.191]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			/>
			<mesh
				geometry={nodes.Material2209.geometry}
				material={materials["Andy_Burgess_-_02"]}
				position={[19.079, 6.001, -17.646]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			/>
			<mesh
				geometry={nodes.Material2208.geometry}
				material={materials["Andy_Burgess_-_01"]}
				position={[19.079, 6.001, -18.738]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			/>
			<mesh
				geometry={nodes.Material2386.geometry}
				material={materials.Color_008}
				position={[19.076, 6.003, -18.191]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			/>
			<group
				position={[18.989, 5.233, -18.191]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			>
				<mesh
					geometry={nodes.Material2471.geometry}
					material={materials.Translucent_Glass_Gray}
				/>
				<mesh
					geometry={nodes.Material2471_1.geometry}
					material={materials.material_47}
				/>
				<mesh
					geometry={nodes.Material2471_2.geometry}
					material={materials.Charred_Timber_11}
				/>
				<mesh
					geometry={nodes.Material2471_3.geometry}
					material={materials.Color_008}
				/>
			</group>
			<group
				position={[17.77, 5.599, -14.591]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			>
				<mesh
					geometry={nodes.Material2479.geometry}
					material={materials.Mirror_01}
				/>
				<mesh
					geometry={nodes.Material2479_1.geometry}
					material={
						materials["31_brushed_copper_metal_texture-seamless"]
					}
				/>
			</group>
			<group
				position={[17.694, 5.006, -14.817]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			>
				<mesh
					geometry={nodes.Material2480.geometry}
					material={materials.Color_008}
				/>
				<mesh
					geometry={nodes.Material2480_1.geometry}
					material={
						materials["40_black_portoro_gold_pbr_texture-seamless"]
					}
				/>
			</group>
			<group
				position={[15.878, 6.105, -14.622]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			>
				<mesh
					geometry={nodes.Material2311.geometry}
					material={materials.material}
				/>
				<mesh
					geometry={nodes.Material2311_1.geometry}
					material={materials.Color_F19}
				/>
			</group>
			<group
				position={[15.713, 5.613, -14.526]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			>
				<mesh
					geometry={nodes.Material2313.geometry}
					material={materials.Color_008}
				/>
				<mesh
					geometry={nodes.Material2313_1.geometry}
					material={materials["Smart-TV-Menu"]}
				/>
				<mesh
					geometry={nodes.Material2313_2.geometry}
					material={materials.Color_M07}
				/>
				<mesh
					geometry={nodes.Material2313_3.geometry}
					material={materials.Translucent_Glass_Gray}
				/>
			</group>
			<mesh
				geometry={nodes.Material2008.geometry}
				material={materials.material}
				position={[17.549, 5.021, -16.657]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			/>
			<group
				position={[15.596, 5.165, -14.65]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			>
				<mesh
					geometry={nodes.Material2495.geometry}
					material={materials.material_47}
				/>
				<mesh
					geometry={nodes.Material2495_1.geometry}
					material={materials.Charred_Timber_11}
				/>
				<mesh
					geometry={nodes.Material2495_2.geometry}
					material={materials.Translucent_Glass_Gray}
				/>
				<mesh
					geometry={nodes.Material2495_3.geometry}
					material={materials.material}
				/>
				<mesh
					geometry={nodes.Material2495_4.geometry}
					material={materials.Color_008}
				/>
			</group>
			<group
				position={[14.38, 6.127, -19.629]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			>
				<mesh
					geometry={nodes.Material2502.geometry}
					material={
						materials["26_old_dirty_copper_metal_texture-seamless"]
					}
				/>
				<mesh
					geometry={nodes.Material2502_1.geometry}
					material={materials.Translucent_Glass_Gray}
				/>
			</group>
			<group
				position={[17.4, 6.127, -19.629]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			>
				<mesh
					geometry={nodes.Material2503.geometry}
					material={
						materials["26_old_dirty_copper_metal_texture-seamless"]
					}
				/>
				<mesh
					geometry={nodes.Material2503_1.geometry}
					material={materials.E27_3D_Emissive_White1}
				/>
			</group>
			<group
				position={[17.6, 4.878, -14.944]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			>
				<mesh
					geometry={nodes.Material2508.geometry}
					material={materials.Color_008}
				/>
				<mesh
					geometry={nodes.Material2508_1.geometry}
					material={materials.Plain_Natural_Blackout}
				/>
			</group>
			<mesh
				geometry={nodes.Material2392.geometry}
				material={materials.material_47}
				position={[15.732, 6.176, -14.571]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			/>
			<group
				position={[15.823, 5.964, -18.537]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			>
				<mesh
					geometry={nodes.Material2514.geometry}
					material={materials.material}
				/>
				<mesh
					geometry={nodes.Material2514_1.geometry}
					material={materials.material_12}
				/>
				<mesh
					geometry={nodes.Material2514_2.geometry}
					material={materials.E27_3D_Emissive_White1}
				/>
			</group>
			<mesh
				geometry={nodes.Material2142.geometry}
				material={materials.E27_3D_Emissive_White1}
				position={[16.82, 4.004, -15.47]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			/>
			<mesh
				geometry={nodes.Material2373.geometry}
				material={materials.material}
				position={[15.896, 6.57, -18.624]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			/>
			<mesh
				geometry={nodes.Material2145.geometry}
				material={materials.Translucent_Glass_Gray}
				position={[18.357, 5.852, -16.09]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.021}
			/>
		</group>
	);
}

useGLTF.preload('./models2/part-4.gltf')
