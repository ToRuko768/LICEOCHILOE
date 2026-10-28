/**
 * INTERACTIONS.JS - Adaptado para Tailwind CSS
 * Acordeones, Filtros de Noticias y Validación de Formulario
 */

document.addEventListener('DOMContentLoaded', () => {
  initAccordions();
  initNewsFilter();
  initContactForm();
});

// 1. ACORDEONES (Preguntas Frecuentes y Mallas)
function initAccordions() {
  const headers = document.querySelectorAll('.accordion-header');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const icon = header.querySelector('.accordion-icon');

      // Verifica si está abierto comprobando el max-height
      const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

      if (isOpen) {
        // Cerrar
        content.style.maxHeight = '0px';
        content.classList.remove('py-4');
        if (icon) icon.classList.remove('rotate-180');
        header.classList.remove('text-primary');
      } else {
        // Abrir
        content.style.maxHeight = content.scrollHeight + 40 + 'px'; // +40 por el padding
        content.classList.add('py-4');
        if (icon) icon.classList.add('rotate-180');
        header.classList.add('text-primary');
      }
    });
  });
}

// 2. FILTRO DE NOTICIAS
function initNewsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const newsCards = document.querySelectorAll('.card-news');

  if (filterBtns.length === 0 || newsCards.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Quitar estilos activos de todos los botones
      filterBtns.forEach(b => {
        b.classList.remove('bg-primary', 'text-white', 'border-primary');
        b.classList.add('bg-white', 'text-gray-500', 'border-gray-200');
      });

      // Añadir estilo activo al botón clickeado
      btn.classList.remove('bg-white', 'text-gray-500', 'border-gray-200');
      btn.classList.add('bg-primary', 'text-white', 'border-primary');

      const filterValue = btn.getAttribute('data-filter');

      // Filtrar tarjetas usando flex y hidden de Tailwind
      newsCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.classList.remove('hidden');
          card.classList.add('flex');
          // Pequeña animación de entrada
          card.style.opacity = '0';
          setTimeout(() => { card.style.transition = 'opacity 0.3s ease'; card.style.opacity = '1'; }, 50);
        } else {
          card.classList.remove('flex');
          card.classList.add('hidden');
        }
      });
    });
  });
}

// 3. VALIDACIÓN DE FORMULARIO DE CONTACTO
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const successMessage = document.getElementById('formSuccess');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Validación simple de nombre
    const nombre = document.getElementById('nombre');
    if (nombre && nombre.value.trim().length < 3) {
      showError(nombre, 'El nombre es obligatorio.');
      isValid = false;
    } else {
      clearError(nombre);
    }

    // Validación de email
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email.value)) {
      showError(email, 'Ingrese un correo electrónico válido.');
      isValid = false;
    } else {
      clearError(email);
    }

    // Validación de mensaje
    const mensaje = document.getElementById('mensaje');
    if (mensaje && mensaje.value.trim().length < 10) {
      showError(mensaje, 'El mensaje debe tener al menos 10 caracteres.');
      isValid = false;
    } else {
      clearError(mensaje);
    }

    // Simular envío
    if (isValid) {
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Enviando...';
      btn.classList.add('opacity-75', 'cursor-not-allowed');

      setTimeout(() => {
        form.reset();
        btn.textContent = originalText;
        btn.classList.remove('opacity-75', 'cursor-not-allowed');
        successMessage.classList.remove('hidden');
      }, 1500);
    }
  });

  function showError(input, msg) {
    clearError(input); // Limpiar errores previos
    input.classList.add('border-red-500', 'ring-1', 'ring-red-500');
    input.classList.remove('border-gray-200');

    const errorMsg = document.createElement('p');
    errorMsg.className = 'text-red-500 text-xs mt-1 error-message';
    errorMsg.innerText = msg;
    input.parentNode.appendChild(errorMsg);
  }

  function clearError(input) {
    if (!input) return;
    input.classList.remove('border-red-500', 'ring-1', 'ring-red-500');
    input.classList.add('border-gray-200');
    const existingError = input.parentNode.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }
  }
}