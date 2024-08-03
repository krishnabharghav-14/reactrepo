import { useReducer } from "react"


const actionTypes = {
    BOOK_TICKETS : "BOOK_TICKETS",
    CANCEL_TICKETS : "CANCEL_TICKETS",
    CHANGE_TOTAL_TICKETS : "CHANGE_TOTAL_TICKETS",
    CHANGE_MOVIE : "CHANGE_MOVIE"
}



const reducer = (state, action) => {

    switch(action.type){
        case actionTypes.BOOK_TICKETS:
            return { ...state, bookedTickets: state.bookedTickets+action.payload, currentAvailableTickets: state.currentAvailableTickets - action.payload }
        case actionTypes.CANCEL_TICKETS:
            return { ...state, bookedTickets: state.bookedTickets - action.payload, currentAvailableTickets: state.currentAvailableTickets - action.payload }
        case actionTypes.CHANGE_TOTAL_TICKETS:
            return { ...state, totalTickets: state.totalTickets + action.payload }
        case actionTypes.CHANGE_MOVIE:
            return { ...state, movieName: action.payload }
        default:
            return state
    }


}




const initialState = {
    movieTheatre : "PVR",
    location : "LULU mall",
    movieName : "Raayan",
    totalTickets : 100,
    bookedTickets : 26,
    currentAvailableTickets : 74,
}

const UseReducer = () => {


    const [ currentState, dispatchFunction ] = useReducer(reducer, initialState)

    const bookTicketHandler = () => {
        dispatchFunction({
            type: actionTypes.BOOK_TICKETS,
            payload: 10,
        })
    }

    return <div>
        <h2>{currentState.movieName}</h2>
        <h3>Number of total tickets : {currentState.totalTickets}</h3>
        {/* <h3>Number booked tickets: {currentState.bookedTickets}</h3> */}
        <button onClick={bookTicketHandler}>Book</button>
        <h3>Number of available tickets : {currentState.currentAvailableTickets}</h3>
    </div>

}
export default UseReducer