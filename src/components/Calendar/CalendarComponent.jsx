import React from 'react';

import * as calendar from './calendarLogic';

import './index.css';
import TD from '../TD'
import shortid from 'shortid';

export default class Calendar extends React.Component {
    static defaultProps = {
        date: new Date(),
        years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        weekDayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        onChange: Function.prototype,
    };

    state = {
        date: this.props.date,
        currentDate: new Date(),
    };

    get year() {
        return this.state.date.getFullYear();
    }

    get month() {
        return this.state.date.getMonth();
    }

    get day() {
        return this.state.date.getDate();
    }

    handlePrevMonthButtonClick = () => {
        const date = new Date(this.year, this.month - 1);

        this.setState({date});
    };

    handleNextMonthButtonClick = () => {
        const date = new Date(this.year, this.month + 1);

        this.setState({date});
    };

    handleSelectChange = () => {
        const year = this.yearSelect.value;
        const month = this.monthSelect.value;

        const date = new Date(year, month);

        this.setState({date});
    };

    render() {
        const {years, monthNames, weekDayNames, onChangeOpen, isOpen} = this.props;
        const {currentDate} = this.state;
        const monthData = calendar.getMonthData(this.year, this.month);
        const prevMonthData = calendar.getMonthData(this.year, this.month - 1);
        const nextMonthData = calendar.getMonthData(this.year, this.month + 1);

        let countFirstDays = 0;
        let countLastDays = 1;
        let lastDay = 0;
        monthData[0].map(item => {
            if (item === undefined) {
                countFirstDays++
            }
        })
        prevMonthData[prevMonthData.length - 1].map(item => {
            if (item !== undefined) {
                lastDay = item.getDate()
            }
        })

        return (
            <div className="calendar">
                <header>
                    <button onClick={this.handlePrevMonthButtonClick}>{'<'}</button>

                    <div>
                        <select
                            ref={element => this.monthSelect = element}
                            value={this.month}
                            onChange={this.handleSelectChange}
                        >
                            {monthNames.map((name, index) =>
                                <option key={shortid.generate()} value={index}>{name}</option>
                            )}
                        </select>

                        <select
                            ref={element => this.yearSelect = element}
                            value={this.year}
                            onChange={this.handleSelectChange}
                        >
                            {years.map(year =>
                                <option key={shortid.generate()} value={year}>{year}</option>
                            )}
                        </select>
                    </div>

                    <button onClick={this.handleNextMonthButtonClick}>{'>'}</button>
                </header>
                <div className="line"></div>
                <table>

                    <thead>
                    {monthData.map((week, ind) =>
                        <tr key={shortid.generate()} className="week">
                            {week.map((date, index) =>
                                (index !== 0 && week[index - 1]) ?
                                    <TD key={shortid.generate()} isOpen={isOpen} onChangeOpen={onChangeOpen}
                                        index={index - 1} ind={ind}
                                        currentDate={currentDate} monthData={monthData}/> :
                                    (index === 0 && monthData[ind - 1]) ?
                                        <TD key={shortid.generate()} isOpen={isOpen} onChangeOpen={onChangeOpen}
                                            is={true} index={6}
                                            ind={ind - 1} currentDate={currentDate} monthData={monthData}/> :
                                        (ind === 0 && countFirstDays !== 6) ?
                                            <td key={shortid.generate()}
                                                className="day grey">{lastDay - countFirstDays--}</td> :
                                            (ind === monthData.length - 1) ?
                                                <td key={shortid.generate()}
                                                    className="day grey">{countLastDays++}</td> : null
                            )}
                        </tr>
                    )}
                    </thead>

                    <tbody>
                    <tr>
                        {weekDayNames.map(name =>
                            <th key={shortid.generate()}>{name}</th>
                        )}
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}