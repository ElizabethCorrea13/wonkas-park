  class WonkasHero extends HTMLElement {
    connectedCallback() {
      const title = this.getAttribute('title') || 'Título por defecto';

      this.innerHTML = `
        <style>
          .wonkas-hero h1 {
            font-family: 'Lilita One';
            font-weight: 200;
          }
        </style>

        <section class="wonkas-hero relative overflow-hidden">
          <!-- Fondo violeta con degradado -->
          <div class="relative bg-gradient-to-b from-[#6635AA] via-[#4B2482] to-[#6635AA]">
            <!-- Caramelos flotantes -->
            <img src="img/candies-2.png" alt="Caramelos" class="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none"/>

            <!-- Título -->
            <div class="relative flex justify-center items-center py-24 md:py-32">
              <h1 class="text-white text-2xl sm:text-3xl md:text-5xl font-bold">${title}</h1>
            </div>
          </div>

          <!-- Oleaje arriba -->
          <svg class="absolute top-0 left-0 w-full" viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <path d="M1440 150C1080 0 360 150 0 0H1440V150Z" fill="#fff5dd"/>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="1440" height="150" fill="white" transform="matrix(-1 0 0 -1 1440 150)"/>
              </clipPath>
            </defs>
          </svg>

          <!-- Oleaje abajo -->
          <svg class="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip1)">
              <path d="M0 0C360 150 1080 0 1440 150H0V0Z" fill="#fff5dd"/>
            </g>
            <defs>
              <clipPath id="clip1">
                <rect width="1440" height="150" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </section>
      `;
    }
  }

  customElements.define('wonkas-hero', WonkasHero);