import { useState, useEffect } from "react";
import '../styles/input.css'

function Input() {
  const [text, setText] = useState("");
    const [value, setValue] = useState("");
  const reset = () => {
  setValue("");
  setResult("");
};

  useEffect(() => {
    console.log("Nouvelle valeur :", text);
  }, [text]);

  return (
    <div>
      <h1>Input Console</h1>

      <input
        type="text"
        placeholder="Entrez une valeur..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p className="valeur">Valeur entrée : {text}</p>
      <br/>
      <button onClick={reset}>Réinitialiser</button>
    </div>
  );
}

export default Input;