import React from 'react'
import Activeties from './Activeties'
import './Activety.css'
function Activety() {
    return (
        <>
        <div className="users-activety">
          <Activeties
          h1='6.5M'
          h4='Cashing'
          id="blogs-one"
          className="text-warning"
          link="read more"
          icon="bi bi-building"
          icon_bg="bg-warning"
           />  
            <Activeties
          h1="$2.13M"
          h4="Active Users"
          id="blogs-two"
          className="text-danger"
          link="read more"
          icon='bi bi-laptop'
           icon_bg="bg-danger"
           />  
            <Activeties
          h1="$1.2K"
          h4="Advertisment"
          id="blogs-three"
          className="text-primary"
          link="read more"
          icon='bi bi-megaphone'
           icon_bg="bg-primary"
           />  
        </div>

            
        </>
    )
}

export default Activety
