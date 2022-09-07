import React from 'react'

const StepOne = () => {
  return (
    <form>
      <label htmlFor="firstNameInput">First name
        <input
          type="text"
          id="firstNameInput"
          name="firstName" 
          required
        //   value=""
        //   onChange=""
        />
      </label>
      <label htmlFor="lastNameInput">Last name
        <input
          type="text"
          id="lastNameInput"
          name="lastName" 
          required
        //   value=""
        //   onChange=""
        />
      </label>
      <label htmlFor="ageInput">Age
        <input
          type="number"
          id="ageInput"
          name="age" 
          required
          min="0"
        //   value=""
        //   onChange=""
        />
      </label>
      <button type="submit">NEXT</button>
    </form>
  )
}

export default StepOne 