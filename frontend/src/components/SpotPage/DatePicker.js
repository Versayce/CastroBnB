import React, { useState } from 'react';
import 'react-dates/initialize';
import styled from 'styled-components'

import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './DateStyles.css'


const DatePicker = () => {
    const [startDate, setStartDate] = React.useState();
    const [endDate, setEndDate] = React.useState();
    const [focusedInput, setFocusedInput] = React.useState();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('TRIGGERED BUTTON', startDate, '\n', endDate)
    }

    return (
      <Wrapper>
        <DateRangePicker
          startDate={startDate}
          startDateId="start-date"
          endDate={endDate}
          endDateId="end-date"
          onDatesChange={({ startDate, endDate }) => {
            setStartDate(startDate);
            setEndDate(endDate);
          }}
          focusedInput={focusedInput}
          onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
        />
        <Button onClick={(e) => handleSubmit(e)}>Book Listing</Button>
      </Wrapper>
    );
}

export default DatePicker

const Button = styled.button`
    width: 20%;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
`
