import  { useEffect, useState }  from "react";
import { useNavigate} from 'react-router-dom' ;
import "./Page_1.css";
import './Accueil.jsx'

function Page_1() {
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

return(
    <div className="container">
        <button onClick={() => navigate('/')}>Revenir à l'accueil</button>
   <h1 className="">To Do List</h1> 

   <div>
    <input type="text" placeholder="Ajouter une tâche" value={tache} onChange={(e) => setTache(e.target.value)}/>

    <button onClick={ajouterTache}>Ajouter</button>
   </div>
   
   <ul className="liste">
    {liste.map((item, index) => (
        <li key={index} className="item"> {item}
        <button className="supprimer" onClick={() => supprimerTache(index)}>X</button></li>
    ))}

   </ul>
   </div>
    
);
}

export default Page_1;