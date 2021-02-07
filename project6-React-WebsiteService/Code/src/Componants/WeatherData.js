import React from 'react'
import { Clock } from './Clock'
import { DegreesToDirection, Month, Weekday, Day } from '../helpers/utils'
import clockIcon from '../Images/clock.png'
import dropIcon from '../Images/drop.png'
import windIcon from '../Images/wind.png'
export const WeatherData = ({ data }) => {
    const { name, country, temp, description, temp_min, temp_max, icon, feels_like, speed, deg, humidity } = data;
  
    return (
      <>


          <div className="widget">
          <div className="left-panel panel">
            <div className="date">
            {Weekday}, {Month} {Day}
            </div>
            <div className="city">
            {name}, {country}
            </div>
            <div className="temp">
              <img src="https://s5.postimg.cc/yzcm7htyb/image.png" alt width={60} />
              {temp}°
            </div>
          </div>
          <div className="right-panel panel">
            <img src="https://s5.postimg.cc/lifnombwz/mumbai1.png" alt width={160} />
          </div>
        </div>
        
        {/* <header>
          <div>
            <img 
            src={clockIcon} 
            alt='time icon'
            />
            <Clock />
          </div>
          <h5>{Weekday}, {Month} {Day}</h5>
        </header>
        <main>
          <div className='weather-main'>
            <img 
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='weather icon'
            className='weather-icon'/>
            <div>
              <h2>{name}, {country}</h2>
              <h3 className='description'>{description}</h3>
            </div>
          </div>
          <div className='temp-main'>
            <h1 className='temperature'>{temp}°</h1>
          </div>
        </main>
        <footer>
        </footer> */}
      </>
    );
  }