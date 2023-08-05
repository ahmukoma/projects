"use strict";

const $showsList = $("#showsList");
const $episodesArea = $("#episodesArea");
const $searchForm = $("#searchForm");
const $episodesList = $("#episodesList");

const missingImg = "https://store-images.s-microsoft.com/image/apps.65316.13510798887490672.6e1ebb25-96c8-4504-b714-1f7cbca3c5ad.f9514a23-1eb8-4916-a18e-99b1a9817d15"

/** Given a search term, search for tv shows that match that query.
 *
 *  Returns (promise) array of show objects: [show, show, ...].
 *    Each show object should contain exactly: {id, name, summary, image}
 *    (if no image URL given by API, put in a default image URL)
 */

$(document).on("click", function(e){
    let searchId = e.target.dataset.id;
    if (searchId){ //gets the show id associated with the button
        getEpisodesOfShow(searchId);
    }

})
async function getShowsByTerm(query) {
    let results = []; //array of objects
    let request = await axios.get(`http://api.tvmaze.com/search/shows?q=${query}`);
    
    for(let item of request.data){
        let {id, name, summary, image} = item.show;
        if (!image){
            image = missingImg; //in case image is missing
        }else{
            image = image.original;
        }
        
        createObj(id, name, summary, image);
    }
    
    function createObj(id, name, summary, image){
        results.push({
            id, name, summary, image
        })
    }
    
    return results;
}


/** Given list of shows, create markup for each and to DOM */

function populateShows(shows) {
  $showsList.empty();

  for (let show of shows) {
    const $show = $(
      `<div data-show-id="${show.id}" class="Show col-md-12 col-lg-6 mb-4">
         <div class="media">
           <img
              src="${show.image}"
              alt="Bletchly Circle San Francisco"
              class="w-25 me-3">
           <div class="media-body">
             <h5 class="text-primary">${show.name}</h5>
             <div><small>${show.summary}</small></div>
             <button class="btn btn-outline-light btn-sm Show-getEpisodes" data-id="${show.id}">
               Episodes
             </button>
           </div>
         </div>
       </div>
      `);

    $showsList.append($show);
  }
}

/** Handle search form submission: get shows from API and display.
 *    Hide episodes area (that only gets shown if they ask for episodes)
 */

async function searchForShowAndDisplay() {
    const term = $("#searchForm-term").val();
    const shows = await getShowsByTerm(term);
    
    $episodesArea.hide();
    populateShows(shows);
}

$searchForm.on("submit", async function (evt) {
  evt.preventDefault();
  await searchForShowAndDisplay();
});


/** Given a show ID, get from API and return (promise) array of episodes:
 *      { id, name, season, number }
 */

async function getEpisodesOfShow(id) {
    let request = await axios.get(`http://api.tvmaze.com/shows/${id}/episodes`);
    let episodes = [];
    
    for(let episode of request.data){
        createEpisodeList(episode);
    }
    
    function createEpisodeList(item){
        episodes.push({
            id: item.id,
            name: item.name,
            season: item.season,
            number: item.number,
            summary: item.summary,
        });
        
    }
    populateEpisodes(episodes);
}

/** Write a clear docstring for this function... */

function populateEpisodes(episodes) {
    $episodesList.html("");
    
    for(let item of episodes){
        let $info =
            `<li class="list-unstyled">
                <b>S${item.season}:E${item.number}</b> ${item.name}<br>
                ${item.summary}
            </li>`;
        $($episodesList).append($info);
    }
    
    $episodesArea.show();
}
