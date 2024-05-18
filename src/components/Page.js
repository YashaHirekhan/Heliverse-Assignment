import React from 'react'
import logo from './assets/MotionArtEffect-logo.png'
import './Page.css'
const Page = () => {
  return (
    <div className='container'>
           <div className='logo-purchasenow'>
                <img src={logo} alt="Logo" className='logo-wrapper'/>
                <div className='purchase-now'>Purchase Now</div>        
            </div> 
    </div>
    

  )
}

export default Page