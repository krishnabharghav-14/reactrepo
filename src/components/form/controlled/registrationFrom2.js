import React, { useState } from "react";
import ControlledLoginForm from "./loginForm";

function ControlledRegistrationForm() {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [registered, setRegistered] = useState(false);

  const [emailError, setEmailError] = useState(null);
  const [nameError, setNameError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const [users, setUsers] = useState([]);

  const emailHandler = (event) => {
    const userEnteredEmail = event.target.value;
    if (userEnteredEmail.length < 15 && userEnteredEmail.length !== "") {
      setUserEmail(userEnteredEmail);
      setEmailError(null);
    } else {
      setEmailError("Invalid Email, enter less than 15 characters");
    }
  };

  const nameHandler = (event) => {
    const userEnteredName = event.target.value;
    if (userEnteredName.length > 0 && userEnteredName.length < 15) {
      setUserName(userEnteredName);
      setNameError(null);
    } else {
      setNameError("Invalid Name, enter less than 15 characters");
    }
  };

  const phoneHandler = (event) => {
    const userEnteredPhone = event.target.value;
    if (userEnteredPhone.length > 0 && userEnteredPhone.length <= 11) {
      setUserPhone(userEnteredPhone);
      setPhoneError(null);
    } else {
      setPhoneError("Invalid Phone Number, enter a 10 digit number");
    }
  };

  const passwordHandler = (event) => {
    const userEnteredPassword = event.target.value;
    if (userEnteredPassword.length > 0 && userEnteredPassword.length < 15) {
      setUserPassword(userEnteredPassword);
      setPasswordError(null);
    } else {
      setPasswordError("Invalid Password, enter less than 15 characters");
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!userEmail || !userName || !userPhone || !userPassword) {
      alert("Please fill in all fields");
      return;
    }

    const newUser = {
      email: userEmail,
      name: userName,
      phone: userPhone,
      password: userPassword,
    };

    setUsers([...users, newUser]);

    window.localStorage.setItem("users", JSON.stringify([...users, newUser]));
    // window.localStorage.clear()

    setUserEmail("");
    setUserName("");
    setUserPhone("");
    setUserPassword("");

    alert("Registration successful!");
    setRegistered(true)
  };

  return (
    <>
      {/* Conditional rendering based on registration status */}
      {registered ? (
                <ControlledLoginForm />
            ) : (
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
            value={userEmail}
            onChange={emailHandler}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
          {emailError && <span>{emailError}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={userName}
            onChange={nameHandler}
          />
          {nameError && <span>{nameError}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail3" className="form-label">
            Phone number
          </label>
          <input
            type="tel"
            className="form-control"
            id="exampleInputEmail3"
            aria-describedby="emailHelp"
            value={userPhone}
            onChange={phoneHandler}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your phone number with anyone else.
          </div>
          {phoneError && <span>{phoneError}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail4" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputEmail4"
            aria-describedby="emailHelp"
            value={userPassword}
            onChange={passwordHandler}
          />
          {passwordError && <span>{passwordError}</span>}
        </div>
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
       )} 
    </>
  );
}

export default ControlledRegistrationForm;















// import { useState } from "react";
// import ControlledLoginForm from "./loginForm";
// // import ContorlledLoginForm from "./loginForm";

// function ControlledRegistrationForm() {

//     const [registered, setRegistered] = useState(false)

//     const [userEmail, setUserEmail] = useState("")
//     const [userName, setUserName] = useState("")
//     const [userPhone, setUserPhone] = useState("")
//     const [userPassword, setUserPassword] = useState("")
//     const [userConfirmPassword, setUserConfirmPassword] = useState("")

//     const [record, setRecord] = useState({})
//     const [users, setUsers] = useState([])


//     const [emailError, setEmailError] = useState(null)
//     const [nameError, setNameError] = useState(null)
//     const [phoneError, setPhoneError] = useState(null)
//     const [passwordError, setPasswordError] = useState(null)
//     const [confirmPasswordError, setConfirmPasswordError] = useState(null)


//     const emailHandler = (event) => {

//         const userEnteredEmail = event.target.value

//         if (userEnteredEmail.length < 15 && userEnteredEmail.length !== "") {
//             setUserEmail(userEnteredEmail)
//             setRecord({ ...record, email: userEnteredEmail })

//             setEmailError(null)
//         }
//         else {
//             setEmailError("Invalid Email enter less than 15 characters")
//         }
//         // console.log(userEnteredEmail)
//         // console.log(userEmail)
//     }
//     const nameHandler = (event) => {

//         const userEnteredName = event.target.value

//         if (userEnteredName.length > 0 && userEnteredName.length < 15) {
//             setUserName(userEnteredName)
//             setRecord({ ...record, name: userEnteredName })
//             setNameError(null)
//         }
//         else {
//             setNameError("Invalid Name enter less than 15 characters")
//         }
//         // console.log(userEnteredName)
//     }
//     const phoneHandler = (event) => {

//         const userEnteredPhone = event.target.value

//         if (userEnteredPhone.length > 0 && userEnteredPhone.length <= 11) {
//             setUserPhone(userEnteredPhone)
//             setRecord({ ...record, phone: userEnteredPhone })
//             setPhoneError(null)
//         }
//         else {
//             setPhoneError("Invalid Phone Number enter a 10 digit number")
//         }
//         // console.log(userEnteredPhone)
//     }
//     const passwordHandler = (event) => {

//         const userEnteredPassword = event.target.value

//         if (userEnteredPassword.length > 0 && userEnteredPassword.length < 15) {
//             setUserPassword(userEnteredPassword)
//             setRecord({ ...record, password: userEnteredPassword })
//             setPasswordError(null)
//         }
//         else {
//             setPasswordError("Invalid Password enter less than 15 characters")
//         }
//         // console.log(userPassword)
//         // console.log(userEnteredPassword)
//         // doubt in password and confirm password relation
//         // return userEnteredPassword
//     }
//     // const confirmPasswordHandler = (event) => {

//     //     const userEnteredConfirmPassword = event.target.value

//     //     if (userEnteredConfirmPassword.length > 0 && userEnteredConfirmPassword.length < 15) {
//     //         setUserConfirmPassword(userEnteredConfirmPassword)
//     //         setConfirmPasswordError(null)

//     //         setRecord({
//     //             email: {userEmail},
//     //             Name: {userName},
//     //             Phome: {userPhone},
//     //             Password: {userPassword}
//     //         })
//     //     }
//     //     else {
//     //         setPasswordError("Invalid Password enter less than 15 characters")
//     //     }
//     //     // console.log(userEnteredConfirmPassword)
//     // }



//     const submitHandler = (event) => {
//         event.preventDefault()

//         // console.log(record)

//         setUsers([...users, record])
//         // console.log(users)
//         // storageHandler()
//         window.localStorage.setItem("users",JSON.stringify(users))
//         // window.localStorage.clear()
//         setUserEmail("")
//         setUserName("")
//         setUserPhone("")
//         setUserPassword("")
//         setUserConfirmPassword("")
//         // setRegistered(true)
//         // setRegistered(true)
//         // console.log(users)
//     }


//     // const storageHandler = () => {
//     //     // window.localStorage.setItem("users",JSON.stringify(users))
//     //     // window.localStorage.clear()
//     //     console.log(users)
//     // }




//     return (
//         <>
//             {/* {
//               console.log(record)}
//             {
//             console.log(users)
          
//         } */}
//             {registered ?
//             <ControlledLoginForm/>:
//                 <form onSubmit={submitHandler}>
//                     <div className="mb-3">
//                         <label htmlFor="exampleInputEmail1" className="form-label">
//                             Email address
//                         </label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="exampleInputEmail1"
//                             aria-describedby="emailHelp"
//                             value={userEmail}
//                             onChange={emailHandler}

//                         />
//                         <div id="emailHelp" className="form-text">
//                             We'll never share your email with anyone else.
//                         </div>
//                         {emailError && <span>{emailError}</span>}
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="exampleInputPassword1" className="form-label">
//                             Name
//                         </label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="exampleInputPassword1"
//                             value={userName}
//                             onChange={nameHandler}
//                         />
//                     </div>
//                     <div id="emailHelp" className="form-text">
//                         We'll never share your name with anyone else.
//                     </div>
//                     {nameError && <span>{nameError}</span>}
//                     <div className="mb-3">
//                         <label htmlFor="exampleInputEmail3" className="form-label">
//                             Phone number
//                         </label>
//                         <input
//                             type="tel"
//                             className="form-control"
//                             id="exampleInputEmail3"
//                             aria-describedby="emailHelp"
//                             value={userPhone}
//                             onChange={phoneHandler}

//                         />
//                         <div id="emailHelp" className="form-text">
//                             We'll never share your phone number with anyone else.
//                         </div>
//                         {phoneError && <span>{phoneError}</span>}
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="exampleInputEmail4" className="form-label">
//                             Password
//                         </label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="exampleInputEmail4"
//                             aria-describedby="emailHelp"
//                             value={userPassword}
//                             onChange={passwordHandler}

//                         />
//                         {passwordError && <span>{passwordError}</span>}
//                     </div>
//                     {/* <div className="mb-3">
//             <label htmlFor="exampleInputEmail5" className="form-label">
//                 Confirm Password
//             </label>
//             <input
//                 type="text"
//                 className="form-control"
//                 id="exampleInputEmail5"
//                 aria-describedby="emailHelp"
//                 value={userConfirmPassword}
//                 onChange={confirmPasswordHandler}
//             />
//             {confirmPasswordError && <span>{confirmPasswordError}</span>}
//         </div> */}
//                     <input type="submit" className="btn btn-primary" value="Submit"/>

//                 </form>}

//         </>
//     );
// }

// export default ControlledRegistrationForm;