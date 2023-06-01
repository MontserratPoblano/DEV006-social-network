# Community of Buildings

## Índice
> 
[1. Definición del producto](#definición-del-producto)
> > 
  [1.1 Introducción](#introduccion)
  [1.2 Objetivos](#objetivos)
  [1.3 Alcance](#alcance)
> 
[2. Diseño de la interfaz de usuario](#diseño-de-la-interfaz-de-usuario)
> > 
 [2.1 Prototipo de baja calidad](#prototipo-de-baja-calidad)
[2.2 Prototipo de alta calidad](#prototipo-de-alta-calidad)
> 
[3. Comportamiento de la interfaz](#comportamiento-de-la-interfaz)
> 
[4. Test de usabilidad](#test-de-usabilidad)
> 
[5. Página desplegada](#pagina-desplegada)

## Definición del producto

#### Introducción 
**Community of Buildings** es una red social que nace desde los tiempos de pandemia, donde pudimos percibir mucho sobre nuestro entorno que estando en nuestras narices no lo veíamos. Todas aquellas personas que vivimos en comunidad, ya sea edificios o comunidad de casas, no nos damos cuenta que a veces la necesidad que necesitamos cubrir puede estar más cerca de lo que pensamos.

#### Objetivos 
Es por ello que Community of Buildings quiere aportar a esta vida en comunidad, generando unión con los vecinos, comunicándose a través de mensajes en un muro para poder ofrecer a la venta, en arriendo, o bien regalando cualquier bien o servicio y dejarlo a disposición en su colectivo. Asi como también si alguna persona busca algo en específico también lo puede consultar a través del mismo muro. En resumen, la aplicación permite ofrecer y solicitar servicios, y a su vez permite crecer con nuestra comunidad de una forma amigable y siempre manteniendo sana convivencia.

#### Alcance
Esta aplicación responsive permite acceder desde cualquier dispositivo a partir en pantallas de 370 a 1200 px. Sus principales funciones son:
- Registro de usuarios y autenticación.
- Publicación de mensajes en el feed.
- Dar "me gusta" a las publicaciones de otros usuarios 
- Editar y eliminar sus publicaciones.


## Diseño de la interfaz de usuario

#### Historias de usuario 
1. HU1 Home
Permite al usuario poder iniciar sesión o dar click en SignUp para poder ingresar al formulario de registro. Iniciando sesión le permitirá acceder a la plataforma de la comunidad.

2. HU2 Sign Up
Permite al usuario registrarse en la comunidad. Debe ser un correo electrónico válido, además de una contraseña con mínimo 6 caracteres y se comprueba que en ambos campos de contraseña sean iguales, en caso contrario lanza error.

3. HU3 Board
El usuario puede publicar post, editar o eliminar sus publicaciones, y puede dar like a publicaciones del mismo o de otros usuarios. 

#### Prototipos de baja fidelidad
1.  HU1 Home. ![HU1!](/src/images/HU1_Home_Baja.png)
2. HU2 Sign Up.![HU2!](/src/images/HU2_Sign_Up_Baja.png)
3.  HU3 Board. ![HU3!](/src/images/HU3_Board_Baja.png)

Puedes revisar nuestro prototipo de baja completo en el siguiente link:
https://www.figma.com/file/DbGCvi8ILKpiRgfWGpCAyj/Prototipo-baja?type=whiteboard&node-id=1%3A425&t=31M1whLxKHmzc91F-1

#### Prototipos de alta fidelidad
1.  HU1 Home. ![HU1!](/src/images/HU1.0_ALTAFIDELIDAD.png)
2. 	HU2 Sign Up.![HU2!](/src/images/HU2.0_ALTAFIDELIDAD.png)
3.  HU3 Board. ![HU3.0!](/src/images/HU3.0_ALTAFIDELIDAD.png) ![HU3.1!](/src/images/HU3.1_ALTAFIDELIDAD.png) ![HU3.2!](/src/images/HU3.2_ALTAFIDELIDAD.png)

Puedes revisar nuestro prototipo de alta completo en el siguiente link:
https://www.figma.com/file/PDQOkyGt5pxuF1BXv4bpxa/Proto-alta-(trabajo-entre-las-3)?type=design&node-id=34%3A602&t=bVdXHR60ll58zuZK-1


## Comportamiento de la interfaz de usuario 
- [x] Login con Firebase:
    - [x] Para el login y las publicaciones en el muro se utiliza Firebase
    - [x] Creación de cuenta de acceso y autenticación con cuenta de correo y contraseña, y también con una cuenta de Google.
- [x] Validaciones:
    - [x] Solamente se permite el acceso a usuarios con cuentas válidas.
    - [x] No pueden haber usuarios repetidos.
    - [x] La cuenta de usuario debe ser un correo electrónico válido.
    - [x] Lo que se escriba en el campo (input) de contraseña debe ser secreto.
- [x] Comportamiento:
    - [x] Al enviarse el formulario de registro o inicio de sesión, debe validarse.
    - [x] Si hay errores, se deben mostrar mensajes descriptivos para ayudar al usuario a corregirlos.
- [x] Muro/timeline
    - [x] Al publicar, se debe validar que exista contenido en el input.
    - [x] Al recargar la aplicación, se debe verificar si el usuario está logueado antes de mostrar contenido.
    - [x] Poder publicar un post.
    - [x] Poder dar y quitar like a una publicación. Máximo uno por usuario.
    - [x] Llevar un conteo de los likes.
    - [x] Poder eliminar un post específico.
    - [x] Pedir confirmación antes de eliminar un post.
    - [x] Al dar click para editar un post, debe cambiar el texto por un input que permita editar el texto y luego guardar los cambios.
    - [x] Al guardar los cambios debe cambiar de vuelta a un texto normal pero con la información editada.
    - [x] Al recargar la página debo de poder ver los textos editados.

## Test de usabilidad
Recopilamos información de compañeras y familiares, percibiendo lo siguiente:
- Botón google: según la norma de marca, se recomienda utiliza la tipografía y logotipo entregado por ellos en su página oficial
- Los botones rojos son muy llamativos, cambiar por un color mas acorde a paleta de colores utilizada. Recordar que el rojo se utiliza más para advertencias o negaciones.
- Registro: agregar algunos comentarios en la interfaz sobre la validación de contraseñas
-   Darle el mismo ancho a los botones en home
- Agregar tamaño de tipografía 


## Página desplegada
Puedes ver una demostración en vivo de la página [aquí](https://social-network-6d91d.web.app/).