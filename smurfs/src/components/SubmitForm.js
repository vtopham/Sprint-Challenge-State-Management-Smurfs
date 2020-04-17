import React, { useState } from 'react'
import { addSmurf } from '../actions'
import { connect } from 'react-redux'
import styled from 'styled-components'

const FormDiv = styled.div`

    form {
        display: flex;
        flex-direction: column;
        align-items: center;

        border: 4px solid #F9C80D;
        border-radius: 10px;

        width: 90%;
        margin: 0 auto;
        padding: 1%;

        .inputs {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            width: 100%;
            
            margin: 3% 0;
            
            input {
                color: #8A8695;
            }
            
        }

        button {
            color: #EA0204;
            font-size: 16px;
            border: 2px solid #EA0204;
            border-radius: 5px;
            height: 30px;
            width: 100px;
            margin-bottom: 3%;
            
            &:hover {
                color: white;
                background: #EA0204;
                border: 2px solid white;
            }
        }
    }



`

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
        <FormDiv>
            <h2>Add Your Own Smurf</h2>
            <form>
                <div className = "inputs">
                    <div className = "input">
                        <label htmlFor = "name">Name: </label>
                        <input onChange = {handleChanges} id = "name" name = "name" type = "text" value = {formInput.name}/>
                    </div>
                    <div className = "input">
                        <label htmlFor = "age">Age: </label>
                        <input onChange = {handleChanges} id = "age" name = "age" type = "text" value = {formInput.age}/>
                    </div>
                    <div className = "input">
                        <label htmlFor = "height">Height in cm: </label>
                        <input onChange = {handleChanges} id = "height" name = "height" type = "height" value = {formInput.height}/>
                    </div>
                </div>
                <button onClick = {handleAdd}>Add Smurf</button>
            </form>
        </FormDiv>
    )
}

export default connect(null, {addSmurf})(SmurfForm)