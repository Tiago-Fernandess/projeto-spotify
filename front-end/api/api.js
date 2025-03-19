// Fetch ou Axios
import axios from "axios";

const URL = "https://projeto-spotify-li5x.onrender.com";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;

// console.log(responseArtists.data);
