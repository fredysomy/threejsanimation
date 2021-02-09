import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

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
  camera.position.set(0,0,10);

  const loader = new THREE.TextureLoader();
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  sceneRef.appendChild(renderer.domElement);
const spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 0,10,100 );
scene.add( spotLight );

const spotLight1 = new THREE.SpotLight( 0xffffff );
spotLight1.position.set( 0,-20,100 );
scene.add( spotLight1 );

const spotLight2 = new THREE.SpotLight( 0xffffff );
spotLight2.position.set( 10,0,100 );
scene.add( spotLight2 );

const spotLight3 = new THREE.SpotLight( 0xffffff );
spotLight3.position.set( -10,-5,100 );
scene.add( spotLight3 );

const width = 10;
const height = 10;
const intensity2= 1;
const rectLight = new THREE.RectAreaLight( 0xffffff, intensity2,  width, height );
rectLight.position.set( 0, 0, 100 );
rectLight.lookAt( 0, 0, 0 );
scene.add( rectLight )
const light0 = new THREE.PointLight( 0xff0000, 1, 10000 );
light0.position.set( 5, 5, 5 );
scene.add( light0 );

const light1 = new THREE.PointLight( 0xff0000, 1, 10000 );
light1.position.set( 0, 10, 0 );
scene.add( light1 );

const light = new THREE.PointLight( 0xff0000, 1.2, 20000 );
light.position.set( 0, -10, 0 );
scene.add( light );

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
