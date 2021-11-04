import React from 'react'
import './Activeties.css'
import {Link} from 'react-router-dom';

function Activeties(props) {
    return (
        <>
        
<div className="col-lgss-4 px-4 my-5"><div className="bg-white shadow text-white text-center rounded-2 py-4" id={props.id}> <div className="py-4 blog-div fs-5"><span className="p-4 rounded-circle shadow" id={props.icon_bg}><i className={props.icon} ></i></span></div><p className="text-muted"><h4>{props.h4}</h4><h1>{props.h1}</h1><Link to='/' className="nav-link"><span className={props.className}><i className="bi bi-arrow-right-short"></i>{props.link}</span></Link></p></div></div>

            
        </>
    )
}

export default Activeties
