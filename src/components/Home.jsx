import { useEffect, useState } from "react"

export default function Home() {    

    const [location,setLocation]=useState("colombo");
    const [weather,setWeather] = useState({});

     
    function getData(){
        let loc=document.getElementById("txt").value;
        setLocation(loc);
    }
    
    
    useEffect(() => {
        fetch(`https://api.weatherapi.com/v1/current.json?key=007cf56f70d4431d99392717233012&q=${location}`)
            .then(response => response.json())
            .then(data => {                
                setWeather(data);
            });
    },[location])



    return (

        <div className="container">
            <div className="px-4 py-3 my-5 text-center">
                <h1 className="display-5 fw-bold text-body-emphasis">Weather</h1>                
                <div className="col-6 mx-auto">
                    <div className="d-flex" role="search">
                        <input  id="txt" className="form-control me-2" type="search"  placeholder="Search" aria-label="Search" />
                        <button onClick={getData}  className="btn btn-outline-success" type="submit">Search</button>
                    </div>                   
                </div>

                <div className="col-lg-6 mx-auto">
                <h4>{weather.current && weather.current.temp_c}</h4>
                <h4>{weather.location && weather.location.name}</h4>
                <h4>{weather.location && weather.location.region}</h4>
                <h4>{weather.current && weather.current.condition.text}</h4>
                <img src={weather.current && weather.current.condition.icon} alt=".."/>
                </div>
            </div>
        </div>
    )
}