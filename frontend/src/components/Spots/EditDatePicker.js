import { useState } from 'react';
import 'react-dates/initialize';
import styled from 'styled-components'

import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './DateStyles.css'
import { useDispatch } from 'react-redux';

import { editBookingById } from '../../store/bookings';


const EditDatePicker = (props) => {
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [focusedInput, setFocusedInput] = useState();
    const [successMessage, setSuccessMessage] = useState();
    const [errors, setErrors] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editBookingById(formData))
        .catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.message);
                console.log('TRIGGERED BUTTON', data.message)
            }
        )
        setErrors();
        setSuccessMessage("Booking Edited")
    }

    const formData = {
        "bookingId": parseInt(props.bookingId),
        "startDate": startDate?.toDate().toISOString().split('T')[0],
        "endDate": endDate?.toDate().toISOString().split('T')[0]
    }

    return (
        <Wrapper>
            <span id='api-error'>{errors}</span>
            <span id='api-error'>{successMessage}</span>
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
            <Button onClick={(e) => handleSubmit(e)}>Edit Booking</Button>
        </Wrapper>
    );
}

export default EditDatePicker

const Button = styled.button`
    border: none;
    border-radius: 5px;
    background-color: rgb(63, 63, 63);
    color: white;
    font-size: 10pt;
    width: 100px;
    height: 20px;
    justify-content: center;
    &:hover {
        background-color: rgb(227, 28, 95);
        cursor: pointer;
    }
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
