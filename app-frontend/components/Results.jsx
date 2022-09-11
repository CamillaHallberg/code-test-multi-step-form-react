import React from "react"

const Results = (props) => {
  const { data } = props
  console.log(data)
  return (
    <>
    <h2>Dear {data.firstName}, thank you for completing this form! 👏🏽</h2>
    <p>Here is a summary of your order</p>
    <div className="orderDetailsContainer">
    <ul className="orderDetails">
        <li>First name: <span>{data.firstName}</span></li>
        <li>Last name: <span>{data.lastName}</span></li>
        <li>Age: <span>{data.age}</span></li>
        <li>E-mail: <span>{data.email}</span></li>
        <li>Phone: <span>{data.phone}</span></li>
        <li>Seat number: <span>{data.seat}</span></li>
        <li>Food preference: <span>{data.food}</span></li>
        <li>Allergies: <span>{data.allergies}</span></li>
    </ul>
    </div>
    </>
  )
}

export default Results 