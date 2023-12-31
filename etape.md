## Présentation du Repo

Développement d'une application de blog full stack en utilisant la stack MERN (MongoDB, Express, React et Node) "from scratch".

D'après le cours YouTube :\
[Build a Fullstack Blog App using MERN (mongo, express, react, node)](https://www.youtube.com/watch?v=xKs2IZZya7c&t=10566s)\
@ [Coding With Dawid](https://www.youtube.com/@CodingWithDawid)

## Liste des commandes

- **Commandes**
  - /client : `yarn start`
  - /api : `nodemon index.js`

Pour se Login
user : test
password : test

## Notes sur les connaissances à revoir ou à vérifier

- S'habituer à la syntaxe des callbacks.
- Créer un exercice sur l'utilisation du `useState` permettant de créer des formulaires interactifs où les changements apportés par l'utilisateur sont modifié en temps réel dans le state.
- Créer un exercice sur l'utilisation du `useEffect` permettant de créer un événement quand l'état d'un composant est mis à jour\
  **Exemple** :\
  _garder le cookie qui stocke le JWT pour conserver les informations de l'utilisateur à chaque page (à vérifier comment fonctionne le system)_.
- Les opérations `register`, `login` et `logout` permettent de communiquer avec le protocole HTTP pour écouter des requêtes GET, POST, UPDATE et DELETE depuis un endpoint pour déclencher un événement en conséquence.\
  **Exemple** :\

  - Stocker ou récupérer une information dans une base de données (`register`).
  - Vérifier une information dans une base de données (`login`).
  - Effacer du contenu dans un cookie (`logout`)._Question : pourquoi la requête est-elle de type POST dans ce cas ?_
  - Verifier l'implémentation du userContext
  - Revoir la création d'un model pour écrire des donnée sur mongoDb.

1. **Note sur le use state**

**`setRedirect`** fonction React prédéfinis qui contrôle la redirection d'une page vers une autre

```js
import React, { useState } from "react";

function RedirectExample() {
  const [redirect, setRedirect] = useState(false);

  const handleRedirect = () => {
    setRedirect(true); // Active la redirection
  };

  if (redirect) {
    // Si la variable redirect est vraie, redirige vers une autre page
    return <Redirect to="/nouvelle-page" />;
  }

  return (
    <div>
      <button onClick={handleRedirect}>Rediriger</button>
    </div>
  );
}

export default RedirectExample;
```

2. **Note sur le useEffect**

3. **Note sur le userContext**

---

![MindMap Context](mindmap/React-Context.png)

React Context Api se compose de deux éléments principaux : **User Context Provider**(`client/src/NameContext.js`) et les **Context Consumers**(qui sont les composant enfant qui récéptionne les donnée englobé par le context).

**User Context Provider** : C'est un composant parent qui contient les données que vous souhaitez partager. Il crée un "contexte" et fournit des valeurs aux composants enfants qui en ont besoin.

**Context Consumers** : Ce sont les composants enfants qui souhaitent accéder aux données fournies par le contexte. Ils utilisent la fonction useContext (ou la méthode this.context dans les composants de classe) pour accéder aux valeurs du contexte.

Chaque contexte est utilisé pour des informations qui sont globales pour toute l'application, telles que les données de connexion de l'utilisateur, les thèmes, les langues, etc.\
Il se déclare dans `client/src/NameContext.js` s'initialise dans une `const` qui servira d'argument au hook `useContext()` pour gérer les contextes et partager des données entre les composants de manière efficace.

⚠️ Chaque composant provider englobes les routes dans `App.js` pour être fonctionel

## Initialisation du projet

On commence par créer deux dossier

- client
- api

Ensuite on navigue dans le dossier client et on installe `yarn create react-app .`
puis lon lance le server avec `yarn start`

modifier le code dans `client\src\App.js`
en insérant seuelemt une `return <div>test</div>;`

### Creation du template de la page d'acceuil.

On créer le template html avec le header
et une liste d'article au format html
dans

`client\src\App.js`

```
import "./App.css";

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">
          My Blog
        </a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
      <div className="post">
        <div className="image">
          <img
            src="https://techcrunch.com/wp-content/uploads/2022/12/lawnmower-Large.jpeg?w=1390&crop=1"
            alt=""
          />
        </div>
        <div className="texts">
          <h2>Full-house battery backup coming later this year</h2>
          <p className="info">
            <a href="" className="author">
              WilouGarou
            </a>
            <time>2023-08-10 16:45</time>
          </p>
          <p className="summary">
            Today at its special launch event, home backup power giant EcoFlow
            launched a flurry of new products, including a “Whole-Home Backup
            Power Solution.”
          </p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img
            src="https://techcrunch.com/wp-content/uploads/2022/12/lawnmower-Large.jpeg?w=1390&crop=1"
            alt=""
          />
        </div>
        <div className="texts">
          <h2>Full-house battery backup coming later this year</h2>
          <p className="info">
            <a href="" className="author">
              WilouGarou
            </a>
            <time>2023-08-10 16:45</time>
          </p>
          <p className="summary">
            Today at its special launch event, home backup power giant EcoFlow
            launched a flurry of new products, including a “Whole-Home Backup
            Power Solution.”
          </p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img
            src="https://techcrunch.com/wp-content/uploads/2022/12/lawnmower-Large.jpeg?w=1390&crop=1"
            alt=""
          />
        </div>
        <div className="texts">
          <h2>Full-house battery backup coming later this year</h2>
          <p className="info">
            <a href="" className="author">
              WilouGarou
            </a>
            <time>2023-08-10 16:45</time>
          </p>
          <p className="summary">
            Today at its special launch event, home backup power giant EcoFlow
            launched a flurry of new products, including a “Whole-Home Backup
            Power Solution.”
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
```

