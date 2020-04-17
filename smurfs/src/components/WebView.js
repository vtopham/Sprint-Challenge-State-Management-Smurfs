import React from 'react'

import Title from './Title'
import SubmitForm from './SubmitForm'
import SmurfGallery from './SmurfGallery'
import DeletedSmurfs from './DeletedSmurfs'

//The component that app renders
const WebView = _ => {
    return (
        <>
        <Title/>
        <SubmitForm/>
        <SmurfGallery/>
        <DeletedSmurfs/>
        </>
    )
}

export default WebView