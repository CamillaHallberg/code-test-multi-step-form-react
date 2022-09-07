import React, { useState } from 'react'

import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import Results from './Results'

const Form = () => {
    return (
        <>
        <h1>Welcome to the ticket ordering app!</h1>
        <p className="">Please enter the information below</p>
        <StepOne />
        </>
    )
}

export default Form 