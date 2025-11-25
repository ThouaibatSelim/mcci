import { Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Equation1 from './pages/Equation1';
import Equation2 from './pages/Equation2';
import Input from './pages/Input';
import Navbar from './pages/Navbar';
import ToDoList from './pages/ToDoList';
import Compteur from './pages/Compteur';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/compteur" element={<Compteur />} />
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="/eq1" element={<Equation1 />} />
        <Route path="/eq2" element={<Equation2 />} />
        <Route path="/input" element={<Input/>} />
      </Routes>
    </>
  );
}

export default App;
