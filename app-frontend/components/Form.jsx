import React, { useState, useEffect } from "react"
import StepOne from "./StepOne"
import StepTwo from "./StepTwo"
import StepThree from "./StepThree"
import Results from "./Results"
import { data } from "autoprefixer"

const Form = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    phone: "",
    seat: "",
    food: "",
    allergies: "",
  })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const next = () => {
    setCurrentStep(currentStep + 1)
  }

  const back = () => {
    setCurrentStep(currentStep - 1)
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      setFormErrors(validate(formData))
      setIsSubmit(true)
      next()
  }

  useEffect(() => {
    console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formData)
    }
  }, [formErrors])

  const validate = (data) => {
    const errors = {}
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    if (!data.firstName) {
      errors.firstName = "First name is required!"
    } 
    if (!data.lastName) {
      errors.lastName = "Last name is required!"
      } 
    if (!data.age) {
      errors.age = "Age is required!"
    }
    // if (!data.email) {
    //   errors.email = "Email is required!"
    // } 
    // if (!data.phone) {
    //   errors.phone = "Phone number is required!"
    //   } 
    // if (!data.seat) {
    //   errors.seat = "Seat preference is required!"
    // }
    // if (!data.food) {
    //   errors.food = "Food preference is required!"
    // } 
    // if (!data.allergies) {
    //   errors.allergies = "Allergies is a required field!"
    // }
    return errors
  }

  switch (currentStep) {
    case 1:
      return (
        <StepOne
          data={formData}
          handleChange={handleChange}
        //   next={next}
          handleSubmit={handleSubmit}
        />
      )
    case 2:
      return (
        <StepTwo
          data={formData}
          handleChange={handleChange}
          next={next}
          back={back}
        />
      )
    case 3:
      return (
        <StepThree
          data={formData}
          handleChange={handleChange}
          next={next}
          back={back}
        />
      )
    default:
      return <Results data={formData} back={back} />
  }
}

export default Form
