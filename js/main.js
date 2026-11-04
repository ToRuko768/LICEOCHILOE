document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initStickyHeader();
});

function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (!menuToggle || !navMenu) return;

  const spans = menuToggle.querySelectorAll('span');

  menuToggle.addEventListener('click', () => {
    // Verifica si el menú está abierto revisando la clase de Tailwind
    const isOpen = navMenu.classList.contains('translate-x-0');

    if (isOpen) {
      // CERRAR MENÚ
      navMenu.classList.remove('translate-x-0');
      navMenu.classList.add('translate-x-full');
      document.body.classList.remove('overflow-hidden'); // Permite el scroll

      // Restaurar ícono de hamburguesa
      spans[0].classList.remove('translate-y-2', 'rotate-45');
      spans[1].classList.remove('opacity-0');
      spans[2].classList.remove('-translate-y-2', '-rotate-45');
    } else {
      // ABRIR MENÚ
      navMenu.classList.remove('translate-x-full');
      navMenu.classList.add('translate-x-0');
      document.body.classList.add('overflow-hidden'); // Bloquea el scroll

      // Transformar hamburguesa en "X"
      spans[0].classList.add('translate-y-2', 'rotate-45');
      spans[1].classList.add('opacity-0');
      spans[2].classList.add('-translate-y-2', '-rotate-45');
    }
  });

  // Cerrar el menú si la pantalla se agranda a tamaño desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && navMenu.classList.contains('translate-x-0')) {
      navMenu.classList.remove('translate-x-0');
      navMenu.classList.add('translate-x-full');
      document.body.classList.remove('overflow-hidden');

      spans[0].classList.remove('translate-y-2', 'rotate-45');
      spans[1].classList.remove('opacity-0');
      spans[2].classList.remove('-translate-y-2', '-rotate-45');
    }
  });
}

function initStickyHeader() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      // Estilos cuando se hace scroll (fondo semi-transparente con desenfoque)
      header.classList.add('shadow-md', 'bg-white/95', 'backdrop-blur-sm');
      header.classList.remove('shadow-sm', 'bg-white');
    } else {
      // Estilos arriba de todo
      header.classList.remove('shadow-md', 'bg-white/95', 'backdrop-blur-sm');
      header.classList.add('shadow-sm', 'bg-white');
    }
  });
}