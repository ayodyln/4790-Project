<script>
	// https://next.threlte.xyz/docs/learn/getting-started/your-first-scene
	import { T, useFrame } from '@threlte/core'
	import { interactivity } from '@threlte/extras'
	import { OrbitControls } from '@threlte/extras'
	import { Grid } from '@threlte/extras'

	export let s, scale

	interactivity()

	let rotation = 0
	useFrame((state, delta) => {
		rotation += delta
	})

	console.log(s)
</script>

<T.PerspectiveCamera
	makeDefault
	position={[10, 10, 10]}
	on:create={({ ref }) => {
		ref.lookAt(0, 1, 0)
	}}>
	<OrbitControls />
</T.PerspectiveCamera>

<T.DirectionalLight position={[3, 10, 7]} />

<T.Mesh
	rotation.y={rotation}
	position.y={1.5}
	scale={$scale}
	on:pointerenter={() => scale.set(1.5)}
	on:pointerleave={() => scale.set(1)}>
	<T.BoxGeometry args={[2, 2, 2]} />
	<T.MeshStandardMaterial color="#ff531a" />
</T.Mesh>

<Grid infiniteGrid />
