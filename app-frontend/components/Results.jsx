import React from "react"

const Results = ({ firstNameInput, lastNameInput, ageInput, emailInput, phoneInput, seatInput, foodInput, allergiesInput }) => {
  return (
    <>
    <h1>Dear {firstNameInput}, your order details below</h1>
    <div className="orderDetailsContainer">
      <ul className="orderDetails">
        <li>First name: <span>{firstNameInput}</span></li>
        <li>Last name: <span>{lastNameInput}</span></li>
        <li>Age: <span>{ageInput}</span></li>
        <li>Email: <span>{emailInput}</span></li>
        <li>Phone: <span>{phoneInput}</span></li>
        <li>Seat: <span>{seatInput}</span></li>
        <li>Food: <span>{foodInput}</span></li>
        <li>Allergies: <span>{allergiesInput}</span></li>
      </ul>
    </div>
    </>
  )
}

export default Results 