import React,{useState} from 'react'
import './main.css'
import Activety from './Activety'
import TopHeader from './TopHheader'
import ChartOne from './ChartOne'
import Information from './Information'
import MainUser from './MainUser'
import Footer from './Footer'
import FooterIcon from './FooterIcon'
import Modal from './Modal'

function Main() {
    
    return (
        <>
        <div className="content">
  <TopHeader />
  <Activety/>
  <ChartOne/>
  <Information/>
  <MainUser/>
  <Footer/>
  <FooterIcon/>
  
 
  <Modal/>
</div>
        </>
    )
}

export default Main
