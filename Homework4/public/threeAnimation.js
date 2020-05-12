import { visibleHeightAtZDepth, visibleWidthAtZDepth, lerp } from "../utils.js";
import { nextSlide } from "../main.js";
import { prevSlide } from "../main.js";

const raycaster = new THREE.Raycaster();
const objLoader = new THREE.OBJLoader();

let arrowBoxRotation = 0;
let arrowBoxesArr = [];

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  30,
  window.innerWidth / window.innerHeight
);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

document.body.append(renderer.domElement);

objLoader.load("models/cube.obj", ({ children }) => {
  const screenBorderRight = visibleWidthAtZDepth(-10, camera) / 2;
  const screenBottom = -visibleHeightAtZDepth(-10, camera) / 2;

  addCube(
    children[0],
    nextSlide,
    screenBorderRight - 1.2,
    screenBottom + 1,
    90,
    0,
    0
  );
  addCube(
    children[0],
    prevSlide,
    screenBorderRight - 2.5,
    screenBottom + 1,
    90,
    180,
    0
  );

  animate();
});

const addCube = (object, callbackFn, x, y, angleX, angleY, angleZ) => {
  const cubeMesh = object.clone();

  cubeMesh.scale.setScalar(0.3);
  cubeMesh.rotation.set(
    THREE.Math.degToRad(angleX),
    THREE.Math.degToRad(angleY),
    THREE.Math.degToRad(angleZ)
  );

  const boundingBox = new THREE.Mesh(
    new THREE.BoxGeometry(0.7, 0.7, 0.7),
    new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 })
  );

  boundingBox.position.x = x;
  boundingBox.position.y = y;
  boundingBox.position.z = -10;

  boundingBox.add(cubeMesh);

  boundingBox.callbackFn = callbackFn;

  arrowBox = boundingBox;
  arrowBoxesArr.push(boundingBox);
  scene.add(boundingBox);
};

const animate = () => {
  arrowBoxRotation = lerp(arrowBoxRotation, 0, 0.04);
  arrowBoxesArr.forEach((el) => {
    el.rotation.set(THREE.Math.degToRad(arrowBoxRotation), 0, 0);
  });

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

export const handleThreeAnimation = (angle) => {
  arrowBoxRotation = angle;
};

window.addEventListener("click", () => {
  const mousePosition = new THREE.Vector2();
  mousePosition.x = (event.clientX / window.innerWidth) * 2 - 1;
  mousePosition.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mousePosition, camera);

  const intersectedObjects = raycaster.intersectObjects(scene.children);
  intersectedObjects.length && intersectedObjects[0].object.callbackFn();
});
