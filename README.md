# olive-velo

Landing page de Olive & Velo refactorizada a **React + Vite**.

## Requisitos

- Node.js 18+ (recomendado)
- npm 9+

## Ejecutar en local

```bash
npm install
npm run dev
```

Luego abre `http://localhost:5173`.

## Crear el proyecto para producción

1. Instala dependencias:

```bash
npm install
```

2. Genera el build optimizado:

```bash
npm run build
```

Esto crea la carpeta `dist/` con los archivos estáticos listos para producción (HTML, CSS, JS y assets optimizados).

3. (Opcional) Verifica el build localmente:

```bash
npm run preview
```

4. Publica el contenido de `dist/` en tu servidor (Nginx, Apache, Netlify, Vercel, etc.).

> Importante: en producción debes servir `dist/` con un servidor HTTP, no abrir el archivo `index.html` directamente desde el sistema de archivos.

## Comandos útiles

```bash
npm run dev      # entorno de desarrollo
npm run build    # build de producción
npm run preview  # previsualizar build de producción
```
