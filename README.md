# Sin dienetes y a bocados BLW

## [App!](https://sindientesblw.netlify.app/)

![App Logo](your-image-logo-path-or-name)

## DESCRIPCION

Este proyecto presenta una colección de recetas adaptadas para Baby Led Weaning (BLW), incentivando la independencia y exploración alimentaria en bebés. Proporcionamos orientación práctica para que los padres faciliten una transición suave hacia la alimentación sólida, promoviendo así un desarrollo saludable en sus pequeños.


#### [Repositorio del cliente aquí](https://github.com/meritxellavila/BLWCliente)
#### [Repositorio del servidor aquí]](https://github.com/meritxellavila/ServerBLW)

# Tecnologías utilizadas

-Tecnologias utilizadas HTML, CSS, Javascript, React, axios, React Context,Bootstrap, node, express, mongoDB,Postman, mongoDB Compass etc.

## Funcionalidades pendientes

**NOTE -** Agregar favoritos.


# Estructura del cliente


## Historias de usuarios

-**registrarse** - Como usuario quiero registrarme en la página web para poder ver todas mis recetas, editarlas, borrarlas...
-**iniciar sesión** -  como usuario, quiero poder iniciar sesión en la página web para poder volver a mi cuenta
-**cerrar sesión** -  como usuario, quiero poder cerrar sesión en la página web para asegurarme de que nadie acceda a mi cuenta.
-**editar usuario** - como usuraio quiero poder editar mis datos de usuario, cambiar el corro ..
-**perfil de usuario** -como usuario quiero poder ver mi perfil de usaurio con los datos que tengo guardados.

- **404** - Si el usuario ingresa una URL que no coincide con ninguna de las rutas definidas, se renderizará el componente NotFound.
- **500** - Un error 500 puede ocurrir si hay un problema en el servidor al manejar una solicitud específica. 
- **homepage** - Como usuario, quiero poder acceder a la página de inicio para ver de qué se trata la aplicación e iniciar sesión y registrarme.


- **subir receta** - Como usuario quiero añadir una nueva receta con sus pasos, imagen...
- **editar receta** - Como usuario quiero modificar mis recetas agregadas,para poder cambiar alguno de sus detalles, como ingredientes,pasos...
- **eliminar receta** - Como usuario, quiero poder  eliminar una de mis recetas, que ja no estoy interesado en mostrar.
- **lista de recetas** - quiero poder ver una lista de todas mis recetas.
-**detalles de receta** - como usaurio quiero poder ver todos los detalles de una receta, pasos, ingredientes...
- **opiniones** - Como usuario, registrado quiero poder comentar las recetas y también poder ver los comentarios de otros usaurios sobre mis recetas.
-**buscador** - como usuario quiero poder buscar una receta en concreto. 


## Client Routes

**NOTE -** Use below table to list your frontend routes

## React Router Routes (React App)
| Path                      | Page            | Components        | Permissions              | Behavior                                                      |
| ------------------------- | ----------------| ----------------  | ------------------------ | ------------------------------------------------------------  |
| `/`                       | Home            |                   | public                   | Home 
page                                                     |
| `/registro`                 | Registro         |                   | anon only `<IsAnon>`     | Formulario de registro, enlace para iniciar sesión, navegar a la página de inicio después del registro
| `/iniciarSesion`                  | Acceso        |                   | anon only `<IsAnon>`     | Formulario de inicio de sesión, enlace para registrarse, navegue a la página de inicio después de iniciar sesión
| `/perfilDeUsuario`                | Perfil        | EditProfile       | user only `<IsPrivate>`  | Informacion el usuario con session iniciada            |
| `/AñadirReceta/`             | lista de Recetas     | recetas | user only `<IsPrivate>`  | Añadir recetas nuevas    |
| `/Editar recetas/`             | editar mis Recetas     |  recetas | user only `<IsPrivate>`  | Modificar mis propias recetas  |                               
| `/detallesDeReceta/`             | detalles de Recetas     |  recetas | user only `<IsPrivate>`  | Informacion detallada de la receta.|

| `/listarRecetasUsuario/`             | mis propias Recetas     |  recetas | user only `<IsPrivate>`  | Poder ver un listado de todas mis recetas  |   


                            
## Otros Componentes

- Navbar


## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.verify()

- Backlog Service
  - receta.filtrar(type, status)
  - receta.detalles(id)
  - receta.añadir(id)
  - receta.eliminar(id)
  - receta.editar(id)
  
- External API
  - gameApi.details
  - gameApi.list
  
## Context

- auth.context
- theme.context
  
## Links

### Desarrolladora

[Desarrolladora Meri](https://github.com/meritxellavila)



### Proyecto

[Link Repositorio  Cliente](https://github.com/meritxellavila/BLWCliente)

[Link Repositorio Servidor](https://github.com/meritxellavila/ServerBLW)

[Link Despliegue](https://sindientesblw.netlify.app/)

### Excalidraw

[Link para excalidraw](https://excalidraw.com/#json=XpwsBgkx4CfmtTI6AHuwU,BYpUT6Yha0PCzm9U8tclZA)


### Prezi

[Prezi Link](https://prezi.com/p/edit/kvkjjnqgqeyh/)