import React,{useState} from 'react'
import { Button } from './Button'
import './Modal.css'

function Modal() {
    const [model,setmodel]=useState(false)
    const [person,setperson]=useState({firstName:'',email:'',password:''})
 const[people,setpeople]=useState([])
   const removePerson = (id) => {
    setpeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
 const handelchange=(e)=>{
const name=e.target.name;
const value=e.target.value;
setperson({...person,[name]:value})
  }
  const handlesubmit=(e)=>{
e.preventDefault();
if(person.password&&person.email&&person.firstName){
  const newperson={...person,id:new Date().getTime().toString()}
setpeople([...people,newperson])
setperson({firstName:'',email:'',password:''})
}

  }

    return (
        <>
       <span id="modal-btns" className="px-3 py-3 bg-dark shadow text-white rounded-circle" onClick={()=>setmodel(!model)}><i class="bi bi-people-fill fs-5 rounded-circle"></i></span>


<div className={model ? "modal" :"modal display-model"}>


  <div class="modal-content">
    <div class="modal-header">
      <span class="close" onClick={()=>setmodel(false)}>&times;</span>
   <h1 className="my-3"> ADD NEW ADMIN</h1>
    </div>
    <div class="modal-body">
     
      
        <form className='form'>
          <div className='form-control d-flex'>
          
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handelchange}
              placeholder="Full Name"
            />
          </div>
          <div className='form-control d-flex'>
            
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handelchange}
                placeholder="Email"
            />
          </div>
           <div className='form-control d-flex'>
            
            <input
              type='text'
              id='password'
              name='password'
              value={person.password}
            onChange={handelchange}
              placeholder="Password"
            />
          </div>
          <Button type='submit'
          id="model-submit-btn" 
           buttonStyle='btn-success'
    buttonSize='btn--medium'
          onClick={handlesubmit}>add person</Button>
        </form>
    
    </div>
    
    <div class="modal-footer d-fex">
<div className='item'>
              <p>ID</p>
              <h4>FULL NAME</h4>
              <p>EMAIL</p>
              <p>PASSWORD</p>
              <p>REMOVE</p> 
            </div>
         
           


          {people.map((person, index) => {
          const { id, firstName, email,password } = person;
          return (
            <div className='item' key={id}>
              <p>{id}</p>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{password}</p>
              <Button onClick={() => removePerson(id)}>remove</Button> 
            </div>
          );
        })}
    </div>
  </div>

</div>

   
        </>
    )
}

export default Modal
