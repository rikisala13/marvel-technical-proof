Esta prueba técnica está realizada en **MERN** (Mongo + Express + React+ Node.) Y atacando la API de Marvel. Dadas las exigencias de la prueba se procedió a hacer un Frontend funcional que atacara en un principio directamente a la API de Marvel y posteriormente una vez montado el Backend (middleware) cambiar los endpoints del frontend al Backend(middleware) y que el frontend atacara a ese Backend.

El segundo Backend tambien desarrollado en Node y atacando a una base de datos de Mongo, es el que se encarga de manejar la información de la web.

***
Debido a la limitación de tiempo , sólo se pudo implementar un frontend completamente funcional, con autenticación por medio de Auth0 con google, las rutas de la Aplicación precisan de esa autenticación para poder ser mostradas.

Una vez autenticados vemos una lista general de 10 personajes por página que nos proporciona la API de Marvel. si Clicamos en el boton de **Saber mas** encontramos una vista detallada del personaje, con su descripción y una lista de los comics en los que aparece junto con su portada.

Dejando ya preparado el entorno para el botón de "ME GUSTA " a falta de la conexión con el Backend que lo gestiona la lógica principal estaría implementada.

También como NEXT STEPS esta preparado el Backend para aceptar peticiones de los ME GUSTA, COMENTARIOS, LA PUNTUACIÓN (que da el Usuario) y la PUNTUACIÓN GENERAL. 
***
**Frontend** quedo testeado con mas de un 50% de coverage y tambien en el **backend** se dejaron testeados los controllers. 
