import ProductRoute from "./product.route.js";
import CartRoute from "./cart.route.js";
import UserRoute from "./user.route.js";

function Routes(server) {
  ProductRoute(server);
  CartRoute(server);
  UserRoute(server);
}

export default Routes;
