import { useReducer, useState } from "react";

const actionTypes = {
    ADD_TODO: "ADD_TODO",
    DELETE_TODO : "DELETE_TODO",
    CHANGE_TODO : "CHANGE_TODO"
}


const reducer = (state, action) => {

    switch(action.type){
        case actionTypes.ADD_TODO:
            return [...state, action.payload]
        case actionTypes.DELETE_TODO:
            return state.filter((each, index)=> index!=action.payload)
        // case actionTypes.CHANGE_TODO:
        //     return 
        default:
            return state
    }
}

const initialState = ["wakeUp", "getReady", "goToClass", "practiceTopics"]



const Todo = () => {

    const [ currentState, dispatchFunction ] = useReducer(reducer, initialState);

    const [ToDo, setToDo] = useState("")

    const userNameHandler = (event) => {
        setToDo(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        dispatchFunction({
            type: actionTypes.ADD_TODO,
            payload: ToDo,
        })
    }


    const deleteHandler = (targetToDo) => {

        dispatchFunction({
            type: actionTypes.DELETE_TODO,
            payload: targetToDo,
        })
    }


    return (
        <>
        <h3>ToDo</h3>
        <div className="form-container">
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Enter ToDo
                    </label>
                    <input
                        type="text-area"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={ToDo}
                        onChange={userNameHandler}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
            {currentState.length > 0 && (
                <table className="table">
                    <tbody>
                        {currentState.map((eachData,index) => (
                            <tr key={index}>
                                <td>{eachData}</td>
                                <td><button onClick={() => deleteHandler(index)} style={{width: 100}}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
        </>
    );

}

export default Todo