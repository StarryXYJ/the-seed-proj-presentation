<script setup>
</script>

<template>
  <div class="overlay">
    <section class="hero">
      <h1 class="glitch" data-text="THE SEED">THE SEED</h1>
      <p class="subtitle">Game Interaction Agent</p>
      <p class="tagline">The Next Generation of Gaming Interaction</p>
      <div class="scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
        <div class="arrow"></div>
      </div>
    </section>

    <section class="content-section">
      <h2>Vision</h2>
      <div class="card glass">
        <p>A unified Agent access protocol for games, enabling real-time perception and controllable operation by AI Agents.</p>
        <p>The next interaction paradigm after Mouse, Keyboard, and Gamepad.</p>
      </div>
    </section>

    <section class="content-section">
      <h2>Market Opportunity</h2>
      <div class="grid-2">
        <div class="stat-card glass">
          <h3>3.38 Billion</h3>
          <p>Global Players</p>
        </div>
        <div class="stat-card glass">
          <h3>$184 Billion</h3>
          <p>Market Size</p>
        </div>
        <div class="stat-card glass">
          <h3>400 Million</h3>
          <p>Disabled Players</p>
        </div>
        <div class="stat-card glass">
          <h3>23.3% CAGR</h3>
          <p>Generative AI in Gaming</p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Core Features</h2>
      <div class="features-grid">
        <div class="feature-card glass">
          <h3>GIA Copilot</h3>
          <ul>
            <li>Voice Control</li>
            <li>Auto-Farming</li>
            <li>Tactical Advisor</li>
          </ul>
        </div>
        <div class="feature-card glass">
          <h3>Deep-NPC</h3>
          <ul>
            <li>Long-term Memory</li>
            <li>Autonomous Decision</li>
            <li>Complex Social Interaction</li>
          </ul>
        </div>
        <div class="feature-card glass">
          <h3>Dynamic Narrative</h3>
          <ul>
            <li>Real-time Plot Generation</li>
            <li>Emergent Gameplay</li>
            <li>High Replayability</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Architecture</h2>
      <div class="card glass">
        <h3>Dual Loop System</h3>
        <div class="architecture-diagram">
          <div class="loop">
            <h4>Internal Loop</h4>
            <p>Agent <-> Game State</p>
          </div>
          <div class="loop">
            <h4>External Loop</h4>
            <p>Player <-> Agent</p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Business Model</h2>
      <div class="grid-2">
        <div class="card glass">
          <h3>ToC</h3>
          <p>Subscription / Token Sales</p>
          <p>Persona Marketplace</p>
        </div>
        <div class="card glass">
          <h3>ToB</h3>
          <p>SDK Licensing</p>
          <p>Dev Support Services</p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Links</h2>
      <div class="links-container glass">
        <a href="https://github.com/anantheparty/The-Seed" target="_blank" class="link-btn">
          Project Repository
        </a>
        <a href="https://github.com/anantheparty/THE-Seed-OpenRA" target="_blank" class="link-btn">
          Application Demo
        </a>
        <a href="https://github.com/AI-for-anyone/RedAlert" target="_blank" class="link-btn">
          Predecessor Project
        </a>
      </div>
    </section>

    <footer class="footer">
      <p>&copy; The Seed Project. Inspired by SAO.</p>
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

section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
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

.glass {
  background: rgba(5, 5, 16, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 243, 255, 0.3);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.glass:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(0, 243, 255, 0.2);
  border-color: var(--color-primary);
}

.grid-2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1000px;
  margin-top: 2rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin-top: 2rem;
}

.stat-card h3 {
  font-size: 2.5rem;
  color: var(--color-secondary);
  margin-bottom: 0.5rem;
}

.feature-card h3 {
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.feature-card ul {
  list-style: none;
  text-align: left;
}

.feature-card li {
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.feature-card li::before {
  content: '>';
  position: absolute;
  left: 0;
  color: var(--color-secondary);
}

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
}

.link-btn:hover {
  background: var(--color-primary);
  color: #000;
}

.links-container {
  width: 100%;
  max-width: 600px;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  animation: bounce 2s infinite;
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
</style>
