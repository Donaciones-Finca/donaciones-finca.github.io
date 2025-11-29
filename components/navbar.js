class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .nav-container {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid rgba(0,0,0,0.1);
          padding-bottom: 1rem;
        }
        .nav-link {
          position: relative;
          padding: 0.5rem 1rem;
          font-weight: 600;
          color: #6b7280;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .nav-link.active {
          color: #3b82f6;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -1rem;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #06b6d4, #a855f7);
          transition: all 0.3s ease;
        }
        .nav-link:hover::after, .nav-link.active::after {
          width: 100%;
        }
        .nav-link:hover {
          color: #1f2937;
        }
      </style>
      <div class="nav-container">
        <a href="#cars" class="nav-link active" data-section="cars">
          <i data-feather="car" class="mr-1"></i> Vehículos
        </a>
        <a href="#houses" class="nav-link" data-section="houses">
          <i data-feather="home" class="mr-1"></i> Propiedades
        </a>
        <a href="#businesses" class="nav-link" data-section="businesses">
          <i data-feather="briefcase" class="mr-1"></i> Negocios
        </a>
      </div>
    `;
    
    // Add click handlers for the links
    this.shadowRoot.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        this.shadowRoot.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        e.currentTarget.classList.add('active');
      });
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);