import { useRef, useState } from 'react'

function Uncontrolled() {


    const emailRef = useRef();
    const passRef = useRef();
    const [error, setError] = useState(null);


    const submitHandler = (event) => {
        event.preventDefault()
        const emailEntered = emailRef.current.value
        const passwordEntered = passRef.current.value
        console.log(emailEntered, passwordEntered)

        if(emailEntered.length<15 && passwordEntered.length<15){
            setError(null);

            successSubmit(emailEntered, passwordEntered);
        }
        else {
            setError("Please Enter less than 15 characters...")
        }
    }


    const successSubmit = async (username, password) => {
        try {
            const response = await fetch("https://dummyjson.com/auth/login", {
                method : "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify({
                    username,
                    password,
                }),
            });

            const finalResponse = await response.json();
            console.log(finalResponse, "Final Response");
        }catch(err){
            
        }
    }


    


    return (
        <>
            <form onSubmit={submitHandler} >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        ref={emailRef}

                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        ref = {passRef}
                    />
                </div>
                {error && <span>{error}</span>}
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



export default Uncontrolled