import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Step2 = () => {
  const navigate = useNavigate()
  const [selectedPlan, setSelectedPlan] = useState(() => {
    const savedPlan = localStorage.getItem('selectedPlan')
    return savedPlan ? JSON.parse(savedPlan) : {plan: 'Arcade', billing: 'monthly', price: '$9/mo'}
  })
  
  const [isYearly, setIsYearly] = useState(selectedPlan.billing === 'yearly');

  useEffect(() => {
    localStorage.setItem('selectedPlan', JSON.stringify(selectedPlan));
  }, [selectedPlan]);

  const toggleBilling = () => {
    setIsYearly(!isYearly);
    setSelectedPlan((prevSelectedPlan) => ({
      ...prevSelectedPlan,
      billing: !isYearly ? 'yearly' : 'monthly',
      price: !isYearly ? yearlyPrices[prevSelectedPlan.plan] : monthlyPrices[prevSelectedPlan.plan],
    }));
  };

  const handlePLanChange = (plan) => {
    setSelectedPlan({
      ...selectedPlan,
      plan: plan,
      price: isYearly ? yearlyPrices[plan] : monthlyPrices[plan],
    });
  };

  const monthlyPrices = {
    Arcade: '$9/mo',
    Advanced: '$12/mo',
    Pro: '$15/mo'
  }

  const yearlyPrices = {
    Arcade: '$90/yr',
    Advanced: '$120/yr',
    Pro: '$150/yr'
  }

  return (
    <div className="step-content"> 
      <div>
        <div>
          <h1 className="title">Select your plan</h1>
          <p className="description">You have the option of monthly or yearly billing.</p>
        </div>
        <div className='plans'>
          <div 
            className={`plan ${selectedPlan.plan === 'Arcade' ? 'selected' : ''}`}
            onClick={() => handlePLanChange('Arcade')}
          >
            <span className='plan-img img1'></span>
            <div className='details'>
              <strong>Arcade</strong>
              <span className='price'>{isYearly ? '$90/yr' : '$9/mo'}</span>
              {isYearly &&<span className='discount'>2 months free</span>}
            </div>
          </div>
          <div 
            className={`plan ${selectedPlan.plan === 'Advanced' ? 'selected' : ''}`}
            onClick={() => handlePLanChange('Advanced')}
          >
            <span className='plan-img img2'></span>
            <div className='details'>
              <strong>Advanced</strong>
              <span className='price'>{isYearly ? '$120/yr' : '$12/mo'}</span>
              {isYearly &&<span className='discount'>2 months free</span>}
            </div>
          </div>
          <div 
            className={`plan ${selectedPlan.plan === 'Pro' ? 'selected' : ''}`}
            onClick={() => handlePLanChange('Pro')}
          >
            <span className='plan-img img3'></span>
            <div className='details'>
              <strong>Pro</strong>
              <span className='price'>{isYearly ? '$150/yr' : '$15/mo'}</span>
              {isYearly &&<span className='discount'>2 months free</span>}
            </div>
          </div>
        </div>
        <div className='toggle'>
          <span className={!isYearly ? 'selectedPeriod' : ''}>Monthly</span>
          <Form.Check
            type="switch"
            id="custom-switch"
            checked={isYearly}
            onChange={toggleBilling}
          />
          <span className={isYearly ? 'selectedPeriod' : ''}>Yearly</span>
        </div>
      </div>
      <div className='btn-container'>
        <button className='btn-back' onClick={() => navigate(-1)}>Go Back</button>
        <Button variant="primary" type="submit" onClick={() => navigate('/step3')}>
              Next Step
        </Button>
      </div>
    </div>
  )
}

export default Step2