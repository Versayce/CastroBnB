import React, { useState } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { DateRangePicker } from 'react-dates';
// import e from 'express';

const DatePicker = () => {
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [state, setState]= useState({
        focusedInput: null,
    });

    console.log('START DATE: ', startDate?.toDate(), '\n', 'END DATE: ', endDate?.toDate())

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <>
            <DateRangePicker
                startDateId="startDate"
                endDateId="endDate"
                startDate={startDate}
                endDate={endDate}
                onDatesChange={({ startDate, endDate }) => (setStartDate(startDate), setEndDate(endDate))}
                focusedInput={state.focusedInput}
                onFocusChange={(focusedInput) => {setState({ focusedInput })}}
            />
            <button onClick={(e) => handleSubmit}>Submit</button>
        </>
    )
}

export default DatePicker
