import logo from './logo.svg';
import './App.css';
import Customcard from './components/card/card';
import CustomTable from './components/table/table';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <CustomTable/>
      <Customcard/>
    </div>
  );
}

export default App;
