import React,{useState} from 'react'
import './Footer.css'
function Footer() {
 const data =[
    {id:'1',h3:'followers',h5:'total folorwers in mounth',h3_lenght:'100K',h3_class:'text-danger'},
    {id:'2',h3:'order',h5:'total order in mounth',h3_lenght:'10K', h3_class:'text-primary'},
    {id:'3',h3:'client',h5:'total cleint in usa',h3_lenght:'100k',h3_class:'text-warning'},
    {id:'4',h3:'product',h5:'total sold product',h3_lenght:'44k',h3_class:'text-info'},
    {id:'5',h3:'product sold',h5:'total product in mounth',h3_lenght:'5,50k',h3_class:'text-danger'},
    {id:'6',h3:'followers',h5:'total folorwers in year',h3_lenght:'1000',h3_class:'text-primary'},
 ]
 const [text]=useState(data)

    return (
        <>
         <div className="row m-3 my-5 p-5 pre-footer shadow fs-5">
          {text.map((person) => {
        const { id, h3,h5,h3_lenght,h3_class } = person;
        return (
           <div className="col-lgs-4 col-12" key={id}>
    <div className="row">
      <div className="col-lg-8"><h3>{h3}</h3>
      <h5 className="text-muted mx-2">{h5}</h5>
      </div>
      <div className="col-lg-4 my-3"><h3 className={h3_class}>{h3_lenght}</h3></div>
    </div>
  </div>
        );
      })}
                
 
  </div>   
        </>
    )
}

export default Footer
