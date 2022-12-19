import './createSpot.css'
import FormInput from './CreateSpotInput'
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createSpot } from '../../store/spots';


const CreateSpot = ({ setShowModal }) => {
    const dispatch = useDispatch();
    const [ apiErrors, setApiErrors ] = useState([]);
    const [ createSpotData, setCreateSpotData ] = useState({
        address:"",
        city:"",
        state:"",
        country:"",
        name:"",
        description: "",
        price: "",
        imageUrl: "",
    });

    const inputs = [
        {
            id: 1,
            name: "address",
            type: "address",
            placeholder: "Address",
            label: "Address",
            errorMessage: "Address must be more than 6 characters in length",
            required: true,
            pattern: "^[0-9A-Za-z \.]{7,}$",
        },
        {
            id: 2,
            name: "city",
            type: "city",
            placeholder: "City",
            label: "City",
            errorMessage: "City name must be 3-10 characters with no numbers",
            required: true,
            pattern: "^[A-Za-z]{3,10}$",
        },
        {
            id: 3,
            name: "state",
            type: "state",
            placeholder: "State",
            label: "State",
            errorMessage: "State name must be 2-15 characters with no numbers",
            required: true,
            pattern: "^[A-Za-z]{2,15}$",
        },
        {
            id: 4,
            name: "country",
            type: "country",
            placeholder: "Country",
            label: "Country",
            errorMessage: "Country name must be 3-30 characters with no numbers",
            required: true,
            pattern: "^[A-Za-z ]{3,30}$",
        },
        {
            id: 5,
            name: "name",
            type: "name",
            placeholder: "Name",
            label: "Name",
            errorMessage: "Name must be 2-15 characters in length",
            required: true,
            pattern: "^[A-Za-z ]{2,15}$",
        },
        {
            id: 6,
            name: "description",
            type: "description",
            placeholder: "Description",
            label: "Description",
            errorMessage: "Description must be at least 20 characters long",
            required: true,
            pattern: "^[A-Za-z0-9 , .]{20,}$",
        },
        {
            id: 7,
            name: "price",
            type: "decimal",
            placeholder: "Price",
            label: "Price",
            errorMessage: "Price must be a non negative integer that does not start in 0",
            required: true,
            pattern: "^[1-9][0-9]*$",
        },
        {
            id: 8,
            name: "imageUrl",
            type: "imageUrl",
            placeholder: "ImageUrl",
            label: "ImageUrl",
            errorMessage: "Please enter a URL that contains .jpg, .jpeg, .png, .bmp, or .gif extension type",
            required: true,
            pattern: ".*\.(jpg|jpeg|png|gif|bmp).*",
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        return dispatch(createSpot({ createSpotData }))
        .then(() => setShowModal(false))
        .catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setApiErrors(data.errors);
            }
        )
    }

    const onChange = (e) => {
        setCreateSpotData({...createSpotData, [e.target.name]: e.target.value });
    };

    return (
        <div className="create-spot">
            <form onSubmit={handleSubmit}>
                <h1>Add Listing</h1>
                {inputs.map((input) => (
                    <FormInput key={input.id} {...input} value={createSpotData[input.name]} onChange={onChange} />
                    ))}
                <span id='api-error'>{apiErrors}</span>
                <button className="btn btn-create-spot">Create Listing</button>
            </form>
        </div>
    )
}

export default CreateSpot;
