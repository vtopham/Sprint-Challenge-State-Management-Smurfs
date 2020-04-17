import React, { useState } from 'react'

//This will let you add a new smurf to the team!
const SmurfForm = _ => {

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

    return (
        <>
            <h2>Add Your Own Smurf</h2>
            <label htmlFor = "name">Name: </label>
            <input onChange = {handleChanges} id = "name" name = "name" type = "text" value = {formInput.name}/>

            <label htmlFor = "age">Age: </label>
            <input onChange = {handleChanges} id = "age" name = "age" type = "text" value = {formInput.age}/>

            <label htmlFor = "height">Height in cm: </label>
            <input onChange = {handleChanges} id = "height" name = "height" type = "height" value = {formInput.height}/>
        </>
    )
}

export default SmurfForm