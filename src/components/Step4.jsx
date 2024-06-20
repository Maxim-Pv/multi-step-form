import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { useNavigate } from 'react-router-dom'

const Step4 = () => {
  const navigate = useNavigate()

  const handleChange = () => {
    localStorage.setItem('selectedAddons', '[]')
    navigate('/step2')
  }

  const selectedAddons = JSON.parse(localStorage.getItem('selectedAddons'))
  const addons = selectedAddons.map((addon) => {
    const formatedName = addon.addonName
      .replace(/([A-Z])/g, ' $1')
      .toLowerCase()
    const newAddonName = formatedName[0].toUpperCase() + formatedName.slice(1)
    return {
      addonName: newAddonName,
      price: addon.price
    }
  })


  const selectedPlan = JSON.parse(localStorage.getItem('selectedPlan')).plan
  const billing = JSON.parse(localStorage.getItem('selectedPlan')).billing
  const billingToUpperCase = billing.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')

  const selectedPlanPrice = [JSON.parse(localStorage.getItem('selectedPlan')).price]
  const getPrices = [JSON.parse(localStorage.getItem('selectedAddons')).map((addon) => (
    addon.price
  ))]

  const allNumbers = (selectedPlanPrice + ',' + getPrices).match(/\d+/g)
  const total = allNumbers.reduce((a, b) => Number(a) + Number(b), 0)

  return (
    <div className="step-content">
      <div>
        <div>
          <h1 className="title">Finishing up</h1>
          <p className="description">Double-check everything looks OK before confirming.</p>
        </div>
        <div>
          <div className='selected-plan'>
            <div className="plan-info">
              <div className="plan-name">
                {selectedPlan} {'(' + billingToUpperCase + ')'}
                <button className='btn-change' onClick={handleChange}>Change</button>
              </div>
              <strong className="plan-price">
                {JSON.parse(localStorage.getItem('selectedPlan')).price}
              </strong>
            </div>
            <div className='selected-addons'>
              {addons.map((addon) => (
                <div className="addon-info" key={addon.addonName}>
                  <span className='addon-name'>{addon.addonName}</span>
                  <span className='addon-price'>+{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
          <div className='total-info'>
            <span className='total'>Total (per {billing === 'monthly' ? 'month' : 'year'})</span>
            <strong className='total-price'>+${total}/{billing === 'monthly' ? 'mo' : 'yr'}</strong>
          </div>
        </div>
      </div>
      <div className='btn-container'>
        <button className='btn-back' onClick={() => navigate(-1)}>Go Back</button>
        <Button className='btn-confirm' variant="primary" type="submit" onClick={() => navigate('/step5')}>
              Confirm
        </Button>
      </div>
    </div>
  )
}

export default Step4