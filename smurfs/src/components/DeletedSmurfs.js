import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Cemetary = styled.div`
.the-dead{
    display: flex;
        justify-content: space-around;

        border: 4px solid #F9C80D;
        border-radius: 10px;

        width: 90%;
        margin: 0 auto;
        padding: 1%;
    
    }

    .some-nice-greenery {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: flex-end;
        margin-top: 2%;

        img {
            width: 20%;
        }
`


const mapStateToProps = state => {
    return {
        murduredSmurfs: state.deletedSmurfs
    }
}
//this component will let you see all the previously deleted smurfs and add them back
const DeletedSmurfs = props => { 
    return (
        <Cemetary>
            <h2>The mourned dead</h2>
            <div className = "the-dead">
                {props.murduredSmurfs.map(smurf => {
                    return(
                        <div key = {smurf.id} className = "individual-smurf">
                            <h3>{smurf.name}</h3>
                            <p>Height: {smurf.height}</p>
                            <p>Age: {smurf.age}</p>
                        </div>
                    )
                })}
            </div>
            <div className = "some-nice-greenery">
                <img src = "https://ya-webdesign.com/transparent450_/cartoon-bush-png-1.png" alt = "bush"/>
                <img alt = "tombstone" src = "https://cdn.clipart.email/12d473050d5bf22efbb647d18678e38f_rip-tombstone-clip-art-at-clkercom-vector-clip-art-online-_243-299.png"/>
                <img src = "https://ya-webdesign.com/transparent450_/cartoon-bush-png-1.png" alt = "bush"/>
            </div>
        </Cemetary>

    )
}

export default connect(mapStateToProps,{})(DeletedSmurfs)