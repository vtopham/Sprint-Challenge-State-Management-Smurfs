import React, { useEffect } from 'react'
import { getSmurfs } from '../actions/index'
import { connect } from 'react-redux'
import GalleryIndividual from './GalleryIndividual'
import styled from 'styled-components'

const GalleryDiv = styled.div`

.gallery {
        display: flex;
        justify-content: space-around;

        border: 4px solid #F9C80D;
        border-radius: 10px;

        width: 90%;
        margin: 0 auto;
        padding: 1%;
}

`
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
        <GalleryDiv>
        <h2>Our Happy Smurf Family</h2>
            <div className = "gallery">
                {props.currentSmurfs.map(smurf => {
                    return (
                        <GalleryIndividual className = "smurf" key = {smurf.id} smurf = {smurf}/>
                    )
                })}
            </div>
        </GalleryDiv>
    )
}

export default connect(mapStateToProps,{getSmurfs})(SmurfGallery)