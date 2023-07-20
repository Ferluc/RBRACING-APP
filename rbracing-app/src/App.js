import logo from './logo.svg';
import './App.css';
import Container from './Components/Container';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Container />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/categories" element={<Category/>} />
          <Route exact path="/item" element={<Item />}/>
        </Routes>
      </BrowserRouter>

    </div>



  );
}

export default App;
