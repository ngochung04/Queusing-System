import React, { useState } from 'react'
import "./datepicker.scss"
import { ReactComponent as ArrowIc } from "../../Assets/arrow-right.svg"
import { ReactComponent as CalendarIc } from "../../Assets/calendar.svg"
import Calendar from 'react-calendar'
const DatePicker: React.FC<{ label?: string, flexItem?: boolean }> = ({ label, flexItem }) => {
  const dateNow = new Date(Date.now())
  const [fromDate, setFromDate] = useState<any>(dateNow.toLocaleDateString())
  const [toDate, setToDate] = useState<any>(dateNow.toLocaleDateString())
  const [calendarView, setCalendarView] = useState<boolean>()
  const [temp, setTemp] = useState<Date[]>([dateNow, dateNow])
  const changeDate = (time: Array<Date>) => {
    setFromDate(time[0].toLocaleDateString())
    setToDate(time[1].toLocaleDateString())
    setTemp(time)
  }


  return (
    <div className={`app__date-picker ${flexItem && `flex-1`}`}>
      <div className="app__date-picker__label">{label}</div>
      <div className="date-picker">
        <div className="date-picker__date-picker" onClick={() => setCalendarView(prev => !prev)}>
          <CalendarIc />
          <div className="date">{fromDate}</div>
        </div>
        <div className="date-picker__arrow"><ArrowIc /></div>
        <div className="date-picker__date-picker" onClick={() => setCalendarView(prev => !prev)}>
          <CalendarIc />
          <div className="date">{toDate}</div>
        </div>
      </div>
      {calendarView && <div className="calendar-view">
        <Calendar selectRange onChange={changeDate} defaultValue={temp} />
      </div>}
    </div>
  )
}

export default DatePicker