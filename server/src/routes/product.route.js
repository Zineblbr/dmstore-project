import {
  NewProduct,
  SearchProducts,
  ProductItems,
  getProductById,
} from "../controllers/productController.js";

function ProductRoute(server) {
  server.post("/products/new", NewProduct);
  server.get("/products/search", SearchProducts);
  server.get("/products", ProductItems);
  server.get("/products/:id", getProductById);
}

export default ProductRoute;