`client\src\App.css`

```
body {
  color: #222;
}
img {
  max-width: 100%;
}
main {
  padding: 10px;
  max-width: 700px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 50px;
  align-items: center;
}
header a {
  text-decoration: none;
  color: inherit;
}

header a.logo {
  font-weight: bold;
  font-size: 1.5rem;
}
header nav {
  display: flex;
  gap: 15px;
}

div.post {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 20px;
  margin-bottom: 30px;
}

div.post div.texts h2 {
  margin: 0;
  font-size: 1.8rem;
}

div.post p.info {
  margin: 6px 0;
  color: #888;
  font-size: 0.7rem;
  font-weight: bold;
  display: flex;
  gap: 10px;
}

div.post p.info a.author {
  color: #333;
}
div.post p.summary {
  margin: 10px 0;
  line-height: 1.4rem;
}
```

### Creation du routing avec react-router-dom

`yarn add react-router-dom`

On créer un composant `Post.js` et `Header.js`
Dans `client\src\index.js` on importe `import { BrowserRouter } from "react-router-dom";` afin de faire passer le Browser Router

```js
<React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</React.StrictMode>
```

On a egalement replacer dans `client\src\Header.js` les lien `<a href></a>` et `<Link to></Link>`

Creation du composant `Layout` contenant le header (menu) et apellant le composant prédéfinis `Outlet` fournis par la bibliothèque `react-router-dom`

Se composant permettra de transformer le composant `Layout` en route parent contenant des route enfant définissant des url avec l'élement quelles afficheront.

```js
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}
```

### Authentification

on installe un serveur `yarn add express` dans le dossier `api` et dans `api\index.js`

```js
const express = require("express");

const app = express();

app.get("/test", (req, res) => {
  res.json("test ok2");
});

app.listen(4000);
```

on install `yarn global add nodemon`
et on lance `nodemon index.js`
Puis on vérifie que tout fonctionne dans `localhost:4000/test`

Ensuite je re définis le code dans `api\index.js` pour faire passer une valeur post

```js
const express = require("express");
const app = express();

app.post("/register", (req, res) => {
  res.json("test ok5");
});

app.listen(4000);
```

Et dans `client\src\Pages\RegisterPage.js`
on créer une fonction async await afin d'écouter l'evenement taper dans le formulaire en utilisant hook `useState` afin de mettre a jour la valeur de l'etat a chaque fois qu'il est appelé.

#### Utilisation du hook `useState` en React

1. **Importation du hook :** Importez le hook `useState` depuis la bibliothèque React.

   ```jsx
   import { useState } from "react";
   ```

2. **Déclaration des variables d'état :** Utilisez le hook `useState` pour déclarer des variables d'état et les fonctions associées pour les mettre à jour. Initialisez-les avec des valeurs par défaut.

   ```jsx
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   ```

   Dans cet exemple, `username` et `password` sont les variables d'état, et `setUsername` et `setPassword` sont les fonctions pour les mettre à jour.

3. **Utilisation des variables d'état :** Utilisez les variables d'état dans votre composant. Dans cet exemple, elles sont utilisées comme valeurs pour les champs de saisie.

   ```jsx
   <input
     type="text"
     placeholder="username"
     value={username}
     onChange={(ev) => setUsername(ev.target.value)}
   />
   <input
     type="password"
     placeholder="password"
     value={password}
     onChange={(ev) => setPassword(ev.target.value)}
   />
   ```

   Ici, la valeur du champ de saisie est liée à la variable d'état correspondante (`username` ou `password`), et la fonction `onChange` met à jour cette variable d'état en fonction des modifications dans le champ de saisie.

4. **Utilisation des variables d'état dans la logique :** Utilisez les variables d'état dans votre logique, comme dans la fonction `register` pour obtenir les valeurs actuelles de `username` et `password`.

   ```jsx
   async function register(ev) {
     ev.preventDefault();
     await fetch("http://localhost:4000/register", {
       method: "POST",
       body: JSON.stringify({ username, password }),
       headers: { "Content-Type": "application/json" },
     });
   }
   ```

5. **Retour du composant :** Utilisez les variables d'état et la logique dans le rendu de votre composant.

   ```jsx
   return (
     <form className="register" onSubmit={register}>
       <h1>Register</h1>
       {/* ... */}
     </form>
   );
   ```

#### Ajouter le CORS

CORS permet de protéger les utilisateurs en empêchant les sites malveillants d'accéder aux ressources d'autres sites sans autorisation.

On installe donc dans `api` le paquet `yarn add cors` puis on l'initialise dans `api\index.js`

#### Gestionnaire de Requêtes POST sur le Serveur (Node.js avec Express)

