import { Login, Register } from "../controllers/userController.js";

function UserRoute(server) {
  server.post("/register", Register);
  server.post("/login", Login);
}

export default UserRoute;
