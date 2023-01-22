// import * as dotenv from 'dotenv' //  see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
require('dotenv').config({ override: true })
import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID ' + process.env.VAR_UNSPLASH_KEY,
            // this is removed due to a unique ID being displayed.
        },
        params: {
            query: term,
        }
    })
    return response.data.results;
}

export default searchImages;