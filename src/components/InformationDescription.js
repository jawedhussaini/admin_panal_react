import React from 'react'
import './informationDescription.css'

function InformationDescription(props) {
    return (
        <>
             <div className="col-lg-4 col-12 d-flex"><span className="span-portables rounded-circle mx-3"><span className="text-white rounded-circle portabel-div-icons shadow" id={props.id}><i className={props.icon}></i></span></span><div className="mx-3 fs-5"><h5 className="text-muted">{props.h6}</h5><h1 className="h1-headers">{props.h1}</h1><h5><span className="text-danger">{props.persont}</span>{props.h5_text} </h5></div></div>
    
        </>
    )
}

export default InformationDescription
