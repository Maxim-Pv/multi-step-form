import React from 'react'
import { useNavigate } from 'react-router-dom'

const Step2 = () => {
  const navigate = useNavigate()

  return (
    <div className="step1-content"> 
      Step2
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}

export default Step2