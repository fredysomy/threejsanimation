// Import dependencies
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function ThreeEntryPoint(sceneRef) {
  // Create Scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x282c34);

  // Define a camera, set it to fill the browser window and position it
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
  camera.position.z = 5;

  // Define a renderer, and set it to fill the browser window
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Get an element from the DOM and append renderer.domElement to it
  sceneRef.appendChild(renderer.domElement);

  // Add controls, targetting the same DOM element
  let controls = new OrbitControls(camera, sceneRef);
  controls.target.set(0, 0, 0);
  controls.rotateSpeed = 0.5;
  controls.update();

  // Define (or import) your object's geometry
  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

  // Create lights, position them, and add them to the scene
  const frontSpot = new THREE.SpotLight(0xeeeece);
  const frontSpot2 = new THREE.SpotLight(0xddddce);

  frontSpot.position.set(1000, 1000, 1000);
  frontSpot2.position.set(-500, -500, -500);

  scene.add(frontSpot);
  scene.add(frontSpot2);

  // Create an animate function, which will allow you to render your scene and define any movements
  const animate = function () {
    requestAnimationFrame(animate);

    

    renderer.render(scene, camera);
  };

  // Call the animate function
  animate();

}
