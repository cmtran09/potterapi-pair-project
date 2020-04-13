import React from "react"
import { Link } from "react-router-dom"

const Welcome = () => {
    return (
        <section className="hero welcome is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <p className="title has-text-centered title is-2 has-text-white has-text-weight-bold">Potter World</p>
                    <p className="subtitle has-text-centered has-text-white">A place for Potterheads</p>
                    <Link to="/house">
                        <div className="has-text-centered">
                            <button className="button is-black center">
                                Enter
                        </button>
                        </div>

                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Welcome 