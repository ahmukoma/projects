const search = document.querySelector("#search");
const process = document.querySelector("#process");
const clear = document.querySelector("#delete");
const dataLoad = document.querySelector("#data-load");

process.addEventListener("click", function(e){
    e.preventDefault();
    let q = search.value.trim();
    
    searchGif(q);
});

$(clear).on("click", function(e){
    e.preventDefault();
    dataLoad.innerHTML = "";
})

async function searchGif(query){
    let url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`;
    const data = {
        q: query,
        api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    };
    
    if (query.length > 0){ //void empty strings
        try{
            let request = await axios.get(url);
            let gifs = request.data.data; //array
            
            let randomIndex = Math.floor(Math.random() * gifs.length);
            let imgUrl = gifs[randomIndex].images.original.url;
            
            createGif(imgUrl);
        }catch (e){
            console.log("An error occurred", e)
        }
    }
}

function createGif(url){
    const $img = $(`<img src='${url}' class='gif'>`);
    $(dataLoad).append($img);
}