import React from 'react'
import { useLocation } from 'react-router-dom';

const StepsNav = () => {
  const location = useLocation();

  return (
    <nav className="steps-nav">
      <div className='step'>
        <span 
          className={'step-number' + ((location.pathname === '/step1' || location.pathname === '/') ? ' active' : '')}
        >1</span>
        <div className='step-info'>
          <span className='step-name'>STEP 1</span> 
          <strong>YOUR INFO</strong>
        </div>
      </div>
      <div className='step'>
        <span className={'step-number' + (location.pathname === '/step2' ? ' active' : '')}>2</span>
        <div className='step-info'>
          <span className='step-name'>STEP 2</span>
          <strong>SELECT PLAN</strong>
        </div>
      </div>
      <div className='step'>
        <span className={'step-number' + (location.pathname === '/step3' ? ' active' : '')}>3</span>
        <div className='step-info'>
          <span className='step-name'>STEP 3</span>
          <strong>ADD-ONS</strong>
        </div>
      </div>
      <div className='step'>
        <span className={'step-number' + ((location.pathname === '/step4' || location.pathname === '/step5') ? ' active' : '')}>4</span>
        <div className='step-info'>
          <span className='step-name'>STEP 4</span>
          <strong>SUMMARY</strong>
        </div>
      </div>
    </nav>
  )
}

export default StepsNav