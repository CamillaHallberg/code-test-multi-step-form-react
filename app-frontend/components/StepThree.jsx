import React from "react"

const StepThree = (props) => {
  const { data, handleChange, next, back, handleSubmit } = props
  console.log(data)
  return (
    <>
    <h2>Additional information</h2>
    <form onSubmit={handleSubmit}>
      <div className="container">
        <label htmlFor="seat">Preferred seat number</label>
        <input
          type="number"
          name="seat"
          defaultValue={data.seat}
          onChange={handleChange}
        />
      </div>
      <div className="container">
        <label htmlFor="food">Food preference</label>
        <textarea
          name="food"
          defaultValue={data.food}
          onChange={handleChange}
        ></textarea>
     </div>
     <div className="container">
        <label htmlFor="allergies">Allergies</label>
        <textarea
          name="allergies"
          defaultValue={data.allergies}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="container">
        <button type="button" onClick={back}>BACK</button>
        <button type="button" onClick={next}>NEXT</button>
      </div>
    </form>
    </>
  )
}

export default StepThree 