import React, {useState} from 'react';
import '../css/dialog.css'


class Dialog extends React.Component {
    Week(week) {
        switch (week) {
            case 'Mon' :
                return 'Monday';
                break;
            case 'Tue' :
                return 'Tuesday';
                break;
            case 'Wed' :
                return 'Wednesday';
                break;
            case 'Thu':
                return 'Thursday';
                break;
            case "Fri":
                return 'Friday';
                break;
            case 'Sut' :
                return 'Saturday';
                break;
            case 'Sun' :
                return 'Sunday';
                break;
            default:
                break;
        }
    }
    Month(month) {
        switch (month) {
            case 'Jan' :
                return 'January';
                break;
            case 'Feb' :
                return 'February';
                break;
            case 'Mar' :
                return 'March';
                break;
            case 'Apr':
                return 'April';
                break;
            case "May":
                return 'May';
                break;
            case 'Jun' :
                return 'June';
                break;
            case 'Jul' :
                return 'July';
                break;
            case 'Aug' :
                return 'August';
                break;
            case 'Sep' :
                return 'September';
                break;
            case 'Oct' :
                return 'October';
                break;
            case 'Nov' :
                return 'Novermber';
                break;
            case 'Dec' :
                return 'December';
                break;
            default:
                break;
        }
    }
    Day(day) {
        switch (day) {
            case '01' :
                return '1st';
                break;
            case '02' :
                return '2nd';
                break;
            case '03' :
                return '3d';
                break;
            case '04' :
                return '4th';
                break;
            case '05' :
                return '5th';
                break;
            case '06' :
                return '6th';
                break;
            case '07' :
                return '7th';
                break;
            case '08' :
                return '8th';
                break;
            case '09' :
                return '9th';
                break;
            case '03' :
                return '3d';
                break;
            default:
                return day+"th"
                break;
        }
    }


    render() {
        const week = this.props.children.slice(0,3);
        const month = this.props.children.slice(4,7);
        const day = this.props.children.slice(8,10);

        let dialog = (
            <div className='dialogStyles'>
                <button className='dialogCloseButtonStyles' onClick={this.props.onClose}>x</button>
                <div className="dialog_data">
                    <label>
                        Month
                        <input type="text" name="name" value={this.Month(month)} />
                    </label>
                    <label>
                        Day
                        <input type="text" name="name"  value={this.Day(day) + " " + this.Week(week) } />
                    </label>
                </div>

            </div>
        )
        if (!this.props.isOpen) {
            dialog = null;
        }
            return (
                dialog

            )
    }

}

export default Dialog;