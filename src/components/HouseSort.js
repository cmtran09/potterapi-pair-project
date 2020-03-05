import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



const HouseSort = (props) => {

    const [house, setHouse] = useState(undefined)

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

    console.log("1             ", house)
    return (
        <section className="hero sortinghat is-fullheight" >
            <div className="">
                {getBanner()}
            </div>
            <div className="hero-body">
                <button onClick={() => {
                    console.log('hi')
                    getHouse()
                }}>get house api</button>
                <button onClick={() => {
                    console.log(house)
                    console.log(typeof house)
                }}>get house state</button>
                <div className="container">
                    <div className="image is-2by1">
                        <p className="title has-text-white has-text-centered title is-2  has-text-weight-bold" >Home</p>
                        <p className="subtitle has-text-centered "></p>
                        <Link to="/house" >
                            <div className="box has-text-centered button is-black center " onClick={() => {
                                if (this.state.house === "Syltherin") {
                                    console.log("is Syltherin")
                                } else if (this.state.house === "Ravenclaw") {
                                    console.log("is Ravenclaw")
                                } else if (this.state.house === "Griffindor") {
                                    console.log("is Griffindor")
                                } else {
                                    console.log("is Hufflepuff")
                                }
                            }}>
                                Sorting Hat
                            </div>
                        </Link>
                        <div className="section">
                            <Link className="column" to="/Characters">
                                <div className="box has-text-centered button is-black center ">Characters</div>
                            </Link>
                            <Link className="column" to="/spells">
                                <div className="box has-text-centered button is-black center ">Spells</div>
                            </Link>
                        </div>
                        <div className="columns">

                        </div>

                    </div>
                </div>
            </div>
        </section >
    )
}

export default HouseSort

// class HouseSort extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             house: ''
//         }
//     }

//     componentDidMount() {
//         axios.get('https://www.potterapi.com/v1/sortingHat')
//             .then(res => this.setState({
//                 house: res.data
//             }))
//     }




// console.log(this.state.house)


