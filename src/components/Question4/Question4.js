import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Question4 = (props) => {

    const correctAnswer4 = props.headOfHouse
    const [userAnswer, setUserAnswer] = useState("")
    const [isCorrect, setIsCorrect] = useState()
    const [guesses, setGuesses] = useState(0)
    const [failed, setFailed] = useState(false)

    useEffect(() => {
        props.setQuestionNumber(4)
    }, [])

    function check(e) {
        e.preventDefault()
        if (userAnswer.toLowerCase() === correctAnswer4.toLowerCase()) {
            setIsCorrect(true)
            props.setScore(4)
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

    return (
        <div className="">
            <p>Who is the head of your house?</p>
            <input className={"input " + inputClass()} type="text" placeholder="Your Answer" onChange={answer.bind(this)} onKeyPress={e => e.key === "Enter" && guesses < 3 ? check(e) : ""} />
            {guesses < 3 && !isCorrect ? <button className="button is-black" onClick={(e) => { (check(e)) }}>Submit</button> : ""}
            {(!isCorrect && guesses === 0) ? "" : (isCorrect) ? <small className="is-success">Correct!</small> : <small className="is-danger">Incorrect, you have {3 - guesses} guesses left</small>}
            {/* {isCorrect ? <small className="is-success">Correct!</small> : <small className="is-danger">Incorrect, you have {3 - guesses} guesses left</small>} */}
            {failed ? <Link to="/characters">
                <p className="">
                    Go Back And Research
            </p>
            </Link> : ""}
        </div >
    )
}

export default Question4