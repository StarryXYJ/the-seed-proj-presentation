<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import * as THREE from 'three';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import gsap from 'gsap';

const container = ref(null);
let scene, camera, renderer, composer;
let core, wireframe, particles, dataStream, charts;
let animationId;
let targetScroll = 0;
let currentScroll = 0;

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
  createDataStream();
  //createCharts();
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
  // Position core at golden ratio (approximately 0.618 from center)
  core.position.set(4, 0, 0);
  scene.add(core);

  // Outer wireframe
  const wireGeo = new THREE.IcosahedronGeometry(1.2, 1);
  const wireMat = new THREE.MeshBasicMaterial({ color: 0xbc13fe, wireframe: true, transparent: true, opacity: 0.3 });
  wireframe = new THREE.Mesh(wireGeo, wireMat);
  wireframe.position.set(4, 0, 0);
  scene.add(wireframe);
};

const createParticles = () => {
  const geometry = new THREE.BufferGeometry();
  const vertices = [];
  
  for (let i = 0; i < 2000; i++) {
    // Spread particles wider
    const x = (Math.random() - 0.5) * 30;
    const y = (Math.random() - 0.5) * 30;
    const z = (Math.random() - 0.5) * 30;
    vertices.push(x, y, z);
  }
  
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.02 });
  particles = new THREE.Points(geometry, material);
  scene.add(particles);
};

const createDataStream = () => {
  const geometry = new THREE.BufferGeometry();
  const vertices = [];
  
  // Create a stream of particles flowing upwards/around (further reduced)
  for (let i = 0; i < 100; i++) {
    const x = 4 + (Math.random() - 0.5) * 4; // Centered around the new core position
    const y = (Math.random() - 0.5) * 40;
    const z = (Math.random() - 0.5) * 4;
    vertices.push(x, y, z);
  }
  
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  // Store initial positions for animation
  geometry.userData = { initialY: vertices.filter((_, i) => i % 3 === 1) };
  
  const material = new THREE.PointsMaterial({ color: 0x00f3ff, size: 0.05, transparent: true, opacity: 0.6 });
  dataStream = new THREE.Points(geometry, material);
  scene.add(dataStream);
};

const createCharts = () => {
  charts = new THREE.Group();
  
  // Create 3D bar chart for market stats
  const barData = [
    { height: 3.38, color: 0x00f3ff, position: [-6, 0, 2] },
    { height: 1.84, color: 0xbc13fe, position: [-6, 0, 0] },
    { height: 4.0, color: 0x00f3ff, position: [-6, 0, -2] },
    { height: 2.33, color: 0xbc13fe, position: [-6, 0, -4] }
  ];
  
  barData.forEach((bar) => {
    const geometry = new THREE.BoxGeometry(0.5, bar.height, 0.5);
    const material = new THREE.MeshBasicMaterial({ 
      color: bar.color, 
      wireframe: true,
      transparent: true,
      opacity: 0.7
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(bar.position[0], bar.height / 2 - 2, bar.position[2]);
    charts.add(mesh);
  });
  
  scene.add(charts);
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
  // Update target scroll fraction (0 to 1)
  targetScroll = scrollY / maxScroll;
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

  // Smooth scroll interpolation
  currentScroll += (targetScroll - currentScroll) * 0.05;

  // Camera animation based on smoothed scroll
  const angle = currentScroll * Math.PI * 2;
  const radius = 6 + currentScroll * 4;
  
  // Camera orbits around the center but looks at the offset core
  // We want the core (at x=2) to be on the right side of the screen.
  // So the camera should look slightly to the left of the core, or we just position the core to the right.
  // Since we moved the core to x=2, let's just orbit around (0,0,0) or slightly offset.
  
  camera.position.x = Math.cos(angle) * radius;
  camera.position.z = Math.sin(angle) * radius;
  camera.position.y = currentScroll * 5;
  
  // Look at scene center - sphere at x=4 appears at golden ratio on screen
  camera.lookAt(0, 0, 0);

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
  
  if (dataStream) {
    const positions = dataStream.geometry.attributes.position.array;
    for(let i = 1; i < positions.length; i += 3) {
      positions[i] += 0.02; // Move up slowly
      if (positions[i] > 10) {
        positions[i] = -10;
      }
    }
    dataStream.geometry.attributes.position.needsUpdate = true;
  }
  
  if (charts) {
    charts.rotation.y = time * 0.1;
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
