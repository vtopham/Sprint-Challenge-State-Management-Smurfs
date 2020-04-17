import React, { useEffect } from 'react'
import { getSmurfs } from '../actions/index'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        currentSmurfs: state.currentSmurfs
    }
    
}
//This component will show you all the smurfs currently retrieved by the API
const SmurfGallery = props => {
    
    useEffect(() => {
        props.getSmurfs()
    })
    
    return (
        <>
        <h2>Our Happy Smurf Family</h2>
        {props.currentSmurfs.map(smurf => {
            return (
                <div key = {smurf.id} className = "individual-smurf">
                    <h3>{smurf.name}</h3>
                    <p>Height: {smurf.height}</p>
                    <p>Age: {smurf.age}</p>
                </div>
            )
        })}
        </>
    )
}

export default connect(mapStateToProps,{getSmurfs})(SmurfGallery)