import axios from 'axios';

const backendURL = "https://qtify-backend-labs.crio.do/";


export const fetchTopAlbum = async () => {
    try {
        const response = await axios.get(`${backendURL}/albums/top`);
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
}


