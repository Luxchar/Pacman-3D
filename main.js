import * as THREE from './node_modules/three/build/three.module.js';
import {GLTFLoader} from './node_modules/three/examples/jsm/loaders/GLTFLoader.js'
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const loader = new GLTFLoader();

loader.load( './pacman-models/PacMan.glb', function ( glb )
{
    var pacman = glb.scene;  // pacman 3D object is loaded
    pacman.scale.set(2, 2, 2);
    pacman.position.y = 4;
    scene.add(pacman);
} );

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 10;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}   
animate();

const light = new THREE.PointLight(0xffffff, 1, 125);
light.position.set(2, 2, 5);
scene.add(light);