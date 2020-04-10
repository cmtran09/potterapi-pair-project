import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Questions from "../Questions/Questions"


const Quiz = (props) => {

    const userHouse = props.location.state.userHouse
    const [houseData, setHouseData] = useState([])
    const [houseMembers, setHouseMembers] = useState([])
    const [houseMascot, setHouseMascot] = useState()
    const [headOfHouse, setHeadOfHouse] = useState()
    const [houseValues, setHouseValues] = useState([])
    const [score, setScore] = useState(0)
    const [questionNumber, setQuestionNumber] = useState(0)
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

    let randomMembers

    // A function that picks randomly picks 2 elements from 
    function getRandomMembers() {
        const temp = [...houseMembers]
        let randomIndex = Math.floor(Math.random() * temp.length)
        randomMembers = temp.splice([randomIndex], 1)
        randomMembers.push(temp.splice([randomIndex], 1)[0])
        return randomMembers
    }
    // console.log(config)

    function getHouseBorder() {
        if (typeof userHouse != 'undefined') {
            if (userHouse === "Gryffindor") {
                return 'Gryf'
            }
            if (userHouse === "Slytherin") {
                return 'Slyt'
            }
            if (userHouse === "Hufflepuff") {
                return 'Huff'
            }
            if (userHouse === "Ravenclaw") {
                return 'Rave'
            }
            return ''
        }
    }

    return (
        <section className="section">
            <div className="left">
                <div className="bar">
                    <div className={`innerBar innerBar${getHouseBorder()}`}></div>
                    <div className={`innerBar innerBar${getHouseBorder()}2`}></div>
                </div>
            </div>
            <div className="right">
                <div className="bar barRight">
                    <div className={`innerBar innerBar${getHouseBorder()}`}></div>
                    <div className={`innerBar innerBar${getHouseBorder()}2`}></div>
                </div>
            </div>
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
                                        <Questions
                                            randomMemberID={getRandomMembers()}
                                            score={score}
                                            setScore={setScore}
                                            questionNumber={questionNumber}
                                            setQuestionNumber={setQuestionNumber}
                                            houseMascot={houseMascot}
                                            headOfHouse={headOfHouse}
                                            houseValues={houseValues}
                                        />
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