import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.scss';

const CalendarView = () => {
  const [value, onChange] = useState(new Date());
  return <Calendar value={value} />;
};

export default CalendarView;
