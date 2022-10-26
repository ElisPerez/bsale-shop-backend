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
type category {
            id: number,
            name: string,
          }
```
