const { default: axios } = require("axios");

const apiKey = "2CzIbQgseI6IsYomuusVZ9djox67FZPZ";

const giphyApi = axios.create({
    baseURL: `http://api.giphy.com/v1/gifs`,
    params: {
        api_key: apiKey,
    },
});

giphyApi.get("/random").then((resp) => {
    const { data } = resp.data;
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
});