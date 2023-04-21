<script>
	import { T } from '@threlte/core'
	export let s, scale

	import { Environment, GLTF, OrbitControls } from '@threlte/extras'
</script>

<T.PerspectiveCamera makeDefault position={[5, 2, 5]} fov={25}>
	<OrbitControls autoRotate enableDamping />
</T.PerspectiveCamera>
<T.AmbientLight />
<GLTF url="/sveltelogo.glb" scale={$scale} />
