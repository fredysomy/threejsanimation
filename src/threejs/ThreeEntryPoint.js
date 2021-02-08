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
  camera.position.set(0,0,10);

  const loader = new THREE.TextureLoader();
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  sceneRef.appendChild(renderer.domElement);
const light = new THREE.PointLight( 0x404040, 1, 100 );
light.position.set( 0, 50, 60 );
scene.add( light );

const light2 = new THREE.PointLight( 0x404040, 1, 100 );
light2.position.set( 0, -100, 60 );
scene.add( light2 );

const light3 = new THREE.PointLight( 0x404040, 1, 100 );
light3.position.set( 0, -50, 0 );
scene.add( light3 );

const light4 = new THREE.PointLight( 0x404040, 1, 100 );
light4.position.set( 0, 50, 0 );
scene.add( light4 );
const directionalLight = new THREE.DirectionalLight( 0x404040, 0.5 );
scene.add( directionalLight );

  let controls = new OrbitControls(camera, sceneRef);
  controls.target.set(0, 0, 0);
  controls.rotateSpeed = 0.5;
  controls.update();
  const loader1=new GLTFLoader()
  loader1.load('https://raw.githubusercontent.com/fredysomy/threejsanimation/master/src/models/2/scene.gltf',(gltf)=>{
      
  scene.add(gltf.scene)
  })
  

  const animate = function () {
    requestAnimationFrame(animate);
  
    renderer.render(scene, camera);
  };

  animate();
}
