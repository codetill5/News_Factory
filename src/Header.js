import React, {useEffect, useState} from 'react';
import './Sass/main.css';
import logo from './assets/images/logo.png';
import axios from 'axios';
import weatherLogo from './assets/images/weatherLogo.png';

const Header = ()=>{
    const todayDate = new Date();
    const month = todayDate.toLocaleString('default', {month: 'long'});
    const day = todayDate.getDate();
    const year = todayDate.getFullYear();
    const fullDate = `${month} ${day}, ${year}`;
    // const[tdate, setDate] = useState();
    // setDate(fullDate);

   
    const[city, setCity] = useState();
    const[temp, setTemp] = useState();
    const[desc, setDesc] = useState();
    const[max, setMax] = useState();
    const[min, setMin] = useState();
    useEffect(()=>{
       async function getData(){
            const res = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=Gwalior&appid=4255d2cc602af340a3bee202920978c0');

        setCity(res.data.name);
        setTemp(res.data.main.temp);
        setDesc(res.data.weather[0].main);
        setMax(res.data.main.temp_max);
        setMin(res.data.main.temp_min);
    }
    getData();
    })
    
    return(
        <>
        <div className="mainHeader">
        <div className="headContentOne">
                <img src={logo} alt="logo" />
                <h1>NEWS JUNCTION</h1>
                <ul>
                    India
                    <li>&bull; Canada</li>
                    <li>&bull; New York</li>

                </ul>
        </div>
        <div className="headContentTwo">
        <h1>NEWS FACTORY</h1>
        <p>{fullDate}</p>

        </div>
        <div className="headContentThree">
           <img src={weatherLogo} alt="weatherLogo" />
            <h1>{temp} f</h1>
            <p className="paraOne">{desc}</p>
                    <p className="paraTwo">{city}</p>
                  
                    
        </div>
        <p className="max">Max {max}</p>
                  <p className="min">Min {min}</p>
        </div>
        </>
    );
};

export default Header;