import logo from './logo.svg';
import './App.css';
import Customcard from './components/card/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import SquareGenerate from './components/square/square';

function App() {
  
  return (
    <div className="App">
      <SquareGenerate/>
      <Customcard/>
    </div>
  );
}

export default App;
