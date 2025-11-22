import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Accueil.css';
import './Page_1.jsx';

function Accueil() {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState(0);

    useEffect(() =>
    console.log ("Bonjour")
    , []);

    useEffect(() => console.log(nombre), [nombre]);

  return (
    <div className="App">
      <h1>Compteur ultra-simple</h1>

      <h2>Le nombre est : {nombre}</h2>

      <button onClick={() => setNombre(nombre + 1)}>+1</button>

      <button onClick={() => setNombre(nombre - 1)}>-1</button>
      
      <button onClick={() => setNombre(0)}>Remettre à zéro</button>
      
      <button onClick={() => navigate('/Page_1')}>Aller à la to do list</button>
    </div>
  );
}

export default Accueil;
