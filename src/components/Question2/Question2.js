import React, { useState, useEffect } from "react"
import axios from "axios"

const Question2 = (props) => {

    const [characterIsDE, setCharacterIsDE] = useState(null)
    const [characterName, setCharacterName] = useState(null)
    const [id, setId] = useState(null)
    const [userAnswer, setUserAnswer] = useState(null)
    const [answered, setAnswered] = useState(null)
    const [qTwoCorrect, setQTwoCorrect] = useState()

    useEffect(() => {
        if (props.randomMember2) {
            setId(props.randomMember2)
            axios.get(`https://www.potterapi.com/v1/characters/${id}?key=%242a%2410%24.oxIEWrEQmPZNXSvbcFrMO3dLi38tMO7PKl0ufjK%2FESpJ4Y4tyWJW`)
                .then(res => {
                    // console.log("ID from props", id1)
                    setCharacterIsDE(res.data.deathEater)
                    setCharacterName(res.data.name)
                    props.setQuestionNumber(2)
                    // console.log("chracrter", character)
                })
                .catch(err => console.log(err))
        }
    })

    function checkAnswer() {
        if (characterIsDE !== userAnswer) {
            setQTwoCorrect(true)
            props.setScore(2)
            return
        } else setQTwoCorrect(false)
    }
    // disabled={answered && true}
    return (
        <div className="">
            <p>{`Is ${characterName} in the Order of the Phoenix`}</p>
            < div className="">
                <button disabled={answered && true} className="button" onClick={e => {
                    setUserAnswer(true)
                    setAnswered(true)
                    checkAnswer()
                }}>Yes</button>
                <button disabled={answered && true} className="button" onClick={e => {
                    setUserAnswer(false)
                    setAnswered(true)
                    checkAnswer()
                }}>No</button>
                {(qTwoCorrect === true) && <p>correct</p>}
                {(qTwoCorrect === false) && <p>incorrect</p>}
            </div>
        </div>
    )
}

export default Question2