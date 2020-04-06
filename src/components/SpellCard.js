import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const SpellCard = (props) => {

    const [spell, setSpell] = useState([[]])

    useEffect(() => {
        const id = props.match.params.id
        axios.get(`https://www.potterapi.com/v1/spells/${id}?key=%242a%2410%24.oxIEWrEQmPZNXSvbcFrMO3dLi38tMO7PKl0ufjK%2FESpJ4Y4tyWJW&id=5b74ebd5fb6fc0739646754c`)
            .then(res => setSpell(res.data))
            .catch(err => console.log(err))
    }, [])

    function CapitlizeString() {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    console.log("spell", spell)
    console.log("spell detail", spell[0].spell)
    return (
        <section className="section">
            <h1 className="title has-text-white has-text-centered">Your Spell Card</h1>
            <div className="task-container columns is-multiline">
                <div className="card column is-half is-offset-one-quarter">
                    <div className="card-content">
                        <h1>Name: {spell[0].spell}</h1>
                        <p>Type: {spell[0].type}</p>
                        <h1>Effect: {spell[0].effect}</h1>
                    </div>
                </div>
            </div>
            <Link to='/spells'>
                <p className=" has-text-white has-text-centered">
                    Back
                </p>
            </Link>
        </section>
    )
}
{/* <div class="task-container columns is-multiline">
        <div class="card column is-half is-offset-one-quarter">
            // statements
        </div>
    </div> */}
export default SpellCard