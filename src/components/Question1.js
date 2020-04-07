import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
                    // console.log('chracrter', character)
                })
                .catch(err => console.log(err))
        }
    })

    console.log(props.randomMember1)

    function checkAnswer() {
        if (characterIsOoP !== userAnswer) {
            setQOneCorrect(true)
            return
        } else setQOneCorrect(false)
    }
    // disabled={answered && true}
    return (
        <div className="">
            <p>=======================================</p>
            <p>{`Is ${characterName} in the Order of the Phoenix`}</p>
            <button onClick={e => console.log("hello from question 1 component id from props", props.randomMember1)}>click</button>
            <button onClick={e => console.log("hello from question 1 component id state", id)}>clickidididid</button>
            <button onClick={e => console.log("hello from question 1 component charactername", characterName)}>click2</button>
            <button onClick={e => console.log("hello from question 1 component is order?", characterIsOoP)}>corret answer</button>
            <button onClick={e => console.log("userAnswer", userAnswer)}>userAnswer</button>
            <button onClick={e => console.log("answered", answered)}>answered</button>
            <button onClick={e => console.log("qOneCorrect", qOneCorrect)}>qOneCorrect</button>

            <p>randomMember1 prop : {props.randomMember1}</p>
            < div className="">
                <button className="button" onClick={e => {
                    setUserAnswer(true)
                    setAnswered(true)
                    checkAnswer()
                }}>Yes</button>
                <button className="button" onClick={e => {
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