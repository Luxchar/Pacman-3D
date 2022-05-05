import * as THREE from './node_modules/three/build/three.module.js';
import {GLTFLoader} from './node_modules/three/examples/jsm/loaders/GLTFLoader.js'
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const mixer = new THREE.AnimationMixer();

 const loader = new GLTFLoader()
loader.load('./pacman-models/pacman.glb', function(glb){
    const mixer = new THREE.AnimationMixer(glb.scene);
    console.log(glb)
    const animation = mixer.clipAction(glb.animations[0]);
    animation.enable = true;
    animation.play();

    scene.add(glb.scene)
})

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 25;

const clock = new THREE.Clock();

function animate() {
    var delta = clock.getDelta();
    if ( mixer ) mixer.update( delta );
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}   
animate();

const light = new THREE.PointLight(0xffffff, 1, 125);
light.position.set(2, 2, 5);
scene.add(light);