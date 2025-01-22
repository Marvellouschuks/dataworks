(function() {
  let controls, scene = new THREE.Scene(), camera = window.camera= new THREE.PerspectiveCamera(45, innerWidth/innerHeight, 1, 1000),
  renderer, sphere = new THREE.SphereGeometry(8, 32, 32), mat = new THREE.PointsMaterial({color:'#f5a94f', size:0.25}),
  particle = new THREE.Points(sphere, mat);

  camera.position.x = 0, camera.position.y=20, camera.position.z=30, camera.lookAt(new THREE.Vector3(0,0,0)),

  particle.name = 'particleSystem', 
  scene.add(particle),

  (renderer = new THREE.WebGLRenderer({alpha:!0, antialias: true}))
  .setSize(innerWidth, innerHeight),


  controls = new THREE.OrbitControls(camera,renderer.domElement)
  window.webgl.appendChild(renderer.domElement),
  update();

  function update(pSys) {
    controls.update(),
    (pSys = scene.getObjectByName('particleSystem')).rotation.y-=0.005,
    renderer.setSize(innerWidth, innerHeight),
    renderer.render(scene, camera)
    requestAnimationFrame(update)
  }
  window.addEventListener('resize', _=>requestAnimationFrame(_=>{
    camera.aspect=innerWidth/innerHeight
    camera.updateProjectionMatrix();
  }))
})()