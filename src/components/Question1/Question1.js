import React, { useState, useEffect } from "react"
import axios from "axios"

const Question1 = (props) => {

    const [characterIsOoP, setCharacterIsOoP] = useState(null)
    const [characterName, setCharacterName] = useState(null)
    const [id, setId] = useState(null)
    const [userAnswer, setUserAnswer] = useState(null)
    const [answered, setAnswered] = useState(null)
    const [qOneCorrect, setQOneCorrect] = useState()

    useEffect(() => {
        if (props.randomMember1) {
            setId(props.randomMember1)
            axios.get(`https://www.potterapi.com/v1/characters/${id}?key=%242a%2410%24.oxIEWrEQmPZNXSvbcFrMO3dLi38tMO7PKl0ufjK%2FESpJ4Y4tyWJW`)
                .then(res => {
                    // console.log("ID from props", id1)
                    setCharacterIsOoP(res.data.orderOfThePhoenix)
                    setCharacterName(res.data.name)
                    props.setQuestionNumber(1)
                    // console.log("chracrter", character)
                })
                .catch(err => console.log(err))
        }
    })

    function checkAnswer() {
        if (characterIsOoP !== userAnswer) {
            setQOneCorrect(true)
            props.setScore(1)
            return
        } else setQOneCorrect(false)
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
                {(qOneCorrect === true) && <p>correct</p>}
                {(qOneCorrect === false) && <p>incorrect</p>}
            </div>
        </div>
    )
}

export default Question1