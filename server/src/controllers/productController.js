import products from "../db/models/productModel.js";

export async function NewProduct(req, res) {
  const product = await products.create(req.body);

  res.status(201).json({
    succes: true,
    product,
  });
}

export async function ProductItems(req, res) {
  try {
    const foundProducts = await products.find();

    res.status(200).json({
      success: true,
      products: foundProducts,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server error" });
  }
}

export async function getProductById(req, res) {
  const { id } = req.params;

  try {
    const foundProduct = await products.findById(id);
    if (!foundProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({
      success: true,
      product: foundProduct,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server error" });
  }
}

export async function SearchProducts(req, res) {
  const { query } = req.query;

  try {
    const foundProducts = await products.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
      ],
    });

    res.status(200).json({
      success: true,
      products: foundProducts,
    });
  } catch (error) {
    console.error("Erreur lors de la recherche de produits :", error);
    res.status(500).json({ error: "Internal Server error" });
  }
}
