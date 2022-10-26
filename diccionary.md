# Tabla product

Variables: 6.

| Variable  | Descripción                                     | Type         | Default Value | Nullable | Character Set | Collation       | Privileges | Extra          |
| --------- | ----------------------------------------------- | ------------ | ------------- | -------- | ------------- | --------------- | ---------- | -------------- |
| id        | Identificador único del producto (int)          | int(11)      |               | NO       |               |                 | select     | auto_increment |
| name      | Nombre del producto (varchar)                   | varchar(255) | NULL          | YES      | utf8          | utf8_general_ci | select     |                |
| url_image | URL de la imagen asociada al producto (varchar) | varchar(255) | NULL          | YES      | utf8          | utf8_general_ci | select     |                |
| price     | Precio de venta del producto (float)            | float        | NULL          | YES      |               |                 | select     |                |
| discount  | Porcentaje de descuento del producto (int)      | int(11)      | NULL          | YES      |               |                 | select     |                |
| category  | Identificador de la categoría (int)             | int(11)      | NULL          | YES      |               |                 | select     |                |

```bash
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `url_image` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `category` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_name` (`name`),
  KEY `product_price` (`price`),
  KEY `product_discount` (`discount`),
  KEY `product_category` (`category`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=105 DEFAULT CHARSET=utf8
```

```bash
type product {
          id: number,
          name: string,
          url_image: string,
          price: number,
          discount: number,
          category: number
        }
```

# Tabla category

Variables: 2.

| Variable | Descripción                               | Type         | Default Value | Nullable | Character Set | Collation       | Privileges | Extra          |
| -------- | ----------------------------------------- | ------------ | ------------- | -------- | ------------- | --------------- | ---------- | -------------- |
| id       | Identificador único de la categoría (int) | int(11)      |               | NO       |               |                 | select     | auto_increment |
| name     | Nombre de la categoría (varchar)          | varchar(255) | NULL          | YES      | utf8          | utf8_general_ci | select     |                |

```bash
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8
```

```bash
type category {
            id: number,
            name: string,
          }
```
