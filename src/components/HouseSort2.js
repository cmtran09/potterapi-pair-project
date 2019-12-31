import React from 'react'
import axios from 'axios'


class HouseSort2 extends React.Component {
    constructor() {
        super()
        this.state = {
            Gryffindor: [[]],
            GryffindorChoices: [],
            Ravenclaw: [[]],
            RavenclawChoices: [],
            Slytherin: [[]],
            SlytherinChoices: [],
            Hufflepuff: [[]],
            HufflepuffChoices: [],
        }
    }

    // Ravenclaw: [res.data[1].values],
    // Slytherin: [res.data[2].values],
    // Hufflepuff: [res.data[3].values],

    componentDidMount() {
        axios.get('https://www.potterapi.com/v1/houses?key=%242a%2410%24.oxIEWrEQmPZNXSvbcFrMO3dLi38tMO7PKl0ufjK%2FESpJ4Y4tyWJW')
            .then(res => this.setState({ 
                Gryffindor: [res.data[0].values], 
                Ravenclaw: [res.data[1].values], 
                Slytherin: [res.data[2].values], 
                Hufflepuff: [res.data[3].values], 
            }
            , () => {
                this.getGriffWords()
            }
            // , () => {this.getHuffWords()}
            // , () => {this.getRaveWords()}
            // , () => {this.getSlyWords()}
            ))
            // .then(res => this.setState({ Ravenclaw: [res.data[1].values]}))

            .catch('potterApi get', err => console.log(err))
    }

    getNewWords() {
        if (this.state.Gryffindor && this.state.Ravenclaw) {
            // console.log("griff 5555", this.state.Gryffindor[0][0])
            axios.get(`https://words.bighugelabs.com/api/2/50d1e258b2b8a1d1d86dea565cd54613/${this.state.Gryffindor[0][Math.floor(Math.random()*this.state.Gryffindor[0].length)]}/json`)
                .then(res => this.setState({
                    GryffindorChoices: res.data.noun.syn
                }))
                .catch('thesaurusApi get', err => console.log(err))
        }
    }

    getGriffWords() {
        if (this.state.Gryffindor) {
            // console.log("griff 5555", this.state.Gryffindor[0][0])
            axios.get(`https://words.bighugelabs.com/api/2/50d1e258b2b8a1d1d86dea565cd54613/${this.state.Gryffindor[0][Math.floor(Math.random()*this.state.Gryffindor[0].length)]}/json`)
                .then(res => this.setState({
                    GryffindorChoices: res.data.noun.syn
                }))
                .catch('thesaurusApi get', err => console.log(err))
        }
    }
    getRaveWords() {
        if (this.state.Ravenclaw) {
            // console.log("griff 5555", this.state.Gryffindor[0][0])
            axios.get(`https://words.bighugelabs.com/api/2/50d1e258b2b8a1d1d86dea565cd54613/${this.state.Ravenclaw[1][Math.floor(Math.random()*this.state.Ravenclaw[0].length)]}/json`)
                .then(res => this.setState({
                    RavenclawChoices: res.data.noun.syn
                }))
                .catch('thesaurusApi get', err => console.log(err))
        }
    }
    getHuffWords() {
        if (this.state.Hufflepuff) {
            // console.log("griff 5555", this.state.Gryffindor[0][0])
            axios.get(`https://words.bighugelabs.com/api/2/50d1e258b2b8a1d1d86dea565cd54613/${this.state.Hufflepuff[3][Math.floor(Math.random()*this.state.Hufflepuff[0].length)]}/json`)
                .then(res => this.setState({
                    HufflepuffChoices: res.data.noun.syn
                }))
                .catch('thesaurusApi get', err => console.log(err))
        }
    }
    getSlyWords() {
        if (this.state.Slytherin) {
            // console.log("griff 5555", this.state.Gryffindor[0][0])
            axios.get(`https://words.bighugelabs.com/api/2/50d1e258b2b8a1d1d86dea565cd54613/${this.state.Slytherin[2][Math.floor(Math.random()*this.state.Slytherin[0].length)]}/json`)
                .then(res => this.setState({
                    SlytherinChoices: res.data.noun.syn
                }))
                .catch('thesaurusApi get', err => console.log(err))
        }
    }
    
    render() {
        console.log("griff 0", this.state.Gryffindor[0])
        console.log("rav 0", this.state.Ravenclaw[0])
        console.log("sly 0", this.state.Hufflepuff[0])
        console.log("huff 0", this.state.Slytherin[0])
        console.log("griff 0", this.state.Gryffindor[0])
        console.log("griff 5", this.state.Gryffindor[0][0])

        console.log("theasurest get griff", this.state.GryffindorChoices)
        console.log("theasurest get rav", this.state.RavenclawChoices)
        console.log("theasurest get sly", this.state.SlytherinChoices)
        console.log("theasurest get huff", this.state.HufflepuffChoices)

        console.log("rav", this.state.Ravenclaw)

        // console.log("test 5",this.state.testword[0])
        // console.log("griff 0",this.state.Gryffindor[0])
        // console.log("rav",this.state.Ravenclaw)
        // console.log("slyth",this.state.Slytherin)
        // console.log("huff",this.state.Hufflepuff)

        // console.log(process.env.API_Key)
        // console.log(config)
        return (
            <section className="hero is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <div className="image is-2by1">
                            <p className="title has-text-centered title is-2  has-text-weight-bold">sorting Quiz page</p>
                            <p className="subtitle has-text-centered ">heads</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default HouseSort2