import React from 'react'
import axios from 'axios'

class CharacterCard extends React.Component {
    constructor() {
        super()
        this.state = {
            character: {}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`https://www.potterapi.com/v1/characters/${id}?key=%242a%2410%24.oxIEWrEQmPZNXSvbcFrMO3dLi38tMO7PKl0ufjK%2FESpJ4Y4tyWJW`)
        // axios.get(`https://www.potterapi.com/v1/characters/5a0fa54aae5bc100213c232f?key=%242a%2410%24.oxIEWrEQmPZNXSvbcFrMO3dLi38tMO7PKl0ufjK%2FESpJ4Y4tyWJW`)

            .then(res => this.setState({ character: res.data }))
            .catch(err => console.log(err))
    }

    CapitlizeString() {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

render() {
    console.log("char", this.state.character)
    return (
        <section className="hero is-fullheight">
            <div className="tile is-ancestor">
                <div className="tile is-vertical is-4">
                    <div className="tile">
                        <div className="tile is-parent is-vertical">
                            <article className="tile is-child notification is-primary">
                                <p className="title">Role: {this.state.character.role}</p>
                            </article>
                            <article className="tile is-child notification is-warning">
                                {/* capitalise the first letter */}
                                <p className="title ">Species: {(this.state.character.species)}</p>
                                <p className="title">Blood Status: {this.state.character.bloodStatus}</p>
                                <p className="subtitle">Bottom tile</p>
                            </article>
                        </div>
                        {/* <div className="tile is-parent">
                                <article className="tile is-child notification is-info">
                                    <p className="title">Middle tile</p>
                                    <p className="subtitle">With an image</p>
                                    <figure className="image is-4by3">
                                        <img src="https://bulma.io/images/placeholders/640x480.png" />
                                    </figure>
                                </article>
                            </div> */}
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child notification is-danger">
                            {/* <p className="title">Wide tile</p> */}
                            <p className="subtitle">School: {this.state.character.school}</p>
                            <p className="subtitle">Member of Minstry of Magic: {this.state.character.ministryOfMagic ? "Yes" : "No"}</p>
                            <p className="subtitle">In the Order of the Pheonix: {this.state.character.orderOfThePhoenix ? "Yes" : "No"}</p>
                            <p className="subtitle">In Dumbledores Army: {this.state.character.dumbledoresArmy ? "Yes" : "No"}</p>
                            <p className="subtitle">Death Eater: {this.state.character.deathEater ? "Yes" : "No"}</p>
                            <div className="content">
                                {/* <!-- Content --> */}
                            </div>
                        </article>
                    </div>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child notification is-success">
                        <div className="content">
                            <p className="title">Name: {this.state.character.name}</p>
                            {/* if statement to return no known aliass */}
                            <p className="title">Alias: {this.state.alias}</p>
                            <p className="subtitle">With even more content</p>
                            <div className="content">
                                <div className="tile is-parent">
                                    <article className="tile is-child notification is-info">
                                        <figure className="image is-4by3">
                                            <img src="https://bulma.io/images/placeholders/640x480.png" />
                                        </figure>
                                    </article>
                                </div>
                                {/* <!-- Content --> */}
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}
}

export default CharacterCard