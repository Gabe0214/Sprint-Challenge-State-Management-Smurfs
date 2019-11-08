import React from 'react'


const Smurf = props => {
    return(
        <div>
            {props.smurfs.map(smurf => (
                <div>
                    <h2>{smurf.name}</h2>
                    <p>{smurf.age}</p>
                    <p>{smurf.height}</p>
                </div>
            ))}
        </div>
    )
}

export default Smurf 