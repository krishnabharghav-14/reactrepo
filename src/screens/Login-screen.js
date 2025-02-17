import ControlledLoginForm from "../components/form/controlled/loginForm";
import NavBar from "../components/navbar/navbar";

const LoginScreen = () => {
    return(
        <>
        <NavBar/>
        <h3>Welcome to Login Screen</h3>
        <ControlledLoginForm/>
        </>
    );
}


export default LoginScreen