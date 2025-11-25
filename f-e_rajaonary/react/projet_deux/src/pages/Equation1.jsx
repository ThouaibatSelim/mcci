import { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/equation.css";

function Equation1() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");

  const navigate = useNavigate();

  // Référence vers l'input b
  const bInputRef = useRef(null);

  const reset = () => {
    setA("");
    setB("");
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

  const handleAChange = (e) => {
    setA(e.target.value);

    // Si l'utilisateur valide a (ex : entre + Tab ou clique ailleurs)
    // On passe auto au champ b dès qu'il a tapé quelque chose
    if (e.target.value !== "") {
      bInputRef.current?.focus();
    }
  };

  return (
    <div className="eq-container">
      <h1>Équation de 1er degré :</h1>

      <input
        type="number"
        placeholder="a"
        value={a}
        onChange={handleAChange}
      />

      <br/><br/>

      <input
        type="number"
        placeholder="b"
        value={b}
        ref={bInputRef}
        onChange={(e) => setB(e.target.value)}
      />

      <br/>

      <div className="buttons">
        <button onClick={resoudre}>Résoudre l'équation</button>
        <button onClick={reset}>Réinitialiser</button>
      </div>

      <p className="eq-result">{result}</p>

      <br/>

      <button onClick={() => navigate('/eq2')} className="othereq">
        Faire une équation de 2nd degré
      </button>
    </div>
  );
}

export default Equation1;
