import './Spots.css'

export default function SpotCard({ spots }){
    //console.log('spots: ', spots)
    return (
        spots.map((spot) => (
            <div key={spot.id} className="spot-card">
                <img src={spot.previewImage} className="spot-image" />
                <h4>{`${spot.city}, ${spot.state}`}</h4>
                <p>{spot.name}</p>
                <p>{`$${spot.price} night`}</p>
                <p>{`AVG Rating: ${spot.avgRating}`}</p>
            </div>
        ))
    )
}
