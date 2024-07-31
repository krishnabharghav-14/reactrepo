import React, { useState } from "react";
// import ControlledRegistrationForm from "./registrationForm2";
import './controlledLoginForm.css';

function ControlledLoginForm() {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState([]);
    const [userNameError, setUserNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const userNameHandler = (event) => {
        const userEnteredName = event.target.value;
        setUsername(userEnteredName);
        if (userEnteredName.length > 15) {
            setUserNameError("Invalid input, please enter less than 15 characters");
        } else {
            setUserNameError("");
        }
    };

    const passwordHandler = (event) => {
        const userEnteredPassword = event.target.value;
        setPassword(userEnteredPassword);
        if (userEnteredPassword.length < 6) {
            setPasswordError("Password must be at least 6 characters long");
        } else {
            setPasswordError("");
        }
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        if (userNameError || passwordError) {
            alert("Please fix the errors before submitting");
            return;
        }
        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: userName,
                    password: password,
                }),
            });
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const finalResponse = await response.json();
            setData([...data, finalResponse]);
            setUsername("");
            setPassword("");
            console.log(finalResponse);
        } catch (error) {
            console.error("There was a problem with the fetch operation:", error);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={userName}
                        onChange={userNameHandler}
                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                    {userNameError && <span className="error-message">{userNameError}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        value={password}
                        onChange={passwordHandler}
                    />
                    {passwordError && <span className="error-message">{passwordError}</span>}
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
            {data.length > 0 && (
                <table className="table">
                    <tbody>
                        {data.map((eachData) => (
                            <tr key={eachData.id}>
                                <td>{eachData.id}</td>
                                <td>{eachData.firstName}</td>
                                <td>
                                    <img src={eachData.image} width={100} height={100} alt="User" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default ControlledLoginForm;
