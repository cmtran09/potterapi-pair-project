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
                return (<img src="../images/Grif.png" alt="" />)
            }
            if (house === "Slytherin") {
                return (<img src="../images/Slyt.png" alt="" />)
            }
            if (house === "Hufflepuff") {
                return (<img src="../images/Huff.png" alt="" />)
            }
            if (house === "Ravenclaw") {
                return (<img src="../images/Rave.png" alt="" />)
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
        <section className="hero sortinghat is-fullheight" >
            <div className="left">
                <div className="bar">
                    <div className={`innerBar innerBar${getHouseBorder()}`}></div>
                    <div className={`innerBar innerBar${getHouseBorder()}2`}></div>
                    {/* <div className=""></div> */}
                </div>
            </div>
            <div className="right">
                <div className="bar barRight">
                    <div className={`innerBar innerBar${getHouseBorder()}`}></div>
                    <div className={`innerBar innerBar${getHouseBorder()}2`}></div>
                </div>
            </div>
            <div className="">
                {getBanner()}
            </div>
            <div className="hero-body">
                <div className="container">
                    <p className="homeText title has-text-white has-text-centered title is-2  has-text-weight-bold">Home</p>
                    <div className="has-text-centered">
                        <Link to="/house" >
                            {clicks < 5 ?
                                <button className="button button is-black center" onClick={() => {
                                    console.log('hi')
                                    console.log(clicks)
                                    setClicks(clicks + 1)
                                    getHouse()
                                }}>
                                    Sorting Hat
                            </button> :
                                <button button className="button button is-black center" onClick={() => {
                                    console.log('hi')
                                }}>TOOOOOOO MANY CLICKS</button>}
                        </Link>
                    </div>
                    <div className="has-text-centered">
                        <Link to="/Characters">
                            <button className="button is-black center ">Characters</button>
                        </Link>
                        <Link to="/spells">
                            <button className="button is-black center ">Spells</button>
                        </Link>
                    </div>
                    <div className="hello">hello</div>
                </div>
            </div>
        </section >
    )
}

export default HouseSort



