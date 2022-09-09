import React from "react"
import { useRouter } from "next/router"

const StepThree = ({ seatInput, onSeatInputChange, foodInput, onFoodInputChange, allergiesInput, onAllergiesInputChange, onStepChange}) => {

    const router = useRouter()

    return (
    <>
    <h1>Welcome!</h1>
    <p>Please enter the information below and follow the steps in order to book your ticket.</p>
    <form onSubmit={onStepChange}>
      <div className="container">
        <label htmlFor="seatInput">Seat</label>
          <input 
            type="text"
            data-testid="seat"
            name="seat" 
            value={seatInput} 
            onChange={onSeatInputChange}
            required
            autoComplete="off"
          />
      </div>  
      <div className="container">
        <label htmlFor="foodInput">Food</label>
          <input 
            type="text"
            data-testid="food"
            name="food" 
            value={foodInput} 
            onChange={onFoodInputChange}
            required
            autoComplete="off"
          />
      </div>
      <div className="container">
        <label htmlFor="allergiesInput">Allergies</label>
          <input 
            type="text"
            data-testid="allergies"
            name="allergies" 
            value={allergiesInput} 
            onChange={onAllergiesInputChange}
            required
            autoComplete="off"
          />
      </div>
      <div className="container">
        <button 
        type="button" 
        data-testid="back"
        onClick={() => router.back()}
        >BACK
        </button>
        <button type="submit" data-testid="submit">NEXT</button>
      </div>
    </form>
    </>
  )
}

export default StepThree

// Seat, Food & Allergies are all required fields.