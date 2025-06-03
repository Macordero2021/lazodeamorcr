// Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
  const navContent = document.querySelector('.nav-content');

  hamburger.addEventListener('click', () => {
    navContent.classList.toggle('active');
  });



// Scroll to top button
    const buttonContainer = document.querySelector('.button-container');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {  // Si scrolleó más de 50px
        buttonContainer.classList.add('scrolled');
      } else {
        buttonContainer.classList.remove('scrolled');
      }
    });



// Suscripción a WhatsApp
  document.getElementById('subscribeBtn').addEventListener('click', function () {
    const phoneInput = document.getElementById('whatsappNumber').value.trim();

    // Validar que no esté vacío y tenga solo números (opcional)
    if (phoneInput === '') {
      alert('Por favor ingresa tu número de WhatsApp.');
      return;
    }

// Opcional: validar que sean solo números y longitud mínima (ajusta según país)
    const phoneRegex = /^[0-9]{8,15}$/; // mínimo 8 y máximo 15 dígitos
    if (!phoneRegex.test(phoneInput)) {
      alert('Por favor ingresa un número válido sin espacios ni caracteres especiales.');
      return;
    }

// Número de destino de tu WhatsApp en formato internacional sin signos (ejemplo de Costa Rica: 506)
    const myWhatsAppNumber = '50686819741'; // Cambia esto por tu número de WhatsApp

   const message = `*Nuevo mensaje desde el formulario web*

Hola, buen día.
Quisiera suscribirme a las novedades y promociones vía WhatsApp.
*Mi número es:* ${phoneInput}
Espero sus indicaciones.
¡Gracias!`;

// Construir URL para enviar el mensaje por WhatsApp
    const url = `https://wa.me/${myWhatsAppNumber}?text=${encodeURIComponent(message)}`;

// Abrir WhatsApp Web o app móvil
    window.open(url, '_blank');
  });


  
// whatsapp button de promociones
document.addEventListener("DOMContentLoaded", function () {
  // Seleccionamos todos los botones "Comprar"
  const botonesComprar = document.querySelectorAll(".comprar-btn");

  botonesComprar.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault(); // Evitar navegación por defecto

      // Obtenemos el contenedor principal .offer de este botón
      const oferta = btn.closest(".offer");

      if (!oferta) return;

      // Extraemos el porcentaje del span .topline (ejemplo: "Descuento del 15%")
      const textoDescuento = oferta.querySelector(".topline")?.textContent.trim() || "";

      // Extraemos el título del h4 (ejemplo: "INDEPENDENCIA")
      const titulo = oferta.querySelector("h4")?.textContent.trim() || "";

      // Construimos mensaje para WhatsApp con saltos de línea (%0A)
      const mensaje = `Hola, quiero aprovechar la promoción: ${textoDescuento} ${titulo}`;

      // Número fijo al que se envía el mensaje
      const numeroWhatsApp = "50686819741";

      // URL final para abrir WhatsApp con el mensaje
      const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

      // Abrimos el enlace en una nueva pestaña
      window.open(urlWhatsApp, "_blank");
    });
  });
});




    