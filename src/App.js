
import "./App.css";
import { useRef, useEffect } from 'react';
import webGLFluidEnhanced from 'webgl-fluid-enhanced';


import React from 'react'
import logo from './components/assets/MotionArtEffect-logo.png'
import img1 from './components/assets/motionarteffect-img2.png'
import img2 from './components/assets/motionarteffect-img1.png'
import img3 from './components/assets/motionarteffect-img3.png'
import star from './components/assets/motionarteffect-img4.png'
import wand from './components/assets/motionarteffect-img5.png'
import section from './components/assets/motionarteffect-img11.png'
import page from './components/assets/motionarteffect-img10.png'
import browsers from './components/assets/motionarteffect-img8.png'
import lightweight from './components/assets/motionarteffect-img9.png'
import responsive from './components/assets/motionarteffect-img6.png'
import UI from './components/assets/motionarteffect-img7.png'


export default function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    webGLFluidEnhanced.simulation(canvasRef.current, {
      SIM_RESOLUTION: 256,
      DENSITY_DISSIPATION: 0.8,
      PRESSURE_ITERATIONS: 10,
      BACK_COLOR: '#0A0419',
      COLOR_PALETTE: ['#61dafb', '#a8dadc', '#457b9d', '#1d3557', '#f1faee','#abb8c3','ffffff','#f78da7','#cf2e2e','#ff6900','#fcb900','#7bdcb5','#00d08','#8ed1fc','#0693e3','#9b51e0'],
    });
    
  }, []);

  return (
    <div className="App">
      <canvas ref={canvasRef} className="backgroundCanvas" />
      <div className='content'>
        <div className='page'>
        <div className='container'>
        <header className='header'>
          <img src={logo} alt="Logo" className='logo' />
          <a href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891" target="_blank" rel="noopener noreferrer" className="purchase-button">
  Purchase Now
</a>

        </header>
        <section className='sec1-div1'>
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
            <a href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891" target="_blank" rel="noopener noreferrer" className="purchase-from-envato">
  Purchase From Envato
  <span className="material-symbols-outlined">arrow_forward</span>
</a>

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
          <p className="copywrite">© 2023 Copywrite. All rights reserved by QodeMatrix</p>
          <div className="links">
            <a href="https://qodematrix.com/docs/motion-art-for-elementor/" target="_blank" rel="noopener noreferrer">Documentation</a>
            <a href="https://support.qodematrix.com/" target="_blank" rel="noopener noreferrer">Support</a>
          </div>
        </footer>
    
        </div>
      </div>
    </div>
  );
}

