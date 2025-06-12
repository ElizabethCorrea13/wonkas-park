  class WonkasFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <!-- SVG Wave Top -->
        <div class="w-full bg-[#fff5dd]">
          <svg class="w-full mb-[-1px] h-24 sm:h-32" viewBox="0 0 1440 150" preserveAspectRatio="none" fill="#4B2482" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <path d="M1440 0C1080 150 360 0 0 150H1440V0Z" fill="url(#gradient)"/>
            </g>
            <defs>
              <linearGradient id="gradient" x1="720" y1="0" x2="720" y2="150" gradientUnits="userSpaceOnUse">
                <stop stop-color="#9F59FF"/>
                <stop offset="1" stop-color="#6635AA"/>
              </linearGradient>
              <clipPath id="clip0">
                <rect width="1440" height="150" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>

        <!-- Footer Main -->
        <div class="bg-gradient-to-b from-[#6635AA] to-[#4B2482] text-white px-6 py-10">
          <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
            <!-- Logo y descripción -->
            <div>
              <img src="img/uade.png" alt="Logo UADE" class="mx-auto md:mx-0 w-24 mb-4">
              <p class="text-sm leading-relaxed">
                Trabajo grupal<br>
                Materia Diseño y Desarrollo Web<br>
                Curso: 16872 · Grupo: 1
              </p>
            </div>

            <!-- Integrantes -->
            <div>
              <h3 class="text-lg font-bold mb-2">Integrantes</h3>
              <ul class="space-y-1 text-sm">
                <li>🧑‍🎓 Pablo Pelardas</li>
                <li>🧑‍🎓 Elizabeth Correa</li>
                <li>🧑‍🎓 Agustín Bergomi</li>
                <li>🧑‍🎓 Analia Fascie</li>
              </ul>
              <a href="https://elizabethcorrea13.github.io/tpGrupal/index.html" target="_blank" class="block mt-2 text-yellow-300 underline hover:text-yellow-200 text-sm">
                🌐 Sitio Grupal
              </a>
            </div>

            <!-- Contacto -->
            <div>
              <h3 class="text-lg font-bold mb-2">Contacto</h3>
              <ul class="space-y-1 text-sm">
                <li>📍 Av. Dulce de Leche 123</li>
                <li>📞 +54 11 1234-5678</li>
                <li>✉️ contacto@wonkaspark.com</li>
              </ul>
            </div>

            <!-- Mapa -->
            <div>
              <h3 class="text-lg font-bold mb-2">Ubicación</h3>
              <div class="overflow-hidden rounded-lg shadow-lg h-32 sm:h-40">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.673011089903!2d-58.4325749!3d-34.6156541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb7f3a8dbb47%3A0xf38b4e28d7b405c0!2sParque%20Centenario!5e0!3m2!1ses!2sar!4v1682973962536!5m2!1ses!2sar" 
                  width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy">
                </iframe>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="bg-[#4B2482] text-center text-xs text-gray-300 py-3">
          &copy; 2025 Wonka's Park. Todos los derechos reservados.
        </div>
      `;
    }
  }

  customElements.define('wonkas-footer', WonkasFooter);