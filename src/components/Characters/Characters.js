import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const Characters = () => {

    const [characters, setCharacters] = useState([])
    const [filter, setFilter] = useState("")
    const [bloodFilter, setBloodFilter] = useState("All")
    const [houseFilter, setHouseFilter] = useState("All")
    const [deathEaterFilter, setDeathEaterFilter] = useState("All")
    const [ministryFilter, setMinistryFilter] = useState("All")
    const [dumbFilter, setDumbFilter] = useState("All")

    useEffect(() => {
        axios.get("https://www.potterapi.com/v1/characters/?key=%242a%2410%24.oxIEWrEQmPZNXSvbcFrMO3dLi38tMO7PKl0ufjK%2FESpJ4Y4tyWJW")
            .then(res => setCharacters(res.data))
            .catch(err => console.log(err))
    }, [])

    function doBloodFilter(e) {
        setBloodFilter(e.target.value)
    }

    function doHouseFilter(e) {
        setHouseFilter(e.target.value)
    }

    function doDeathEaterFilter(e) {
        setDeathEaterFilter(e.target.value)
    }

    function doMinistryFilter(e) {
        setMinistryFilter(e.target.value)
    }

    function doDumbFilter(e) {
        setDumbFilter(e.target.value)
    }

    function doFilter(e) {
        setFilter(e.target.value)
    }

    function filtering(e) {
        setFilter(e.target.value);
    }

    function isEmpty(arr) {
        if (arr.length === 0) {
            return (
                <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
                    <div className="btn card has-background-black">
                        <div className="card-content">
                            <p className="has-text-white">No Characters Found</p>
                        </div>
                    </div>
                </div>
            )
        } else return arr
    }

    return (
        <div className="section background">
            <h1 className="title has-text-white has-text-centered">Characters Page</h1>
            <div className="container">
                <form className="form" >
                    <div className="columns">
                        <div className="column">
                            <label className="label has-text-white">Name Search</label>
                            <input
                                type="text"
                                // value={query}
                                id="search-input"
                                className="input"
                                placeholder="Search..."
                                name="query"
                                onChange={filtering.bind(this)}
                            />
                        </div>
                        <div className="field column">
                            <label className="label has-text-white">Blood Status</label>
                            <select onChange={(e) => doBloodFilter(e)}>
                                <option value="All">All</option>
                                <option value="pure-blood">Pure-blood</option>
                                <option value="half-blood">Half-blood</option>
                                <option value="muggle">Muggle</option>
                                <option value="muggle-born">Muggle-born</option>
                                <option value="squib">Squib</option>
                                <option value="half-giant">Half-giant</option>
                                <option value="unknown">Unknown</option>
                            </select>
                        </div>
                        <div className="field column">
                            <label className="label has-text-white">House</label>
                            <select onChange={(e) => doHouseFilter(e)}>
                                <option value="All">All</option>
                                <option value="Gryffindor">Gryffindor</option>
                                <option value="Ravenclaw">Ravenclaw</option>
                                <option value="Slytherin">Slytherin</option>
                                <option value="Hufflepuff">Hufflepuff</option>
                            </select>
                        </div>
                        <div className="field column">
                            <label className="label has-text-white">Memeber of DeathEaters</label>
                            <select onChange={(e) => doDeathEaterFilter(e)}>
                                <option value="All">All</option>
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </select>
                        </div>
                        <div className="field column">
                            <label className="label has-text-white">Memeber of Magic</label>
                            <select onChange={(e) => doMinistryFilter(e)}>
                                <option value="All">All</option>
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </select>
                        </div>
                        <div className="field column">
                            <label className="label has-text-white">Member of Dumbledores Army</label>
                            <select onChange={(e) => doDumbFilter(e)}>
                                <option value="All">All</option>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                        </div>
                    </div>
                </form>
                <div className="container">
                    <div className="columns is-mobile is-multiline">
                        {characters
                            .filter(elem => {
                                if (bloodFilter !== "All") {
                                    return elem.bloodStatus === bloodFilter
                                } else return elem
                            })
                            .filter(elem => {
                                if (houseFilter !== "All") {
                                    return elem.house === houseFilter
                                } else return elem
                            })
                            .filter(elem => {
                                if (deathEaterFilter !== "All") {
                                    return elem.deathEater.toString() === deathEaterFilter.toString()
                                } else return elem
                            })
                            .filter(elem => {
                                if (ministryFilter !== "All") {
                                    return elem.ministryOfMagic.toString() === ministryFilter.toString()
                                } else return elem
                            })
                            .filter(elem => {
                                if (dumbFilter !== "All") {
                                    return elem.dumbledoresArmy.toString() === dumbFilter.toString()
                                } else return elem
                            })
                            .filter(elem => {
                                return elem.name.toLowerCase().includes(filter.toLowerCase())
                            })
                            .map((characters, i) => {
                                return (
                                    <div key={i} className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
                                        <Link className="char-and-spells" to={`/characters/${characters._id}`}>
                                            <div className="btn card has-background-black">
                                                <div className="card-content">
                                                    <p className="has-text-white">{characters.name}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Characters