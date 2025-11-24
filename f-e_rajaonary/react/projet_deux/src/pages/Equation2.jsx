import { useState } from "react";
import { useNavigate} from 'react-router-dom' ;

function Equation2() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState("");
  const navigate = useNavigate();
const reset = () => {
  setA("");
  setB("");
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

  return (
    <div>
      <h1>Équation de 2nd degré :</h1>

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
<br/> <br/>
      <input
        type="number"
        placeholder="c"
        value={c}
        onChange={(e) => setC(e.target.value)}
      />
<br/> <br/>
      <button onClick={resoudre}>Résoudre l'équation</button>
      <br/>
      <p>{result}</p>
      <br/> <br/>
      <button onClick={() => navigate('/eq1')}>Faire un équation de 1er degré</button>
      <button onClick={reset}>Réinitialiser</button>



    </div>
  );
}

export default Equation2;
