import React from 'react'
import styled from 'styled-components'


//styling

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 50%
    }

    h2 {
        font-size: 16px;
        width: 80%
    }

`

//Title component
const Title = _ => {
    return (
        
        <TitleContainer>
            <img src = 'https://png2.cleanpng.com/sh/0b6109dc96ad0cb1adb5cffc3138bcff/L0KzQYm3WcIxN6R9jpH0aYP2gLBuTgRpbV54hed7ZoOwc73wkL1ieqUyjtdsdHB1Pbj5ggBpcZR4Rd54Z3Aweb3zlgN1epJ5ReV2dYLpg37zjBdwNaFzf599cnHxg8HokvVvfF54jtk2dnXmhLF5TfZzbZZngdc2NXLkQ4iChMZlaWpneaI3NkK1QIS8WMcyPWQ8TKY5MkG3SIq8VL5xdpg=/kisspng-the-smurfs-clip-art-vector-graphics-logo-illustrat-smurfs-logo-png-transparent-svg-vector-freebie-5ba379d6da9ba0.6220358715374402148954.png' alt = "smurfs logo"/>
            <h2>Welcome to our smurf family! Here in the smurf village, you can live and die at the click of a button. Feel free to drop on by and add your own family member!</h2>
        </TitleContainer>
    )
}

export default Title