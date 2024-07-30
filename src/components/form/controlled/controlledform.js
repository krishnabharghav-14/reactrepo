import { useState } from "react"

function PracticeControlledForm () {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const [userNameError, setUserNameError] = useState(null)
    const [passwordError, setPasswordError] = useState(null)

    

    const userNameHandler = (event) => {
        const userEnteredUserName = event.target.value;
        setUserName(userEnteredUserName)
        // console.log(userEnteredUserName, "username entering...")
        if (userEnteredUserName.length>15){
            setUserNameError("Invalid input please enter less than 15 characters")
        }
        else{
            setUserNameError(null)
        }
    }
    
    const passwordHandler = (event) => {
        const userEnteredPassword = event.target.value;
        setPassword(userEnteredPassword)

        if(userEnteredPassword.length > 15){
            setPasswordError("Invalid input please enter less than 15 characters")
        }
        else{
            setPasswordError(null)
        }
        // console.log(userEnteredPassword, "password entering...")
    }


    return (
        <>
            <form>
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
                <button type="submit" className="btn btn-primary" on>
                    Submit
                </button>
            </form>

        </>
    );

}

export default PracticeControlledForm