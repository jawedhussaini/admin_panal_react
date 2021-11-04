import React from 'react'
import './TopHeader.css'
import {Link} from 'react-router-dom'
import { Button } from './Button'
function Top_header() {
    return (
        <>
                  <div className="row  first-row p-4 py-4 px-5">
  <div className="col-lg-8"><div className="d-flex py-1"><Link to="/"><span className="text-dark shadow bg-white px-4 py-3 fs-3 mx-4 my-2 rounded-2"><i className="bi bi-cart4 text-danger"></i></span></Link><div><h3 className="text-muted">Bootstrap admin panel</h3>
  <p className="text-muted">this is the best admin panel form ecomers websides</p></div></div></div>
  
  <div className="col-lg-3 d-flex"><span className="text-white bg-dark px-2 py-2 fs-5 mx-4 rounded-1 shadow"><i className="bi bi-star-fill"></i></span>
  
  <Button 
  className='btns'
                buttonStyle='btn-info'
                buttonSize='btn--large'
            type="button"
  ><span className="text-white">Button</span></Button></div>
</div>
   
        </>
    )
}

export default Top_header
