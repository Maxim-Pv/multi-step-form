import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { useNavigate } from 'react-router-dom'

const Step4 = () => {
  const navigate = useNavigate()

  const selectedPlan = JSON.parse(localStorage.getItem('selectedPlan')).plan
  const billing = JSON.parse(localStorage.getItem('selectedPlan')).billing
  const billingToUpperCase = billing.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')

  // const totalPrice = selectedPlan.price + JSON.parse(localStorage.getItem('selectedAddons')).reduce((total, addon) => total + addon.price, 0)

  // console.log(totalPrice);
  return (
    <div className="step-content">
      <h1 className="title">Finishing up</h1>
      <p className="description">Double-check everything looks OK before confirming.</p>
      <div className='plan'>
        <div className="plan-info">
          <div className="plan-name">
            {selectedPlan} {'(' + billingToUpperCase + ')'}
            <button className='btn-change' onClick={() => navigate('/step2')}>Change</button>
          </div>
          <strong className="plan-price">
            {JSON.parse(localStorage.getItem('selectedPlan')).price}
          </strong>
        </div>
        <div className='selected-addons'>
          {JSON.parse(localStorage.getItem('selectedAddons')).map((addon) => (
            <div className="addon-info" key={addon.addonName}>
              <span className='addon-name'>{addon.addonName}</span>
              <span className='addon-price'>+{addon.price}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <span className='total'>Total (per {billing === 'monthly' ? 'month' : 'year'})</span>
        {/* <span>{totalPrice}</span> */}
      </div>


      <button className='btn-back' onClick={() => navigate(-1)}>Go Back</button>
      <Button variant="primary" type="submit" onClick={() => navigate('/step5')}>
            Confirm
      </Button>
    </div>
  )
}

export default Step4