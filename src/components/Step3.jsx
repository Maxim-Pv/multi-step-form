import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { useNavigate } from 'react-router-dom'

const Step3 = () => {
  const navigate = useNavigate()

  return (
    <div className="step-content">
      Step3


      <button className='btn-back' onClick={() => navigate(-1)}>Go Back</button>
      <Button variant="primary" type="submit" onClick={() => navigate('/step4')}>
            Next Step
      </Button>
    </div>
  )
}

export default Step3