# Tabla product

Variables: 6.

| Variable  | Descripción                                     |
| --------- | ----------------------------------------------- |
| id        | Identificador único del producto (int)          |
| name      | Nombre del producto (varchar)                   |
| url_image | URL de la imagen asociada al producto (varchar) |
| price     | Precio de venta del producto (float)            |
| discount  | Porcentaje de descuento del producto (int)      |
| category  | Identificador de la categoría (int)             |

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

| Variable | Descripción                               |
| -------- | ----------------------------------------- |
| id       | Identificador único de la categoría (int) |
| name     | Nombre de la categoría (varchar)          |

```bash
type category {
            id: number,
            name: string,
          }
```
