import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Question1 from "./Question1"
// import Question2 from "./Question2"
import Question3 from "./Question3"
import Question4 from "./Question4"
import Question5 from "./Question5"

const Questions = (props) => {

    // useEffect(() => {
    //     axios.get(`https://www.potterapi.com/v1/houses/?key=$2a$10$.oxIEWrEQmPZNXSvbcFrMO3dLi38tMO7PKl0ufjK/ESpJ4Y4tyWJW`)
    //         .then(res => setHouseData(res.data))
    //         .catch(err => console.log(err))
    // }, [])


    console.log("props.randomMemberID", props.randomMemberID)
    return (
        <div className="">
            <button onClick={e => console.log("hello from question component", props.randomMemberID)}>click</button>
            <p>Question component: helloe world</p>
            {props.randomMemberID.map((member, elem) => {
                return (
                    <p key={elem}>{member}</p>
                )
            })}
            <p>{props.houseMascot}</p>
            <p>{props.headOfHouse}</p>
            {props.houseValues.map((value, elem) => {
                return (
                    <p key={elem}>{value}</p>
                )
            })}
            {/* <p>{props.randomMemberID}</p> */}
            {/* {randomMemberID ? <p>{randomMemberID}</p> : ''} */}
            {props.randomMemberID ? <Question1 randomMember1={props.randomMemberID[0]} /> : ""}
            {/* <Question1 randomMember1={props.randomMemberID[0]} /> */}
            {/* <Question2 /> */}
            <Question3 houseMascot={props.houseMascot} />
            <Question4 headOfHouse={props.headOfHouse} />
            <Question5 houseValues={props.houseValues} />
        </div>
    )
}

export default Questions