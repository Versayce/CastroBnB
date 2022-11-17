import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { createStoreHook, useDispatch, useSelector } from "react-redux";
import { createSpot, createSpotImage, loadOneSpot } from "../../store/spots";
import { editSpotById } from "../../store/spots";
import { useHistory, useParams } from "react-router-dom";

function EditSpotForm({ setShowModal, spot }) {
  const dispatch = useDispatch();
  const history = useHistory();

  //const spots = useSelector(state => state.spots.allSpots)
  //const spot = useSelector(state => state.spots.oneSpot)
  const user = useSelector(state => state.session.user)
  //console.log('editform single spot: ', spot)
  //console.log('editform spots: ', spots)


  const [address, setAddress] = useState(spot.address);
  const [city, setCity] = useState(spot.city);
  const [state, setState] = useState(spot.state);
  const [country, setCountry] = useState(spot.country);
  const [name, setName] = useState(spot.name);
  const [description, setDescription] = useState(spot.description);
  const [price, setPrice] = useState(spot.price);
  //const [imageUrl, setImageUrl] = useState(spot.SpotImages[spot.SpotImages.length - 1].url)\
  const [imageUrl, setImageUrl] = useState(spot.previewImage)
  const [errors, setErrors] = useState([]);

  // useEffect(() => {
  //   dispatch(loadOneSpot())
  // })


  const handleSubmit = async (e) => {
    e.preventDefault();
    history.push('/spots/current')
    setShowModal(false)
    //add conditionals for error throwing
    setErrors([]);
      return await dispatch(editSpotById({ address, city, state, country, name, description, price, imageUrl }))
      //.then(setShowModal(false))
      .catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
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
      <button type="submit">Save Changes</button>
    </form>
  );
}

export default EditSpotForm;
