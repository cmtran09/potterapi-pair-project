import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"

class Characters extends React.Component {
    constructor() {
        super()
        this.state = {
            characters: [],
            filter: '',
            filterHouse: 'All',
            filterDeathEater: 'All',
            bloodFilter: 'All',
            deathEaterFilter: 'All',
            dumbFilter: 'All'
        }
    }

    componentDidMount() {
        axios.get('https://www.potterapi.com/v1/characters/?key=%242a%2410%24.oxIEWrEQmPZNXSvbcFrMO3dLi38tMO7PKl0ufjK%2FESpJ4Y4tyWJW')
            .then(res => this.setState({ characters: res.data }))
    }

    bloodFilter(e) {
        e.preventDefault()
        this.setState({
            bloodFilter: e.target.value
        })
    }

    houseFilter(e) {
        e.preventDefault()
        this.setState({
            houseFilter: e.target.value
        })
        console.log('filter')
        // this.state.spells.map(e => { })
    }

    deathEaterFilter(e) {
        e.preventDefault()
        this.setState({
            deathEaterFilter: e.target.value
        })
    }

    ministryFilter(e) {
        e.preventDefault()
        this.setState({
            ministryFilter: e.target.value
        })
    }

    dumbFilter(e) {
        e.preventDefault()
        this.setState({
            dumbFilter: e.target.value
        })
    }

    filter(e) {
        this.setState({ filter: e.target.value })
    }

    render() {

        console.log('hell')
        console.log(this.state.characters)
        console.log(this.state.filter)
        return (
            // <h1>hello</h1>
            <div className="section">
                <form className="form" >
                    <select onChange={(e) => this.bloodFilter(e)}>
                        <option value="All">All</option>
                        <option value="pure-blood">Pure-blood</option>
                        <option value="half-blood">Half-blood</option>
                        <option value="muggle">Muggle</option>
                        <option value="muggle-born">Muggle-born</option>
                        <option value="squib">Squib</option>
                        <option value="half-giant">Half-giant</option>
                        <option value="unknown">Unknown</option>
                    </select>
                    <select onChange={(e) => this.houseFilter(e)}>
                        <option value="All">All</option>
                        <option value="Gryffindor">Gryffindor</option>
                        <option value="Ravenclaw">Ravenclaw</option>
                        <option value="Slytherin">Slytherin</option>
                        <option value="Hufflepuff">Hufflepuff</option>
                    </select>
                    <select onChange={(e) => this.deathEaterFilter(e)}>
                        <option value="All">All</option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <select onChange={(e) => this.ministryFilter(e)}>
                        <option value="All">All</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <select onChange={(e) => this.dumbFilter(e)}>
                        <option value="All">All</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <input
                        type="text"
                        // value={query}
                        id='search-input'
                        placeholder='Search...'
                        name='query'
                        onChange={this.filter.bind(this)}
                    // onChange={(e) => this.handleOnChange(e)}
                    />
                    <button className="button is small is rounded is-black">
                        Filter
                    </button>
                </form>
                <div className="container">
                    <div className="columns is-mobile is-multiline">
                        {this.state.characters
                            //ADD THE FITLERS ===========================================================

                            // .filter(elem => {
                            //     return elem.name.toLowerCase().includes(this.state.filter.toLowerCase())
                            // })
                            // .filter(elem => {
                            //     return elem.name.toLowerCase().includes(this.state.filter.toLowerCase())
                            // })
                            // .filter(elem => {
                            //     return elem.name.toLowerCase().includes(this.state.filter.toLowerCase())
                            // })
                            // .filter(elem => {
                            //     return elem.name.toLowerCase().includes(this.state.filter.toLowerCase())
                            // })

                            .filter(elem => {
                                return elem.name.toLowerCase().includes(this.state.filter.toLowerCase())
                            })
                            .map((characters, i) => {
                                return (
                                    <div key={i} className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
                                        <Link className="char-and-spells" to={`/characters/${characters._id}`}>
                                            <div className="btn card has-background-black">
                                                <div className="card-content">
                                                    <p className="has-text-white">{characters.name}</p>
                                                    {/* <p className="has-text-grey-darker">Type: {characters.house}</p> */}
                                                    {/* <p className="has-text-grey-darker">Effect: {characters.effect}</p> */}
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
        )
    }

}


export default Characters

// class SpellCard extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             spell: {}
//         }
//     }

//     componentDidMount(){
//         const id = this.props.match.params.id
//         axios.get('')
//     }
// }


// console.log(./.env)
