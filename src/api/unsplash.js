import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID bfb1d88858265db47487a9060c95a53315d4456458567c05c98d5f4508d11008'
    }
});