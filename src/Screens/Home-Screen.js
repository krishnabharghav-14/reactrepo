import { useEffect, useRef, useState } from "react"
import Navbar from "../components/navbar"
import axios from "axios";

// const HomeScreen = () => {


//     const [search, setSearch] = useState("")
//     const [currentWeather, setcurrentWeather] = useState({})
//     const [Recents, setRecents] = useState([])

//     // useEffect(() => {
//     //     fetchHandler()
//     // }, [])


//     const currentFetchHandler = async (lon, lat) => {
//         const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3152fc72d8992f685bf03f1fcb5eb1f0`);
//         console.log(res.data)
//         setcurrentWeather(res.data)
//     }


//     function initGeolocation() {
//         if (navigator.geolocation) {
//             // Call getCurrentPosition with success and failure callbacks
//             navigator.geolocation.getCurrentPosition(success, fail);
//         } else {
//             alert("Sorry, your browser does not support geolocation services.");
//         }
//     }

//     function success(position) {
//         console.log(position.coords.longitude);
//         console.log(position.coords.latitude);
//         currentFetchHandler(position.coords.longitude, position.coords.latitude)

//     }

//     function fail() {
//         // failed to fetch weather
//         console.log("failed to fetch weather");
//     }


//     const changeHandler = (event) => {
//         console.log(event.target.value)
//         setSearch(event.target.value)
//         cityFetchHandler(event.target.value)
//     }

//     const cityFetchHandler = async (searched) => {
//         if(searched==""){
//             setcurrentWeather({})
//         }
//         try {
//             const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searched}&APPID=3152fc72d8992f685bf03f1fcb5eb1f0`)
//             console.log(res)
//             if(res.status==200){
//                 setcurrentWeather(res.data)
//             }
//         }
//         catch (err) {
//             console.log("error", search)
//         }
//     }



//     return (
//         <>
//             <Navbar />
//             <h1>youkoso</h1>
//             <div>
//                 <div>
//                     <input
//                         placeholder="Search City"
//                         onChange={changeHandler}
//                         value={search} />
//                 </div>

//                 <button onClick={initGeolocation}>Get by current Location</button>

//                 {
//                     Object.keys(currentWeather).length>0 ? 
//                     <div>
//                         <h4>{currentWeather.name}</h4>
//                         <p>Temperature: {Math.floor(currentWeather.main.temp-273.15)}</p>
//                         <p>Weather: {currentWeather.weather[0].main}</p>
//                     </div>:
//                     <h4>No details</h4>
//                 }

//             </div>
//         </>
//     )

// }

// export default HomeScreen


const HomeScreen = () => {
    const [currentWeather, setcurrentWeather] = useState({})
    const [Recents, setRecents] = useState([])
    const search = useRef()



    const currentFetchHandler = async (lon, lat) => {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3152fc72d8992f685bf03f1fcb5eb1f0`);
        console.log(res.data)
        setcurrentWeather(res.data)
    }


    function initGeolocation() {
        if (navigator.geolocation) {
            // Call getCurrentPosition with success and failure callbacks
            navigator.geolocation.getCurrentPosition(success, fail);
        } else {
            alert("Sorry, your browser does not support geolocation services.");
        }
    }

    function success(position) {
        console.log(position.coords.longitude);
        console.log(position.coords.latitude);
        currentFetchHandler(position.coords.longitude, position.coords.latitude)

    }

    function fail() {
        // failed to fetch weather
        console.log("failed to fetch weather");
    }


    const submitHandler = (event) => {
        event.preventDefault()
        const searched = search.current.value
        // console.log(searched)
        cityFetchHandler(searched)
    }

    const cityFetchHandler = async (searched) => {
        if (searched == "") {
            setcurrentWeather({})
        }
        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searched}&APPID=3152fc72d8992f685bf03f1fcb5eb1f0`)
            console.log(res)
            if (res.status == 200) {
                setcurrentWeather(res.data)
                setRecents([...Recents, res.data])
            }
        }
        catch (err) {
            console.log("error", search)
        }
    }


    return (
        <>
            <Navbar />
            <div>
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        ref={search} />
                    <button type="submit" >Search</button>
                </form>
                <button onClick={initGeolocation}>Get by current Location</button>
            </div>

            <>
                {
                  Recents.length>0? 
                  <div>
                    {
                        Recents.map((each)=> {
                            return (
                                <>
                                <p>{each.name}</p>
                                </>
                            )
                        })
                    }
                  </div> : <p>No Recents</p>
                }
            </>


            {
                Object.keys(currentWeather).length > 0 ?
                    <div>
                        <h5>City: {currentWeather.name}</h5>
                        <h5>Temperature: {Math.floor(currentWeather.main.temp - 273.15)}</h5>
                        <h5>Weather: {currentWeather.weather[0].main}</h5>
                        <h5>Wind: {currentWeather.wind.speed} m/s</h5>
                        {/* <h5>Sunrise: {720-4*(currentWeather)}</h5> */}
                    </div> : <h5>No Data Found</h5>
            }
        </>
    );
}

export default HomeScreen