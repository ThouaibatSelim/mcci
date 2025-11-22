import { useState } from 'react' // 1. On importe le hook useState 

import './App.css' // 2. On importe le fichier CSS po

function App() { // 3. On définit le composant prin

 // 4. Déclaration d'un état "nombre" avec useState
 // nombre = valeur actuelle de l'état
 // setNombre = fonction pour modifier l'état
 // 0 = valeur initiale
 const [nombre, setNombre] = useState(0)
 return ( 

 <div className="App">
 <h1>Compteur ultra-simple</h1> {/* 6. Titre de notre applica
tion */}
 {/* 7. Affichage dynamique de la valeur de l'état "nombre" */}
 <h2>Le nombre est : {nombre}</h2>
 {/* 8. Bouton "+1" : au clic, on incrémente "nombre" */}
 <button onClick={() => setNombre(nombre + 1)}>
 +1
 </button>
 {/* 9. Bouton "-1" : au clic, on décrémente "nombre" */}
 <button onClick={() => setNombre(nombre - 1)}>
 -1
 </button>
 {/* 10. Bouton "Remettre à zéro" : au clic, on réinitialise "n
ombre" à 0 */}
 <button onClick={() => setNombre(0)}>
 Remettre à zéro
 </button>
 </div>
 )
}
export default App 