import { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/equation.css";

function Equation2() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  // Références pour passer automatiquement au champ suivant
  const bInputRef = useRef(null);
  const cInputRef = useRef(null);

  const reset = () => {
    setA("");
    setB("");
    setC("");
    setResult("");
  };

  const resoudre = () => {
    if (a === "" || b === "" || c === "") {
      setResult("Veuillez remplir tous les champs.");
      return;
    }

    const delta = b * b - 4 * a * c;

    if (delta < 0) {
      setResult("Aucune solution réelle (Δ < 0).");
    } else if (delta === 0) {
      const x = -b / (2 * a);
      setResult(`Une solution unique : x = ${x}`);
    } else {
      const x1 = (-b - Math.sqrt(delta)) / (2 * a);
      const x2 = (-b + Math.sqrt(delta)) / (2 * a);
      setResult(`Deux solutions : x1 = ${x1}, x2 = ${x2}`);
    }
  };

  const handleAChange = (e) => {
    setA(e.target.value);
    if (e.target.value !== "") {
      bInputRef.current?.focus();
    }
  };

  const handleBChange = (e) => {
    setB(e.target.value);
    if (e.target.value !== "") {
      cInputRef.current?.focus();
    }
  };

  return (
    <div className="eq-container">
      <h1>Équation de 2nd degré :</h1>

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
        onChange={handleBChange}
      />
      <br/><br/>

      <input
        type="number"
        placeholder="c"
        value={c}
        ref={cInputRef}
        onChange={(e) => setC(e.target.value)}
      />
      <br/><br/>

      <div className="buttons">
        <button onClick={resoudre}>Résoudre l'équation</button>
        <button onClick={reset}>Réinitialiser</button>
      </div>

      <br/>
      <p className="eq-result">{result}</p>

      <button onClick={() => navigate('/eq1')} className="othereq">
        Faire une équation de 1er degré
      </button>
    </div>
  );
}

export default Equation2;
