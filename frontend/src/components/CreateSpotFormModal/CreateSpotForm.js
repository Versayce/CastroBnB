import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSpot } from "../../store/spots";
import { useHistory } from "react-router-dom";

function CreateSpotForm({ setShowModal }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const spot = useSelector(state => state.spots.oneSpot)
  const user = useSelector(state => state.session.user)
  //console.log('session user: ', user)
  //console.log('createspotform spot: ', spot)

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [imageUrl, setImageUrl] = useState("")
  const [errors, setErrors] = useState([]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    history.push('/spots/current')
    setShowModal(undefined)
    //add conditionals for error throwing
    setErrors([]);
      return dispatch(createSpot({ address, city, state, country, name, description, price, imageUrl }))
      //.then(setShowModal(false))
    //   .catch(
    //   async (res) => {
    //     const data = await res.json();
    //     if (data && data.errors) setErrors(data.errors);
    //   }
    // );
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
      <label>
        Address
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </label>
      <label>
        City
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </label>
      <label>
        State
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
      </label>
      <label>
        Country
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
      </label>
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Description
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label>
        Price
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </label>
      <label>
        Image Url
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </label>
      <button type="submit">Create Spot</button>
    </form>
  );
}

export default CreateSpotForm;
