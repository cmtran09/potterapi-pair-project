import React from 'react'
import axios from 'axios'

class Quiz extends React.Component {
    constructor() {
        super()
        this.state = {
                house: []
                // api get the house members from https://www.potterapi.com/v1/houses
                // take a random pick of the members of the house 
                // ask user yes/no question on the character "ministryOfMagic": false,
                // "orderOfThePhoenix": false,
                // "dumbledoresArmy": true,
                // "deathEater": false,
                // "bloodStatus": "half-blood",
                // "species": "human"
            
        }
    }

    // let apiKey = '$2a$10$.oxIEWrEQmPZNXSvbcFrMO3dLi38tMO7PKl0ufjK/ESpJ4Y4tyWJW'

    componentDidMount() {
        axios.get('https://www.potterapi.com/v1/houses?key=%242a%2410%24.oxIEWrEQmPZNXSvbcFrMO3dLi38tMO7PKl0ufjK%2FESpJ4Y4tyWJW')
          .then(res => this.setState({ house: res.data}))
          .catch(err => console.log(err))
        // axios.get('https://www.potterapi.com/v1/houses', config)
        //   .then(res => this.setState({ house: res.data}))
        //   .catch(err => console.log(err))
    }

    render() {
        console.log(this.state.house)
        console.log(process.env.API_Key)
        // console.log(config)
        return (
        <section className="hero is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="image is-2by1">

                        {this.state.house.map((house, key) =>
                            <p key={key}>{house.name}</p>
                            
                            
                            )}
                        <p className="title has-text-centered title is-2  has-text-weight-bold">Quiz</p>
                        <p className="subtitle has-text-centered ">heads</p>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default Quiz