import React ,{ useState }from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCount} from "../reducers/reposReducer";
import classnames from "classnames";
import * as calendar from "./Calendar/calendar";

import Dialog from './Dialog'

const TD = ({isOpen,onChangeOpen, index, ind, currentDate, monthData }) => {
  const dispatch = useDispatch()
  const count = useSelector(state => state.repos.count)

  function onCountClick(date,isTrue ) {
     onChangeOpen(isOpen)
     dispatch(setCount(date))

  }
  function check(date, isTrue){
      count.map( (item, ind) => {
          if (item.toString() === date.toString()) {
              isTrue = true
          }
      })
      return isTrue
  }

  let isTrue = false

  return (
      <>
        <td
            key={''+index+ind}
            className={classnames('day', {
              'today': calendar.areEqual(monthData[ind][index], currentDate),
              'selected': check(monthData[ind][index], isTrue)
            })}
            onClick={() => onCountClick(monthData[ind][index], isTrue)}
        >
          {monthData[ind][index].getDate()}
        </td>
      </>
  );
};

export default TD;