import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Link } from "react-router-dom"

import axios from 'axios'
// import Auth from './lib/auth'

import 'bulma'
import './styles/styles.scss'

import Welcome from "./components/Welcome"
import Quiz from "./components/Quiz"
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
            <Route exact path="/quiz" component={Quiz} />
        </Switch>
    </BrowserRouter>
)

console.log(process.env.DB_HOST)

ReactDOM.render(
    <App />,
    document.getElementById('root')
)