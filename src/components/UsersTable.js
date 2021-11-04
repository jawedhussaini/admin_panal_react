import React,{useState} from 'react'
import { Button } from './Button';
import {data} from './Tabledata'
import './UsersTable.css'

function UsersTable() {
  const [people] = useState(data);
  
    return (
        <>
       
                    <div className="col-lgs-6 col-12 table-div my-4">
    <table className="table bg-white shadow rounded-3">
      <thead className="text-center py-6 border-1">
      <th className="border-0 text-info my-4"><h3>NEW USERS</h3></th> 
      <th scope="col-2" className="border-0 my-4"> <form className="d-flex">
        <input className="py-2 px-2" type="search" placeholder="Search" aria-label="Search"/>
        <Button 
          className='btns'
                buttonStyle='btn-primary'
                buttonSize='btn--medium'
            type='button'>search</Button>
      </form></th>
      </thead>
      <thead className="py-5">
        
        <tr className="text-danger">
          <th scope="col">picture</th>
          <th scope="col">First</th>
          <th scope="col" className="email" scope="col">Email</th>
          <th scope="col">Delete row</th>
          <th scope="col">Save to </th>
        </tr>
      </thead>
      <tbody>
            {people.map((person) => {
        const { id, name,img,email } = person;
        return (
            
        <tr key={id}>
          <th scope="row"><img className="tables-photo shadow" src={img} alt=""/></th>
          <td>{name}</td>
          <td className="email">{email}</td>
          <td><Button 
          className='btns'
                buttonStyle='btn-danger'
                buttonSize='btn--medium'
            type='button'
            >Delete</Button></td>
          <td><Button 
            className='btns'
                buttonStyle='btn-success'
                buttonSize='btn--medium'
            type='button'
          >Save</Button></td>
        </tr>
);} )}
      </tbody>
    </table>
  </div> 
        
     
        
  
        </>
    )
}

export default UsersTable
