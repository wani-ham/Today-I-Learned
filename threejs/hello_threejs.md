* Date: 2023.06.29

## 내 첫번째 Three.js code
* Three.js 홈페이지에 있는 documentation을 따라서 첫번째 Three.js code를 작성했다.
* HTML에서 three.js를 이용하여 작성한 코드를 불러 올때는 module로 불러와야 한다. 
* 간단하게 정육면체가 페이지 정가운데에서 x와 y축 방향으로 회전하는 애니메이션이다.
* 그냥 열면 module로 불러온 js파일이 CORS policy로 안열린다. 그래서 vite를 이용해서 열어야 한다.
* 이 부분에서 막혔다.
* OpenGL과 공부를 병행하니 전반적인 graphics pipeline이 낯설지 않다.

```javascript
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth /
window.innerHeight, 0.1, 1000);
// (degree, aspect ratio, near clipping plane, far clipping plane
// near보다 가까운 거와 far보다 먼거는 render가 안된다

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: white});
const cube = new THREE.Mesh(geometry, material);
// mesh = geometry + material
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
```
