import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { useNavigate } from 'react-router-dom'

const Step4 = () => {
  const navigate = useNavigate()


  return (
    <div>Step4


      <button className='btn-back' onClick={() => navigate(-1)}>Go Back</button>
      <Button variant="primary" type="submit" onClick={() => navigate('/step5')}>
            Confirm
      </Button>
    </div>
  )
}

export default Step4