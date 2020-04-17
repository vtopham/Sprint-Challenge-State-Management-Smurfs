import React from 'react'
import { connect } from 'react-redux'

import { murderSmurf } from '../actions/index'

const GalleryIndividual = props => {

    const { smurf } = props

    const handleDeath = event => {
        event.preventDefault()
        props.murderSmurf(smurf)
    }
    
    return (
        <div className = "individual-smurf">
            <h3>{smurf.name}</h3>
            <p>Height: {smurf.height}</p>
            <p>Age: {smurf.age}</p>
            <p>Id: {smurf.id}</p>
            <button onClick = {handleDeath}>Send me to my grave</button>
        </div>

    )
}

export default connect(null, {murderSmurf})(GalleryIndividual)