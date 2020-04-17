import React, { useEffect } from 'react'
import { getSmurfs } from '../actions/index'
import { connect } from 'react-redux'
import GalleryIndividual from './GalleryIndividual'

const mapStateToProps = state => {
    return {
        currentSmurfs: state.currentSmurfs
    }
    
}
//This component will show you all the smurfs currently retrieved by the API
const SmurfGallery = props => {
    
    useEffect(() => {
        props.getSmurfs()
    },[])
    
    return (
        <>
        <h2>Our Happy Smurf Family</h2>
        {props.currentSmurfs.map(smurf => {
            return (
                <GalleryIndividual key = {smurf.id} smurf = {smurf}/>
            )
        })}
        </>
    )
}

export default connect(mapStateToProps,{getSmurfs})(SmurfGallery)