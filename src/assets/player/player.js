import * as THREE from "three";

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});

const playerInit = () => {
    return {
        model: new THREE.Mesh(geometry, material),
        position: new THREE.Vector3(0, -10, 0),
    }
};

export default playerInit;