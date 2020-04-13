import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Link } from "react-router-dom"

import "bulma"
import "./styles/styles.scss"

import Welcome from "./components/Welcome/Welcome"
import HouseSort from "./components/HouseSort/HouseSort"
import Spells from "./components/Spells/Spells"
import SpellCard from "./components/SpellCard/SpellCard"
import Characters from "./components/Characters/Characters"
import CharacterCard from "./components/CharacterCard/CharacterCard"
import Quiz from "./components/Quiz/Quiz"

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
    document.getElementById("root")
)