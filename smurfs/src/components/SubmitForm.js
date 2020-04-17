import React, { useState } from 'react'
import { addSmurf } from '../actions'
import { connect } from 'react-redux'

//This will let you add a new smurf to the team!
const SmurfForm = props => {

    const [formInput, setFormInput] = useState({
        name: "",
        age: "",
        height: ""
    })

    const handleChanges = event => {
        event.preventDefault()
    
        
        setFormInput ({
            ...formInput,
            [event.target.id]: event.target.value
        })
    }

    const handleAdd = event => {
        event.preventDefault()
        props.addSmurf({...formInput, id: Math.floor(Math.random() * 100000)})
    }

    return (
        <>
            <h2>Add Your Own Smurf</h2>
            <label htmlFor = "name">Name: </label>
            <input onChange = {handleChanges} id = "name" name = "name" type = "text" value = {formInput.name}/>

            <label htmlFor = "age">Age: </label>
            <input onChange = {handleChanges} id = "age" name = "age" type = "text" value = {formInput.age}/>

            <label htmlFor = "height">Height in cm: </label>
            <input onChange = {handleChanges} id = "height" name = "height" type = "height" value = {formInput.height}/>

            <button onClick = {handleAdd}>Add Smurf</button>
        </>
    )
}

export default connect(null, {addSmurf})(SmurfForm)