import { useContext, useEffect } from "react";

import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

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
    setUserInfo(null); // Effacement des informations utilisateur du contexte
  }

  // Récupération du nom d'utilisateur depuis les informations utilisateur
  const username = userInfo?.username; // Vérification si l'utilisateur est nouveau

  // Rendu du composant Header
  return (
    <header>
      <Link to="/" className="logo">
        My Blog MERN
      </Link>
      <nav>
        {/* Si un nom d'utilisateur est disponible */}
        {username && (
          <>
            <Link to="/create">Create new Post</Link>
            <a onClick={logout}>Logout</a>
          </>
        )}
        {/* Si aucun nom d'utilisateur n'est disponible */}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
