import { useState } from "react";
import { useNavigate} from 'react-router-dom' ;
import "../styles/accueil.css"

function Equation1() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  const navigate = useNavigate();
const reset = () => {
  setA("");
  setB("");
  setC("");
  setResult("");
};


  const resoudre = () => {
    if (a === "" || b === "") {
      setResult("Veuillez remplir tous les champs.");
      return;
    }

    if (a == 0) {
      setResult("L'équation n’a pas de solution (a ne peut pas être 0).");
      return;
    }

    const x = -b / a;
    setResult(`La solution est : x = ${x}`);
  };

  return (
    <div>
      <h1>Équation de 1er degré :</h1>

      <input
        type="number"
        placeholder="a"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
    <br/> <br/>
      <input
        type="number"
        placeholder="b"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
    <br/>
      <button onClick={resoudre}>Résoudre l'équation</button>
      <br/>
   <p>{result}</p>
      <br/>
      <button onClick={() => navigate('/eq2')}>Faire un équation de 2nd degré</button>

      <button onClick={reset}>Réinitialiser</button>

    </div>
  );
}

export default Equation1;
