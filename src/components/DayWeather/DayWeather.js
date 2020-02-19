import React from 'react';
import './DayWeather.css';

const dayWeekAbbreviated = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
const monthNames = ['января', 'февраля', 'марта',
    'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября',
    'октября', 'ноября', 'декабря'];

class DayWeather extends React.Component {
    convertDate = () => {
        const date = new Date(this.props.day * 1000);
        const dayWeek = dayWeekAbbreviated[date.getDay()];
        const day = date.getDate();
        const month = monthNames[date.getMonth()];

        return `${dayWeek} ${day} ${month} `;
    }

    render() {
        return (
            <section className='day-weather'>
                <div className='wrapper'>
                    <h2 className='day-weather__city'>{this.props.city}</h2>
                    <p className='day-weather__date'>{this.convertDate()}</p>
                    <div className='day-weather__info'>
                        <div className='day-weather__temperature'>
                            <p className='day-weather__value'>
                                {this.props.temp}
                                <sup className='day-weather__degree'>°</sup>
                            </p>
                            <img 
                                className='day-weather__icon' 
                                src={`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`} 
                                alt='Weather icon' 
                            />
                        </div>
                        <div className='day-weather__description'>
                            <p className='day-weather__summary'>{this.props.summary}</p>
                            <p className='day-weather__apparent'>Ощущается как: {Math.round(this.props.apparent)}°</p>
                            <p className='day-weather__wind'>Ветер: {this.props.wind} m/s</p>
                            <p className='day-weather__humidity'>Влажность: {this.props.humidity} %</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default DayWeather;
