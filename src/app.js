import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Link } from "react-router-dom"

import axios from 'axios'
// import Auth from './lib/auth'

import 'bulma'
import './styles/styles.scss'

import Welcome from "./components/Welcome"
import HousePage from "./components/HousePage"
import Quiz from "./components/Quiz"
import HouseSort2 from "./components/HouseSort2"
import HouseSort from "./components/HouseSort"
import Spells from "./components/Spells"
import SpellCard from "./components/SpellCard"
import Characters from './components/Characters'
import CharacterCard from './components/CharacterCard'

const App = () => (
    <BrowserRouter>
        {/* <NavBar /> */}
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/house" component={HouseSort} />
            <Route exact path="/spells/" component={Spells} />
            <Route exact path="/spells/:id" component={SpellCard} />
            <Route exact path="/characters/:id" component={CharacterCard} />
            <Route exact path="/characters" component={Characters} />
        </Switch>
        {/* <CharacterCard /> */}
        {/* <Characters /> */}
        {/* <Route exact path="/charactercard/:id" component={spell} /> */}
        {/* <Route exact path="/spellcard/:id" component={spell} /> */}
        {/* <HouseSort /> */}
        {/* <Spells /> */}
        {/* <Quiz /> */}
        {/* <HousePage /> */}
        {/* <Switch> */}
        {/* <Route> */}
        {/* <Welcome /> */}
        {/* </Route> */}
        {/* // </Switch> */}
        {/* <Welcome /> */}
    </BrowserRouter>
    // has-text-white
)

// var sideNav = document.getElementById('mySidenav')
// var button = document.getElementById('button')
// var close = document.getElementById('closebtn')

// class NavBar extends React.Component {
//     openNav() {
//         sideNav.style.width = '250px'
//         console.log('clicked')
//     }
//     closeNav() {
//         sideNav.style.width = '0'
//     }
//     render(){
//         return (
//             <div>
//                 <div id="mySidenav" className="sidenav">
//                     <a href="javascript:void(0)" id="closebtn">&times;</a>
//                     <a href="#">About</a>
//                     <a href="#">Characterss</a>
//                     <a href="#">Spells</a>
//                 </div>
//                 <button id="button" style="font-size:30px;cursor:pointer"
//                     onMouseOver={(e) => this.openNav(e)}
//                     onMouseOut={(e) => this.closeNav(e)}
//                 >open</button>
//             </div>
//         )
//     }
// }


console.log(process.env.DB_HOST)


// var config ={
//     headers : {'key': process.env.API_Key}
// }



ReactDOM.render(
    <App />,
    document.getElementById('root')
)