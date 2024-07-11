import logo from './logo.svg';
import './App.css';
import Customcard from './card/card';
import Details from './listdata/listdata';

function App() {
  return (
    <div className="App">
      {
        Details.map(eachdata => {
          return (
            <Customcard data={eachdata}></Customcard>
          );
        })
      }
    </div>
  );
}

export default App;
