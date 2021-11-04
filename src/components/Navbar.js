import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'


function Navbar() {
  const [mega_list,setmega_list]=useState(false)
  const [main_dashboard,setmain_dashboard]=useState(false)
  const[profile,set_profile]=useState(false)
  const setmega_list_display=()=>{
    setmega_list(!mega_list)
    setmain_dashboard(false);
    set_profile(false)
  }
  const set_profile_display=()=>{
    setmain_dashboard(false)
    setmega_list(false)
    set_profile(!profile)
  }
  const setmain_dashboard_display=()=>{
    set_profile(false)
    setmain_dashboard(!main_dashboard)
    setmega_list(false)
  }
  
    return (
        <nav className="navbar">
            <div className="navbar_container">
                <div className="px-4 d-flex smal">
                  <div className="px-4">
               <img  src="images/logo.png" className="logo" alt="" />
                    </div>
                       
 
           <div className="dropdown bell mx-3">
  <button className="dropbtn"> <i className="bi bi-bell-fill nav-menu-icons bell-icon"></i></button>
  

</div>

             <div className="dropdown mega-menu-btn mx-3">
  <button className="dropbtn" onClick={setmega_list_display}><i className="bi bi-list nav-menu-icons text-danger"></i></button>
  {mega_list ?
  <div className="dropdown-content mega-menus">
      <ul className="dropdown-menu-mega-menu shadow border-0">
            <div className="d-flex p-2">
              <div className="dropdown-item mega-menu  border-0">
                <li><label className="fw-bold text-muted mega-menu-lable" for="">Overview</label></li>
                <li><Link to='/' className="nav-link mega-menu-links"><i className="bi bi-images mx-2 text-primary "></i><span
                      className="text-dark">Companieys</span></Link></li>
                <li><Link to='/' className="nav-link mega-menu-links"><i className="bi bi-journals text-primary mx-2"></i> <span
                      className="text-dark">Journals</span><span className="journals">5</span></Link></li>
                <li><Link to='/' className="nav-link mega-menu-links"><i className="bi bi-card-list text-primary mx-2"></i><span
                      className="text-dark">Contacts</span></Link></li>
                <li><Link to='/' className="nav-link mega-menu-links"><i className="bi bi-award text-primary mx-2"></i><span
                      className="text-dark">Gallarys</span></Link></li>
                <li className="text-danger"><i className="bi bi-wallet py-3"></i><span className="mx-2">Dashboard</span></li>

              </div>
              <div className="dropdown-item mega-menu">
                <li><label className="fw-bold text-muted mega-menu-lable" for="">Fevorits</label></li>
                <li><Link className="nav-link mega-menu-links" href="">Go Away</Link></li>
                <li><Link className="nav-link mega-menu-links" href="">Drop Links</Link></li>
                <li><Link className="nav-link mega-menu-links" href="">Ganger<span className="journals" id="ganger">new</span></Link>
                </li>
                <li><Link className="nav-link mega-menu-links" href="">Drop Off</Link></li>
              </div>
              <div className="dropdown-item mega-menu">
                <li><label className="fw-bold text-muted mega-menu-lable" for="">Market and Sales</label></li>
                <li><Link className="nav-link mega-menu-links" href="">Marketting</Link></li>
                <li><Link className="nav-link mega-menu-links" href="">Goels <span className="journals" id="goels">8</span></Link>
                </li>
                <li><Link className="nav-link mega-menu-links" href="">Sales</Link></li>
                <li><Link className="nav-link mega-menu-links" href="">Manegment</Link></li>
              </div>

            </div>
          </ul>
               
               
              
  </div>
  : ''}
</div>



               </div>
          
            <div className="leftside d-flex smal">


             <div className="dropdown mx-3">
  <button className="dropbtn main_profile_btn" onClick={set_profile_display}><i className="bi bi-images nav-menu-icons nav-pecture"></i></button>
 {profile ?
  <div className="dropdown-content content-main-profile">
    <ul className="main-profile-ul">
          
              <div id="nav-pucture-header">
                <div className="py-4">
                  <h4>main profile</h4>
                  <h6>this is some information</h6>
                </div>
              </div>
              <div id="profile-background">
                <div className="py-5"><i className="bi bi-person nav-menu-icons person-icon"></i>
                  <h2 className="my-3 text-danger">441k</h2>
                  <Link href="" className="text-decoration-none">
                    <h5 className="text-primary">Read more <i className="bi bi-arrow-right"></i>
                   </h5></Link>
                  
                </div>
              </div>

            


          </ul>
               
               
              
  </div>
  :''}
</div>


                
                <div className="dropdown mx-3">
  <button className="dropbtn" onClick={setmain_dashboard_display}><i className="bi bi-list nav-menu-icons"></i></button>
  {main_dashboard ?
  <div className="dropdown-content main-dashboard-content">
    <div className="main-dashbourd-div-header">
                  <h5 className="main-dashbourd-header">Main Dashboard</h5>
                </div>
                <div className="d-flex list-div">
                  <li className="main-dashboard-list"><Link className="dropdown-item p-3 px-4 rounded-circle main-dashbourd" to='/'><i
                        className="bi bi-chat-square"></i></Link></li>
                  <li className="main-dashboard-list"><Link className="dropdown-item p-3 px-4 rounded-circle main-dashbourd" to='/'><i
                        className="bi bi-alarm"></i></Link></li>
                  <li className="main-dashboard-list"><Link className="dropdown-item p-3 px-4 rounded-circle main-dashbourd" to='/'><i
                        className="bi bi-bag-check"></i></Link></li>
                </div>
                  <div className="d-flex list-div">
                    <li className="main-dashboard-list"><Link className="dropdown-item p-3 px-4 rounded-circle main-dashbourd" to='/'>
                    <i className="bi bi-aspect-ratio"></i>
                      </Link></li>
                  
                  <li className="main-dashboard-list"><Link className="dropdown-item p-3 px-4 rounded-circle main-dashbourd" to='/'><i
                        className="bi bi-brightness-high"></i></Link></li>
                  <li className="main-dashboard-list"><Link className="dropdown-item p-3 px-4 rounded-circle main-dashbourd" to='/'><i
                        className="bi bi-cloud-arrow-down"></i></Link></li>
                
                  
                </div>
              
  </div>
  : ''}
</div>
<form className="d-flex ms-auto mx-3 my-lg-0">

          <div className="input-group d-flex mx-3">
            <input type="text" className="px-2" placeholder="Recipient's username" aria-label="Recipient's username"
              aria-describedby="button-addon2"/>
            <Button
             className='btns'
                buttonStyle='btn-primary'
                buttonSize='btn--medium'
            type="button"><i className="bi bi-search"></i></Button>
          </div>
        </form>
</div>
       </div>       
        </nav>
    )
}

export default Navbar
