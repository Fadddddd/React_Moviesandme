// API/TMDBApi.js
import axios from "axios";

const API_TOKEN = "73508e442c76f63a37529bbf3347bb40";

const getFilmsFromApiWithSearchedText = async (text) => {
  const url =
    "https://api.themoviedb.org/3/search/movie?api_key=73508e442c76f63a37529bbf3347bb40" +
    API_TOKEN +
    "&language=fr&query=" +
    text;
};

export default getFilmsFromApiWithSearchedText;
