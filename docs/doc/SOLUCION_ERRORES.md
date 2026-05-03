# Solución de Errores - Syrtix

Si al correr `pnpm run dev` ves errores 404 buscando archivos `.tsx` o errores de Service Worker / Workbox:

1. Abre el navegador e inspecciona la página (**F12**).
2. Ve a la pestaña **Application** (Aplicación).
3. Selecciona **Storage** en el menú izquierdo.
4. Pulsa el botón **Clear site data** (asegúrate de que esté marcado "Unregister service workers").
5. Haz un **Hard Refresh** con `Ctrl + F5`.

Esto limpia el caché persistente del navegador de otros proyectos viejos.
