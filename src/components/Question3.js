import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Question3 = (props) => {

    const correctAnswer3 = props.houseMascot
    const [userAnswer, setUserAnswer] = useState("")
    const [isCorrect, setIsCorrect] = useState()
    const [guesses, setGuesses] = useState(0)
    const [failed, setFailed] = useState(false)

    useEffect(() => {
        props.setQuestionNumber(3)
    }, [])

    function check(e) {
        e.preventDefault()
        if (userAnswer.toLowerCase() === correctAnswer3) {
            setIsCorrect(true)
            props.setScore(3)
        } else {
            setGuesses(guesses + 1)
            setIsCorrect(false)
        }
    }

    function answer(e) {
        setUserAnswer(e.target.value)
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

    function hasFailed() {
        if (guesses === 2) {
            setFailed(true)
        }
    }

    return (
        <div className="">
            <div className=""></div>
            <p>What is your house's animal?</p>
            <input className={"input " + inputClass()} type="text" placeholder="Your Answer" onChange={answer.bind(this)} onKeyPress={e => e.key === "Enter" && guesses < 3 ? check(e) : ""} />
            {guesses < 3 && !isCorrect ? <button className="button is-black" onClick={(e) => { (check(e)) }}>Submit</button> : ""}
            {(!isCorrect && guesses === 0) ? "" : (isCorrect) ? <small className="is-success">Correct!</small> : <small className="is-danger">Incorrect, you have {3 - guesses} guesses left</small>}
            {/* {isCorrect ? <small className="is-success">Correct!</small> : <small className="is-danger">Incorrect, you have {3 - guesses} guesses left</small>} */}
            {failed ? <Link to='/characters'>
                <p className="">
                    Go Back And Research
            </p>
            </Link> : ""}
        </div >
    )
}

export default Question3