<script setup>
import { ref } from 'vue';
import zh from '../locales/zh.js';
import en from '../locales/en.js';

const locales = { zh, en };
const currentLang = ref('zh');
const t = ref(locales[currentLang.value]);

const toggleLang = () => {
  currentLang.value = currentLang.value === 'zh' ? 'en' : 'zh';
  t.value = locales[currentLang.value];
};
</script>

<template>
  <div class="overlay">
    <!-- Language Toggle -->
    <button class="lang-toggle glass" @click="toggleLang">
      {{ currentLang === 'zh' ? 'EN' : '中文' }}
    </button>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="glitch" :data-text="t.title">{{ t.title }}</h1>
        <p class="subtitle">{{ t.subtitle }}</p>
        <p class="tagline">{{ t.tagline }}</p>
        <div class="scroll-indicator">
          <span>{{ t.scrollToExplore }}</span>
          <div class="arrow"></div>
        </div>
      </div>
    </section>

    <!-- Vision -->
    <section class="content-section">
      <div class="content-left">
        <h2>{{ t.sections.vision.title }}</h2>
        <div class="card glass">
          <p v-for="(text, i) in t.sections.vision.content" :key="i">{{ text }}</p>
        </div>
      </div>
    </section>

    <!-- Market Opportunity -->
    <section class="content-section">
      <div class="content-left">
        <h2>{{ t.sections.market.title }}</h2>
        <div class="grid-2">
          <div class="stat-card glass" v-for="stat in t.sections.market.stats" :key="stat.label">
            <h3>{{ stat.value }}</h3>
            <p>{{ stat.label }}</p>
          </div>
        </div>
        <div class="card glass insights">
          <p v-for="(insight, i) in t.sections.market.insights" :key="i">{{ insight }}</p>
        </div>
      </div>
    </section>

    <!-- Pain Points -->
    <section class="content-section">
      <div class="content-left">
        <h2>{{ t.sections.painPoints.title }}</h2>
        <div class="card glass">
          <ul class="pain-list">
            <li v-for="(point, i) in t.sections.painPoints.points" :key="i">{{ point }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Core Features -->
    <section class="content-section">
      <div class="content-left">
        <h2>{{ t.sections.features.title }}</h2>
        
        <h3 class="subsection-title">{{ t.sections.features.nonCore.title }}</h3>
        <div class="feature-card glass" v-for="item in t.sections.features.nonCore.items" :key="item.name">
          <h4>{{ item.name }}</h4>
          <p class="feature-desc">{{ item.description }}</p>
          <ul>
            <li v-for="(feat, i) in item.features" :key="i">{{ feat }}</li>
          </ul>
        </div>

        <h3 class="subsection-title">{{ t.sections.features.core.title }}</h3>
        <div class="features-grid">
          <div class="feature-card glass" v-for="item in t.sections.features.core.items" :key="item.name">
            <h4>{{ item.name }}</h4>
            <p class="feature-desc">{{ item.description }}</p>
            <ul>
              <li v-for="(feat, i) in item.features" :key="i">{{ feat }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Architecture -->
    <section class="content-section">
      <div class="content-left">
        <h2>{{ t.sections.architecture.title }}</h2>
        <div class="card glass">
          <h3>{{ t.sections.architecture.description }}</h3>
          <div class="architecture-diagram">
            <div class="loop glass-subtle" v-for="loop in t.sections.architecture.loops" :key="loop.name">
              <h4>{{ loop.name }}</h4>
              <p>{{ loop.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Business Model -->
    <section class="content-section">
      <div class="content-left">
        <h2>{{ t.sections.business.title }}</h2>
        <div class="grid-2">
          <div class="card glass">
            <h3>{{ t.sections.business.toc.title }}</h3>
            <ul>
              <li v-for="(item, i) in t.sections.business.toc.items" :key="i">{{ item }}</li>
            </ul>
          </div>
          <div class="card glass">
            <h3>{{ t.sections.business.tob.title }}</h3>
            <ul>
              <li v-for="(item, i) in t.sections.business.tob.items" :key="i">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Conclusion -->
    <section class="content-section">
      <div class="content-left">
        <h2>{{ t.sections.conclusion.title }}</h2>
        <div class="card glass">
          <p class="conclusion-text">{{ t.sections.conclusion.content }}</p>
        </div>
      </div>
    </section>

    <!-- Links -->
    <section class="content-section">
      <div class="content-left">
        <h2>{{ t.sections.links.title }}</h2>
        <div class="links-container glass">
          <a 
            v-for="link in t.sections.links.items" 
            :key="link.url"
            :href="link.url" 
            target="_blank" 
            class="link-btn"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </section>

    <footer class="footer">
      <p>{{ t.sections.footer }}</p>
    </footer>
  </div>
</template>

<style scoped>
.overlay {
  position: relative;
  z-index: 1;
  color: #fff;
  width: 100%;
}

/* Language Toggle */
.lang-toggle {
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 100;
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--color-primary);
  background: rgba(5, 5, 16, 0.8);
  color: var(--color-primary);
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.lang-toggle:hover {
  background: var(--color-primary);
  color: #000;
  transform: scale(1.05);
}

section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 4rem 2rem;
}

/* Hero Section - Centered */
.hero {
  align-items: center;
  text-align: center;
}

.hero-content {
  width: 100%;
}

.hero h1 {
  font-size: 5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  text-shadow: 0 0 20px rgba(0, 243, 255, 0.8);
}

.subtitle {
  font-size: 2rem;
  color: var(--color-primary);
  margin-bottom: 2rem;
  letter-spacing: 5px;
}

.tagline {
  font-size: 1.2rem;
  color: var(--color-text-dim);
}

/* Content Sections - Left Aligned */
.content-left {
  max-width: 50%;
  width: 100%;
  padding-right: 2rem;
}

.content-section h2 {
  font-size: 3rem;
  margin-bottom: 2rem;
  color: var(--color-primary);
  text-shadow: 0 0 10px rgba(0, 243, 255, 0.5);
}

.subsection-title {
  font-size: 1.8rem;
  color: var(--color-secondary);
  margin: 2rem 0 1rem;
}

/* Glass Effect */
.glass {
  background: rgba(5, 5, 16, 0.75);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(0, 243, 255, 0.3);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.glass-subtle {
  background: rgba(5, 5, 16, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 243, 255, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
}

.glass:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 243, 255, 0.2);
  border-color: var(--color-primary);
}

.card {
  margin-bottom: 1.5rem;
}

.card p {
  margin-bottom: 1rem;
  line-height: 1.8;
}

.insights {
  margin-top: 1.5rem;
}

.insights p {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
}

/* Grids */
.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

/* Stats */
.stat-card h3 {
  font-size: 2.5rem;
  color: var(--color-secondary);
  margin-bottom: 0.5rem;
}

.stat-card p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

/* Features */
.feature-card h4 {
  color: var(--color-primary);
  margin-bottom: 0.75rem;
  font-size: 1.5rem;
}

.feature-desc {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.feature-card ul,
.card ul {
  list-style: none;
  text-align: left;
}

.feature-card li,
.card li {
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;
}

.feature-card li::before,
.card li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--color-secondary);
  font-size: 1.2rem;
}

.pain-list li {
  font-size: 1.05rem;
}

/* Architecture */
.architecture-diagram {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.loop h4 {
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.loop p {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
}

/* Conclusion */
.conclusion-text {
  font-size: 1.1rem;
  line-height: 2;
  color: rgba(255, 255, 255, 0.9);
}

/* Links */
.link-btn {
  display: block;
  margin: 1rem 0;
  padding: 1rem 2rem;
  border: 1px solid var(--color-primary);
  border-radius: 8px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  background: rgba(0, 243, 255, 0.1);
  text-decoration: none;
  transition: all 0.3s ease;
}

.link-btn:hover {
  background: var(--color-primary);
  color: #000;
  transform: translateX(5px);
}

.links-container {
  width: 100%;
  max-width: 600px;
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  animation: bounce 2s infinite;
}

.arrow {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid var(--color-primary);
  margin: 0.5rem auto;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

/* Glitch Effect */
.glitch {
  position: relative;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch::before {
  left: 2px;
  text-shadow: -1px 0 #ff00c1;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 5s infinite linear alternate-reverse;
}

.glitch::after {
  left: -2px;
  text-shadow: -1px 0 #00fff9;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim2 5s infinite linear alternate-reverse;
}

@keyframes glitch-anim {
  0% { clip: rect(30px, 9999px, 10px, 0); }
  5% { clip: rect(80px, 9999px, 5px, 0); }
  10% { clip: rect(10px, 9999px, 90px, 0); }
  15% { clip: rect(50px, 9999px, 20px, 0); }
  20% { clip: rect(10px, 9999px, 80px, 0); }
  100% { clip: rect(0, 0, 0, 0); }
}

@keyframes glitch-anim2 {
  0% { clip: rect(10px, 9999px, 80px, 0); }
  5% { clip: rect(50px, 9999px, 20px, 0); }
  10% { clip: rect(10px, 9999px, 90px, 0); }
  15% { clip: rect(80px, 9999px, 5px, 0); }
  20% { clip: rect(30px, 9999px, 10px, 0); }
  100% { clip: rect(0, 0, 0, 0); }
}

/* Footer */
.footer {
  min-height: auto;
  padding: 2rem;
  text-align: center;
  opacity: 0.6;
}

/* Responsive */
@media (max-width: 768px) {
  .content-left {
    max-width: 100%;
    padding-right: 0;
  }

  .grid-2,
  .features-grid,
  .architecture-diagram {
    grid-template-columns: 1fr;
  }

  .hero h1 {
    font-size: 3rem;
  }

  .subtitle {
    font-size: 1.5rem;
  }

  .content-section h2 {
    font-size: 2rem;
  }
}
</style>
