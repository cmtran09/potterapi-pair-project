import axios from "axios";

const SPELLS_ENDPOINT = "https://www.potterapi.com/v1/spells?key=%242a%2410%24.oxIEWrEQmPZNXSvbcFrMO3dLi38tMO7PKl0ufjK%2FESpJ4Y4tyWJW";

const fetchSpells = async () => {
    return await axios.get(SPELLS_ENDPOINT).then(res => res.data)
};

export default fetchSpells;