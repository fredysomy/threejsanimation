import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function ThreeEntryPoint(sceneRef) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color("0x282c34");
  const color = 0xffffff;
  const intensity = 1;
  
  scene.background = new THREE.Color("white");
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    10000
  );
  camera.position.set(5, 5, 2);

  const loader = new THREE.TextureLoader();
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  sceneRef.appendChild(renderer.domElement);

  const lightn=new THREE.DirectionalLight(0xffffff, 0.5)
  lightn.position.set(7,7,7)

  scene.add(lightn)
  let controls = new OrbitControls(camera, sceneRef);
  controls.target.set(0, 0, 0);
  controls.rotateSpeed = 0.5;
  controls.update();
  const cube=new THREE.BoxGeometry(2,2,2)
  const mesh=new THREE.MeshStandardMaterial()
  const cube_mesh=new THREE.Mesh(cube,mesh)
  
  scene.add(cube_mesh);
  

  const animate = function () {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
  };

  animate();
}
