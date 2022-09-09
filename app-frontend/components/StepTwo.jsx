import React from "react"
import { useRouter } from "next/router"

const StepTwo = ({ emailInput, onEmailInputChange, phoneInput, onPhoneInputChange, onStepChange}) => {

    const router = useRouter()

    return (
    <>
    <h1>Welcome!</h1>
    <p>Please enter the information below and follow the steps in order to book your ticket.</p>
    <form onSubmit={onStepChange}>
      <div className="container">
        <label htmlFor="emailInput">Email</label>
          <input 
            type="email"
            data-testid="email"
            name="email"
            value={emailInput} 
            onChange={onEmailInputChange}
            required
            autoComplete="off"
          />
      </div>  
      <div className="container">
        <label htmlFor="phoneInput">Telephone</label>
          <input
            type="tel"
            data-testid="phone"
            name="phone"
            value={phoneInput} 
            onChange={onPhoneInputChange}
            required
            autoComplete="off"
          />
      </div>
      <div className="container">
        <button 
        type="button" 
        data-testid="back"
        onClick={() => router.back('')}
        >BACK
        </button>
        <button type="submit" data-testid="submit">NEXT</button>
      </div>
    </form>
    </>
  )
}

export default StepTwo

// Email should be required AND have the right format. 
// Phone should be required.
// Vilken typ ska back-button vara? Submit, reset eller button? 