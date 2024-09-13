import * as THREE from "three";

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});

const position = new THREE.Vector3(0, -10, 0);
const model = new THREE.Mesh(geometry, material);
model.position.copy(position);

const playerInit = () => {
    return {
        model: model,
    }
};

const setPlayerPosition = (player, x, y, z) => {
    player.model.position.x = x;
    player.model.position.y = y;
    player.model.position.z = z;
}

const getPlayerPosition = (player) => {
    return player.model.position;
}

export {playerInit, setPlayerPosition, getPlayerPosition};