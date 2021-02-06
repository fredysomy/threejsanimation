
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function ThreeEntryPoint(sceneRef) {

  const scene = new THREE.Scene();
  scene.background = new THREE.Color("0x282c34");
 const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(5, 10, 2);
    scene.add(light);
    scene.add(light.target);
scene.background = new THREE.Color( "white" );
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
 camera.position.set(100, 100, 50);

 const loader = new THREE.TextureLoader();
  const renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setSize(window.innerWidth, window.innerHeight);

  sceneRef.appendChild(renderer.domElement);

  let controls = new OrbitControls(camera, sceneRef);
  controls.target.set(0, 0, 0);
  controls.rotateSpeed = 0.5;
  controls.update();
const loaders = new GLTFLoader();
loaders.load('https://threejsfundamentals.org/threejs/resources/models/cartoon_lowpoly_small_city_free_pack/scene.gltf',(gltf)=>{
    scene.add(gltf.scene)
})






  const animate = function () {
    requestAnimationFrame(animate);
   
    

    renderer.render(scene, camera);
  };


  animate();

}
