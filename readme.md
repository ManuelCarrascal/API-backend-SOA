
# API backend

Este es el backend de una aplicación web para la gestión de artistas. La aplicación utiliza Node.js y PostgreSQL como base de datos.

---

## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando:

<code>npm install </code>

---
## Arranque del servidor

Para arrancar el servidor en modo de desarrollo, ejecuta el siguiente comando:

<code>npm run dev</code>

El servidor se ejecutará en el puerto 4200.

## Configuración del archivo .env

El archivo `.env` se utiliza para configurar las variables de entorno de la aplicación. A continuación se muestran las variables de entorno que se utilizan en este proyecto:

```
PORT=4200

DB_URL_PG=postgresql://postgres:123@localhost:5432/prueba 

SECRET_KEY=48dGvc7k8b

```
---
## Rutas de Postman

A continuación se muestran las rutas de Postman que se pueden utilizar para interactuar con la API:

- Autenticación: `localhost:4200/auth`
- Creación de artistas (método POST): `http://localhost:4200/api/artistas`
- Consulta de un artista (método GET): `http://localhost:4200/api/artistas/1`
- Consulta de todos los artistas (método GET): `http://localhost:4200/api/artistas`
- Actualización de un artista (método PUT): `http://localhost:4200/api/artistas/1`
- Eliminación de un artista (método DELETE): `http://localhost:4200/api/artistas/500`