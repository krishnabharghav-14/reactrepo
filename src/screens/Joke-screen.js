import axios from 'axios'
import { useState, useEffect } from 'react'


const JokeScreen = () => {


    const [jokes, setJokes] = useState([])
    const [jokeno, setJokeno] = useState(null)
    const [reveal, setReveal] = useState(false)


    useEffect(() => fetchHandler, [])



    const fetchHandler = async () => {
        try {
            const { data } = await axios.get("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10")
            const joke = data.jokes.filter((each)=> each.type=="twopart")
            // console.log(joke)
            setJokes(joke)
        }
        catch (err) {
            console.log("error" + err);
        }
    }

    const generateHandler = () => {
        const a = Math.floor(Math.random() * 10);
        console.log(jokes[a])
        setJokeno(a)
    }


    const revealHandler = () => {
        setReveal(true)
    }





    return (
        <>
            <h3>Welcome to Joke generator page</h3>
            <button onClick={generateHandler}>Generate</button>
            {

                jokes.length > 0 && 
                jokes[jokeno].type == "twopart" ? 
                <><p>{jokes[jokeno].setup}</p> 
                {reveal ? <p>{jokes[jokeno].delivery}</p>:
                        <button onClick={revealHandler}>Reveal</button>}</>:<p></p>
            }
        </>
    );

}

export default JokeScreen