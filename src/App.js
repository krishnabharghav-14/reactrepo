import logo from './logo.svg';
import './App.css';
import Customcard from './components/card/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import SquareGenerate from './components/square/square';
import DemoCarousel from './components/corosel/corosel';

function App() {
  
  return (
    <div className="App">
      {/* <DemoCarousel/> */}
      {/* <SquareGenerate/> */}
      <Customcard/>
    </div>
  );
}

export default App;
