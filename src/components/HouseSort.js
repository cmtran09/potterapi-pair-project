import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



const HouseSort = (props) => {

    const [house, setHouse] = useState(undefined)
    const [clicks, setClicks] = useState(0)

    function getHouse() {
        axios.get('https://www.potterapi.com/v1/sortingHat')
            .then(res => setHouse(res.data))
        console.log(house)
    }

    function getBanner() {
        if (typeof house != 'undefined') {
            if (house === "Gryffindor") {
                return (<img className="fade-in" src="../images/Grif.png" alt="" />)
            }
            if (house === "Slytherin") {
                return (<img className="fade-in" src="../images/Slyt.png" alt="" />)
            }
            if (house === "Hufflepuff") {
                return (<img className="fade-in" src="../images/Huff.png" alt="" />)
            }
            if (house === "Ravenclaw") {
                return (<img className="fade-in" src="../images/Rave.png" alt="" />)
            }
            return ("")
        }
    }

    function getHouseBorder() {
        if (typeof house != 'undefined') {
            if (house === "Gryffindor") {
                return 'Gryf'
            }
            if (house === "Slytherin") {
                return 'Slyt'
            }
            if (house === "Hufflepuff") {
                return 'Huff'
            }
            if (house === "Ravenclaw") {
                return 'Rave'
            }
            return ''
        }
    }

    return (
        <section className="hero sortinghat is-fullheight">
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

            <div className="hero-body">
                <div className="container">
                    <h1 className="title has-text-white">Home</h1>
                    <h2 className="subtitle has-text-white">
                        Welcome, please navigate using the following
                    </h2>
                    <div className="columns">
                        <div className="column">
                            <div className="box has-text-centered">
                                <p>Sorting Hat</p>
                                {!house ? <p className="fade-in">Assign yourself to a house</p> : ''}
                                {clicks < 2 ?
                                    <figure className="image container is-128x128" onClick={() => {
                                        console.log('hi')
                                        console.log(clicks)
                                        setClicks(clicks + 1)
                                        getHouse()
                                    }}>
                                        {getBanner()}
                                        {house ? <p className="fade-in">You are in house, {house}!</p> : ''}
                                    </figure>
                                    :
                                    <figure className="image container is-128x128">
                                        {getBanner()}
                                        <p className="fade-in">You are in house, {house}! No More Changing
                                        !</p>
                                    </figure>}
                            </div>
                        </div>
                        <div className="column">
                            <Link to="/Characters">
                                <div className="box has-text-centered">
                                    <p>Characters</p>
                                    <figure className="image container is-64x64">
                                        <img src="../images/network.png" alt="Image" />
                                    </figure>
                                </div>
                            </Link>
                        </div>
                        <div className="column">
                            <Link to="/spells">
                                <div className="box has-text-centered">
                                    <p>Spells</p>
                                    <figure className="image container is-64x64">
                                        <img src="../images/magic.png" alt="Image" />
                                    </figure>
                                </div>
                            </Link>
                        </div>
                        {house ? (
                            <Link to={{
                                pathname: "/quiz",
                                state: { userHouse: house }
                            }}>
                                <div className="column fade-in">
                                    <div className="box has-text-centered">
                                        <p>Your House Quiz</p>
                                        <figure className="image container is-64x64">
                                            <img src="../images/quiz.png" alt="Image" />
                                        </figure>
                                    </div>
                                </div>
                            </Link>
                        ) : ''
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HouseSort



