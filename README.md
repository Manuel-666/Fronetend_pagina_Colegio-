# Modalidad Industrial — Frontend (React + Vite)

Sitio informativo de la modalidad Industrial + autenticación (login, registro,
recuperar contraseña) conectado a un backend en **AdonisJS**.

## 1. Instalación

```bash
npm install
cp .env.example .env
```

Edita `.env` y apunta `VITE_API_URL` a donde corre tu API de Adonis
(por defecto Adonis levanta en `http://localhost:3333`):

```
VITE_API_URL=http://localhost:3333
```

## 2. Ejecutar en desarrollo

```bash
npm run dev
```

## 3. Endpoints que espera el frontend en Adonis

El archivo `src/api/authService.js` llama a estas rutas bajo el prefijo `/api`:

| Método | Ruta                        | Uso                                  |
|--------|-----------------------------|---------------------------------------|
| POST   | `/api/auth/register`        | Crear usuario                         |
| POST   | `/api/auth/login`           | Iniciar sesión (devuelve `token`+`user`) |
| POST   | `/api/auth/logout`          | Cerrar sesión                         |
| POST   | `/api/auth/forgot-password` | Enviar correo de recuperación         |
| POST   | `/api/auth/reset-password`  | Establecer nueva contraseña           |
| GET    | `/api/auth/me`              | Usuario autenticado (valida el token) |

**Si tus rutas reales en Adonis tienen otros nombres o prefijos**, solo hay
que ajustar `src/api/authService.js` — el resto de la app no cambia.

### Formato de respuesta esperado

`POST /api/auth/login` y `POST /api/auth/register` deben responder:

```json
{
  "token": "oat_...",
  "user": { "id": 1, "fullName": "Ana Pérez", "email": "ana@correo.com" }
}
```

`GET /api/auth/me` debe responder:

```json
{ "user": { "id": 1, "fullName": "Ana Pérez", "email": "ana@correo.com" } }
```

### CORS en Adonis

Como el frontend (`localhost:5173`) y el backend (`localhost:3333`) corren en
puertos distintos, habilita CORS en `config/cors.ts` de tu proyecto Adonis
permitiendo el origen `http://localhost:5173`.

Este proyecto usa **Access Tokens vía header `Authorization: Bearer`**
(no cookies), así que no necesitas `credentials: true` en CORS, pero sí
que el header `Authorization` esté permitido.

## 4. Estructura del proyecto

```
src/
├── api/            → axiosClient.js, authService.js
├── components/      → Navbar, Footer, sections/ (secciones de la Home)
├── context/         → AuthContext.jsx
├── data/            → contenido.js (todo el texto del sitio, centralizado)
├── hooks/           → useAuth.js
├── layouts/         → AuthLayout.jsx
├── pages/           → Home, Login, Registro, RecuperarClave, NuevaClave
├── routes/          → AppRouter.jsx, ProtectedRoute.jsx
└── styles/          → tokens.css (sistema de diseño), site.css, auth.css
```

## 5. Editar el contenido del sitio

Todo el texto de la modalidad Industrial vive en un solo archivo:
`src/data/contenido.js`. Edítalo ahí — los componentes solo lo recorren,
no tienen texto quemado.

Pendientes marcados en el código para completar con información real:
- Respuestas del FAQ (`src/data/contenido.js` → `faq`)
- Testimonios (`src/data/contenido.js` → `testimoniosInfo`)
- Datos de contacto (`src/components/sections/Contacto.jsx`)
- Fotografías reales de la galería (`src/components/sections/Galeria.jsx`)

## 6. Próximos pasos sugeridos

- Conectar tus rutas reales de Adonis (o confirmar que coinciden con las de arriba).
- Reemplazar los placeholders de contacto, FAQ, testimonios y galería.
- Agregar rutas protegidas reales (ej. `/perfil`, `/dashboard`) usando
  `<ProtectedRoute />`, ya dejado listo en `AppRouter.jsx`.
