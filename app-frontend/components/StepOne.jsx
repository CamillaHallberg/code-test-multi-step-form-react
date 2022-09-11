import React from "react"

const StepOne = (props) => {
  const { data, handleChange, next, handleSubmit } = props
  console.log(data)
  return (
    <>
    <h1>Welcome!</h1>
    <p>Please enter the information below and follow the steps in order to book your ticket.</p>
    <form onSubmit={handleSubmit}>
      <div className="container">
        <label htmlFor="firstName">First name <span className="asterisk">*</span></label>
        <input
          type="text"
          name="firstName"
          data-testid="firstName"
          defaultValue={data.firstName}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="container">
        <label htmlFor="lastName">Last name <span className="asterisk">*</span></label>
        <input
          type="text"
          name="lastName"
          data-testid="lastName"
          defaultValue={data.lastName}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="container">
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          data-testid="age"
          defaultValue={data.age}
          onChange={handleChange}
          min="1"
        />
      </div>
      <div className="container">
        <button onClick={handleSubmit}>NEXT</button>
      </div>
    </form>
    </>
  )
}

export default StepOne

// Hur får jag firstname och lastname att inte tillåta nummer?! 