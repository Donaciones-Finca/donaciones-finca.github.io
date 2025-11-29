class CustomParticles extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          pointer-events: none;
          overflow: hidden;
        }
        .particle {
          position: absolute;
          border-radius: 50%;
          background: rgba(168, 85, 247, 0.1);
          animation: float 15s infinite linear;
        }
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-100px) translateX(100px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
      </style>
      <div id="particles"></div>
    `;

    this.createParticles();
  }

  createParticles() {
    const particlesContainer = this.shadowRoot.getElementById('particles');
    const particleCount = 15;
    const colors = ['rgba(6, 182, 212, 0.1)', 'rgba(168, 85, 247, 0.1)', 'rgba(236, 72, 153, 0.1)', 'rgba(132, 204, 22, 0.1)'];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');

      // Random size between 50px and 200px
      const size = Math.random() * 150 + 50;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;

      // Random color
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];

      // Random animation duration and delay
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 10;
      particle.style.animation = `float ${duration}s ${delay}s infinite linear`;

      particlesContainer.appendChild(particle);
    }
  }
}

customElements.define('custom-particles', CustomParticles);