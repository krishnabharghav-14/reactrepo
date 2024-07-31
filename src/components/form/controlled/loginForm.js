import { useState } from "react"
import ControlledRegistrationForm from "./registrationFrom2"

function ControlledLoginForm() {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [userData, setUserData] = useState({})
    const [userValid, setuserValid] = useState(false)
    const [passwordValid, setpasswordValid] = useState(false)
    const [table, setTable] = useState(false)

    const [userNameError, setUserNameError] = useState(null)
    const [passwordError, setPasswordError] = useState(null)
    setUserData(JSON.parse(window.localStorage.getItem("users")))



    const userNameHandler = (event) => {
        const userEnteredUserName = event.target.value;
        setUserName(userEnteredUserName)
        // console.log(userEnteredUserName, "username entering...")
        if (userEnteredUserName.length > 15) {
            setUserNameError("Invalid input please enter less than 15 characters")
        }
        else {
            setUserNameError(null)
            // setUserName(userEnteredUserName)
            // console.log(userName)
            if (userData.email == userName) {
                setuserValid(true)
            }
        }
    }

    const passwordHandler = (event) => {
        const userEnteredPassword = event.target.value;
        setPassword(userEnteredPassword)

        if (userEnteredPassword.length > 15) {
            setPasswordError("Invalid input please enter less than 15 characters")
        }
        else {
            setPasswordError(null)
            if (userData == password) {
                setpasswordValid(true)
            }
            // setPassword(userEnteredPassword)
            // console.log(password)

        }
        // console.log(userEnteredPassword, "password entering...")
    }


    // const submitHandler = (event) => {
    //     event.preventDefault()
    // }


    const goBack = () => {

        window.history.back()

    }


    const submitHandler = () => {
        if (userName && password) {
            setTable(true)
        }
    }


    return (
        <>
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
                    {userNameError && <span>Invalid input please enter less than 15 characters</span>}
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
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                    {passwordError && <span>{passwordError}</span>}
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Check me out
                    </label>
                </div> */}
                <button type="submit" className="btn btn-primary">
                    Submit
                </button><br /><br />
                <button onClick={goBack} className="btn btn-primary">
                    Register
                </button>
            </form>


            {
                table ?
                    <table class="table">
                        <tbody>


                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table> :<></>
            }

        </>
    );

}

export default ControlledLoginForm