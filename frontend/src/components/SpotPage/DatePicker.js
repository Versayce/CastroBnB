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
    margin-top: 0px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: rgb(63, 63, 63);
    color: white;
    font-size: 13pt;
    position: relative;
    overflow: hidden;
    width: 18%;
    justify-content: center;
    &:hover {
        background-color: rgb(227, 28, 95);
        cursor: pointer;
    }
`
const Wrapper = styled.div`
    border: 1px solid #e2e2e2;
    background-image: linear-gradient(to bottom, #ffffff, #fdfdfd, #fafafa, #f8f8f8, #f6f6f6);
    border-radius: 10px;
    padding: 60px 0px 60px 0px;
    margin: 30px 0px 30px 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
`
