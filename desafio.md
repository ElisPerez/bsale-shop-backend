# El desafío consiste en:

- Construir una tienda online.
- Utilizar la base de datos que se encuentra en la hoja 2 de éste desafío..
- Desplegar productos agrupados por la categoría a la que pertenecen.
- Generar por separado backend (API REST) y frontend (aplicación que la
  consuma)
- Agregar un buscador, el cual tiene que estar implementado a nivel de servidor,
  mediante una Api Rest cuyo lenguaje y framework puede ser de libre elección.
  Es decir, los datos de productos deben llegar filtrados al cliente.
- Desarrollar la aplicación de cliente con vanilla javascript/Vanillajs.
- ¿Puedo usar react y similares? La respuesta es NO, sólo usar vanilla javascript/
  Vanillajs. Si lo desarrollas con react o similares, quedará el ejercicio sin efecto.
- ¿Puedo usar librerías o componentes específicos?, Si, tales como; boopstrap,
  material, Jquery, entre otros.
- Disponibilizar la aplicación en un hosting como a modo de ejemplo, puede ser;
  Heroku, Netlity, Aws u otro.
- Disponibilizar el código en Github.
  Si quieres agregar algo más, es opcional, tal como, un carrito de compra, filtros por
  atributo, ordenar productos y paginación. Es tú decisión!!

BASE DE DATOS
Accede a la base de datos. Es de uso obligatorio
● Motor: MySQL
● Host:
● Usuario:
● Contraseña:
● Nombre db:

Tip para la conexión: El servidor está configurado para que todas aquellas
conexiones inactivas por más de 5 segundos sean abortadas, por lo que se requiere
controlar la reconexión.
Tablas

# product

- id Identificador único del producto (int)
- name Nombre del producto (varchar)
- url_image URL de la imagen asociada al producto (varchar)
- price Precio de venta del producto (float)
- discount Porcentaje de descuento del producto (int)
- category Identificador de la categoría (int)

# category

- id Identificador único de la categoría (int)
- name Nombre de la categoría (varchar)
