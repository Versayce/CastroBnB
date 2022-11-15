import './Spots.css'

export default function SpotCard({ spots }){
    //console.log('spots: ', spots)
    return (
        spots.map((spot) => (
            <>
                <div key={spot.id} className="spot-card">
                    <img src={spot.previewImage} className="spot-image" />
                    <div className='spot-info-container'>
                        <div className='spot-info'>
                            <p style={{fontWeight: 'bold'}}>{`${spot.city}, ${spot.state}`}</p>
                            <p>{spot.name}</p>
                            <p>{`$${spot.price} night`}</p>
                        </div>
                        <div className='spot-rating'>
                            <p>{`AVG Rating: ${spot.avgRating}`}</p>
                        </div>
                    </div>
                </div>
            </>
        ))
    )
}
