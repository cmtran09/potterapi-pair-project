import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

const Question5 = (props) => {

    const [userAnswer, setUserAnswer] = useState("")
    const [isCorrect, setIsCorrect] = useState()
    const [guesses, setGuesses] = useState(0)
    const [failed, setFailed] = useState(false)
    const [valueNumber, setValueNumber] = useState(1)
    const [oneIsCorrect, setoneIsCorrect] = useState(false)
    const [twoIsCorrect, setTwoIsCorrect] = useState(false)
    const [threeIsCorrect, setThreeIsCorrect] = useState(false)
    const [fourIsCorrect, setFourIsCorrect] = useState(false)

    let correctValuesArr = props.houseValues

    function check(e, valueNumber) {
        e.preventDefault()
        if (correctValuesArr.includes(userAnswer.toLowerCase())) {
            setIsCorrect(true)
            //is true then reomve value in the correctValuesArr array 
            currentValue(valueNumber)
            setValueNumber(valueNumber + 1)
            console.log(valueNumber)
            removeCorrectAnswer()
        } else {
            setGuesses(guesses + 1)
            setIsCorrect(false)
            hasFailed()
        }
    }

    function removeCorrectAnswer() {
        correctValuesArr = correctValuesArr.splice(correctValuesArr.indexOf(userAnswer.toLowerCase()), 1)
        setValueNumber(valueNumber + 1)
    }

    function answer(e) {
        setUserAnswer(e.target.value)
    }

    function hasFailed() {
        if (guesses === 2) {
            setFailed(true)
        }
    }

    function currentValue(valueNumber) {
        console.log("currentValuecurrentValuecurrentValue")
    }

    function inputClass(value) {
        if (isCorrect === null) {
            return ""
        } else if (isCorrect === false) {
            return "is-danger"
        } else if (isCorrect === true) {
            return "is-success"
        }
    }

    console.log("INSIDE QUESTIONS COPonent", correctValuesArr)

    return (
        <div className="">
            <p>What are your 4 house values?</p>
            <input disabled={valueNumber >= 2 ? true : ""} className={"input " + inputClass()} type="text" placeholder="Your Answer" onChange={answer.bind(this)} onKeyPress={e => e.key === "Enter" && guesses < 3 ? check(e) : ""} />
            {valueNumber >= 2 ? <input disabled={valueNumber >= 3 ? true : ""} className={"input " + inputClass()} type="text" placeholder="Your Answer" onChange={answer.bind(this)} onKeyPress={e => e.key === "Enter" && guesses < 3 ? check(e) : ""} /> : ""}
            {valueNumber >= 3 ? <input disabled={valueNumber >= 4 ? true : ""} className={"input " + inputClass()} type="text" placeholder="Your Answer" onChange={answer.bind(this)} onKeyPress={e => e.key === "Enter" && guesses < 3 ? check(e) : ""} /> : ""}
            {valueNumber >= 4 ? <input disabled={valueNumber >= 5 ? true : ""} className={"input " + inputClass()} type="text" placeholder="Your Answer" onChange={answer.bind(this)} onKeyPress={e => e.key === "Enter" && guesses < 3 ? check(e) : ""} /> : ""}
            {guesses < 3 && valueNumber !== 5 ? <button className="button is-black" onClick={(e) => { (check(e)) }}>Submit</button> : ""}
            {valueNumber === 5 ? <p>WELL DONE, ALL QUESTIONS CORRECT</p> : ""}
            {(!isCorrect && guesses === 0 || valueNumber === 5) ? "" : (isCorrect) ? <small className="is-success">Correct!</small> : <small className="is-danger">Incorrect, you have {3 - guesses} guesses left</small>}
            {/* {isCorrect ? <small className="is-success">Correct!</small> : <small className="is-danger">Incorrect, you have {3 - guesses} guesses left</small>} */}
            {failed ? <Link to='/home'>
                <p className="">
                    Go Back And Research
            </p>
            </Link> : ""}
        </div >
    )
}

export default Question5