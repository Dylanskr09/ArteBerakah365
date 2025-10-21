# Arte Berakah 365 

## Cómo iniciar
1. Copia `.env.example` a `.env.local` y ajusta tu número de WhatsApp:
```
VITE_WHATSAPP_PHONE=57TU_NUMERO
```
2. Instala dependencias y corre el servidor de desarrollo:
```
npm install
npm run dev
```
3. Coloca imágenes en `public/mock/` con los nombres:
- `tee-purpose.jpg`
- `mug-seeds.jpg`
- `bottle-faith.jpg`

## Stack
- React + TypeScript + Vite
- React Router
- CSS puro con variables y utilidades

## Estructura
- `src/data/` → catálogo de ejemplo
- `src/pages/` → Home, Tienda, Detalle, Fundación, Testimonios, Contacto
- `src/components/` → UI reutilizable
