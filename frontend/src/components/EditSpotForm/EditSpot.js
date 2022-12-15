import './editSpot.css'
import FormInput from './EditSpotInput'
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editSpotById } from '../../store/spots';


const EditSpot = ({ setShowModal, spot }) => {
    const dispatch = useDispatch();
    const { avgRating } = spot
    const [ apiErrors, setApiErrors ] = useState([]);
    const [ editSpotData, setEditSpotData ] = useState({
        spotId: spot.id,
        address: spot.address,
        city: spot.city,
        state: spot.state,
        country: spot.country,
        name: spot.name,
        description:  spot.description,
        price:  spot.price,
        previewImage: spot.previewImage,
        avgRating: spot.avgRating
    });

    const inputs = [
        {
            id: 1,
            name: "address",
            type: "address",
            placeholder: 'Address',
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
            errorMessage: "Name must be 2-30 characters in length",
            required: true,
            pattern: "^[A-Za-z \/_?:,\s-]{2,30}$",
        },
        {
            id: 6,
            name: "description",
            type: "description",
            placeholder: "Description",
            label: "Description",
            errorMessage: "Description must be at least 20 characters long",
            required: true,
            pattern: "^[A-Za-z0-9 \/_?:.,\s-]{20,}$",
        },
        {
            id: 7,
            name: "price",
            type: "price",
            placeholder: "Price",
            label: "Price",
            errorMessage: "Price must be a non negative integer that does not start in 0",
            required: true,
            pattern: "^[1-9][0-9]*$",
        },
        // {
        //     id: 8,
        //     name: "previewImage",
        //     type: "imageUrl",
        //     placeholder: "ImageUrl",
        //     label: "ImageUrl",
        //     errorMessage: "Please enter a URL that contains .jpg, .jpeg, .png, or .gif extension type",
        //     required: true,
        //     // pattern: "{}",
        // },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        return dispatch(editSpotById({ editSpotData }))
        .then(() => setShowModal(false))
        .catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setApiErrors(data.errors);
            }
        )
    }

    const onChange = (e) => {
        setEditSpotData({...editSpotData, [e.target.name]: e.target.value });
        console.log('edit spot data: ', editSpotData)
    };

    return (
        <div className="edit-spot">
            <form onSubmit={handleSubmit}>
                <h1>Edit Listing</h1>
                {inputs.map((input) => (
                    <FormInput className={input.name} key={input.id} {...input} value={editSpotData[input.name]} onChange={onChange} />
                    ))}
                <span id='api-error'>{apiErrors}</span>
                <button className="btn btn-edit-spot">Submit Changes</button>
            </form>
        </div>
    )
}

export default EditSpot;
