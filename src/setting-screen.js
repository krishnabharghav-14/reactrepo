import { useContext, useState } from "react";
import { DataContext } from "./navigation/navigation";
import NavBar from "./components/navbar/navbar";

const SettingScreen = () => {
    const { userName, darkMode, changeUserName, changeDarkMode } = useContext(DataContext)

    const [newUserName, setNewUserName] = useState("")

    const newUserNameHandler = (event) => {
        const newName = event.target.value;
        setNewUserName(newName)
    }


    const nameChanger = () => {
        changeUserName(newUserName)
    }

    const modeChanger = () => {
        changeDarkMode(!darkMode)
    }

    return (
        <>
            <NavBar />
            <h3>Hello, {userName} </h3>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    New name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={newUserName}
                    onChange={newUserNameHandler}
                />
                <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                </div>
            </div>

            <button onClick={nameChanger}>Change Username</button>
            <h5>Display</h5>
            <button onClick={modeChanger}>{darkMode? "Light": "Dark"}</button>

        </>
    );
}

export default SettingScreen