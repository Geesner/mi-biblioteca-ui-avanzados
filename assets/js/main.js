// assets/js/main.js

document.addEventListener('DOMContentLoaded', () => {
    // --- Funcionalidad para el Navbar Responsivo ---
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');

    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener('click', () => {
            navbarMenu.classList.toggle('navbar__menu--open');
            // Cambiar icono de hamburguesa a cruz y viceversa para mejor UX
            const icon = navbarToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
            // Añadir/quitar aria-expanded para accesibilidad
            const isExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';
            navbarToggle.setAttribute('aria-expanded', !isExpanded);
        });

        // Opcional: Cerrar el menú si se hace clic fuera de él en modo móvil
        document.addEventListener('click', (event) => {
            if (navbarMenu.classList.contains('navbar__menu--open') &&
                !navbarMenu.contains(event.target) &&
                !navbarToggle.contains(event.target)) {
                navbarMenu.classList.remove('navbar__menu--open');
                const icon = navbarToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                navbarToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // --- Funcionalidad para el Modal ---
    const openModalBtn = document.getElementById('open-modal-btn');
    const modal = document.getElementById('my-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const cancelModalBtn = document.getElementById('cancel-modal-btn'); // Botón Cancelar en el footer

    if (openModalBtn && modal && closeModalBtn) {
        openModalBtn.addEventListener('click', () => {
            modal.classList.add('modal--open');
            document.body.style.overflow = 'hidden'; // Evita el scroll del fondo
            modal.setAttribute('aria-hidden', 'false'); // Para accesibilidad
            closeModalBtn.focus(); // Mueve el foco al botón de cierre
        });

        const closeModals = () => {
            modal.classList.remove('modal--open');
            document.body.style.overflow = ''; // Restaura el scroll del fondo
            modal.setAttribute('aria-hidden', 'true'); // Para accesibilidad
        };

        closeModalBtn.addEventListener('click', closeModals);

        if (cancelModalBtn) {
            cancelModalBtn.addEventListener('click', closeModals);
        }

        // Cerrar modal al hacer clic fuera del contenido del modal
        modal.addEventListener('click', (event) => {
            if (event.target === modal) { // Si el clic es directamente en el overlay
                closeModals();
            }
        });

        // Cerrar modal al presionar la tecla ESC
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && modal.classList.contains('modal--open')) {
                closeModals();
            }
        });
    }

    // --- Funcionalidad para cerrar Alertas ---
    // Selecciona todos los botones de cierre de alertas
    const alertCloseButtons = document.querySelectorAll('.alert__close');

    alertCloseButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Encuentra el elemento padre más cercano con la clase 'alert'
            const alert = event.target.closest('.alert');
            if (alert) {
                alert.remove(); // Elimina la alerta del DOM
            }
        });
    });
});