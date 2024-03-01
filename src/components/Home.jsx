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
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=007cf56f70d4431d99392717233012&q=${location}&days=4`)
            .then(response => response.json())
            .then(data => {
                setWeather(data);
            });
    }, [location])





    return (

        <div className="container">
            {/* search section start */}
            <div className="row img text-center" style={{ backgroundImage: `url(${backImg})` }} >

                <h2 className="display-5 fw-bold text-body-emphasis mt-3" id="title">Weather Today at {location}</h2>

                <div className="col-lg-6 col-sm-8  mx-auto">
                    <div className="d-flex" role="search">
                        <input id="txt" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button onClick={getData} className="btn btn-primary" type="submit">Search</button>
                    </div>
                </div>
            </div>
            {/* search section end */}

            {/* current weather section strat */}
            <div className=" row mt-2 text-center">

                <div className="col-lg-4 col-md-4 ">
                    <h4>{weather.location && weather.location.name}</h4>
                    <img src={weather.current && weather.current.condition.icon} alt=".." />
                    <h4>{weather.current && weather.current.condition.text}</h4>
                </div>

                <div className="col-lg-4 col-md-4 ">
                    <h3>{weather.current && weather.current.temp_c} °C</h3>
                    <h4>Wind: {weather.current && weather.current.wind_kph} kph</h4>
                    <h4>Wind Direction: {weather.current && weather.current.wind_dir} </h4>
                    <h4>Pressure: {weather.current && weather.current.pressure_in} in</h4>
                </div>

                <div className="col-lg-4 col-md-4">
                    <h3><h4>{weather.location && weather.location.localtime}</h4></h3>
                    <h4>{weather.location && weather.location.country}</h4>
                    <h4>{weather.location && weather.location.region}</h4>

                </div>
            </div>
            {/* current weather section end */}

            {/* card section start */}

            <div className="my-5">
                <nav aria-label="breadcrumb">
                    <div className="breadcrumb breadcrumb-chevron p-1  rounded-3  text-white " style={{ backgroundColor: '#0e3065' }}>
                        <h4 className="ms-3">Weather Forcast </h4>
                    </div></nav>
            </div>
            <div className="container">
                <div className="row mx-auto text-center ">

                    <div className="col-lg-3 col-md-4 col-sm-6  mb-3 ">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">{weather.forecast && weather.forecast.forecastday[0].day.condition.text}</h5>
                                <h2>{weather.forecast && weather.forecast.forecastday[0].day.avgtemp_c}°C</h2>
                                <img src={weather.forecast && weather.forecast.forecastday[0].day.condition.icon} alt=".." />
                                <h5>{weather.forecast && weather.forecast.forecastday[0].date}</h5>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6  mb-3">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">{weather.forecast && weather.forecast.forecastday[1].day.condition.text}</h5>
                                <h2 >{weather.forecast && weather.forecast.forecastday[1].day.avgtemp_c}°C</h2>
                                <img src={weather.forecast && weather.forecast.forecastday[1].day.condition.icon} alt=".." />
                                <h5 >{weather.forecast && weather.forecast.forecastday[1].date}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6  mb-3">
                        <div className="card text-center ">
                            <div className="card-body">
                                <h5 className="card-title">{weather.forecast && weather.forecast.forecastday[2].day.condition.text}</h5>
                                <h2>{weather.forecast && weather.forecast.forecastday[2].day.avgtemp_c}°C</h2>
                                <img src={weather.forecast && weather.forecast.forecastday[2].day.condition.icon} alt=".." />
                                <h5>{weather.forecast && weather.forecast.forecastday[2].date}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6  mb-3">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">{weather.forecast && weather.forecast.forecastday[0].day.condition.text}</h5>
                                <h2>{weather.forecast && weather.forecast.forecastday[0].day.avgtemp_c}°C</h2>
                                <img src={weather.forecast && weather.forecast.forecastday[0].day.condition.icon} alt=".." />
                                <h5>{weather.forecast && weather.forecast.forecastday[0].date}</h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* card section start */}

        </div>

    )
}