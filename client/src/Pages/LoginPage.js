import { useContext, useState } from "react";

import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function LoginPage() {
  // Définition des états (username, password, redirect)
  // pour gérer les entrées de l'utilisateur et l'état de redirection
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  // Utilisation du contexte utilisateur
  const { setUserInfo } = useContext(UserContext);

  /* Fonction permettant de stocker les informations de l'utilisateur connecté 
  pour une utilisation ultérieure dans d'autres parties de l'application.*/
  async function login(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      response.json().then((userInfo) => {
        //extrait les donné de JSON de la réponse serveur. Si c'est ok execute userInfo
        setUserInfo(userInfo); // met a jour les information utilisateur avec les donné de userInfo
        setRedirect(true); // redirige vers la page d'acceuil
      });
    } else {
      alert("mauvaise redirection");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <form className="login" onSubmit={login}>
      <h1>Login</h1>
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
      <button>Login</button>
    </form>
  );
}
