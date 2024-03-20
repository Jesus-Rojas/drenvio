1. /products: This route should return an array containing only the products that are
currently in stock.
2. /price/{user_id}/{nombre_producto}: Some clients in this business have special
pricing for certain brands. This route should return the special price for the given client and
brand, if available. If the client doesn't have a special price for the brand, the route should
return the base price.