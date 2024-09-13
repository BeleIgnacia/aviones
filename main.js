import * as THREE from 'three';
import playerInit from "./src/assets/player/player.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const player = playerInit();

scene.add(player.model);
camera.position.z = 15;

// pos inicial
player.model.position.x = player.position.x;
player.model.position.y = player.position.y;

function animate() {
    /*cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;*/
    renderer.render(scene, camera);
}