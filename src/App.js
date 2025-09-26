import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const handleClick = () => {
    console.log("Hello Guys!!!");
  }
  
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
}

export default App;
