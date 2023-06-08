import { NewCart } from "../controllers/cartController.js";

function CartRoute(server) {
  server.post("/carts/new", NewCart);
}

export default CartRoute;
