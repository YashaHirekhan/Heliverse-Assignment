import React from 'react'
import logo from './assets/MotionArtEffect-logo.png'
import img1 from './assets/motionarteffect-img2.png'
import img2 from './assets/motionarteffect-img1.png'
import img3 from './assets/motionarteffect-img3.png'
import star from './assets/motionarteffect-img4.png'
import wand from './assets/motionarteffect-img5.png'
import section from './assets/motionarteffect-img11.png'
import page from './assets/motionarteffect-img10.png'
import browsers from './assets/motionarteffect-img8.png'
import lightweight from './assets/motionarteffect-img9.png'
import responsive from './assets/motionarteffect-img6.png'
import UI from './assets/motionarteffect-img7.png'
import './Page.css'



const Page = () => {
  return (
    <div className='page'>
      <div className='container'>
      <header className='header'>
        <img src={logo} alt="Logo" className='logo' />
        <button className='purchase-button'>Purchase Now</button>
      </header>
      <section className='content'>
        <div className='sec1-col1'>
          <p className=' transform'>Transform <br/>Your Website</p>
          <span className= 'paragraph' >With Motion Art<br/> Effect</span>
        </div>
        <div className='sec1-col2'>
          <h1 className='attract'>Attract Your Visitors Attention With Colorful <span className='motion'>Motion Art Effect</span></h1>
          <p className='unleash'>Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website.</p>
        </div>
        <div className='sec1-col3'></div>
      </section>
      
      <section className='sec2'>
        <h2 className='trusted'>Trusted by thousands of users around the world</h2>
        <div className='ratings'>
          <div className='ratings1'>
            <img src={img1} alt='image' className='img'/>
            <div className='reviews'>
            <img src={star} alt='5stars' className='stars'/>
            <p><strong>4.5</strong> Score, 9 Reviews</p>
            </div>
          </div>
          <div className='ratings2'>
            <img src={img2} alt='img' className='img'/>
            <div className='reviews'>
            <img src={star} alt='5stars' className='stars'/>
            <p><strong>4.5</strong> Score, 9 Reviews</p>
            </div>
          </div>
          <div className='ratings3'>
            <img src={img3} alt='img' className='img'/>
            <div className='reviews'>
            <img src={star} alt='5stars' className='stars'/>
            <p><strong>4.5</strong> Score, 9 Reviews</p>
            </div>
          </div>
        </div>
      </section>
      <section className='sec3'>
        <div className='wrapper'>
          <h2 className='turn'>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors </h2>
          <p className='motionpara'>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
          <button className='purchase-from-envato'>Purchase From Envato</button>
        </div>
        <div className='wand-wrapper'>
          <img src={wand} alt='' className='wandimg'/>
        </div>
      </section>
      <section className='sec4'>
        
        <div className='sec4-row1'>
        <div><h2 className='apply'>Apply On Any Section Or Enable For Whole Page</h2></div>
        <div className='apply-on'>
          <div className='outer-div1'>
            <h2>Apply On Section</h2>
            <p>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </p>
            <div>
            <img src={section} alt='' className='sectionImg'/>
            </div>
          </div>
          <div className='outer-div2'>
            <h2>Apply On Page</h2>
            <p>Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
            <div>
            <img src={page} alt='' className='pageImg'/>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className='sec5'>
      <div className='sec5-div1'>
        <div >
          <h2>Supported by All Popular Browsers</h2>
          <div className='sec5-div2'>
            <div>
              <p>Rest assured, Motion Art is designed to be compatible<br/>with all major web browsers.</p>
            </div>
            <div>
              <img src={browsers} alt='' className='browsers'/>
            </div>
          </div>
        </div>
      </div>
      </section>
      
      <section className='sec6'>
          <div className='sec6-div1'>
            <h1>An All-Round Plugin With Powerful Features</h1>
            <p>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>
          </div>
      </section>  
      
      <section>  
          
          <div className='sec7-div1'>
            <div className='feature-card'>
            <img src={lightweight} alt='' className='last-img'/>
            <h2>Light Weight</h2>
            <p>Motion Art for Elementor is designed to be lightweight.</p>
            </div>

            <div className='feature-card'>
            <img src={responsive} alt='' className='last-img'/>
            <h2>100% Responsive</h2>
            <p>Create a consistent visual experience across all devices.</p>
            </div>

            <div className='feature-card'>
            <img src={UI} alt='' className='last-img'/>
            <h2>User Friendly Interface</h2>
            <p>Ensure a smooth experience for both applicants and administrators.</p>
            </div>
          </div>
      </section>
      </div>
    
      <footer className="footer">
        <p>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
        <div className="links">
          <a href="/documentation" target="_blank" rel="noopener noreferrer">Documentation</a>
          <a href="/support" target="_blank" rel="noopener noreferrer">Support</a>
        </div>
      </footer>
    
    </div>
  
    

  )
}

export default Page

