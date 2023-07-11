import logo from './logo.svg';
import './App.css';
import Container from './Components/Container';
import Saludo from './Components/Saludo';


function App() {
  return (
    <div className="App">
      <Container/>
      <Saludo title={"Red Bull Racing"}/>
    </div>
  );
}

export default App;
