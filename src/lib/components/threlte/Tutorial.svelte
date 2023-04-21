<script>
	import { T } from '@threlte/core'
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
	import * as Three from 'three'
	import * as Utils from 'three/src/math/MathUtils'
</script>

<!-- Camera -->
<T.PerspectiveCamera position={[1, 2, 1]} fov={50}>
	<!-- Controls -->
    <!-- <OrbitControls autoRotate /> -->
</T.PerspectiveCamera>

<!-- Lights the scene equally -->
<T.AmbientLight color="white" intensity={0.2} />

<!-- Light that casts a shadow -->
<T.DirectionalLight color="white" intensity={2} position={[3, 10, 7]} />

<!-- Sphere -->
<T.Mesh
	geometry={new Three.SphereGeometry(4, 64, 64)}
	material={new Three.MeshStandardMaterial({ color: 'white' })}
	position={[1, 2, 3]}
	receiveShadow
	castShadow />

<!-- Floor -->
<T.Mesh
	geometry={new Three.PlaneGeometry(20, 20)}
	material={new Three.MeshStandardMaterial({
		color: 'white',
		side: Three.DoubleSide
	})}
	rotation={Utils.DEG2RAD * 90}
	receiveShadow />
