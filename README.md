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
Finally, to run on your brower via localhost:xxxx
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

The PotterAPI's Documentation can be found here: https://www.potterapi.com/

After we were happy with the API choice we figureed out the essential features that will represent our MVP by creating a wireframe. The core features that we set on were:
* Sort user into a house using the API route
* Dynamically change the appearance of the application depending on the house the user was assigned
* Display all the characteras 
* Display all spells
* A filtering functionality for the user for the spells
* A filtering functionality for the user for the characters

An additional feature that we thought would have been great to add was to reveal a Quiz to the user only after that have been sorted into a house and ask the user questions based on thier assigned house.

##Dynamic appearance
Each time the user is sorted into a house we used react hooks to set the reuslt into a state. After this is done, two functions are run after. These functions check what the user ```house``` state is and returns the associated house flag and border colours. 

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

```
The getHouseBorder function returns a string that is assosicated to CSS classes with the associated house colours.

```
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
## Featured Code
### Filtering Functionality

My approach to providing a dynamic filter to the project was to have two states: ```filter``` to hold the string of characters the user will input and ```filterType``` that will hold the value of the type of spell the user can choose from with the select field.

``` 
    const [spells, setSpells] = useState([])
    const [filter, setFilter] = useState('')
    const [filterType, setFilterType] = useState('All')
```
Before all the spells are mapped onto the application the array ```spells```  that contains all the spells retrieved from the ```axios``` get request two filter methods are preformed.

the first ```.filter``` method filters the spells array to return only spells that have the same type as the ```filterType``` state.  However return all the spells if the ```filterType``` is ```"All"```

next ```.filter``` method filters out spells that contain  any  instances of a string the user inputs into the text input field

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

### Quiz 
Having the input field for the user to answer in for a question that had 4 correct answers came with a challenge. I wanted to provide the user with a single text input field. If a correct answer was entered correctly, that input filed will glow green, be disabled and anopther text input feild would appear untill all four correct answers have been entered.

to do this i used many inline If-Else with Conditional Operators to render things depending on the state of my application



```
...
    {valueNumber >= 2 ? <input disabled={valueNumber >= 3 ? true : ""} className={"input " + inputClass()} type="text" placeholder="Your Answer" onChange={answer.bind(this)} onKeyPress={e => e.key === "Enter" && guesses < 3 ? check(e) : ""} /> : ""}
    {valueNumber >= 3 ? <input disabled={valueNumber >= 4 ? true : ""} className={"input " + inputClass()} type="text" placeholder="Your Answer" onChange={answer.bind(this)} onKeyPress={e => e.key === "Enter" && guesses < 3 ? check(e) : ""} /> : ""}
    ...
```
depending on the applications ```valueNumber``` another input text field will appear 

## Winners and Blockers

The biggest wins were:

Leaning about how to make pages dynamic, using state and Conditional Rendering

Working in a team, i really enjoyed pair programming as it allowed us both to learn and make sure we could understand what was going on  each step of the way

Deciphering the APIs, to find data that was useful and usable
Learning how to take data from an API and store it in an array with useState

Moving data between components using props - we learnt how to pass props and how to pass data to child components and notably passing data back up to parent components using callbacks functions

## Future

add a reset filter function

add timer for the quiz

overall improve the application design