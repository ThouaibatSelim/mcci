import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/todolist.css";

function ToDoList() {
  const [tache, setTache] = useState("");
  const [liste, setListe] = useState([]);
  const navigate = useNavigate();

  const ajouterTache = () => {
    if (tache.trim() === "") return;
    setListe([...liste, tache]);
    setTache("");
  };

  const supprimerTache = (index) => {
    setListe(liste.filter((_, i) => i !== index));
  };

  return (
    <div className="container">

      <button className="retour" onClick={() => navigate('/')}>
        Revenir à l'accueil
      </button>

      <h1 className="titre">To Do List</h1>

      <input 
        className="todo-input"
        type="text" 
        placeholder="Ajouter une tâche" 
        value={tache} 
        onChange={(e) => setTache(e.target.value)}
      />

      <div className="btn-group">
        <button className="btn-small" onClick={ajouterTache}>Ajouter</button>
        <button className="btn-small" onClick={() => setListe([])}>Vider</button>
      </div>

      <ul className="liste">
        {liste.map((item, index) => (
          <li key={index} className="item">
            {item}
            <button className="supprimer" onClick={() => supprimerTache(index)}>X</button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default ToDoList;
