const APIKey = '2CzIbQgseI6IsYomuusVZ9djox67FZPZ'
const URL = `http://api.giphy.com/v1/gifs/random`
const URL_complete = `${URL}?api_key=${APIKey}`
    //http://api.giphy.com/v1/gifs/random?api_key=2CzIbQgseI6IsYomuusVZ9djox67FZPZ

fetch(URL_complete)
    .then(resp => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    })