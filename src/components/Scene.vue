<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import * as THREE from 'three';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import gsap from 'gsap';

const container = ref(null);
let scene, camera, renderer, composer;
let core, wireframe, particles;
let animationId;

const init = () => {
  // Scene
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x050510, 0.002);

  // Camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.toneMapping = THREE.ReinhardToneMapping;
  container.value.appendChild(renderer.domElement);

  // Post-processing (Bloom)
  const renderScene = new RenderPass(scene, camera);
  const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
  bloomPass.threshold = 0;
  bloomPass.strength = 1.5;
  bloomPass.radius = 0;

  composer = new EffectComposer(renderer);
  composer.addPass(renderScene);
  composer.addPass(bloomPass);

  // Objects
  createCore();
  createParticles();
  createGrid();

  // Lights
  const ambientLight = new THREE.AmbientLight(0x404040);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0x00f3ff, 1, 100);
  pointLight.position.set(10, 10, 10);
  scene.add(pointLight);

  // Event Listeners
  window.addEventListener('resize', onWindowResize);
  window.addEventListener('scroll', onScroll);
};

const createCore = () => {
  const geometry = new THREE.IcosahedronGeometry(1, 1);
  
  // Inner glowing core
  const material = new THREE.MeshBasicMaterial({ color: 0x00f3ff, wireframe: true });
  core = new THREE.Mesh(geometry, material);
  scene.add(core);

  // Outer wireframe
  const wireGeo = new THREE.IcosahedronGeometry(1.2, 1);
  const wireMat = new THREE.MeshBasicMaterial({ color: 0xbc13fe, wireframe: true, transparent: true, opacity: 0.3 });
  wireframe = new THREE.Mesh(wireGeo, wireMat);
  scene.add(wireframe);
};

const createParticles = () => {
  const geometry = new THREE.BufferGeometry();
  const vertices = [];
  
  for (let i = 0; i < 2000; i++) {
    const x = (Math.random() - 0.5) * 20;
    const y = (Math.random() - 0.5) * 20;
    const z = (Math.random() - 0.5) * 20;
    vertices.push(x, y, z);
  }
  
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.02 });
  particles = new THREE.Points(geometry, material);
  scene.add(particles);
};

const createGrid = () => {
  const gridHelper = new THREE.GridHelper(50, 50, 0x00f3ff, 0x222222);
  gridHelper.position.y = -2;
  scene.add(gridHelper);
};

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
};

const onScroll = () => {
  const scrollY = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const scrollFraction = scrollY / maxScroll;

  // Animate camera based on scroll
  // Move camera back and rotate around
  const angle = scrollFraction * Math.PI * 2;
  const radius = 5 + scrollFraction * 5;
  
  gsap.to(camera.position, {
    x: Math.cos(angle) * radius,
    z: Math.sin(angle) * radius,
    y: scrollFraction * 2,
    duration: 1,
    ease: 'power2.out'
  });
  
  camera.lookAt(0, 0, 0);
};

const animate = () => {
  animationId = requestAnimationFrame(animate);

  const time = Date.now() * 0.001;

  if (core) {
    core.rotation.x += 0.005;
    core.rotation.y += 0.005;
    // Pulse effect
    const scale = 1 + Math.sin(time * 2) * 0.1;
    core.scale.set(scale, scale, scale);
  }

  if (wireframe) {
    wireframe.rotation.x -= 0.002;
    wireframe.rotation.y -= 0.002;
  }

  if (particles) {
    particles.rotation.y = time * 0.05;
  }

  composer.render();
};

onMounted(() => {
  init();
  animate();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', onWindowResize);
  window.removeEventListener('scroll', onScroll);
  cancelAnimationFrame(animationId);
  if (renderer) {
    renderer.dispose();
  }
});
</script>

<template>
  <div ref="container" class="scene-container"></div>
</template>

<style scoped>
.scene-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  pointer-events: none;
}
</style>
