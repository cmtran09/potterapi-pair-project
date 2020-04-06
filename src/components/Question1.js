import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Question1 = (props) => {

    const [character, setCharacter] = useState({})
    const id1 = props.randomMemberID

    console.log(id1)

    useEffect(() => {
        axios.get(`https://www.potterapi.com/v1/characters/${id1}?key=%242a%2410%24.oxIEWrEQmPZNXSvbcFrMO3dLi38tMO7PKl0ufjK%2FESpJ4Y4tyWJW`)
            .then(res => {
                console.log("ID from props", id1)
                setCharacter(res.data)
                console.log('chracrter', character)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="">
            <p>Question component111111111111111: helloe world</p>
            <p>randomMember1 prop :{id1}</p>
        </div>
    )
}

export default Question1