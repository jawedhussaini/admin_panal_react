import React,{useState} from 'react'
import './Message.css'
import {data} from './Messagedata'
import {Link} from 'react-router-dom'
import { Button } from './Button'
function Message() {
const [text]=useState(data)
    return (
        <>
           <div className="col-lgs-5">
  <div className="bg-white py-3 shadow rounded-3">
<div>
  <header>
    <div className="d-flex my-3">
    <Link to="/" className="border-0 mx-3 my-3" ><i className="bi bi-arrow-left"></i></Link>
    <img src="./images/dd.jpg" className="message-image shadow" alt=""/>
    <div className="mx-2">
      <h6>jony</h6>
      <p>active naw</p>
    </div>
  </div>
</header>

  <hr className="text-muted"/>
  <div className="chat-box">
 

 {text.map((person) => {
        const { id,massage,text } = person;
        
            
            if (massage==='send') {
                
          return (  
          <div className="chat-incoming m-3" key={id}> 
  <div className="text-white bg-dark shadow details incoming"><p>{text}</p></div>
</div>)

            }
            else{
            return (
<div className="chat-going m-3 d-flex" key={id} >
  <img src="./images/dd.jpg" className="message-image shadow" id="goning-message-image" alt=""/>
  <div className="text-white details going text-dark"><p className="text-dark">{text}</p></div>
</div> 
            )
            }   

    
      })}



</div>
<div className="w-100 my-2 px-3">
  <form className="d-flex">
    <input className="form-control send-message" type="search" placeholder="Send MAssage..." aria-label="Search"/>
    <Button
    className='btns'
                buttonStyle='btn-primary'
                buttonSize='btn--medium'
            type="button"
    >send</Button>
  </form>
  
</div>
</div>
  </div>
</div> 

        </>
    )
}

export default Message
