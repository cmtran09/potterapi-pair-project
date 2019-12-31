import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"

class Spells extends React.Component {
    constructor() {
        super()
        this.state = {
            spells: [],
            query: '',
            // search: false,
            message: '',
            filter: '',
            filterType: 'All'
        }
    }

    componentDidMount() {
        axios.get('https://www.potterapi.com/v1/spells?key=%242a%2410%24.oxIEWrEQmPZNXSvbcFrMO3dLi38tMO7PKl0ufjK%2FESpJ4Y4tyWJW')
            .then(res => this.setState({ spells: res.data }))
    }

    // let updatedList = [this.state.spells]
    // updatedList = updatedList.filter((item)=>{
    //     return !Object.values(item).map((value)=>{
    //         return String(value)
    //     }).find((value=>{
    //         return value.includes(query)
    //     }))
    //     // console.log("up",updatedList )
    // })

    // this.state.players.filter(player => player.name.includes(this.state.player))

    // handleOnChange(e) {
    //     const query = e.target.value
    //     if (query === "") {
    //         this.setState({
    //             query: '',
    //             // search: false
    //         })
    //     } else {
    //         let updatedList = [...this.state.spells]
    //         updatedList = updatedList.filter((item)=> item.spell.includes(query))
    //             // console.log("up",updatedList )

    //             // updatedList = updatedList[0].spell.filter((item => {
    //             //     return item.toLowerCase().search(
    //             //         this.state.query.toLowerCase()) !== -1;
    //             // }))
    //             this.setState({
    //                 spells: updatedList,
    //                 query: query,
    //                 search: true,
    //                 message: ''

    //             })

    //     }
    // }

    filter(e) {
        this.setState({ filter: e.target.value })
    }


    typeFilter(e) {
        e.preventDefault()
        this.setState({
            filterType: e.target.value
        })
        console.log("TESSSSSTTTTYYY",this.state.filterType)
        // this.state.spells.map(e => { })
    }

    render() {
        // const { query } = this.state
        console.log(this.state.spells)
        console.log("state falue",this.state.filter)
        // console.log(this.state.search)
        let items = [...this.state.spells]
        // console.log("items",items)
        // if (this.state.filter) {
        //     items = items.filter(item =>
        //         item.spell.toLowerCase()
        //             .includes(this.state.filter.toLocaleLowerCase()))
        // } 

        // console.log("mess",this.state.spells[1].spell)
        
        return (
            // <h1>hello</h1>
            <section>
                <div className="hero is-fullheight"></div>
                <div className="section background">
                    <form className="form" >
                    {/* <form className="form" onClick={(e) => this.handleFilter(e)}> */}
                        <select onChange={(e) => this.typeFilter(e)}>
                            <option value="All">All</option>
                            <option value="Spell">Spells</option>
                            <option value="Hex">Hex</option>
                            <option value="Charm">Charms</option>
                            <option value="Enchantment">Enchantments</option>
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
                            {/* {console.log("selpp", this.state.spell)} */}
                            {this.state.spells  
                                .filter(elem=>{
                                    if(this.state.filterType === "All"){
                                    return elem
                                    } else return elem.type === this.state.filterType
                                })
                                .filter(elem=>{
                                    // if(this.state.filterType){
                                        // return elem.type === this.state.filterType
                                    return elem.spell.toLowerCase().includes(this.state.filter.toLowerCase())
                                // }
                                })
                                .map((spell, i) => {
                                    return (
                                        <div key={i} className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
                                            <Link to={`/spells/${spell._id}`}>
                                                <div className="btn card has-background-black">
                                                    {/* <div className="card-image"> */}
                                                    {/* <figure className="image is-4by2"> */}
                                                    {/* <Link to={`/wines/${wine._id}`}>
                                                            <img src={wine.image} alt="Placeholder image" />
                                                        </Link> */}
                                                    {/* </figure> */}
                                                    {/* </div> */}
                                                    <div className="card-content">
                                                        <p className="has-text-white">{spell.spell}</p>
                                                        {/* {console.log(spell.spell)} */}
                                                        {/* <p className="has-text-white">Type: {spell.type}</p> */}
                                                        {/* <p className="has-text-white">Effect: {spell.effect}</p> */}

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

}

// {this.state.spells.map((spells, i) => {
//     if (this.state.search === false) {
//         return (
//             <div key={i} className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
//                 <Link to={`/spells/${spells._id}`}>
//                     <div className="btn card has-background-black">
//                         {/* <div className="card-image"> */}
//                         {/* <figure className="image is-4by2"> */}
//                         {/* <Link to={`/wines/${wine._id}`}>
//                                 <img src={wine.image} alt="Placeholder image" />
//                             </Link> */}
//                         {/* </figure> */}
//                         {/* </div> */}
//                         <div className="card-content">
//                             <p className="has-text-white">{spells.spell}</p>
//                             <p className="has-text-white">Type: {spells.type}</p>
//                             <p className="has-text-white">Effect: {spells.effect}</p>

//                         </div>
//                     </div>
//                 </Link>
//             </div>
//         )
//     }
// })}


export default Spells