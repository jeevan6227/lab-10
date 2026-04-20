// main.js
import * as THREE from "https://unpkg.com/three@0.150.1/build/three.module.js";

// 1️⃣ Create the scene
const scene = new THREE.Scene();

// 2️⃣ Set up the camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// 3️⃣ Set up the renderer
const renderer = new THREE.WebGLRenderer({ antialias: true }); // smoother edges
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 4️⃣ Create the cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 }); // reacts to light
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 5️⃣ Add lights
// Point light (like a lamp shining on the cube)
const pointLight = new THREE.PointLight(0xffffff, 1.5);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Ambient light (soft light everywhere so shadows aren't too dark)
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// 6️⃣ Enable shadows (optional)
renderer.shadowMap.enabled = true;
cube.castShadow = true;
pointLight.castShadow = true;

// 7️⃣ Animation loop
function animate() {
  requestAnimationFrame(animate); // repeat every frame

  // Rotate the cube slightly each frame
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render the updated scene
  renderer.render(scene, camera);
}

// 8️⃣ Start animation
animate();

// 9️⃣ Handle window resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});