import './SpotCard.css'


export default function SpotCard({ spot }){
    //console.log('spot: ', spot)
    return (
            <div className='single-spot'>
                <img src={spot.previewImage} className="spot-image" />
                <div className='spot-info-container'>
                    <div className='spot-info'>
                        <span style={{fontWeight: 'bold'}}>{`${spot.city}, ${spot.state}`}</span>
                        <p>{spot.address}</p>
                        <p>{spot.name}</p>
                        <div className='price-container'>
                            <p className='spot-card-title' style={{fontWeight: 'bold'}}>{`$${spot.price}`}</p>    
                            <p>night</p>
                        </div>
                    </div>
                    {/* { spot.avgRating && <div className='spot-rating-container'>
                        <div className='spot-rating'>
                                <div><div className="fa-solid fa-star fa-xs" /></div>
                                <p>{`${spot.avgRating ?? "None"}`}</p>
                        </div>
                    </div>} */}

                    <div className='spot-rating-container'>
                        <div className='spot-rating'>
                                <div><div className="fa-solid fa-star fa-xs" /></div>
                                <p>{`${spot.avgRating ?? "No Reviews"}`}</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
}
