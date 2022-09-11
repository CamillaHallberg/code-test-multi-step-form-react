import React from "react"

const StepTwo = (props) => {
  const { data, handleChange, next, back, handleSubmit } = props
  console.log(data)
  return (
    <>
    <h2>Contact details</h2>
    <form onSubmit={handleSubmit}>
      <div className="container">
        <label htmlFor="email">Email</label>
        <input 
          type="email"
          name="email"
          defaultValue={data.email}
          onChange={handleChange}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
      </div>
      <div className="container">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          name="phone"
          defaultValue={data.phone}
          onChange={handleChange}
        />
      </div>
      <div className="container">
        <button type="button" onClick={back}>BACK</button>
        <button type="button" onClick={next}>NEXT</button>
      </div>
    </form>
    </>
  )
}

export default StepTwo 