import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Question1 = (props) => {

    const [characterIsOoP, setCharacterIsOoP] = useState(null)
    const [characterName, setCharacterName] = useState(null)
    const [id, setId] = useState()
    const [userAnswer, setUserAnswer] = useState()

    // const id1 = props.randomMember1

    // console.log(id1)

    function getId() {
        setId(props.randomMember1)
    }



    useEffect(() => {
        getId()
        axios.get(`https://www.potterapi.com/v1/characters/5a0fa7dcae5bc100213c2338?key=%242a%2410%24.oxIEWrEQmPZNXSvbcFrMO3dLi38tMO7PKl0ufjK%2FESpJ4Y4tyWJW`)
            .then(res => {
                // console.log("ID from props", id1)
                setCharacterIsOoP(res.data.orderOfThePhoenix)
                setCharacterName(res.data.name)
                // console.log('chracrter', character)
            })
            .catch(err => console.log(err))
    }, [])


    console.log(props.randomMember1)


    return (
        <div className="">
            <p>=======================================</p>
            <p>{`Is ${characterName} in the Order of the Phoenix`}</p>
            <button onClick={e => console.log("hello from question 1 component", props.randomMember1)}>click</button>
            <button onClick={e => console.log("hello from question 1 component", id)}>clickidididid</button>
            <button onClick={e => console.log("hello from question 1 component", characterName)}>click2</button>
            <button onClick={e => console.log("hello from question 1 component", characterIsOoP)}>click3</button>

            <p>randomMember1 prop : {props.randomMember1}</p>
            < div className="">
                <button className="button">Yes</button>
                <button className="button">No</button>
            </div>
        </div>
    )
}

export default Question1