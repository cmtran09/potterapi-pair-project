import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const Spells = (props) => {

    const [spells, setSpells] = useState([])
    const [filter, setFilter] = useState('')
    const [filterType, setFilterType] = useState('All')

    async function getSpells() {
        let response = await axios.get('https://www.potterapi.com/v1/spells?key=%242a%2410%24.oxIEWrEQmPZNXSvbcFrMO3dLi38tMO7PKl0ufjK%2FESpJ4Y4tyWJW')
        let spellsData = await response.data
        setSpells(spellsData)
        // console.log(spells)
    }

    useEffect(() => {
        getSpells()
    }, [])


    function filtering(e) {
        setFilter(e.target.value);
    }

    function typeFilter(e) {
        e.preventDefault()
        setFilterType(e.target.value)
        console.log("TESSSSSTTTTYYY", filterType)
    }

    return (
        <section>
            <div className="section background">
                <h1 data-testid="heading" className="title has-text-white has-text-centered">Spells Page</h1>
                <div className="container">
                    <div className="">
                        <form className="form">
                            <div className="columns">
                                <div className="column">
                                    <label className="label has-text-white">Spell Search</label>
                                    <input
                                        className="input"
                                        type="text"
                                        id='search-input'
                                        placeholder='Search...'
                                        name='query'
                                        onChange={filtering.bind(this)}
                                    />
                                </div>
                                <div className="field column">
                                    <label className="label has-text-white">Type of Spell</label>
                                    <select className="select" onChange={(e) => typeFilter(e)}>
                                        <option value="All">All</option>
                                        <option value="Spell">Spells</option>
                                        <option value="Hex">Hex</option>
                                        <option value="Charm">Charms</option>
                                        <option value="Enchantment">Enchantments</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="columns is-mobile is-multiline">
                        {spells
                            .filter(elem => {
                                if (filterType === "All") {
                                    return elem
                                } else return elem.type === filterType
                            })
                            .filter(elem => {
                                return elem.spell.toLowerCase().includes(filter.toLowerCase())
                            })
                            .map((spell, i) => {
                                return (
                                    <div key={i} className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
                                        <Link to={`/spells/${spell._id}`}>
                                            <div className="btn card has-background-black">
                                                <div className="card-content">
                                                    <p className="has-text-white">{spell.spell}</p>
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
        </section>
    )
}

export default Spells