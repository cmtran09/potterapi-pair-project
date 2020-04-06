import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

const Question4 = (props) => {

    const correctAnswer4 = props.headOfHouse
    const [userAnswer, setUserAnswer] = useState("")
    const [isCorrect, setIsCorrect] = useState()
    const [guesses, setGuesses] = useState(0)
    const [failed, setFailed] = useState(false)

    function check(e) {
        e.preventDefault()
        if (userAnswer.toLowerCase() === correctAnswer4.toLowerCase()) {
            console.log("answer is correct!")
            console.log("isCorrect variable is = ", isCorrect)
            console.log("isCorrect variable changed to true")
            setIsCorrect(true)
            console.log("isCorrect variable is NOW = ", isCorrect)
        } else {
            console.log("false")
            console.log("haha")
            console.log(guesses)
            setGuesses(guesses + 1)
            setIsCorrect(false)
            console.log(guesses)
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

    console.log("headOfHouse is ::::::", correctAnswer4)
    console.log("isCorrect variable is NOW = ", isCorrect)
    console.log(guesses)
    return (
        <div className="">
            <p>Who is the head of your house?</p>
            <input className={"input " + inputClass()} type="text" placeholder="Your Answer" onChange={answer.bind(this)} onKeyPress={e => e.key === "Enter" && guesses < 3 ? check(e) : ""} />
            {guesses < 3 && !isCorrect ? <button className="button is-black" onClick={(e) => { (check(e)) }}>Submit</button> : ""}
            {(!isCorrect && guesses === 0) ? "" : (isCorrect) ? <small className="is-success">Correct!</small> : <small className="is-danger">Incorrect, you have {3 - guesses} guesses left</small>}
            {/* {isCorrect ? <small className="is-success">Correct!</small> : <small className="is-danger">Incorrect, you have {3 - guesses} guesses left</small>} */}
            {failed ? <Link to='/spells'>
                <p className="">
                    Go Back And Study
            </p>
            </Link> : ""}
        </div >
    )
}

export default Question4