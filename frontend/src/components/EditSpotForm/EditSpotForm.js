import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editSpotById } from "../../store/spots";
import { useHistory } from "react-router-dom";

function EditSpotForm({ setShowModal, spot }) {
  //console.log('EditSpotForm spot: ', spot)
  //console.log('EditSpotForm spotId: ', spot.id)
  const { avgRating } = spot
  const dispatch = useDispatch();
  const history = useHistory();

  const [address, setAddress] = useState(spot.address);
  const [city, setCity] = useState(spot.city);
  const [state, setState] = useState(spot.state);
  const [country, setCountry] = useState(spot.country);
  const [name, setName] = useState(spot.name);
  const [description, setDescription] = useState(spot.description);
  const [price, setPrice] = useState(spot.price);
  const [imageUrl, setImageUrl] = useState(spot.previewImage)
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    const editedSpot = {
      spotId: spot.id,
      address,
      city,
      state,
      country,
      name,
      description,
      price,
      "previewImage": imageUrl,
      avgRating
    }

    e.preventDefault();
    history.push('/spots/current')
    //add conditionals for error throwing
    setErrors([]);
    await dispatch(editSpotById(editedSpot))
    //.then(setShowModal(false))
    .catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
      );
    setShowModal(false)
  };

  // const spotReqBody = {
  //   "address": address,
  //   "city": city,
  //   "state": state,
  //   "country": country,
  //   "lat": 37.7645358,
  //   "lng": -122.4730327,
  //   "name": name,
  //   "description": description,
  //   "price": price
  // }

  // const imgReqBody = {
  //   "spotId": spotId
  //   "url": imageUrl,
  //   "preview": true
  // }

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <h1>Edit Spot</h1>
      <label>Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      
      <label>City</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      
      <label>State</label>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
      
      <label>Country</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
      
      <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      
      <label>Description</label>       
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      
      <label>Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
    
      <label>Image Url</label>
        <input
          type="url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      
      <span className='form-button'>
          <input type="submit" value='Save Changes' />
      </span>
    </form>
  );
}

export default EditSpotForm;
