import { useNavigate } from "react-router-dom";
import '../styles/accueil.css';

function Accueil() {
  const navigate = useNavigate();

  return (
    <div className="App">

      <h2>Choisissez une page</h2>

      <div className="boutons">
        <button onClick={() => navigate("/compteur")}>
          Aller au Compteur
        </button>

        <button onClick={() => navigate("/todolist")}>
          Aller à la To-Do List
        </button>

        <button onClick={() => navigate("/eq1")}>
          Aller à Équation de 1er degré
        </button>

        <button onClick={() => navigate("/eq2")}>
          Aller à Équation de 2nd degré
        </button>

        <button onClick={() => navigate("/input")}>
          Aller à Input
        </button>
      </div>
    </div>
  );
}

export default Accueil;

