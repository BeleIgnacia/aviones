import * as THREE from 'three';
import {getPlayerPosition, playerInit, setPlayerPosition} from "./src/assets/player/player.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

// init jugador
const player = playerInit();

// listener seguimiento mouse
let mouseX = 0;
document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
})

// pos inicial
scene.add(player.model);
camera.position.z = 15;


function animate() {

    const actualPosition = getPlayerPosition(player);
    setPlayerPosition(player, mouseX * 10, actualPosition.y, actualPosition.z);
    renderer.render(scene, camera);
}