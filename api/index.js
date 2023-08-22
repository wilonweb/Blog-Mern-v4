const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const app = express();
const User = require("./models/User");
const Post = require("./models/Post");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/" });
const fs = require("fs");

const salt = bcrypt.genSaltSync(10);
const secret = "joijoifjofdijfdoidj64654";

// Activation de la gestion des requêtes cross-origin et du traitement du JSON
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());

//
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));

// Connexion à la base de données MongoDB
mongoose.connect(
  "mongodb+srv://wilonweb:dCC7R5eSXaXcn07Z@cluster0.tfjisx6.mongodb.net/?retryWrites=true&w=majority"
);

// Route pour l'inscription d'un utilisateur
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

// Route pour vérifier que le username = password crypté dans la page login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    // logged in
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).json({
        id: userDoc._id,
        username,
      });
    });
    //res.json()
  } else {
    // not logged in
    res.status(400).json("wrong credentials");
  }
});

// Requete GET afin de recevoir des information du profil
app.get("/profile", (req, res) => {
  const { token } = req.cookies; // extrait la propriété token de l'objet req.cookies et d'assigner sa valeur à la variable token.

  // Utilise la méthode "verify" du module "jwt" pour vérifier la validité du jeton (token).
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err; // Si une erreur survient pendant la vérification du jeton, lance une exception avec l'erreur.
    res.json(info); // Si la vérification réussit, renvoie les informations du profil (contenues dans "info") au format JSON en réponse.
  });
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

//Utilisation du Middleware fournis par Multer pur uploader les fichiers soumis depuis le formulare createNewPost
app.post("/post", uploadMiddleware.single("file"), async (req, res) => {
  const { originalname, path } = req.file; // Extraire les propriétés "originalname" et "path" du fichier soumis
  const parts = originalname.split("."); // Séparer le nom du fichier en parties en utilisant le point comme séparateur
  const ext = parts[parts.length - 1]; // Extraire l'extension du fichier à partir des parties
  const newPath = path + "." + ext; // Construire le nouveau chemin en ajoutant l'extension au chemin d'origine
  fs.renameSync(path, newPath); // Construire le nouveau chemin en ajoutant l'extension au chemin d'origine

  const { token } = req.cookies; // extrait la propriété token de l'objet req.cookies et d'assigner sa valeur à la variable token.
  // Utilise la méthode "verify" du module "jwt" pour vérifier la validité du jeton (token).
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err; // Si une erreur survient pendant la vérification du jeton, lance une exception avec l'erreur.
    const { title, summary, content } = req.body;
    const postDoc = await Post.create({
      title,
      summary,
      content,
      cover: newPath,
      author: info.id,
    });
    res.json(postDoc); // Répondre avec l'extension du fichier dans un objet JSON
  });
});

app.get("/post", async (req, res) => {
  res.json(
    await Post.find()
      .populate("author", ["username"])
      .sort({ createdAt: -1 })
      .limit(20)
  );
});

app.listen(4000);
