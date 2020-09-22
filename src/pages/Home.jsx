import React, {useState} from 'react';

import Calendar from "../components/Calendar";
import Dialog from "../components/Dialog";
import {useSelector} from "react-redux";
import classnames from "classnames";

const Home = () => {
    const count = useSelector(state => state.repos.count)

    const [date,setDate] = useState(new Date());
    const onChange = date => {
        setDate(date);
    }

    const [isOpen,setIsOpen] = useState(false);
    const onChangeOpen = isOpen => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div  className={classnames('banner', {
                'mask' : isOpen
            })}>
                <div className="banner-text">
                    <p className="banner-text__title ">Choose the day for the meeting</p>
                    <p className="banner-text__subtitle">We encourage you to book your appointment online. <br /> This will
                        save you time.</p>
                </div>
                <div className="calendar-wrap">
                    <div className="container">
                        <Calendar
                            onChangeOpen={onChangeOpen}
                            isOpen={isOpen}
                            onChange={onChange}
                            value={date}
                        />
                    </div>

                </div>
            </div>
            {isOpen && <Dialog isOpen={isOpen}
                               onClose={() => setIsOpen(!isOpen)}>{count[count.length - 1].toDateString()}</Dialog>}
        </>
    )
}
export default Home;