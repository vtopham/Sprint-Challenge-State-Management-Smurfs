import React from 'react'
import { connect } from 'react-redux'
import GalleryIndividual from './GalleryIndividual'

const mapStateToProps = state => {
    return {
        murduredSmurfs: state.deletedSmurfs
    }
}
//this component will let you see all the previously deleted smurfs and add them back
const DeletedSmurfs = props => { 
    return (
        <>
        <h2>The mourned dead</h2>
        {props.murduredSmurfs.map(smurf => {
            return(
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

export default connect(mapStateToProps,{})(DeletedSmurfs)