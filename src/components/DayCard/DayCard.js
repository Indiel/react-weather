import React from 'react';
import './DayCard.css';

const dayWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

class DayCard extends React.Component {
    convertDate = () => {
        const date = new Date(this.props.day.dt * 1000);

        return `${dayWeek[date.getDay()]}`;
    }

    render() {
        return (
            <li className='five-day__item'>
                <p className='five-day__day'>{this.convertDate()}</p>
                <p className='five-day__temperature'>{Math.round(this.props.day.main.temp)}°</p>
                <img 
                    className='five-day__icon'
                    src={`http://openweathermap.org/img/wn/${this.props.day.weather[0].icon}@2x.png`} 
                    alt='' 
                />
            </li>
        );
    }
}

export default DayCard;
