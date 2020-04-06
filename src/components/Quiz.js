import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Questions from "./Questions"


const Quiz = (props) => {

    const userHouse = props.location.state.userHouse
    const [houseData, setHouseData] = useState([])
    const [houseMembers, setHouseMembers] = useState([])
    const [houseMascot, setHouseMascot] = useState()
    const [headOfHouse, setHeadOfHouse] = useState()
    const [houseValues, setHouseValues] = useState([])
    const [score, setScore] = useState(0)
    const [questionNumber, setQuestionNumber] = useState(1)
    let houseIndex

    function getHouseId() {
        if (userHouse === "Gryffindor") {
            houseIndex = 0
        }
        if (userHouse === "Ravenclaw") {
            houseIndex = 1
        }
        if (userHouse === "Slytherin") {
            houseIndex = 2
        }
        if (userHouse === "Hufflepuff") {
            houseIndex = 3
        }
    }

    getHouseId()

    useEffect(() => {
        axios.get(`https://www.potterapi.com/v1/houses/?key=$2a$10$.oxIEWrEQmPZNXSvbcFrMO3dLi38tMO7PKl0ufjK/ESpJ4Y4tyWJW`)
            .then(res => {
                setHouseData(res.data)
                setHouseMembers(res.data[houseIndex].members)
                setHouseMascot(res.data[houseIndex].mascot)
                setHeadOfHouse(res.data[houseIndex].headOfHouse)
                setHouseValues(res.data[houseIndex].values)
                // console.log()(res.data[houseIndex].members)
            })
            .catch(err => console.log(err))
    }, [])

    // const [houseCharacterData, sethouseCharacterData] = useState([])



    console.log('asdasda11111111111111111111', typeof (houseIndex))
    console.log('asdasda11111111111111111111 houseMembers HOOOOOK', houseMembers)

    console.log("member data house questions", houseMascot)
    console.log("member data house questions", headOfHouse)
    console.log("member data house questions", houseValues)

    console.log('asdasda type of ', typeof (houseIndex))
    console.log('asdasda', houseIndex)

    // let apiKey = '$2a$10$.oxIEWrEQmPZNXSvbcFrMO3dLi38tMO7PKl0ufjK/ESpJ4Y4tyWJW'

    // https://www.potterapi.com/v1/houses/?key=$2a$10$.oxIEWrEQmPZNXSvbcFrMO3dLi38tMO7PKl0ufjK/ESpJ4Y4tyWJW


    // let testHouse = houseData[houseIndex]

    // console.log('TESTTTTTTTT HOUSEEEEEEEEEEEEEEEE', testHouse.founder)

    // console.log('the log 1', typeof (houseData))
    // console.log('the log 1 is array', Array.isArray(houseData))
    // console.log('the log 2', userHouse)
    // console.log('the log 3', houseData[3])
    // console.log('the log 4', houseData.length)


    // const houseMembers = houseData
    // const houseMembers = houseData.members

    console.log("random member before the function", randomMembers)
    console.log("arrray before the function", houseMembers)


    // let houseMembers = houseData[houseIndex]
    let randomMembers

    // A function that picks randomly picks 2 elements from 
    function getRandomMembers() {
        const temp = [...houseMembers]
        let randomIndex = Math.floor(Math.random() * temp.length)
        randomMembers = temp.splice([randomIndex], 1)
        randomMembers.push(temp.splice([randomIndex], 1)[0])
        return randomMembers
    }

    // getRandomMember()
    // console.log("getRandomMember", getRandomMember())


    console.log("random member after the function", randomMembers)
    console.log("random member after the function type of", typeof (randomMembers))
    console.log("arrray after the function", houseMembers)

    // getRandomMember()
    // console.log("HELLO", randomMember)
    console.log("HELLO", houseMembers)

    // console.log("type", typeof (houseMembers))
    console.log('HOUSE DATA', houseData)

    console.log("heasiodaj", props.location.state)
    console.log("user", userHouse)
    console.log(process.env.API_Key)

    // console.log("test", houseMembers)
    // console.log(config)
    return (
        <section className="section">
            <h1 className="title has-text-white has-text-centered">{userHouse} House Quiz</h1>
            <div className="task-container columns is-multiline">
                <div className="card column is-half is-offset-one-quarter">
                    <div className="card-content">
                        <div className="tile is-ancestor">
                            <div className="tile is-vertical is-4">
                                <div className="tile">
                                    <div className="tile is-parent is-vertical">
                                        <article className="tile is-child notification is-light">
                                            <p className=""><strong>Question {questionNumber}</strong></p>
                                        </article>
                                        <article className="tile is-child notification is-light">
                                            <p className=" "><strong>Score: </strong>{score}</p>
                                        </article>
                                    </div>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child notification is-light">
                                        {/* <p className=""><strong>School: </strong>{character.school}</p>
                                        <p className=""><strong>Member of Minstry of Magic: </strong>{character.ministryOfMagic ? "Yes" : "No"}</p>
                                    </div> */}
                                    </article>
                                </div>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child notification is-light">
                                    <div className="content">
                                        <Questions randomMemberID={getRandomMembers()} score={score} questionNumber={questionNumber} houseMascot={houseMascot} headOfHouse={headOfHouse} houseValues={houseValues} />
                                        <p className="">Name: <strong className="title">asdasdfasdfa</strong></p>
                                        <div className="content">
                                            <div className="tile is-parent">
                                                <article className="tile is-child notification is-light">
                                                    <figure className="image is-4by3">
                                                        <img src="https://bulma.io/images/placeholders/640x480.png" />
                                                    </figure>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link to='/house'>
                <p className=" has-text-white has-text-centered">
                    Back
        </p>
            </Link>
        </section>
    )
}


export default Quiz