import React, { useState } from "react"

import StepOne from "./StepOne"
import StepTwo from "./StepTwo"
import StepThree from "./StepThree"
import Results from "./Results"

const Form = () => {

    const [firstNameInput, setFirstNameInput] = useState("")
    const [lastNameInput, setLastNameInput] = useState("")
    const [ageInput, setAgeInput] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [phoneInput, setPhoneInput] = useState("")
    const [seatInput, setSeatInput] = useState("")
    const [foodInput, setFoodInput] = useState("")
    const [allergiesInput, setAllergiesInput] = useState("")
    const [step, setStep] = useState(1)

    const onFirstNameInputChange = (e) => {
        setFirstNameInput(e.target.value)
    }

    const onLastNameInputChange = (e) => {
        setLastNameInput(e.target.value)
    }

    const onAgeInputChange = (e) => {
        setAgeInput(e.target.value)
    }

    const onEmailInputChange = (e) => {
        setEmailInput(e.target.value)
    }

    const onPhoneInputChange = (e) => {
        setPhoneInput(e.target.value)
    }

    const onSeatInputChange = (e) => {
        setSeatInput(e.target.value)
    }

    const onFoodInputChange = (e) => {
        setFoodInput(e.target.value)
    }

    const onAllergiesInputChange = (e) => {
        setAllergiesInput(e.target.value)
    }

    const onStepChange = (e) => {
        e.preventDefault()
        setStep(step + 1)
    }

    return (
        <>
        {step === 1
            && <StepOne 
                firstNameInput={firstNameInput}
                onFirstNameInputChange={onFirstNameInputChange}
                lastNameInput={lastNameInput}
                onLastNameInputChange={onLastNameInputChange}
                ageInput={ageInput}
                onAgeInputChange={onAgeInputChange}
                onStepChange={onStepChange} />}
        {step === 2
            && <StepTwo 
                emailInput={emailInput}
                onEmailInputChange={onEmailInputChange}
                phoneInput={phoneInput}
                onPhoneInputChange={onPhoneInputChange}
                onStepChange={onStepChange} />}
        {step === 3
            && <StepThree 
                seatInput={seatInput}
                onSeatInputChange={onSeatInputChange}
                foodInput={foodInput}
                onFoodInputChange={onFoodInputChange}
                allergiesInput={allergiesInput}
                onAllergiesInputChange={onAllergiesInputChange}
                onStepChange={onStepChange} />}
        {step === 4
            && <Results 
                firstNameInput={firstNameInput}
                lastNameInput={lastNameInput}
                ageInput={ageInput}
                emailInput={emailInput}
                phoneInput={phoneInput}
                seatInput={seatInput}
                foodInput={foodInput}
                allergiesInput={allergiesInput} />}
        </>
    )
}

export default Form 