import React from 'react'
import InformationDescription from './InformationDescription'
import './Information.css'
import { Button } from './Button'

function Information() {
    return (
        <>
          <div className="p-5 px-5 informations">
 <div className="row bg-white shadow">
   <div className="col-lg-4 col-12"><h2 className="m-4 text-muted">portebal div</h2> </div>
   <div className="col-lg-4 col-12"></div>
   <div className="col-lg-4 col-12"><button className="btn border-2 text-white bg-dark m-4" id="view-all-btn">veiw all</button></div>
   <hr className="text-muted"/>
   <div className="row py-4">
<InformationDescription
  icon="bi bi-laptop"
  h6='cashdeposit'
  h1='1.5m'
  persont='22.2% export'
  h5_text=' all cases in'
  id="bg-warning"
/>
<InformationDescription
  icon="bi bi-wallet"
  h6='monny'
  h1='1.3m'
  persont='44.3% export'
  h5_text=' monny'
  id="bg-danger"
/>
<InformationDescription
  icon="bi bi-camera"
  h6='cashdeposit'
  h1='1.9m'
  persont='33.22% export'
  h5_text=' photo'
  id="bg-success"
/>
  </div>
   <hr className="text-muted"/>
   <div className="col-lg-4 col-12"></div>
   <div className="col-lg-4 col-12 mx-4 my-3">
     
     <Button
   className='btns'
    buttonStyle='btn-warning'
    buttonSize='btn-rounded'
    type="button"
   ><span className="text-white"><i className="bi bi-disc px-2"></i>button to click same </span></Button>
   
   </div>
   <div className="col-lg-4 col-12"></div>
 </div>
</div>  
        </>
    )
}

export default Information
