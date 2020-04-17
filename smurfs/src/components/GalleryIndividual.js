import React from 'react'
import { connect } from 'react-redux'

import { murderSmurf } from '../actions/index'

import styled from 'styled-components'

const Smurf = styled.div`
    width: 100%;
    margin: 2%;
    padding: 1%;

    button {
        color:#8A8695;

        &:hover {
            background: #8A8695;
            color: white;
            padding: 2%;
        }
    }

`

//this will be called for each gallery individual
const GalleryIndividual = props => {

    const { smurf } = props

    const handleDeath = event => {
        event.preventDefault()
        props.murderSmurf(smurf)
    }
    
    return (
        <Smurf className = "individual-smurf">
            <h3>{smurf.name}</h3>
            <p>Height: {smurf.height}</p>
            <p>Age: {smurf.age}</p>
            <button onClick = {handleDeath}>Send me to my grave</button>
        </Smurf>

    )
}

export default connect(null, {murderSmurf})(GalleryIndividual)