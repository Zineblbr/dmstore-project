import carts from "../db/models/cartModel.js";

export async function NewCart(req, res) {
  const cart = await carts.create(req.body);

  res.status(201).json({
    succes: true,
    cart,
  });
}
