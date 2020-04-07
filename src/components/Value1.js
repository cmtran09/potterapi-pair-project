import React, { useState, useEffect } from 'react'

const Value1 = (props) => {

    let remainingCorrectValues = props.correctValuesArr
    const [userAnswer, setUserAnswer] = useState("")
    const [isCorrect, setIsCorrect] = useState()
    const [guesses, setGuesses] = useState(0)
    const [failed, setFailed] = useState(false)


    function check(e) {
        e.preventDefault()
        console.log("click")
        if (remainingCorrectValues.includes(userAnswer.toLowerCase())) {
            setIsCorrect(true)
            //is true then reomve value in the remainingCorrectValues array 
            // props.removeCorrectAnswer()
            setValueNumber(valueNumber + 1)
        } else {
            setGuesses(guesses + 1)
            setIsCorrect(false)
            hasFailed()
        }
    }

    function answer(e) {
        setUserAnswer(e.target.value)
    }

    function hasFailed() {
        if (guesses === 2) {
            setFailed(true)
        }
    }

    function inputClass() {
        if (isCorrect === null) {
            return ""
        } else if (isCorrect === false) {
            return "is-danger"
        } else if (isCorrect === true) {
            return "is-success"
        }
    }

    // function handleChange(e){
    //     props.
    // }

    console.log(remainingCorrectValues)

    return (
        <div className="">
            <input className={"input " + inputClass()} type="text" placeholder="Value 1" onChange={answer.bind(this)} onKeyPress={e => e.key === "Enter" && guesses < 3 ? check(e) : ""} />
            <button onClick={() => console.log(remainingCorrectValues)}></button>
        </div>
    )
}

export default Value1