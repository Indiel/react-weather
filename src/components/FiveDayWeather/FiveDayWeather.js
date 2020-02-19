import React from 'react';
import './FiveDayWeather.css';

import DayCard from '../DayCard/DayCard'

class FiveDayWeather extends React.Component {
    formatDayCards = () => {
        return this.props.days.map((day, index) => 
            <DayCard day={day} key={index} />
        )
    }

    render() {
        return (
            <section className='five-day'>
                <div className='wrapper'>
                    <ul className='five-day__list'>
                        {this.formatDayCards()}
                    </ul>
                </div>
            </section>
        );
    }
}

export default FiveDayWeather;
