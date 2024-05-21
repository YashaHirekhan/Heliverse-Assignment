import "./App.css";
import {useRef, useEffect} from 'react'
import Fluid from 'webgl-fluid'
import Page from './components/Page'

export default function App() {
  const canvas = useRef(null)
  useEffect(function () {
    let c = canvas.current

    const options = {
      SIM_RESOLUTION: 12.8,
      DENSITY_DISSIPATION: 1,
      VELOCITY_DISSIPATION: 0.3,
      PRESSURE: 0.8,
      PRESSURE_ITERATIONS: 20,
      CURL: 30,
      SPLAT_RADIUS: 0.30,
      SPLAT_FORCE: 6000,

    };

    Fluid(c)
  }, [])
  return (
    <div className="App">
      <canvas ref={canvas} style={{width: '100%', height: '350%'}}></canvas>
      <div className='ontop'>
        <Page/>
      </div>
      
    </div>
  );
}
