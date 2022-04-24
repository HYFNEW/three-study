import * as THREE from 'three'

let timer, scene, renderer, camera

export default function init(el) {
  // let el = this.$refs.container
      
  // 创建场景
  scene = new THREE.Scene()

  // 创建摄像机
  camera = new THREE.PerspectiveCamera(50, el.clientWidth / el.clientHeight, 1, 1000)
  
  // 创建渲染器
  renderer = new THREE.WebGLRenderer()
  renderer.setClearColor(new THREE.Color(0x000000))
  renderer.setSize(el.clientWidth, el.clientHeight)
  //开启阴影
  renderer.shadowMap.enabled = true;

  //创建一个平面
  let planeGeometry = new THREE.PlaneGeometry(50,50,1,1)
  let planeMaterial = new THREE.MeshLambertMaterial({
    color: 0xffffff
  })
  let plane = new THREE.Mesh(planeGeometry, planeMaterial)
  plane.rotation.x = -0.5 * Math.PI;
  plane.receiveShadow = true;
  scene.add(plane)

  // 创建一个立方体
  let cubeGeometry = new THREE.BoxGeometry(4,4,4)
  let cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0xFF0000,
  })
  let cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
  cube.position.y = 5
  cube.castShadow = true;
  // 将正方体添加到场景中
  scene.add(cube)

  // 添加环境光
  let ambienLight = new THREE.AmbientLight(0x353535);
  scene.add(ambienLight);
  // 添加聚光灯
  var spotLight = new THREE.SpotLight(0xffffff);
  spotLight.position.set(0,30,0);
  spotLight.castShadow = true;
  scene.add(spotLight);

  // 设置摄像机的位置，并设置摄像机看的方向
  camera.position.set(30,30,30)
  camera.lookAt(0,0,0)

  el.appendChild(renderer.domElement)
  // 渲染
  // renderer.render(scene,camera)
  animate(scene,camera,renderer,cube)
}

function animate(scene,camera,renderer,cube){
  cube.rotation.x += 0.02;
  cube.rotation.y += 0.02;
  cube.rotation.z += 0.02;

  cancelAnimationFrame(timer)
  timer = requestAnimationFrame(()=>{
    animate(scene,camera,renderer,cube)
  })
  renderer.render(scene,camera)
}

export function clear(el) {
  cancelAnimationFrame(timer)
  scene.traverse((child) => {
    if (child.material) {
      child.material.dispose();
    }
    if (child.geometry) {
      child.geometry.dispose();
    }
    child = null;
  });
  renderer.forceContextLoss();
  renderer.dispose();
  scene.clear();
  scene = null;
  camera = null;
  el.removeChild(renderer.domElement)
  renderer.domElement = null;
  renderer = null;
  console.log('clearScene');
}