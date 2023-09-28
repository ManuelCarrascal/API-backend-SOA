
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
PORT=<puerto>

DB_URL_PG=postgresql://<usuario>:<contraseña>@localhost:5432/<nombre_de_la_base_de_datos> 

SECRET_KEY=<tu_secret_key>

```
---
## Rutas de Postman

A continuación se muestran las rutas de Postman que se pueden utilizar para interactuar con la API:

- Autenticación: `localhost:4200/auth?usuario=<usuario>&contrasena=<contrasena>`
<!-- Nota: Esta ruta necesita enviar por parametro usuario y contraseña reemplaza <usuario>, <contrasena> por los datos correspondientes -->
- Creación de artistas (método POST): `http://localhost:4200/api/artistas`
<!-- Nota: Recuerda enviar todos los campos en el body que son requeridos para poder ingresar un nuevo usuario.-->
- Consulta de un artista (método GET): `http://localhost:4200/api/artistas/<id>`
<!-- Nota: Esta ruta necesita enviar por parametro el id del artista a consultar, reemplaza <id> por el id correspondiente -->
- Consulta de todos los artistas (método GET): `http://localhost:4200/api/artistas?page=<page>&pageSize=<pageSize>`
<!-- Nota: Esta ruta necesita enviar por parametro page y pageSize reemplaza <page> y <pageSize> por los datos correspondientes para lograr una paginacion.-->
- Actualización de un artista (método PUT): `http://localhost:4200/api/artistas/<id>`
<!-- Nota: Esta ruta necesita enviar por parametro el id del artista a consultar, para luego poder actualizar, reemplaza <id> por el dato correspondiente -->
- Eliminación de un artista (método DELETE): `http://localhost:4200/api/artistas/<id>`
<!-- Nota: Esta ruta necesita enviar por parametro el id del artista a consultar, para luego poder eliminar, reemplaza <id> por el dato correspondiente -->
---
## Base de datos

La base de datos postgreSQL utilizada por la aplicacion se llama `prueba`. Puedes montar una copia de esta db utilizando el archivo `db.sql` que se encuentra en la raiz del proyecto.
