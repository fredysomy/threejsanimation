
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function ThreeEntryPoint(sceneRef) {

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x282c34);


  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
  camera.position.z = 7;

 const loader = new THREE.TextureLoader();
  const renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setSize(window.innerWidth, window.innerHeight);

  sceneRef.appendChild(renderer.domElement);

  let controls = new OrbitControls(camera, sceneRef);
  controls.target.set(0, 0, 0);
  controls.rotateSpeed = 0.5;
  controls.update();

const plane=new THREE.PlaneGeometry(5,5);
const pm=new THREE.MeshBasicMaterial({ side: THREE.DoubleSide})

const box=new THREE.BoxGeometry(1,1,1)
const bm=new THREE.MeshBasicMaterial({ map: loader.load('https://threejsfundamentals.org/threejs/resources/images/wall.jpg')})
const blm=new THREE.Mesh(box,bm)
blm.position.set(0,0,0.5)
scene.add(blm)

const box1=new THREE.BoxGeometry(0.5,0.5,0.5)
const bm1=new THREE.MeshBasicMaterial({color: "blue",antialias:'true'})
const blm1=new THREE.Mesh(box1,bm1)
blm1.position.set(1,2,0.25)
scene.add(blm1)

const plm=new THREE.Mesh(plane,pm)
scene.add(plm)


  const frontSpot = new THREE.SpotLight(0xeeeece);
  const frontSpot2 = new THREE.SpotLight(0xddddce);

  frontSpot.position.set(10, 10, 10);
  frontSpot2.position.set(-50, -50, -50);

  scene.add(frontSpot);
  scene.add(frontSpot2);

  const animate = function () {
    requestAnimationFrame(animate);
   
    

    renderer.render(scene, camera);
  };


  animate();

}
