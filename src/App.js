import logo from './logo.svg';
import './App.css';
import Customcard from './components/card/card';
import "bootstrap/dist/css/bootstrap.min.css";  
import AddSquare from './components/addSquare/addSquare';

function App() {
  return (
    <div className="App">
      <AddSquare/>
      {/* <Customcard/> */}
    </div>
  );
}

export default App;
