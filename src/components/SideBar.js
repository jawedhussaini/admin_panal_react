import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import './SideBar.css'

function SideBar() {
    const [firstcollapse,setfirstcollapse]=useState(false)
    const [secondcollapse,setsecondcollape]=useState(false)
    
      const[button,setbutton]=useState(false)
      const[convase,setconvase]=useState(false)
      const[closebtn,setclosebtn]=useState(false)

  const  cheksize=()=>{
      if(window.innerWidth<=950){
          setbutton(true)
          setconvase(false)
          setclosebtn(true)
      }
      else{
          setbutton(false)
          setconvase(true)
          setclosebtn(false)
      }
  } 
    useEffect(()=>{
        cheksize()
      
    },[])
      window.addEventListener('resize',cheksize)

    return (
        <>
        
           <button  className={button ? "show" :"hide"} onClick={()=>{
             if(button){
             setconvase(true)
             setbutton(false)}
             else{
               setbutton(true)
               setconvase(false)
             }
            
              
           }}><i className="bi bi-plus-circle"></i></button>
          <div className={ convase ?"offcanvas offcanvas-start bg-white border-0 sidebar-nav" :"offcanvas offcanvas-start bg-white border-0 sidebar-nav active"}
          >
             
      <div className="offcanvas-body">
        
        <nav className="navbar-dark">
          <ul className="navbar-nav">
           
            <li className="list-style">
              <div className="text-muted small fw-bold px-3 margin-bottom">
                <button className={closebtn ? "right-icon ms-auto close-btn":"right-icon ms-auto close-btn show-close-btn"} onClick={()=>{
              setconvase(false)
              setbutton(true)
          }}>&times;</button>
                <p className="text-info">CORE</p>
                
              </div>
            </li>
            <li className="list-style">
              <Link to='/' className="nav-link px-3 active">
                <span className="me-2">
                  <i className="bi bi-speedometer2 text-dark"></i>
                </span>
                <span className="text-dark">Dashboard</span>
  
              </Link>
            </li>
            <li className="py-4 list-style">
  
            </li>
            <li className="list-style margin-bottom">
              <div className="text-muted small fw-bold px-3 margin-bottom">
                <p className="text-info">INTERFACE</p>
              </div>
            </li>
            <li onClick={()=>{
                setfirstcollapse(!firstcollapse)
            }}>
              <div className="nav-link px-3 sidebar-link" data-bs-toggle="collapse" to="#collapseExample" role="button"
                aria-expanded="false" aria-controls="collapseExample">
  
                <span className="me-2" >
                  <i className="bi bi-layout-split text-dark"></i>
                </span>
                <span className="text-dark">Layout</span>
                <span className="right-icon ms-auto"><i className="bi bi-chevron-down text-dark"></i></span>
  
              </div>
              
              <div className={firstcollapse?'': "collapse"} id="collapseExample">
                <div>
                  <ul className="navbar-nav ps-3">
                    <li>
                      <Link to='/' className="nav-link px-3">
                        <span className="me-2">
                          <i className="bi bi-link text-dark"></i>
                        </span>
                        <span className="text-dark">nastid links</span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/' className="nav-link px-3">
                        <span className="me-2">
                          <i className="bi bi-app text-dark"></i>
                        </span>
                        <span className="text-dark">app</span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/' className="nav-link px-3">
                        <span className="me-2">
                          <i className="bi bi-award text-dark"></i>
                        </span>
                        <span className="text-dark">awards</span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/' className="nav-link px-3">
                        <span className="me-2">
                          <i className="bi bi-bar-chart text-dark"></i>
                        </span>
                        <span className="text-dark">bar</span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/' className="nav-link px-3">
                        <span className="me-2">
                          <i className="bi bi-bookmark-star text-dark"></i>
                        </span>
                        <span className="text-dark">book mark</span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/' className="nav-link px-3">
                        <span className="me-2">
                          <i className="bi bi-briefcase text-dark"></i>
                        </span>
                        <span className="text-dark">case</span>
                      </Link>
                    </li>
  
                  </ul>
                </div>
              </div>
            </li>
  
  
            <li onClick={()=>{setsecondcollape(!secondcollapse)}}>
              <div className="nav-link px-3 sidebar-link" data-bs-toggle="collapse" to="#collapseExamples" role="button"
                aria-expanded="false" aria-controls="collapseExamples">
  
                <span className="me-2">
                  <i className="bi bi-tablet-landscape text-dark"></i>
                </span>
                <span className="text-dark">SCREEN</span>
                <span className="right-icon ms-auto"><i className="bi bi-chevron-down text-dark"></i></span>
  
              </div>
              <div className={secondcollapse ? '':'collapse'} id="collapseExamples">
                <div>
                  <ul className="navbar-nav ps-3">
                    <li>
                      <Link to='/' className="nav-link px-3">
                        <span className="me-2">
                          <i className="bi bi-brightness-high text-dark"></i>
                        </span>
                        <span className="text-dark">brightnis</span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/' className="nav-link px-3">
                        <span className="me-2">
                          <i className="bi bi-fonts text-dark"></i>
                        </span>
                        <span className="text-dark">fonts</span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/' className="nav-link px-3">
                        <span className="me-2">
                          <i className="bi bi-palette text-dark"></i>
                        </span>
                        <span className="text-dark">colors</span>
                      </Link>
                    </li>
  
  
  
                  </ul>
                </div>
              </div>
            </li>
            <li className="py-4">
  
            </li>
            
                <div className="text-muted small fw-bold px-3 margin-bottom">
                  <p className="text-info">DASHBOARD WIDGETS</p>
                </div>
              
              <li>
                <Link to="/" className="nav-link px-3 active">
                  <span className="me-2">
                    <i className="bi bi-pie-chart text-dark"></i>
                  </span>
                  <span className="text-dark">Box chart 1</span>
    
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link px-3 active">
                  <span className="me-2">
                    <i className="bi bi-pie-chart-fill text-dark"></i>
                  </span>
                  <span className="text-dark">Box chart 2</span>
    
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link px-3 active">
                  <span className="me-2">
                    <i className="bi bi-clipboard-data text-dark"></i>
                  </span>
                  <span className="text-dark">Box chart 3</span>
    
                </Link>
              </li>
            
            <li className="py-4">
  
            </li>
            
                <div className="text-muted small fw-bold px-3 margin-bottom">
                  <p className="text-info">CHARTS</p>
                </div>
              
              <li>
                <Link to='/' className="nav-link px-3 active">
                  <span className="me-2">
                    <i className="bi bi-graph-down text-dark"></i>
                  </span>
                  <span className="text-dark">Graph down</span>
    
                </Link>
              </li>
              <li>
                <Link to='/' className="nav-link px-3 active">
                  <span className="me-2">
                    <i className="bi bi-graph-up text-dark"></i>
                  </span>
                  <span className="text-dark">Graph up</span>
    
                </Link>
              </li>
              <li>
                <Link to='/' className="nav-link px-3 active">
                  <span className="me-2">
                    <i className="bi bi-bar-chart-steps text-dark"></i>
                  </span>
                  <span className="text-dark">Grapg JS</span>
    
                </Link>
              </li>
  
  
  
          </ul>
  
        </nav>
      </div>
    
  </div> 
  
        </>
    )
}

export default SideBar
