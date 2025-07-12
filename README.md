# Mi Biblioteca de Componentes UI Avanzados

## Introducción
Este repositorio contiene una biblioteca de componentes de interfaz de usuario (UI) reutilizables, diseñada y desarrollada con CSS avanzado. El objetivo principal es fomentar la modularidad, la reutilización, la coherencia visual y la escalabilidad en el desarrollo de sitios y aplicaciones web.

## Componentes Desarrollados
La biblioteca incluye los siguientes componentes principales, estilizados y con funcionalidad básica (si aplica) demostrada:

* **Navbar Responsivo:** Un menú de navegación adaptable para dispositivos de escritorio y móviles (con un botón tipo hamburguesa).
* **Botones:** Diferentes estilos (primario, secundario, deshabilitado) y soporte para iconos.
* **Tarjetas de Contenido (Cards):** Componentes flexibles para mostrar contenido estructurado con imagen, título, texto y acciones.
* **Campos de Formulario:** Estilos para inputs de texto, email, textareas, checkboxes y radio buttons.
* **Modal (Ventana Emergente):** Una ventana emergente interactiva que se puede abrir y cerrar.
* **Alertas:** Mensajes de notificación con diferentes niveles de importancia (éxito, error, advertencia, información).
* **Badges (Etiquetas):** Pequeñas etiquetas informativas.

## Estructura del Proyecto
El proyecto está organizado de manera modular para facilitar su comprensión y uso:
```
mi-biblioteca-ui/
├── assets/
│   ├── css/
│   │   ├── base/           (Estilos base y reset CSS)
│   │   ├── components/     (CSS específico para cada componente)
│   │   ├── _variables.css  (Variables CSS para colores, tipografías, espaciados)
│   │   └── main.css        (Archivo principal que importa todos los demás estilos)
│   ├── img/                (Imágenes de demostración para los componentes)
│   └── js/
│       └── main.js         (Script para la interactividad de componentes como Navbar, Modal y Alertas)
└── index.html              (Página de demostración que muestra todos los componentes)
```
## Guía de Uso
Para utilizar esta biblioteca en tus propios proyectos:

1.  **Clonar o Descargar:** Descarga o clona este repositorio en tu máquina local.
2.  **Inclusión de Estilos:** Enlaza el archivo `main.css` en la sección `<head>` de tu HTML:
    ```html
    <link rel="stylesheet" href="ruta/a/assets/css/main.css">
    ```
3.  **Inclusión de JavaScript:** Enlaza el archivo `main.js` justo antes de la etiqueta `</body>` de cierre:
    ```html
    <script src="ruta/a/assets/js/main.js"></script>
    ```
4.  **Uso de Componentes:** Cada componente está diseñado con clases específicas siguiendo la convención BEM. Puedes encontrar ejemplos de implementación en el archivo `index.html`. Por ejemplo, para un botón primario:
    ```html
    <button class="button button--primary">Mi Botón</button>
    ```
5.  **Personalización:** Modifica las variables CSS definidas en `_variables.css` (`:root` selector) para cambiar rápidamente la paleta de colores, tipografías y espaciados de toda la biblioteca.

## Responsividad y Accesibilidad
Todos los componentes han sido diseñados pensando en la responsividad utilizando Media Queries y Flexbox/Grid para asegurar una visualización óptima en diferentes tamaños de pantalla. Se han considerado aspectos básicos de accesibilidad como el uso de etiquetas semánticas y atributos `aria-label` donde es relevante (ej. Navbar toggle).

---
*Desarrollado por: Geesner Marlon Orellana Intriago*
