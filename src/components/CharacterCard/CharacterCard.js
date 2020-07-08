import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const CharacterCard = (props) => {

    const [character, setCharacter] = useState({})

    useEffect(() => {
        const id = props.match.params.id
        axios.get(`https://www.potterapi.com/v1/characters/${id}?key=%242a%2410%24.oxIEWrEQmPZNXSvbcFrMO3dLi38tMO7PKl0ufjK%2FESpJ4Y4tyWJW`)
            .then(res => setCharacter(res.data))
            .catch(err => console.log(err))
    }, [])

    function CapitlizeString(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return (
        <section className="section">
            <h1 className="title has-text-white has-text-centered">Your Character Card</h1>
            <div className="task-container columns is-multiline">
                <div className="card column is-half is-offset-one-quarter">
                    <div className="card-content">
                        <div className="tile is-ancestor">
                            <div className="tile is-vertical is-4">
                                <div className="tile">
                                    <div className="tile is-parent is-vertical">
                                        <article className="tile is-child notification is-light">
                                            <p className=""><strong>Role: </strong>{character.role ? CapitlizeString(character.role) : ""}</p>
                                        </article>
                                        <article className="tile is-child notification is-light">
                                            {/* capitalise the first letter */}
                                            <p className=" "><strong>Species: </strong>{character.species ? CapitlizeString(character.species) : ""}</p>
                                            <p className=""><strong>Blood Status: </strong>{character.bloodStatus ? CapitlizeString(character.bloodStatus) : ""}</p>
                                        </article>
                                    </div>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child notification is-light">
                                        <p className=""><strong>School: </strong>{character.school}</p>
                                        <p className=""><strong>Member of Minstry of Magic: </strong>{character.ministryOfMagic ? "Yes" : "No"}</p>
                                        <p className=""><strong>In the Order of the Pheonix: </strong>{character.orderOfThePhoenix ? "Yes" : "No"}</p>
                                        <p className=""><strong>In Dumbledores Army: </strong>{character.dumbledoresArmy ? "Yes" : "No"}</p>
                                        <p className=""><strong>Death Eater: </strong>{character.deathEater ? "Yes" : "No"}</p>
                                    </article>
                                </div>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child notification is-light">
                                    <div className="content">
                                        <p className="">Name: <strong className="title">{character.name}</strong></p>
                                        {/* if statement to return no known aliass */}
                                        <p className="">Alias: {character.alias ? character.alias : "No known aliases"}</p>
                                        <div className="content">
                                            <div className="tile is-parent">
                                                <article className="tile is-child notification is-light">
                                                    <figure className="image is-4by3">
                                                        <img src="\images\1024px-No_image_available.svg.png" />
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
            <Link to="/characters">
                <p className=" has-text-white has-text-centered">
                    Back
            </p>
            </Link>
        </section>

    )
}

export default CharacterCard