Le code suivant définit un gestionnaire de requêtes POST pour le serveur Express. Lorsqu'une requête POST est reçue à l'URL "/register", ce gestionnaire est activé pour traiter la demande.

```javascript
app.post("/register", (req, res) => {
  // Gestionnaire pour les requêtes POST à /register

  const { username, password } = req.body;
  // Extraction des données de la requête POST depuis le corps (body) de la requête
  // Cela suppose que le corps de la requête est au format JSON avec les propriétés "username" et "password"

  res.json({ requestData: { username, password } });
  // Envoi d'une réponse JSON contenant les données extraites de la requête
  // Verifier dans le devTools -> network -> preview OU payload
});
```

#### Création d'un projet mongoDb

On créer un nouveau projet mongoDb
on telecharge dans `api` le paquet `yarn add mongoose`
on créer le dossier `api/models`
On définis le fichier `api\models\User.js`

```js
// Importe la bibliothèque "mongoose" qui permet de travailler avec des bases de données MongoDB.
const mongoose = require("mongoose");

// Utilise "Schema" et "model" depuis la bibliothèque "mongoose".
const { Schema, model } = mongoose;

// Crée un nouveau schéma (plan) pour définir comment les données des utilisateurs seront stockées dans la base de données.
const UserSchema = new Schema({
  username: { type: String, required: true, min: 4, unique: true },
  password: { type: String, required: true },
});

// Crée un modèle (une sorte de modèle de données) basé sur le schéma défini pour les utilisateurs.
const UserModel = model("User", UserSchema);

// Exporte le modèle de l'utilisateur pour pouvoir l'utiliser dans d'autres parties du code.
module.exports = UserModel;
```

Le code commence par importer la bibliothèque "mongoose", qui aide à communiquer avec une base de données MongoDB (un type de base de données).

Ensuite, il extrait deux choses spécifiques de "mongoose" : Schema (schéma) et model (modèle). Un schéma définit comment les données seront organisées dans la base de données, et un modèle est une façon pratique de gérer ces données.

