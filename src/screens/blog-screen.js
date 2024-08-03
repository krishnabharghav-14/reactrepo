import NavBar from "../components/navbar/navbar";
import UseReducer from "../components/useReducer/usereducer";
import Todo from "../components/useReducer/useReducerToDo";

const BlogScreen = () => {
    return (
        <>
        <NavBar/>
        <h3>Welcome to Blog Screen</h3>
        {/* <UseReducer/> */}
        <Todo/>
        </>
    );
}

export default BlogScreen