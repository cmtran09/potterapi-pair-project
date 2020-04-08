import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Question1 from "./Question1"
import Question2 from "./Question2"
import Question3 from "./Question3"
import Question4 from "./Question4"
import Question5 from "./Question5"

const Questions = (props) => {

    return (
        <div className="">
            {props.score === 0 && <Question1 setQuestionNumber={props.setQuestionNumber} setScore={props.setScore} randomMember1={props.randomMemberID[0]} />}
            {props.score === 1 && <Question2 setQuestionNumber={props.setQuestionNumber} setScore={props.setScore} randomMember2={props.randomMemberID[1]} />}
            {props.score === 2 && <Question3 setQuestionNumber={props.setQuestionNumber} setScore={props.setScore} houseMascot={props.houseMascot} />}
            {props.score === 3 && <Question4 setQuestionNumber={props.setQuestionNumber} setScore={props.setScore} headOfHouse={props.headOfHouse} />}
            {props.score === 4 && <Question5 setQuestionNumber={props.setQuestionNumber} setScore={props.setScore} houseValues={props.houseValues} />}
        </div>
    )
}

export default Questions