import logo from './logo.svg';
import './App.css';
import Counter from './Components/button/counter';
import Customcard from './Components/card/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './data/teamlist';

function App() {
  return (
    <div className="App">
      {/* {
        Details.map(each => <Customcard/>)
      } */}
      <Customcard/>
    </div>
  );
}

export default App;
