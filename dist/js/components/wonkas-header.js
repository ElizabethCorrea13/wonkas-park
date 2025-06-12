class WonkasHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <style>
      .wonkas-header * {
        font-family: 'Lilita One';
        font-weight: 300;
      }
      .icon {
        width: 24px;
        height: 24px;
      }
      .active-link {
        color: #4B0082 !important;
      }
    </style>
      
    <header class="wonkas-header bg-[#fff5dd] border-b border-[#f0e5cd] shadow-md fixed w-full top-0 z-50">
      <div class="container mx-auto flex justify-between items-center px-4 py-3 md:grid md:grid-cols-3 md:px-6 md:py-2">
        <!-- Logo -->
        <div class="flex justify-start">
          <a href="index.html" class="flex items-center">
            <h1 class="titulo text-[#6635AA] text-2xl">WONKA'S PARK</h1>
          </a>
        </div>

        <!-- Navegación -->
        <nav id="desktop-menu" class="hidden md:flex justify-center space-x-6 text-[#6635AA] font-bold text-lg">
          <a href="index.html" class="nav-link hover:text-[#4B0082]">Home</a>
          <a href="atracciones.html" class="nav-link hover:text-[#4B0082]">Atracciones</a>
          <a href="visitanos.html" class="nav-link hover:text-[#4B0082]">Visitanos</a>
          <a href="contacto.html" class="nav-link hover:text-[#4B0082]">Contacto</a>
        </nav>

        <!-- Botón Entradas + Hamburguesa -->
        <div class="flex justify-end items-center gap-4">
          <!-- Botón Entradas -->
          <a href="entradas.html" class="hidden md:flex bg-[#FFA101] text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-500 transition duration-200 items-center gap-2">
            <svg class="icon" viewBox="0 0 33 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.1923 2.61111V3.72222M23.1923 8.16667V9.27778M23.1923 13.7222V14.8333M23.1923 19.2778V20.3889M9.80769 12.6111H17.6154M9.80769 15.9444H14.2692M3.67308 1.5C2.74954 1.5 2 2.24667 2 3.16667V7.64963C2.67926 8.03922 3.24347 8.60026 3.63578 9.27622C4.02808 9.95218 4.23464 10.7192 4.23464 11.5C4.23464 12.2808 4.02808 13.0478 3.63578 13.7238C3.24347 14.3997 2.67926 14.9608 2 15.3504V19.8333C2 20.7533 2.74954 21.5 3.67308 21.5H29.3269C30.2505 21.5 31 20.7533 31 19.8333V15.3504C30.3207 14.9608 29.7565 14.3997 29.3642 13.7238C28.9719 13.0478 28.7654 12.2808 28.7654 11.5C28.7654 10.7192 28.9719 9.95218 29.3642 9.27622C29.7565 8.60026 30.3207 8.03922 31 7.64963V3.16667C31 2.24667 30.2505 1.5 29.3269 1.5H3.67308Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>ENTRADAS</span>
          </a>

          <!-- Botón Hamburguesa -->
          <button id="menu-btn" class="md:hidden text-[#6635AA] text-3xl focus:outline-none relative z-50">
            <span id="menu-icon">☰</span>
          </button>
        </div>
      </div>

      <!-- Navegación Mobile -->
      <nav id="mobile-menu" class="transition-transform transform fixed top-0 right-0 w-64 h-full bg-[#fff5dd] flex flex-col items-start p-6 space-y-6 text-[#6635AA] font-bold text-lg translate-x-full md:hidden shadow-lg">
        <a href="index.html" class="nav-link hover:text-[#4B0082]">Home</a>
        <a href="atracciones.html" class="nav-link hover:text-[#4B0082]">Atracciones</a>
        <a href="horarios.html" class="nav-link hover:text-[#4B0082]">Visitanos</a>
        <a href="contacto.html" class="nav-link hover:text-[#4B0082]">Contacto</a>
        <a href="entradas.html" class="flex bg-[#FFA101] text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-500 transition duration-200 items-center gap-2">
          <svg class="icon" viewBox="0 0 33 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.1923 2.61111V3.72222M23.1923 8.16667V9.27778M23.1923 13.7222V14.8333M23.1923 19.2778V20.3889M9.80769 12.6111H17.6154M9.80769 15.9444H14.2692M3.67308 1.5C2.74954 1.5 2 2.24667 2 3.16667V7.64963C2.67926 8.03922 3.24347 8.60026 3.63578 9.27622C4.02808 9.95218 4.23464 10.7192 4.23464 11.5C4.23464 12.2808 4.02808 13.0478 3.63578 13.7238C3.24347 14.3997 2.67926 14.9608 2 15.3504V19.8333C2 20.7533 2.74954 21.5 3.67308 21.5H29.3269C30.2505 21.5 31 20.7533 31 19.8333V15.3504C30.3207 14.9608 29.7565 14.3997 29.3642 13.7238C28.9719 13.0478 28.7654 12.2808 28.7654 11.5C28.7654 10.7192 28.9719 9.95218 29.3642 9.27622C29.7565 8.60026 30.3207 8.03922 31 7.64963V3.16667C31 2.24667 30.2505 1.5 29.3269 1.5H3.67308Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>ENTRADAS</span>
        </a>
      </nav>
    </header>
    `;

    const menuBtn = this.querySelector("#menu-btn");
    const menu = this.querySelector("#mobile-menu");
    const menuIcon = this.querySelector("#menu-icon");

    menuBtn.addEventListener("click", () => {
      if (menu.classList.contains("translate-x-0")) {
        menu.classList.remove("translate-x-0");
        menu.classList.add("translate-x-full");
        menuIcon.textContent = "☰";
        document.body.style.overflow = "auto";
      } else {
        menu.classList.remove("translate-x-full");
        menu.classList.add("translate-x-0");
        menuIcon.textContent = "✕";
        document.body.style.overflow = "hidden";
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        menu.classList.remove("translate-x-full");
        menu.classList.add("translate-x-0");
        menuIcon.textContent = "☰";
        document.body.style.overflow = "auto";
      } else {
        menu.classList.add("translate-x-full");
        menu.classList.remove("translate-x-0");
        menuIcon.textContent = "☰";
        document.body.style.overflow = "auto";
      }
    });

    // 👉 Activar el link actual
    const currentPage = location.pathname.split("/").pop();
    const navLinks = this.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active-link");
      }
    });
  }
}

customElements.define("wonkas-header", WonkasHeader);