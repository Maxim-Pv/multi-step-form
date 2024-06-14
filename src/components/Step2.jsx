import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const Step2 = () => {
  const navigate = useNavigate()

  return (
    <div className="step-content"> 
      <div>
        <h1 className="title">Select your plan</h1>
        <p className="description">You have the option of monthly or yearly billing.</p>
      </div>
      <div className='plans'>
        <div className='plan'>
          <span className='plan-img img1'></span>
          <strong>Arcade</strong>
          <span className='price'>$90/yr</span>
          <span className='discount'>2 months free</span>
        </div>
        <div className='plan'>
          <span className='plan-img img2'></span>
          <strong>Advanced</strong>
          <span className='price'>$120/yr</span>
          <span className='discount'>2 months free</span>
        </div>
        <div className='plan'>
          <span className='plan-img img3'></span>
          <strong>Pro</strong>
          <span className='price'>$150/yr</span>
          <span className='discount'>2 months free</span>
        </div>
      </div>

      <div className='toggle'>
        <span>Monthly</span>
        <span className='toggle-switch'>toggle</span>
        <span>Yearly</span>
      </div>

      <button className='btn-back' onClick={() => navigate(-1)}>Go Back</button>
      <Button variant="primary" type="submit">
            Next Step
      </Button>
    </div>
  )
}

export default Step2