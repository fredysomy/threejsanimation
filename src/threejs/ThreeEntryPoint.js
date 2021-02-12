import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
export default function ThreeEntryPoint(sceneRef) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color("red");
  const color = 0xffffff;
  const intensity = 1;

  scene.background = new THREE.Color("white");
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    10000
  );
  camera.position.set(0, 50, 300);

  const loader = new THREE.TextureLoader();
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  sceneRef.appendChild(renderer.domElement);
  

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add( directionalLight );


  let controls = new OrbitControls(camera, sceneRef);
  controls.target.set(0, 0, 0);
  controls.rotateSpeed = 0.5;
  controls.update();
  const mtlLoader = new MTLLoader();
  mtlLoader.load(
    "https://raw.githubusercontent.com/fredysomy/3dmodels/main/torusball/torusball.mtl",
    (mtl1) => {
      mtl1.preload();
      const objLoader = new OBJLoader();
      objLoader.setMaterials(mtl1);
      objLoader.load(
        "https://raw.githubusercontent.com/fredysomy/3dmodels/main/torusball/torusball.obj",
        (root) => {
          scene.add(root);
          root.position.set(0, -4, 0);
        }
      );
    }
  );

  const animate = function () {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
  };

  animate();
}
