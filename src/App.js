import logo from './logo.svg';
import './App.css';
import Uncontrolled from './components/form/uncontrolled/form';
import 'bootstrap/dist/css/bootstrap.min.css'
import RegistrationForm from './components/form/uncontrolled/registrationForm1';
import SamsungForm from './components/form/uncontrolled/samsungForm';
import PracticeControlledForm from './components/form/controlled/controlledform';
import ControlledRegistrationForm from './components/form/controlled/registrationFrom2';
import ControlledLoginForm from './components/form/controlled/loginForm';

function App() {
  return (
    <div className="App">
      {/* <Uncontrolled/> */}
      {/* <RegistrationForm/> */}
      {/* <SamsungForm/> */}
      {/* <PracticeControlledForm/> */}
      <ControlledRegistrationForm/>
      {/* <ControlledLoginForm/> */}
    </div>
  );
}

export default App;
