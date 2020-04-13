![General Assembly](src/images/ga&#32;logo.png)
# Project 2 - Potter Pair Project

## Overview
A website designed to allow the user to explore and learn about the characters and spells that appear in the novel series, Harry Potter. Users can also sort themselves into a Hogwarts house and complete a quiz based on the house that they were assigned.

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
* Bulma
* JavaScript ES6
* React.js
* Axios
* PotterAPI 
* Jest
* Enzyme

## Approach Taken
As a pair after some research, we decided to choose PotterAPI for our project. The API provided us with an inbuilt sorting house route that we wanted to take advantage of and also provided interesting data that we found appealing.

The PotterAPI's Documentation can be found here: https://www.potterapi.com/

The next step was to figure out the essential features that will represent our MVP to do this we create a wireframe of the application. The core MVP features that we agreed on were:
* Sorting the user into a house using the API route
* Dynamically change the appearance of the application depending on the house the user was assigned
* Display all the characters 
* Display all spells
* A filtering functionality for the spells
* A filtering functionality for the characters

Being that we were only allowed 48 hours to complete the project, we both thought a great feature to add (if time permitted) was to use data from PotterAPI to generate random questions relevant to the house the user was sorted into.  This quiz would only reveal itself to the user only after they have sorted themselves to a house. 

## Dynamic appearance
When the user sorts themself into a house their banner and their house colours appear. To do this, we used react hooks to set the result of the API's sorting route into a state. After this is done, I call two functions each check the ```house``` state and return with a border and banner to the correct house.

![House Sort GIF](./src/images/potter%20gif%20640px%20standard.gif)

This function is a simple if statement that checks the ```house state```. It is called after the user clicks "House Sort".  Initially ```house``` is undefined, and the ```getBanner()```  function returns nothing. When user sorts themself into a house the  ```house``` state changes and the application is rerendered soon after the ```getBanner()``` function returns an image in JSX.

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
        }
        return
    }

```
The ```getHouseBorder()``` function runs in very similar manner. It returns a string that is associated with a CSS ```className``` used to render the banner.

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
        }
        return
    }
    
```
## Featured Code
### Filtering Functionality
Before all the spells are mapped onto the application two ```.filter``` methods are performed on the data. The user can filter by name, by typing a string into a text field or to filter by type of spell by choosing from a  select dropdown field.  Both of this information is stored in the state ```filter``` and ```filterType``` respectively.

``` 
    const [spells, setSpells] = useState([])
    const [stringFilter, setStringFilter] = useState('')
    const [filterType, setFilterType] = useState('All')
```

Provided that the ```filterType``` is ```"All"``` the spell type filter will essentially do nothing to the information and return all the data to the next filter. If the ```filterType``` is anything other than ```"All"``` spells will be filtered out to those who match the same spell type before passing the data to the next filter.

```
      {spells
        // SPELL TYPE FILTER
        .filter(elem => {
            if (filterType === "All") {
                return elem
            } else return elem.type === filterType
        })
```

This ```.filter``` method filters out spells that contain any instances of a string set in the ```filter``` state.

```
        // FILTER BY STRING
        .filter(elem => {
            return elem.spell.toLowerCase().includes(stringFilter.toLowerCase())
        })
```
The result of the two filters is then mapped on the page with the following.
```
        // MAP RESULTING DATA TO PAGE
        .map((spell, i) => {
            return (
                <div key={i} className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
                    <Link to={`/spells/${spell._id}`}>
                        ...
```

### Quiz 
For the last question in the quiz, the user is asked to list the 4 values associated with their house.  I wanted to present the user with a single text input field for them to pass their first answer into. If the user passes in one of the answers, that input field will glow green and disable while revealing another text field for the next answer.  

To do this I applied inline If-Else statements along with conditional operators. These were utilised render elements depending on the state of the application, notably the state, ```valueNumber```.

```
...
    {valueNumber >= 2 ? <input disabled={valueNumber >= 3 ? true : ""} className={"input " + inputClass()} type="text" placeholder="Your Answer" onChange={answer.bind(this)} onKeyPress={e => e.key === "Enter" && guesses < 3 ? check(e) : ""} /> : ""}
    {valueNumber >= 3 ? <input disabled={valueNumber >= 4 ? true : ""} className={"input " + inputClass()} type="text" placeholder="Your Answer" onChange={answer.bind(this)} onKeyPress={e => e.key === "Enter" && guesses < 3 ? check(e) : ""} /> : ""}
    ...
```

## Winners and Blockers

The biggest wins were:

* Gaining lots of confidence in useing React since this was the first time using it creating an application from scratch.

* Learning about how to make pages dynamic, using state and Conditional Rendering.

* Working in a team, I enjoyed pair programming as it allowed us both to learn and make sure we could understand what was going on each step of the way.

* Deciphering the APIs, to find data that was useful, usable and learning how to take data from an API and store it in an array with useState hook.

* Moving data between components using props - we learnt how to pass props and how to pass data to child components and notably passing data back up to parent components using callbacks functions

## Future

* Add a reset filter button function.

* Add timer for the quiz

* Overall improve the application's design.