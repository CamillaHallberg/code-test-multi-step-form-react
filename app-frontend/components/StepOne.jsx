import React from "react"

const StepOne = ({ firstNameInput, onFirstNameInputChange, lastNameInput, onLastNameInputChange, ageInput, onAgeInputChange, onStepChange}) => {
    
  return (
    <>
    <h1>Welcome!</h1>
    <p>Please enter the information below and follow the steps in order to book your ticket.</p>
    <form onSubmit={onStepChange}>
      <div className="container">
        <label htmlFor="firstNameInput">First name</label>
          <input
            type="text"
            data-testid="firstName"
            name="firstName"
            value={firstNameInput} 
            onChange={onFirstNameInputChange}
            maxLength="20"
            required
            autoComplete="off"
            // pattern="[A-Za-z]" 
            // title="First name should not contain numbers" 
          />
      </div>
      <div className="container">
        <label htmlFor="lastNameInput">Last name</label>
          <input
            type="text"
            data-testid="lastName"
            name="lastName" 
            value={lastNameInput}
            onChange={onLastNameInputChange}
            maxLength="20"
            required
            autoComplete="off"
            // pattern="[A-Za-z]" 
            // title="Last name should not contain numbers"
          />
      </div>
      <div className="container">
        <label htmlFor="ageInput">Age</label>
          <input
            type="number"
            data-testid="age"
            name="age" 
            value={ageInput}
            onChange={onAgeInputChange}
            required
            min="0"
            max="100"
          />
      </div>
      <div className="container">
        <button type="submit" data-testid="submit">NEXT</button>
      </div>
    </form>
    </>
  )
}

export default StepOne 

// First name and last name is required AND should NOT contain numbers. 
// Age must be a number and a positive number. 