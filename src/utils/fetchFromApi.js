import axios from 'axios';
const baseURl = 'https://youtube-v31.p.rapidapi.com'
const options = {

    params: {
        maxResults: '50',
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromApi = async(url) => {
    const { data } = await axios.get(`${baseURl}/${url}`, options);
    return data;
}