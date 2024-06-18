import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';

const Step3 = () => {
  const navigate = useNavigate()
  const selectedPlan = JSON.parse(localStorage.getItem('selectedPlan'))
  const monthly = selectedPlan.billing === 'monthly'

  const monthlyPrices = {
    onlineService: '$1/mo',
    largerStorage: '$2/mo',
    customizableProfile: '$2/mo'
  }

  const yearlyPrices = {
    onlineService: '$10/yr',
    largerStorage: '$20/yr',
    customizableProfile: '$20/yr'
  }

  const handleBack = () => {
    localStorage.setItem('selectedAddons', '[]')
    navigate('/step2')
  }

  const [selectedAddons, setSelectedAddons] = useState(() => {
    const savedAddons = localStorage.getItem('selectedAddons')
    return savedAddons ? JSON.parse(savedAddons) : 
    [{ addonName: 'onlineService', price: monthly ? monthlyPrices.onlineService : yearlyPrices.onlineService }];
  })

  useEffect(() => {
    localStorage.setItem('selectedAddons', JSON.stringify(selectedAddons));
  }, [selectedAddons]);

  const initialAddons = {
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  };

  selectedAddons.forEach((addon) => {
    initialAddons[addon.addonName] = true;
  });

  const [addons, setAddons] = useState(initialAddons);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target
    setAddons((prevAddons) => ({
      ...prevAddons,
      [name]: checked,
    }))
    if (checked) {
      setSelectedAddons((prevSelectedAddons) => 
        [...prevSelectedAddons, 
        { addonName: name, price: monthly ? monthlyPrices[name] : yearlyPrices[name] }
      ])
    } else {
      setSelectedAddons((prevSelectedAddons) =>
        prevSelectedAddons.filter((addon) => addon.addonName !== name)
      )
    }
  }

  const handleAddonClick = (addonName) => {
    setAddons((prevAddons) => {
      const newAddons = {
        ...prevAddons,
        [addonName]: !prevAddons[addonName],
      };
      const checked = newAddons[addonName];
      if (checked) {
        setSelectedAddons((prevSelectedAddons) => [
          ...prevSelectedAddons,
          { addonName: addonName, price: monthly ? monthlyPrices[addonName] : yearlyPrices[addonName] },
        ]);
      } else {
        setSelectedAddons((prevSelectedAddons) =>
          prevSelectedAddons.filter((addon) => addon.addonName !== addonName)
        );
      }
      return newAddons;
    });
  };

  

  return (
    <div className="step-content">
      <div>
        <div>
          <h1 className="title">Pick add-ons</h1>
          <p className="description">Add-ons help enhance your gaming experience.</p>
        </div>
        <div className='addons'>
          <div 
            className={`addon ${addons.onlineService ? 'selected' : ''}`}      
            onClick={() => handleAddonClick('onlineService')}
          >
            <div className='checkbox' onClick={(e) => e.stopPropagation()}>
              <Form.Check
                type='checkbox'
                id='onlineService'
                name='onlineService'
                checked={addons.onlineService}
                onChange={handleCheckboxChange}
              />
              <div>
                <strong>Online service</strong>
                <p>Access to multiplayer games</p>
              </div>
            </div>
            <span>{monthly ? '+$1/mo' : '+$10/yr'}</span>
          </div>
          <div 
            className={`addon ${addons.largerStorage ? 'selected' : ''}`}  
            onClick={() => handleAddonClick('largerStorage')}
          >
            <div className='checkbox' onClick={(e) => e.stopPropagation()}>
              <Form.Check
                type='checkbox'
                id='largerStorage'
                name='largerStorage'
                checked={addons.largerStorage}
                onChange={handleCheckboxChange}
              />
              <div>
                <strong>Larger storage</strong>
                <p>Extra 1TB of cloud save</p>
              </div>
            </div>
            <span>{monthly ? '+$2/mo' : '+$20/yr'}</span>
          </div>
          <div 
            className={`addon ${addons.customizableProfile ? 'selected' : ''}`} 
            onClick={() => handleAddonClick('customizableProfile')}
          >
            <div className='checkbox' onClick={(e) => e.stopPropagation()}>
              <Form.Check
                type='checkbox'
                id='default-checkbox'
                name='customizableProfile'
                checked={addons.customizableProfile}
                onChange={handleCheckboxChange}
              />
              <div>
                <strong>Customizable profile</strong>
                <p>Custom theme on your profile</p>
              </div>
            </div>
            <span>{monthly ? '+$2/mo' : '+$20/yr'}</span>
          </div>
        </div>
      </div>
      <div className='btn-container'>
        <button className='btn-back' onClick={handleBack}>Go Back</button>
        <Button variant="primary" type="submit" onClick={() => navigate('/step4')}>
              Next Step
        </Button>
      </div>
    </div>
  )
}

export default Step3