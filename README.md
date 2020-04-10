![General Assembly](images/ga&#32;logo.png)
# Project 2 - Potter Pair Project

## Overview
A website designed to allow the user to explore and learn about the characters and spells inside the Novel series, Harry Potter.

Additionally, users can sort themselves into a Hogwarts house and complete a quiz based on the house they were assigned.

You can launch the site on [GitHub Pages](https://cmtran09.github.io/project-1-vanillaJS-tetris/), or check out the [Repo](https://github.com/cmtran09/project-1-vanillaJS-tetris).

If you will like to download this repository and run the clone locally, run the following in your terminal:

```
git clone https://github.com/cmtran09/project-2-potterapi-pair.git
```

Next run:
```
npm install
```
Finally, to run on your localhost:
```
npm run serve
```

## Brief
* Pair Program
* Create a React app that consumes any public API
* Display API data in the React app
* Deploy to GitHub pages 

## Technologies Used
* HTML
* SCSS
* JavaScript ES6
* React.js
* Axios
* PotterAPI 
* Jest
* Enzyme

## Approach Taken
As a pair, we found the PotterAPI after some research. The API provided us with an inbuilt sorting house route that we wanted to take advantage of and also provided interesting data that we found appealing.

To read PotterAPI's Documentation can be found here: https://www.potterapi.com/

After we selected the API we started creating a wireframe for our application and figureed out the essential features that will represent our MVP. The core features was to:
* display all the characteras 
* and spells obtained 
* from the api and add filtering functionality for the user.
* sort themselves to a house
* dynamically change the appearance of the page depending on the house the user was assigned

an additional feature that was added was a quiz that asked the user questions depending on the hous ethey were assigned to.

```    const [spells, setSpells] = useState([])
    const [filter, setFilter] = useState('')
    const [filterType, setFilterType] = useState('All')
```

```
    async function getSpells() {
        let response = await axios.get('https://www.potterapi.com/v1/spells?key=%242a%2410%24.oxIEWrEQmPZNXSvbcFrMO3dLi38tMO7PKl0ufjK%2FESpJ4Y4tyWJW')
        let spellsData = await response.data
        setSpells(spellsData)
        // console.log(spells)
    }
```

```
      {spells
                            .filter(elem => {
                                if (filterType === "All") {
                                    return elem
                                } else return elem.type === filterType
                            })
                            .filter(elem => {
                                return elem.spell.toLowerCase().includes(filter.toLowerCase())
                            })
                            .map((spell, i) => {
                                return (
                                    <div key={i} className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
                                        <Link to={`/spells/${spell._id}`}>
                                            <div className="btn card has-background-black">
                                                <div className="card-content">
                                                    <p className="has-text-white">{spell.spell}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
```

### House Sort
The House Sorting Route the API returns a random selection of one of the 4 Hogwarts Houses. This response is 

### Dynamically change the appearance of the page depending on the house the user was assigned
```
    function getBanner() {
        if (typeof house != 'undefined') {
            if (house === "Gryffindor") {
                return (<img className="fade-in" src="../images/Grif.png" alt="" />)
            }
            if (house === "Slytherin") {
                return (<img className="fade-in" src="../images/Slyt.png" alt="" />)
            }
            if (house === "Hufflepuff") {
                return (<img className="fade-in" src="../images/Huff.png" alt="" />)
            }
            if (house === "Ravenclaw") {
                return (<img className="fade-in" src="../images/Rave.png" alt="" />)
            }
            return ("")
        }
    }

    function getHouseBorder() {
        if (typeof house != 'undefined') {
            if (house === "Gryffindor") {
                return 'Gryf'
            }
            if (house === "Slytherin") {
                return 'Slyt'
            }
            if (house === "Hufflepuff") {
                return 'Huff'
            }
            if (house === "Ravenclaw") {
                return 'Rave'
            }
            return ''
        }
    }
```


## Bugs

## Winners and Blockers

## Future Content
