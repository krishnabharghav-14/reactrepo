import logo from './logo.svg';
import './App.css';
import Uncontrolled from './components/form/form';
import 'bootstrap/dist/css/bootstrap.min.css'
import RegistrationForm from './components/form/registrationForm';
import SamsungForm from './components/form/samsungForm';

function App() {
  return (
    <div className="App">
      {/* <Uncontrolled/> */}
      {/* <RegistrationForm/> */}
      <SamsungForm/>
    </div>
  );
}

export default App;
