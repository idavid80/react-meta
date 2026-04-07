# 🍋 Little Lemon Restaurant - Booking App

Una aplicación web moderna y responsiva para la reserva de mesas del restaurante **Little Lemon**, desarrollada como proyecto final para la certificación de **Meta Front-End Developer**.

## 🚀 Características Principales

* **Proceso de Reserva en Pasos:** Interfaz de usuario intuitiva dividida en 3 etapas (Contacto, Fecha/Hora y Detalles de Invitados).
* **Diseño Mobile-First:** Optimización total para dispositivos móviles utilizando **Chakra UI**, incluyendo un *Stepper* adaptativo.
* **Validación de Formularios:** Gestión robusta de datos y validaciones en tiempo real con **Formik** y **Yup**.
* **Feedback Instantáneo:** Sistema de notificaciones y Modal de éxito tras el envío del formulario.
* **Arquitectura Limpia:** Uso de Hooks personalizados (`useSubmit`, `useDisclosure`) y gestión de estado eficiente.

## 🛠️ Tecnologías Utilizadas

* **React 18** - Biblioteca principal.
* **Chakra UI** - Sistema de diseño y componentes responsivos.
* **Formik** - Manejo de formularios complejos.
* **Yup** - Esquemas de validación de datos.
* **React Router Dom** - Navegación entre secciones.
* **Vercel** - Plataforma de despliegue y CI/CD.

## 📱 Vista Previa Responsiva

El proyecto ha sido diseñado específicamente para resolver problemas comunes de visualización en móviles:
* **Stepper Adaptativo:** Cambia de diseño horizontal a una columna vertical optimizada en pantallas pequeñas.
* **Navegación Fluida:** Ajustes de padding y márgenes para evitar solapamientos con la barra de navegación fija.

## 📦 Instalación y Uso

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/idavid80/react-meta.git
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install
    ```
3.  **Ejecutar en modo desarrollo:**
    ```bash
    npm start
    ```
4.  **Generar build de producción:**
    ```bash
    npm run build
    ```

## 🔧 Configuración de Calidad (Linting)

Este proyecto sigue las reglas estrictas de ESLint para asegurar un código limpio. Se han resuelto advertencias de dependencias en `useEffect` y variables no utilizadas para garantizar un despliegue exitoso en entornos de Integración Continua (CI).

## 📄 Licencia

Este proyecto fue realizado con fines educativos para el curso de **Meta Capstone Project**.

`docs: add comprehensive README with project features and tech stack`

¡Con esto tu repositorio de GitHub pasará de "un proyecto de curso" a "un proyecto de portafolio profesional"! 🚀🍋
