import React, { useState } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { DateRangePicker } from 'react-dates';

const DatePicker = () => {
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [state, setState]= useState({
        // startDate: null,
        // endDate: null,
        focusedInput: null,
    });

    console.log('CURRENT STATE IN DATEPICKER', state)

    return (
        <DateRangePicker
            startDateId="startDate"
            endDateId="endDate"
            startDate={startDate}
            endDate={endDate}
            onDatesChange={({ startDate, endDate }) => (setStartDate(startDate), setEndDate(endDate))}
            focusedInput={state.focusedInput}
            onFocusChange={(focusedInput) => {setState({ focusedInput })}}
        />
    )
}

export default DatePicker
