## Présentation du Repo

Développement d'une application de blog full stack en utilisant la stack MERN (MongoDB, Express, React et Node) "from scratch".

D'après le cours YouTube
[Build a Fullstack Blog App using MERN (mongo, express, react, node)](https://www.youtube.com/watch?v=xKs2IZZya7c&t=10566s)
@ [Coding With Dawid](https://www.youtube.com/@CodingWithDawid)

## Table des matieres.

[00:00:00](https://www.youtube.com/watch?v=xKs2IZZya7c&t=0s) - Intro \
[00:02:02](https://www.youtube.com/watch?v=xKs2IZZya7c&t=122s) - Building homepage with react
[00:23:35](https://www.youtube.com/watch?v=xKs2IZZya7c&t=1415s) - Routing with react-router-dom
[00:34:50](https://www.youtube.com/watch?v=xKs2IZZya7c&t=2090s) - Login and register page
[00:42:32](https://www.youtube.com/watch?v=xKs2IZZya7c&t=2552s) - Authentication
[01:22:01](https://www.youtube.com/watch?v=xKs2IZZya7c&t=4921s) - Checking if logged in
[01:30:38](https://www.youtube.com/watch?v=xKs2IZZya7c&t=5438s) - Logout functionality
[01:33:05](https://www.youtube.com/watch?v=xKs2IZZya7c&t=5585s) - UserContext
[01:41:04](https://www.youtube.com/watch?v=xKs2IZZya7c&t=6064s) - Create new post page
[02:15:52](https://www.youtube.com/watch?v=xKs2IZZya7c&t=8152s) - Displaying posts from the database
[02:38:26](https://www.youtube.com/watch?v=xKs2IZZya7c&t=9506s) - Single post page
[03:02:20](https://www.youtube.com/watch?v=xKs2IZZya7c&t=10940s) - Edit post page
[03:31:57](https://www.youtube.com/watch?v=xKs2IZZya7c&t=12717s) - Outro

## Liste des commandes

**Commandes**
  - /client : `yarn start`
  - /api : `nodemon index.js`

**Identifiants**

- **username** : test
- **password** : test

## Package utilisé

### Backend

#### bcryptjs

Permet de sécurisé un mot de passe avec l'algorhitme bcrypt et de vérifier l'authenticité d'un utilisateur.

#### cookie-parser

C'est un middleware, qui permet d'accéder facilement aux valeur des cookie dans le code.
Le parser analyse les cookie entrant dans une requette HTTP
Extrait les donnée du cookie,
et les transforme en objet javascript que l'on peut utilisé dans l'application.

#### cors

Cors est un mécanisme pour la sécurité de l'application

#### express

Express est un framework web pour Node.js qui fournis des fonctionnalités pour le routage, la gestion des requêtes et des réponses, la gestion des vues et des modèles, ainsi que l'utilisation de middleware pour traiter les requêtes.

#### json web token

JWT est urilisé pour génrer l'authentification et la sécurité.

#### mongoose

Permet d'utiliser la BDD NoSQL mongoDb et de manipuler des données.

#### multer

Middleware permettant de faciliter l'envoi de fichier depuis un formulaire.

### Client

#### date-fns

bibliothèque JavaScript qui facilite la manipulation, le formatage et le calcul de dates et d'heures.

#### react

React permet de diviser l'interface utilisateur en composants réutilisables, ce qui facilite la gestion de l'état et la mise à jour de l'interface en temps réel. React suit un modèle de programmation déclaratif, où vous décrivez comment votre interface utilisateur doit se comporter à différents états, et React se charge de mettre à jour l'interface en conséquence.

`useState` : permet de déclarer une variable d'état et une fonction pour la mettre à jour. À chaque mise à jour de l'état, le composant se réexécute et peut refléter les changements dans l'interface utilisateur.

`useEffect` : permet de dire à React : "Chaque fois que mon composant est chargé (ou que certaines choses changent), exécute cette fonction. pour exécuter des actions qui ne sont pas liées directement au rendu d'un composant Par exemple, charger des données à partir d'un serveur lorsque le composant est monté.

#### react-dom

#### react-quill

bibliothèque qui fournit un composant React pour intégrer un éditeur de texte riche (WYSIWYG), personalisable, qui prend en charge les evenements, le contenue comme des images, video, liens ...

**`onChange` :** Cette prop permet de définir une fonction qui sera appelée chaque fois que le contenu de l'éditeur change.
**`onFocus` et `onBlur` :** Ces props permettent de définir des fonctions qui seront appelées lorsque l'éditeur reçoit le focus ou le perd, respectivement.
**`onKeyPress`, `onKeyDown` et `onKeyUp` :** Ces props permettent de définir des fonctions qui seront appelées lorsqu'une touche est enfoncée, relâchée ou pressée dans l'éditeur.
**`modules` :** Cette prop vous permet de configurer les modules de l'éditeur, tels que les modules de formatage, d'insertion d'images, etc.
**`formats` :** Cette prop vous permet de définir les formats de texte pris en charge par l'éditeur.
**`theme` :** Cette prop vous permet de choisir un thème pour l'éditeur. Cela affecte l'apparence visuelle de l'éditeur.

#### react-router-dom

bibliothèque JavaScript qui facilite la gestion des routes et de la navigation dans les applications web

1. **`useHistory` :** Ce hook permet d'accéder à l'objet d'historique du navigateur. L'historique contient des méthodes pour naviguer en avant, en arrière et pour gérer l'historique de navigation.
2. **`useLocation` :** Ce hook permet d'accéder à l'objet de localisation qui représente l'URL actuelle. Cela permet de lire les paramètres de l'URL ou d'effectuer des actions basées sur l'URL.
3. **`useParams` :** Ce hook permet d'accéder aux paramètres dynamiques définis dans l'URL d'une route. Il est utile pour extraire les valeurs passées dans l'URL.
4. **`useRouteMatch` :** Ce hook permet d'accéder à l'objet de correspondance de route qui contient des informations sur la route qui correspond à l'URL actuelle.
5. **`useNavigate` (disponible depuis React Router 6) :** Ce hook permet d'obtenir une fonction de navigation que vous pouvez utiliser pour naviguer vers d'autres routes de manière programmative.

#### react-scripts

#### web-vital

## Architecture du code

### Dossier Parent: api

Le dossier api contient le code backend du programme

#### Dossier: models

Le dossier models contient les script qui définissent des models de schema, qui sont les information qu'on GET/PUT/UPDATE/DELETE dans la base de données.
Comme la création d'un nouvel utilisateur,
ou la soumissions d'un nouvelle articles via un formulaire.

Dans ses script nous déterminons les types de données pour chaque champs, que ce soit en les définissant directement ou en faisant référence à des types déjà définis ailleurs.

pour établir une référence à un autre objet, nous définissons le champ sous forme de référence et spécifions le schéma associé.

Lorsque nous définissons ces modèles de schéma, nous pouvons inclure l'option `timestamps: true`. Cela ajoute automatiquement les champs "createdAt" et "updatedAt" à chaque document. Cela nous permet de suivre quand les entrées ont été créées et mises à jour

##### Fichier: Post.js

**Définition le shema du model post.**
C'est un model mongoose contient pour les docuemnts "Post" contenant les champs `title`, `summary`, `content`, `cover`, et `author`. Les types de données de ces champs sont définis (tous sont des chaînes de caractère sauf `author` qui est une référence à l'objet "User"). que l'on appelle grâce à son id.

Une référence en programmation, notamment avec Mongoose, est une relation établie entre deux objets où un objet fait référence à un autre objet en utilisant une clé unique pour identifier l'objet cible.

**Options du Schéma** : Les options du schéma sont définies dans un objet. Ici, `timestamps: true` est utilisé pour ajouter automatiquement des champs `createdAt` et `updatedAt` aux documents.

##### Fichier: User.js

C'est un modèle mongoose pour les documents "User" dans mongoDb qui définis les ainsi que leur contriantes ( longeur minimale, l'unicité et le fait que le champs est obligatoire )

#### Dossier: uploads

Contient tout les fichiers uploader via l'éditeur WYSIWYG fournis par React-Quill

### Dossier Parent: client

Le dossier client contient le code front end du programme

#### Dossier: Pages

Le dossier "Pages" contient les composants des différentes pages de l'application.

##### Fichier: CreatePost.js

La page CreatePost.js est accessible à l'url `"http://localhost:4000/create"`
La page est responsable de la création d'un nouveau post.

Le composant createPost est doté de 3 partie

- **initailisation du useState** en reprenant dans l'etat local du composant les variable d'état pour le `titre`, `summary`, `content` et `file`.
- **La fonction createNewPoste** qui gere le comportement lorsque que le formulaire est soumis.
  En créant l'objet `formData` pour envoyer les donnée valeur saisie dans le formulaire
  et effectue une requete POST au serveur en utilisant `fetch`
- **Le rendu JSX** C'est la partie ou
  on définis comment les éléments sont affiché à l'écran
  apelle la fonctione createNewPost quand le formulaire est saisie  
  Gere la redirection si la création de l'article est réussie, la variable "redirect" est mise à "true" et le composant "Navigate" est utilisé pour rediriger l'utilisateur vers la page d'accueil.

##### Fichier: EditPost.js

La page EditPost est accessible a l'url `http://localhost:3000/edit/:postId`
Elle est responsable de mettre a jour un article existant quand on clique sur le boutton editPost présent dans le rendu JSX de ...

---

**Imports** : Les bibliothèques et composants nécessaires sont importés, notamment "Navigate" et "useParams" de "react-router-dom", ainsi que les Hooks "useEffect" et "useState" de React.

{ Navigate, useParams } sont utilisé pour gerer la redirection en utilisant ( Navigate ) vers une url comportant un id unique obtenue avec ( useParams ).

{ useEffect, useState } sont utilisés pour gérer les "side effect" et l'état local dans le composant respectivement.
**'useEffect'** permet d'exécuter des actions après le rendu, comme les appels à des API externes
**'useState'** permet de créer des variables d'état et des fonctions de mise à jour pour gérer l'état interne du composant.

---

**Récupération de l'ID depuis les Paramètres d'URL** : Le Hook "useParams" est utilisé pour obtenir la valeur de l'ID à partir des paramètres d'URL. Cela permet d'obtenir l'identifiant de l'article que l'on souhaite mettre à jour.

```js
export default function EditPost() {
  const { id } = useParams();
  /*const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);*/ ...
```

---

**État Local** : Plusieurs états locaux sont définis à l'aide du Hook "useState". Ils servent à stocker les informations nécessaires pour l'édition de l'article, y compris le titre, le résumé, le contenu, les fichiers et l'état de redirection.

```js
export default function EditPost() {
  /*const { id } = useParams();*/
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false); ...
```

---

**Chargement Initial des Données** : Le Hook "useEffect" est utilisé pour effectuer une requête GET au serveur pour récupérer les informations de l'article à partir de son ID. Ces informations sont ensuite utilisées pour remplir les champs du formulaire.

```js
useEffect(() => {
  fetch("http://localhost:4000/post/" + id).then((response) => {
    response.json().then((postInfo) => {
      setTitle(postInfo.title);
      setContent(postInfo.content);
      setSummary(postInfo.summary);
    });
  });
}, []);
```

🛎️ : Revoir ce genre de fonction car j'avais oublié son fonctionnement, notamment le fait que postInfo soit déclaré dans la fonction

---

**Mise à Jour de l'Article** : La fonction `updatePost` est appelée lorsque le formulaire est soumis.
Elle empêche le comportement de soumission par défaut, avec `ev.preventDefault();` pour pouvoir envoyer les donnée au serveur sans que la page se recharge.

crée un objet `FormData` contenant les données à envoyer au serveur, y compris les modifications apportées. Une requête HTTP de type PUT est envoyée pour mettre à jour les informations de l'article sur le serveur.
Ensuite, une requête HTTP de type PUT est envoyée pour mettre à jour les informations de l'article sur le serveur. Si la réponse est réussie (`response.ok`), l'état `redirect` est mis à `true`.

```js
async function updatePost(ev) {
  ev.preventDefault();
  const data = new FormData();
  data.set("title", title);
  data.set("summary", summary);
  data.set("content", content);
  data.set("id", id);
  if (files?.[0]) {
    data.set("file", files?.[0]);
  }
  const response = await fetch("http://localhost:4000/post", {
    method: "PUT",
    body: data,
    credentials: "include",
  });

  if (response.ok) {
    setRedirect(true);
  }
}
```

---

**Redirection** : Si l'état `redirect` est `true`, le composant utilise le composant `Navigate` de `react-router-dom` pour rediriger l'utilisateur vers la page de détails de l'article mis à jour.

```js
if (redirect) {
  return <Navigate to={"/post/" + id} />;
}
```

---

Formulaire de mise à jour\*\* : Le formulaire est rendu avec des champs d'entrée pour le titre, le résumé, le contenu et un champ de fichier. Le composant `Editor` est également rendu, où l'état `content` est géré. Lorsque le formulaire est soumis, la fonction `updatePost` est appelée.

```js
return (
  <form onSubmit={updatePost} enctype="multipart/form-data">
         {" "}
    <input
      onSubmit={updatePost}
      type="title"
      placeholder={"Title"}
      value={title}
      onChange={(ev) => setTitle(ev.target.value)}
    />
          <input
      type="summary"
      placeholder={"Summary"}
      value={summary}
      onChange={(ev) => setSummary(ev.target.value)}
    />
          <input type="file" onChange={(ev) => setFiles(ev.target.files)} />
          <Editor onChange={setContent} value={content} />      <button
      style={{ marginTop: "5px" }}
    >
      Update post
    </button>   {" "}
  </form>
);
```

##### Fichier: IndexPage.js

##### Fichier: LoginPage.js

##### Fichier: PostPage.js

##### Fichier: RegisterPage.js

#### Fichier: app.css

#### Fichier: App.js

#### Fichier: Editor.js

#### Fichier: Header.js

#### Fichier: index.css

#### Fichier: index.js

#### Fichier: Layout.js

#### Fichier: Post.js

#### Fichier: UserContext.js

## Guides d'utilisation des fonctionnalités principales

### Paramétrage du react-router-dom

Dans client `yarn add react-router-dom`
On créer les composant
`Post.js` : a le template d'un post-items
et `Header.js` : a le template de la navbar

Puis le composant `Layout.js` qui servira a inclure la navBar sur toute les pages.

Dans `client\src\index.js` on importe `import { BrowserRouter } from "react-router-dom";` afin d'entourer l'application le Browser Router pour gérer la navigation de façon approprié en fonction de l'url.

Définitions des `<Routes` et `<Route>` dans App.js

### Paramétrage du hook useState

#### Le formulaire LoginRegister

Dans notre composant `/pages/RegisterPage.js` on utilise le hook useState pour suivre l'état des input username et password.

Pour ce faire on importe le hook dans notre composant
`import { useState } from "react";`
Puis on déclare les états

```js
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
```

Puis on les associé a l'attribut `value` de nos champs de saisie.

```js
    /*<form action="" className="register">
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"*/*
        value={username}
       /** onChange={(ev) => setUsername(ev.target.value)}
      />

      <input
        type="password"
        placeholder="password"*/
        value={password}/*
        onChange={(ev) => setPassword(ev.target.value)}
      />*/
```

Puis on met a jour l'état avec l'attribut `onChange`

```js
    /*<form action="" className="register">
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"
        value={username}*/*
        onChange={(ev) => setUsername(ev.target.value)}/*
      />

      <input
        type="password"
        placeholder="password"
        value={password}*/
       onChange={(ev) => setPassword(ev.target.value)}/*
      />*/
```

Pour résumer on peut paramétrer les hook useState en 4 etapes.

- On importe le hook useState
- On déclare les états a gérer
- On associé les états a gérer avec les valeurs a surveiller
- On met a jour l'états avec les valeurs qui ont été changé.

PS - apprendre à utiliser le "React Developer Tools"

### Paramétrage d'une requete Post

#### Le formulaire LoginRegister

Maintenant que notre formulaire récupère les valeurs de l'état des champs password et username, Nous voulon qu'une fois validé le formulaire envoie les valeurs dans un objet JSON à l'URL http://localhost:4000/register et affiche un message d'alert inquant si l'inscription à réussi ou échoué selon la réponse du serveur.

Pour cela nous créons une fonction asynchrone nommé register que nous déclenchons grâce a l'attribut onSubmit sur notre formulaire JSX.

```js
/*import { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  */

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
/**
  return (
    <form action="" className="login" */ onSubmit = { register }; /*>
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
  console.log(username);
}*/
```

Pour résumé afin d'enregistrer un nouvel utilisateur il faut envoyer des info dans notre backend en demandant à notre formulaire d'inscription de déclenché une fonction qui s'occupera d'envoyer les informations nécessaire dans un objet JSON a un endpoint.

PS : Pour voir la réponse du client il faut ouvrir le devTools, allez dans l'onglet Network, effectuer l'action, et cliquer sur la requete pour voir les details.

PS2 : Il faut maintenant s'occuper du Status CORS error

TODO ! Définir les différent sous onglet de l'onglet network du devTools
Header
Payload
Preview
Response
Initiator
Timing

### Gestion des problème CORS

## Truc et astuces à revoir

PS - Apprendre a utiliser le react dev tool
