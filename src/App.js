import './App.css';
import JeuDe from './components/JeuDe';

function App() {
  const valeur = Math.floor(Math.random() * 6) + 1;

  return (
    <div className="container">
      <JeuDe cache={valeur} />
    </div>
  );
}

export default App;