Le code crée un schéma pour définir comment les informations des utilisateurs seront stockées. Par exemple, il spécifie que chaque utilisateur a un "username" (nom d'utilisateur) qui doit avoir au moins 4 caractères, et un "password" (mot de passe) qui est obligatoire.

Ensuite, le code crée un modèle d'utilisateur basé sur le schéma défini. Cela signifie qu'il crée une sorte de "forme" pour les données d'utilisateur qui seront stockées dans la base de données.

Enfin, le modèle d'utilisateur est exporté, ce qui signifie que d'autres parties du code peuvent l'utiliser pour ajouter, obtenir, mettre à jour ou supprimer des informations sur les utilisateurs dans la base de données.

En résumé, ce code définit comment les informations des utilisateurs sont organisées et stockées dans une base de données MongoDB à l'aide de la bibliothèque "mongoose".

---

2e explication

#### Explication du Code : Modèle Mongoose pour les Utilisateurs

```js
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// Définition du schéma utilisateur
const UserSchema = new Schema({
  username: { type: String, required: true, min: 4, unique: true },
  password: { type: String, required: true },
});

// Création du modèle utilisateur à partir du schéma
const UserModel = model("User", UserSchema);

// Exportation du modèle pour une utilisation externe
module.exports = UserModel;
```

Ce code illustre la définition d'un modèle Mongoose pour les utilisateurs, qui peut être utilisé pour interagir avec la base de données MongoDB. Voici une explication ligne par ligne :

Importation des modules : Les modules mongoose, Schema et model sont importés depuis la bibliothèque Mongoose. Ils seront utilisés pour définir le schéma du modèle et créer le modèle lui-même.

Définition du schéma utilisateur : Un schéma est défini en utilisant new Schema({...}). Dans ce schéma, deux champs sont définis :

username: Un champ de type String qui est requis (required: true). De plus, min: 4 spécifie que la longueur minimale du nom d'utilisateur doit être de 4 caractères. unique: true garantit que chaque nom d'utilisateur est unique dans la base de données.
password: Un champ de type String qui est requis (required: true).
Création du modèle utilisateur : Le modèle utilisateur est créé en utilisant la fonction model("User", UserSchema). "User" est le nom du modèle, et UserSchema est le schéma que nous venons de définir.

Exportation du modèle : Le modèle utilisateur est exporté à l'aide de module.exports. Cela permet à d'autres parties de l'application d'importer ce modèle et de l'utiliser pour interagir avec la base de données.

Ce code encapsule la structure et les contraintes des données utilisateur dans un schéma Mongoose. Il facilite la création, la lecture, la mise à jour et la suppression des enregistrements d'utilisateurs dans la base de données MongoDB.

Ce code communique avec `api\index.js`

```js
const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const app = express();
const User = require("./models/User");

// Activation de la gestion des requêtes cross-origin et du traitement du JSON
app.use(cors());
app.use(express.json());

// Connexion à la base de données MongoDB
mongoose.connect(
  "mongodb+srv://wilonweb:dCC7R5eSXaXcn07Z@cluster0.tfjisx6.mongodb.net/?retryWrites=true&w=majority"
);

// Route pour l'inscription d'un utilisateur
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const UserDoc = await User.create({
    username,
    password,
  });
  res.json(UserDoc);
});

// Démarrage du serveur sur le port 4000
app.listen(4000);
```

Dans ce code d'exemple, nous utilisons Node.js avec Express.js pour créer un serveur back-end simple permettant l'inscription d'utilisateurs dans une base de données MongoDB en utilisant Mongoose.

#### Ajout des erreur avec try catch

Maintenant on ajoute try et catch pour gerer les erreur afin d'afficher si l'enregistrement c'est bien passé ou pas.  
`api\index.js`

```js
const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const app = express();
const User = require("./models/User");

// Activation de la gestion des requêtes cross-origin et du traitement du JSON
app.use(cors());
app.use(express.json());

// Connexion à la base de données MongoDB
mongoose.connect(
  "mongodb+srv://wilonweb:dCC7R5eSXaXcn07Z@cluster0.tfjisx6.mongodb.net/?retryWrites=true&w=majority"
);

// Route pour l'inscription d'un utilisateur
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const UserDoc = await User.create({
      username,
      password,
    });
    res.json(UserDoc);
  } catch (e) {
    res.status(400).json(e);
  }
});

app.listen(4000);
//dCC7R5eSXaXcn07Z
//mongodb+srv://wilonweb:dCC7R5eSXaXcn07Z@cluster0.tfjisx6.mongodb.net/?retryWrites=true&w=majority
```

`client\src\Pages\RegisterPage.js`

```js
import { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function register(ev) {
    ev.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 200) {
        alert("registration succesful");
      } else {
        alert("registration failed");
      }
    } catch (e) {
      alert("Registration failed. Try again Later");
    }
  }
  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button>Register</button>
    </form>
  );
}
```

#### Encrypter le mot de passe avec bcryptjs

installation de `yarn add bcryptjs` afin de pouvoir hasher le password des utilisateur qui s'enregistre.

On initialise bcrypt et salt dans notre `api\index.js` afin de d'utiliser une fonctionalité de hashing sur la propriété password de notre l'objet UserDoc servant a créer un nouvel utilisateur dans la Base de donnée.

##### Capturer les information d'un formulaire avec MERN

On prend pour exemple la page de Login
On commence par déclarer le use state de nos champs usernamme et password.

Puis dans `<input>` on déclare un evenement de changement dans leur champs correspondant en déclarant un attribut `value={username}` afin de lié le champs au useState permettant de faire en sorte que la valeur de `username` soit toujours égale à `username` dans le composant.
Puis on déclare un evenement `onChange={(ev) => setUserName(ev.target.value)}` qui se déclenche a chaque fois le contenu du code est modifié.

Puis on déclare l'attribut `onSubmit()={login}` pour que le formulaire apelle la fonction login que l'on créer pour

```js
async function login(ev) {
  ev.preventDefault(); // Empeche que la page se recharge quand un formulaire est soumis

  // Utilise la fonction fetch pour envoyer une requête POST au serveur
  await fetch("http://localhost:4000/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: { "Content-Type": "application/json" }, // indique que le corps de la requête est au format JSON.
  });
}
``;
```

Ensuite on verifie si l'username correspond au mot de passe hashé dans `api\index.js`etape

```js
//Route pour vérifier que le username = password crypté dans la page login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passOK = bcrypt.compareSync(password, userDoc.password);
});
```

Maintenant nous allons utiliser `yarn add jsonwebtoken` pour faire en sorte que l'utilisateur soit connecté.
On l'initialise dans index.js
Puis on créer une condition qui transmet un token si le combo username/password est ok

```js
  if (passOk) {
    // logged in
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      //res.json(token); Pour verifier que le token fonctionne
      res.cookie("token", token).json("ok"); // Ajoute un cookie nommé token dans response.
    });
    ...
  }
```

Puis on définis dans la fonction `login`
la ligne de code `credentials: "include",` permettant que le cookie soit conservé meme quand l'utilisateur visite d'autre URL du site.
Sans oublier d'indiquer a l'erreur CORS d'inclure les cookie au requete dont l'url d'origine et celle du site. (`api/index.js`)

`app.use(cors({ credentials: true, origin: "http://localhost:3000" }));`

#### Redirection vers la homePage si l'utilisateur est logger.

On créer un hook useState pour la redirection

On créer la condition de parametrer la redirection si la response est ok

puis on retourne à l'url d'orignine si c'est ok avec le module Navigate de react-router-dom

### Verifier si l'utilisateur est connecté

- **Vérification de la connexion** :
  L'objectif est de vérifier si l'utilisateur est connecté. L'utilisateur est identifié par un jeton (token) stocké dans les cookies.
  Mais comme n'importe qui peut définir un cookie dans le navigateur
  Nous devons alors verifier si le token est valide en installant `yarn add cookie-parser` et en l'initialisant dans `api/index.js` et en récupérant les information du profile avec une requete GET

```js
app.get("/profile", (req, res) => {
  res.json(req.cookies);
});
```

Et en utilisant un useEffect quand le composant `client/Header.js` est monté pour récupérer les informations du profil a chaque page.

```js
useEffect(() => {
  fetch("http://localhost:4000/profile", {
    credentials: "include",
  });
});
```

**Affichage conditionnel** : L'interface utilisateur est rendue en utilisant des conditions pour afficher les éléments appropriés en fonction de l'état de connexion de l'utilisateur

Pour cela on crée une condition dans le composant `Header.js`

```js
return (
  <header>
    {/* ... Autres éléments du header ... */}
    <nav>
      {username && (
        <>
          <Link to="/create">Create new Post</Link>
          <a>logout</a>
        </>
      )}
      {!username && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  </header>
);
```

**Manipulation de l'état** : Le hook useState est utilisé pour stocker le nom d'utilisateur dans l'état. Lorsque les informations du profil sont obtenues, le nom d'utilisateur est extrait et mis à jour dans l'état.

Pour ça on définit un point d'acces appelé profile dans `api\index.js` avec une requete GET qui retournera les information de profile

```js
app.get("/profile", (req, res) => {
  res.json(req.cookies);
});
```

Puis on vas analyser le cookie avec `yarn add cookie-parser` pour ...
Chapitre a revoir !!!!

### Fonctionalité logout

- Une fonction de déconnexion`logout` a été ajoutée au composant header avec un gestionnaire d'événement onClick.
- Lorsqu'un utilisateur clique sur le bouton dédié, la fonction de déconnexion est déclenchée.

- Une requête POST est envoyée à l'URL `/logout` dans `api/index.js` pour confirmer la déconnexion.

```js
app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});
```

Cependant à ce stade si on essaie de se relogger ça ne fonctionne pas car on ne dois pas stocker les information de l'utilisateur dans le header.
On dois utiliser le **contexte** pour gérer ces informations.

## User Context

Pour régler notre probleme de mis a jour apres le logout nous allons stocker les information utilisateur dans le userContext

Context est une fonctionnalité de React qui permet de gérer et de partager des données entre les composants sans avoir à les transmettre à travers les niveaux de l'arborescence des composants. Il permet de créer un espace de données partagé accessible à tous les composants enfants d'un certain composant parent.

Le contexte se compose de deux éléments principaux : **User Context Provider** et les **Context Consumers**.

**User Context Provider** : C'est un composant parent qui contient les données que vous souhaitez partager. Il crée un "contexte" et fournit des valeurs aux composants enfants qui en ont besoin.

**Context Consumers** : Ce sont les composants enfants qui souhaitent accéder aux données fournies par le contexte. Ils utilisent la fonction useContext (ou la méthode this.context dans les composants de classe) pour accéder aux valeurs du contexte.

Le contexte est souvent utilisé pour des informations qui sont globales pour toute l'application, telles que les données de connexion de l'utilisateur, les thèmes, les langues, etc.

Voici les étapes de l'[implémentation du User Context](#userContext) d'un contexte utilisateur

Création du fichier `client/src/UserContext.js` ou on vas initialiser `createContext` avec une valeur par défaut de l'objet vide.

On intègre le contexte utilisateur dans le fichier `app.js` avec le composant `UserContextProvider`. Ce composant englobera tout les éléments enfants a l'interieur de l'application, les routes sont également enveloppé.

Ensuite dans notre header au lieu d'envoyer les informations du userName nous allons utiliser userContext pour mettre a jour les information de l'utilisateur cf le code de `client/Header.js`

```js
// Import des dépendances nécessaires depuis React

import { useContext, useEffect } from "react";

import { Link } from "react-router-dom";
import { UserContext } from "./UserContext"; // Import du contexte utilisateur

// Définition du composant Header
export default function Header() {
  // Utilisation du useContext pour accéder aux valeurs du contexte utilisateur
  const { setUserInfo, userInfo } = useContext(UserContext);

  // Utilisation de useEffect pour effectuer des actions lorsque le composant est monté
  useEffect(() => {
    // Appel à une API pour récupérer les informations du profil
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      // Récupération des données JSON de la réponse
      response.json().then((userInfo) => {
        // Mise à jour des informations utilisateur dans le contexte
        setUserInfo(userInfo);
      });
    });
  }, []); // Le tableau vide signifie que cela se produit seulement au montage initial

  // Fonction pour effectuer la déconnexion
  function logout() {
    // Appel à l'API pour effectuer la déconnexion
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    // Effacement des informations utilisateur du contexte
    setUserInfo(null);
  }

  // Récupération du nom d'utilisateur depuis les informations utilisateur
  const username = userInfo?.username; // Vérification si l'utilisateur est nouveau

  // Rendu du composant Header
  return (
    <header>
      {/* Lien vers la page d'accueil */}
      <Link to="/" className="logo">
        My Blog Man
      </Link>
      <nav>
        {/* Si un nom d'utilisateur est disponible */}
        {username && (
          <>
            {/* Lien pour créer un nouvel article */}
            <Link to="/create">Create new Post</Link>
            {/* Lien pour effectuer la déconnexion */}
            <a onClick={logout}>Logout</a>
          </>
        )}
        {/* Si aucun nom d'utilisateur n'est disponible */}
        {!username && (
          <>
            {/* Lien vers la page de connexion */}
            <Link to="/login">Login</Link>
            {/* Lien vers la page d'inscription */}
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
```

Maintenant l'application peut gerer les parametre de connection et déconnection de l'application.

## Create Single Page

Maintenant on vas faire en sorte de créer une page quand on clique sur le lien create a new page
On commence par créer le composant `Page/CreatePost.js` Puis on définis la route dans `App.js`
On installe `yarn add react-quill` pour nous fournir un éditeur WYSIWYG.
On créer une nouvelle `Page/CreatePost.js` et on y insère un formulaire pour écrire un nouvel article
On initialise `react-quill`

On paramètre le module formats pour ajouter l'icone d'uplad de fichier. cf la [doc de react-quill](https://www.npmjs.com/package/react-quill#using-deltas)
`<ReactQuill value={content} modules={modules} formats={formats} />`
Puis on créer le dossier `api/uploads` pour receptionner les fichier uploader par notre editeur WYSIWYG

On gère les état des champs titre, résumé et contenue du formulaire

Ensuite on créer la fonction `createPost` dans le fichier `client\src\Pages\CreatePost.js` afin d'envoyer au endppoint de l'API le contenue de l'article

On commence par déclarer l'évenement onSubmit qui est associé à la fonction `createNewPost` que nous allons créer
`<form onSubmit={createNewPost}>`

puis on créer la fonction createNewPost que l'on commence avec un `ev.preventDefault` pour empecher le comportement par default d'un formulaie pour y placer notre logique comme l'envoi de donnée via une requete fetch.

```js
function createNewPost(ev) {
  // ...
  ev.preventDefault();
  // ...
}
```

Puis on définis l'envoi de donnée via une requete fetch à l'url localhost:4000/post avec les informations suivante :

- methode post
- body : qui recois les information sous la forme de **data** pour facilité l'upload de fichiers.

On créer un objet `const data = new FormData()` dans lequel on parametre notre title, summary, content, file
qu'on associe avec les evenements définis dans rendu JSX de notre composant.
Lorsqu'un utilisateur envoie des information avec l'editeur WYSIWYG elles sont utilisé pour créer l'objet `data` qui sera envoyé via une requete fetch.
⚠️Dans le rendu JSX au niveau de `input type file` on ne définis pas de valeur car le champs ne stock pas directement sa valeur dans l'état.

Ensuite on créer notre endPoint `/post` dans `api/index.js` et grace a la librairie `yarn add multer` on vas pouvoir créer un `const uploadMiddleware = multer({ dest: "uploads/" });` qui enverra les fichiers uploader via l'éditeur WYSIWYG vers le dossier `api/uploads` grace a la fonction multer `single` de Multer pour transferer ces fichier vers `api/uploads`
2.02.28

Note :
Le composant createPost est doté de 3 partie

- **initailisation du useState** en reprenant dans l'etat local du composant les variable d'état pour le `titre`, `summary`, `content` et `file`.
- **La fonction create poste** Celle qui gere le comportement lorsque que le formulaire est soumis. En créant l'objet `formData` associé au valeur saisie dans l'editeur WYSIWYG et utilise `fetch` pour envoyé les donnée au serveur
- **Le rendu JSX** C'est la partie ou on définis comment les éléments sont affiché à l'écran.

On telecharge le `yarn add multer` pour avoir un middleware permettant d'upload des fichier depuis le formulaire `createNewPost`.
On l'initialise dans le fichier `api/index/js` et on apelle la fonction single depuis la route `/post`

Cepdant on veut le nom original de ce que l'on upload, pour cela on vas utiliser le module `fs` de node

```js
//Utilisation du Middleware fournis par Multer pur uploader les fichiers soumis depuis le formulare createNewPost
app.post("/post", uploadMiddleware.single("file"), (req, res) => {
  const { originalname, path } = req.file;
  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];

  fs.renameSync(path, path + "." + ext);
  res.json({ ext });
});
```

02.09.45
Ensuite on veut enregistrer notre fichier dans la BDD
pour cela on créer un fichier `api/models/post.js`
dans lequel on importe moongoose et on créée un schema avec les champs
`title`, `summary`, `content` et `cover.`
et on active le timestamp pour enregistrer le moment de l'update
`api/models/post.js`

```js
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PostSchema = new Schema(
  {
    title: String,
    summary: String,
    content: String,
    cover: String,
  },
  {
    timestamps: true,
  }
);

const PostModel = model("Post", PostSchema);

module.exports = PostModel;
```

On créé le modèle "Post" qui est associé au schéma "PostSchema" dans la route `/post` du fichier `api\models\Post.js`

```js
const { title, summary, content } = req.body;
const postDoc = await Post.create({
  title,
  summary,
  content,
  cover: newPath,
});
```

Puis on fait la redirection

## Afficher les post depuis une base de données.

Pour afficher les articles depuis la base de donnée il faut récupérer les donnée depuis le endpoint `/post` pour avoir les publication existante au format JSON que le front end récupère avec l'API fetch.

**Utiliser le UseEffect** pour récupérer les articles des que la homePage est montée.

**Authentification utilisateur** Lorsqu'un utilisateur est connecté un token JSON Web est généré, ce qui permet d'identifié l'utilisateur.

**Afficher les publication** récupérer depuis la BDD avec son titre, résumé, auteur, cover.

**Formater les date** avec la bibliotheque `date-fns`

**Afficher les images** avec le middleware `express.Static` pour diriger les requete vers le repertoire `uploads`

**tri et limitation de publication** Les article sont trié du plus récent au plus ancien et seulement les 20 derniere publication sont affiché.

### Récupération des publication depuis la bdd

#### Récupération des publication depuis la BDD

Dans `client\src\Pages\IndexPage.js` Le **useEffect()** utilise l'API fetch pour envoyer une requete GET a l'API qui est envoyé au endpoint `/post` configurer pour renvoyer la liste des publications

```js
export default function IndexPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  return <>{posts.length > 0 && posts.map((post) => <Post {...post} />)}</>;
}
```

#### Traitement des publication dans l'API

Lorsque que la requete GET est reçu l'API effectue une recherche dans la BDD a l'aide du modèle de donné `api\models\Post.js` une fois récupéré elles sont trié par date de création avec `sort()` et limité a 20 publication avec `limit()`
Dans `api/index.js`

```js
app.get("/post", async (req, res) => {
  res.json(
    await Post.find()
      .populate("author", ["username"])
      .sort({ createdAt: -1 })
      .limit(20)
  );
});
```

#### Envoi des donnée au front end

Une fois que le front end recois la réponse JSON de l'API il peut parcourir les objets pour extraire les informations comme le titre, le résumé etc.

#### Affichage des publication dans le composant index

Lorsque que les publication sont mis a jour dans le useState le composant utilise une boucle `map()` afin de générer un composant post pour chaque publication.

### ⚠️Le nom d'auteur dans un environnement NoSQL

Pour afficher le nom d'auteur plusieur défi s'impose

#### Les relation entres les collections

une requete distincte avec la methode `populate()` pour récupérer les donnée lié d'une collection associé.

#### Performance

Une optimisation des requete est nécéssaire pour minimiser les appel inutil a la BDD

#### Sécurité

Il faut s'assurer de gerer les autorisation de l'utilisateur sous peine d'exposer des donnée sensible comme le mot de passe a des utilsiateur non autorisé.

--
Pour afficher le title et le summary il faut ...
...
3.32.09 installation de la librairie react-time-ago pour avoir des different format de date avec `yarn add date-fns` et en le paramétrant ....

Ensuite pour afficher l'auteur
On définis dans le PostSchema de `Api/models/Post.js`
`author: { type: Schema.Types.ObjectId, ref: "User" },`

Dans `client\src\Pages\CreatePost.js` on ajoute le `credentials` pour envoyer les cookies

```js
const response = await fetch("http://localhost:4000/post", {
  method: "POST",
  body: data,
  credentials: "include",
});
```

Puis on créer le middleware pour gérer la création d'un nouveau "Post" avec un JWT

```js
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
  res.json(info); // Si la vérification réussit, renvoie les informations du profil (contenues dans "info") au format JSON en réponse.
  res.json(postDoc); // Répondre avec l'extension du fichier dans un objet JSON
});
```

On ajoute la méthode `populate` de Mongoose pour chercher dans le modele `Post` les référence du champs `User`

```js
app.get("/post", async (req, res) => {
  res.json(await Post.find().populate("author"));
});
```

.... revoir le tuto

Ensuite pour changer l'ordre d'affichage pour que les derniers articles soit affiché en haut on rajoute les methode `sort` et `limit` dans notre `api/index`

```js
app.get("/post", async (req, res) => {
  res.json(
    await Post.find()
      .populate("author", ["username"])
      .sort({ createdAt: -1 })
      .limit(20)
  );
});
```

Ensuite pour afficher l'image a la une dans notre `client/src/Post.js` on met `<img src={"http://localhost:4000/" + cover} alt="" />` et on créer notre endpoint dans `api/index.js`
Et on définis le endpoint aec la requete GET `app.use("/uploads", express.static(__dirname + "/uploads"));` pour servir les fichier depuis le dossier uploads

## Single Post Page

Maintenat qu'on affiche les article present dans notre base de donnée, nous voulons afficher l'article dans une nouvelle page.
Pour cela on prendra on ira a l'url `/post/id`

Pour cela on commence a placer notre image de `client/src/post.js` dans une balise `<Link to={`/post/${\_id}`}>`

Ensuite on créer une `client/post/PostPage.js` dans lequel on utilise le hook **`useParams`** qui permet de passer la valeur du parametre `postId` pour l'url dynamique `/post/:postId`

Création de la requête dans `api/index.js` à l'aide de l'id récupéré pour obtenir les details de la publication a l'aide de `populate` et `findById` afin de cacher le password username a des personne malveillante.

### Edit post

On vas voir comment ajouté une fonctionalité d'éditions d'articles.

**Fonctionalité d'éditions** : Lorsqu'un utilisateur est connecté il dois pouvoir modifier l'article.

Pour cela on ajoute un boutton modifier a `client\src\Pages\PostPage.js`
Qui mene grace au hook `Link` vers ` <Link href="" className="edit-btn" to={`/edit/${postInfo.\_id}`}>`

Ensuite on créer le composant en important le formulaire du composant `createPost`
Cependant on enleve la `const format` ( pkoi ? )

**Authentification utilisateur** : Verifier l'id de l'utilisateur par rapport a l'id de l'auteur pour verifier si l'utilisateur a le droit d'editer l'article.

**Pré remplir l'editeur d'article** grace a une requete fetch en backend.

**le composant editor** pour que l'auteur puisse modifier l'article on créer le composant Editor.
Il comprendra le ReactQuill

**Mise a jour des information de l'article** a l'aide d'une requette HTTP de type PUT

**Comparaison des nouveaux chemin d'image** Si il en utilise un nouveau on ajoute le chemin sinon on garde l'ancien.

## Note

Le dossier models contient les script qui enregistre des info dans la base de données.
Comme un nouvel utilisateur.
Un nouvel article soumis via le formulaire.

Créer un article sur la mise en place d'une redirection.

Le hook **useParams** de **react-router-dom** permet de créer des url dynamique pour affiché des contenu unique.

Utilisation de [heroicons](https://heroicons.com/) pour les icones

Pourquoi créer un credentials dans les `const response` pour utilisé les cookie ?

J'ai du changer la fonction await postDoc.update en fonction await postDoc.updateOne

### Creation d'une Route

On importe le hook `Link` de `react-router-dom` dans un composant.
Ensuite on insère une balise `Link` dans le rendu JSX
On créer le composant qu le `Link` cible
Puis on créer la route dans `App.js`

### Création d'une redirection

Pour créer une redirection dans un composant React, on importe le composant `Navigate` depuis "react-router-dom"
`import { Navigate } from "react-router-dom";`

Ensuite on créer un état `redirect` qui sera utilisé pour déclenché la redirection

`const [redirect, setRedirect] = useState(false);`

Puis on créé avant le rendu JSX une condition qui vérifie si `redirect` est true, dans quel cas on utilise le composant Navigate pour redirigé vers la page souhaité.

```js
if (redirect) {
  return <Navigate to={"/"} />;
}
```

### Soumission du formulaire CreateNewPost

soumission du formulaire CreateNewPost et de son fonctionnement avec MongoDB :

**Préparation du Formulaire** : On a créer un formulaire CreateNewPost qui permet aux utilisateurs de saisir les informations d'un nouveau post, y compris le titre, le résumé, le contenu et un fichier (cover) à télécharger.

**Soumission du Formulaire** : Lorsque l'utilisateur remplit les champs du formulaire et soumet celui-ci, une requête POST est générée et envoyée au serveur.

**Gestion de la Requête sur le Serveur** : Le serveur (dans votre cas, basé sur Express.js) reçoit la requête POST envoyée par le client.

**Gestion du Fichier Upload** : Le middleware multer permet d'intercepter la requête et traite le téléchargement du fichier (cover) spécifié dans le champ de formulaire "file". multer enregistre temporairement le fichier sur le serveur.

**Extraction des Données** : En parallèle, les autres données du formulaire (titre, résumé, contenu) sont extraites du corps de la requête (req.body) à l'aide de la déstructuration.

**Création d'un Document** : Avec les données extraites (titre, résumé, contenu) et le chemin du fichier téléchargé (cover), un nouveau document de type "Post" est créé en utilisant le modèle "Post" défini avec Mongoose.

**Enregistrement dans MongoDB** : Le document du post nouvellement créé est enregistré dans la base de données MongoDB à l'aide de la méthode create du modèle "Post".

**Réponse au Client** : Une fois que le document a été créé et enregistré avec succès dans la base de données, une réponse est renvoyée au client. Cette réponse contient le document du post nouvellement créé, y compris toutes les informations saisies et le chemin du fichier cover.

Affichage ou Redirection : Le client peut afficher les détails du post nouvellement créé ou être redirigé vers une autre page, par exemple la page d'accueil.

### Utilisation du hook useParams de react-router-dom

Pour afficher le contenue unique des articles créé dans notre blog on utilise le hook `useParams` de `react-outer-dom` pour créer un URL dynamique.

- **Importation du Hook** : Tout d'abord, vous devez importer le hook useParams depuis le module react-router-dom :

- **Extraction des Paramètres**: Utilisez le hook useParams dans le composant pour extraire les paramètres de l'URL.
  `client\src\Pages\PostPage.js`

```js
export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);
  //...
}
```

**Utilisation des Paramètres** : On peut maintenant faire une requête vers le serveur pour récupérer les détails de l'article avec l'ID correspondant :
PS on utilise la methode populate de mongoose pour sécurisé l'exposition du mot de passe utilisateur
`api\index.js`

```js
const postDoc = await Post.findById(id).populate("author", ["username"]);
```

**Affichage Dynamique** : Ensuite, utilisez la valeur extraite de l'URL pour afficher dynamiquement le contenu approprié dans le rendu JSX du composant. Dans cet exemple, vous avez affiché le titre, l'image, le contenu, l'auteur et d'autres détails de l'article en utilisant la valeur postInfo récupérée.

### Vocabulaire :

**middleware** : Les middlewares sont utilisés pour effectuer des opérations spécifiques avant ou après le traitement principal d'une requête. Ils peuvent être utilisés pour des tâches telles que la validation des données, l'authentification des utilisateurs, la gestion des erreurs, la compression des données, la journalisation, etc.

Dans ce projet on utilise le middleware fournis par la librairie Multer pour pouvoir uploader des fichier sur notre editeur WYSIWYG
