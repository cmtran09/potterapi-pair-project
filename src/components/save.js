componentDidMount() {
    axios.get('https://www.potterapi.com/v1/houses?key=%242a%2410%24.oxIEWrEQmPZNXSvbcFrMO3dLi38tMO7PKl0ufjK%2FESpJ4Y4tyWJW')
        .then(res => this.setState({ Gryffindor: [res.data[0].values], }, 
            () => {
                this.getGriffWords()
            }
        ))
        .catch('potterApi get', err => console.log(err))
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