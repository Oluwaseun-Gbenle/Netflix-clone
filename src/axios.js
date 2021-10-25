import axios from 'axios';

const getting = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default getting;