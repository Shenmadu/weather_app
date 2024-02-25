import { useEffect, useState } from "react"
import backImg from "../assets/back.jpg"
import '../components/Home.css'

export default function Home() {

    const [location, setLocation] = useState("colombo");
    const [weather, setWeather] = useState({});


    const getData = () => {
        let loc = document.getElementById("txt").value;
        setLocation(loc);
    }


    useEffect(() => {
        fetch(`https://api.weatherapi.com/v1/current.json?key=007cf56f70d4431d99392717233012&q=${location}`)
            .then(response => response.json())
            .then(data => {
                setWeather(data);
            });
    }, [location])



    return (

        <div className="container">
         

            <div className="row img text-center" style={{ backgroundImage: `url(${backImg})` }} >

                <h1 className="display-5 fw-bold text-body-emphasis mt-3" id="title">Weather Forcast</h1>
                <div className="col-6 mx-auto">
                    <div className="d-flex" role="search">
                        <input id="txt" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button onClick={getData} className="btn btn-primary" type="submit">Search</button>
                    </div>
                </div>
            </div>

            <div className=" row mt-2 text-center ">               
           

                <div className="col-lg-4">
                    <h4>{weather.location && weather.location.name}</h4>
                    <img src={weather.current && weather.current.condition.icon} alt=".." />
                    <h4>{weather.current && weather.current.condition.text}</h4>
                </div>

                <div className="col-lg-4">
                <h3>{weather.current && weather.current.temp_c} °C</h3>
                <h4>Wind {weather.current && weather.current.wind_kph} kph</h4>
                <h4>Wind Direction {weather.current && weather.current.wind_dir} </h4>
                </div>

                <div className="col-lg-4">
                    <h3><h4>{weather.location && weather.location.localtime}</h4></h3>
                    <h4>{weather.location && weather.location.country}</h4>
                    <h4>{weather.location && weather.location.region}</h4>
                </div>
            </div>


           

        </div>

    )
}