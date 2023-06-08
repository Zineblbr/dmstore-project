import users from "../db/models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function Register(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        field: !email ? "email" : "password",
        message: "Ce champ est obligatoire",
      });
    }
    // console.log(res.data);

    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;
    if (!password_pattern.test(password)) {
      return res.status(400).json({
        field: "password",
        message:
          "le mot de passe avoir 4 à 8 caractères et doit contenir des chiffres, des lettres minuscules et majuscules.",
      });
    }
    // console.log(res.data);
    const userExists = await users.findOne({ email });
    if (userExists) {
      return res
        .status(409)
        .json({ field: "email", message: "Cet email est déjà enregistré." });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await users.create({ email, password: hashedPassword });
      return res.status(201).json({
        message: "Utilisateur créé avec succès.",
        user: {
          _id: user._id,
          email: user.email,
        },
      });
    }
    // console.log(res.data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Une erreur s'est produite lors de l'inscription !" });
  }
}

export async function Login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        field: !email ? "email" : "password",
        message: "Ce champ est obligatoire",
      });
    }
    // console.log(res.data);

    const user = await users.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Authentification échouée." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Authentification échouée." });
    }

    const token = jwt.sign({ id: user._id }, process.env.PRIVATE_KEY, {
      expiresIn: "2h",
      algorithm: "RS256",
    });
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Une erreur s'est produite lors de la connexion !" });
  }
}
