import React,{useState} from 'react'
import './FooterIcon.css'
function Footer_icon() {
    const data=[
        {id:'1',image:'./images/world.png'},
        {id:'2',image:'./images/setting.png'},
        {id:'3',image:'./images/lifesaver.png'},
    ]
    const [img]=useState(data)

    return (
        <>
          <div className="row footer-icons">
  <div className="col-lg-4 col-12">
{
    img.map((x)=>{
        return(
<button className="border-0 mx-3 footer-btn" key={x.id}><img  className="footer-image" src={x.image} alt=""/></button>
        )

    })
}
        </div>

  <div className="col-lg-2"></div>
  <div className="col-lg-2"></div>
  <div className="col-lg-2"></div>
  <div className="col-lg-2"></div>
</div>  
        </>
    )
}

export default Footer_icon
