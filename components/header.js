class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .header {
          text-align: center;
          margin-bottom: 2rem;
          position: relative;
        }
        .logo {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          background: linear-gradient(90deg, #06b6d4, #a855f7, #ec4899, #84cc16);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradient 8s ease infinite;
        }
        .subtitle {
          font-size: 1.25rem;
          color: #6b7280;
          position: relative;
          display: inline-block;
        }
        .subtitle::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #06b6d4, #a855f7);
          border-radius: 2px;
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      </style>
      <div class="header">
        <h1 class="logo">Finca RP</h1>
        <p class="subtitle">Donaciones Premium</p>
      </div>
    `;
  }
}

customElements.define('custom-header', CustomHeader);