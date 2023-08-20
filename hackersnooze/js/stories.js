"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();

  putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story, updateUI = false) {
    const hostName = story.getHostName();
    let isFavorite;
        if (currentUser){ //if logged in
            currentUser.favorites.forEach((item) => {
                if (item.storyId === story.storyId){
                    isFavorite = true;
                }
            });
        }
    
    function showFavBtn(){
        if (localStorage.getItem("username")){
            return `<div><button class='fav fa fa-star ${isFavorite ? 'is-favorite' : ''}' data-action='favorite' data-story-id='${story.storyId}'></button></div>`;
        }
        return "";
    }
    
    function removeStory(){
        if (currentUser){
            let myStory = false;
            currentUser.ownStories.forEach((item) => {
                if (item.storyId === story.storyId){
                    myStory = true;
                }
            });
            
            if (myStory){
                return `<div><button class='remove' data-action='remove' data-story-id='${story.storyId}'>X</button></div>`;
            }
        }
        return "";
    }
    
    function insideHTML(){
        return `
            <div class='flexed'>
                ${showFavBtn()}
                <div>
                    <a href="${story.url}" target="a_blank" class="story-link">
                      <strong>${story.title}</strong>
                    </a>
                    <small class="story-hostname">(${hostName})</small>
                    <p class="story-author">by ${story.author}</p>
                    <p class="story-user">posted by ${story.username}</p>
                </div>
                ${removeStory()}
            </div>`
    }
    
    if (updateUI){
        $(`#${story.storyId}`).html(insideHTML);
        return;
    }
    
    return $(`<li id="${story.storyId}">${insideHTML()}</li>`);
}

/** Gets list of stories from server, generates their HTML, and puts on page. */

function putStoriesOnPage(category) {
    console.debug("putStoriesOnPage");
    
    $allStoriesList.empty();
    
    let stories;
    
    switch(category){
        case "favorites":
            stories = currentUser.favorites;
            break;
        case "own":
            stories = currentUser.ownStories;
            break;
        default:
            stories = storyList.stories;
            break;
    }

    // loop through all of our stories and generate HTML for them
    for (let story of stories) {
        const $story = generateStoryMarkup(story);
        $allStoriesList.append($story);
    }

  $allStoriesList.show();
}

$allStoriesList.on("click", function(e){
    let storyId = e.target.dataset.storyId; //if data-attritube is set to id
    let action = e.target.dataset.action;
    let favExists = false;
    
    if (currentUser && storyId){
        if (action === "favorite"){
            currentUser.favorites.forEach((item) => {
                if (item.storyId === storyId){
                    favExists = true;
                }
            });
            
            User.favoriteStory(storyId, favExists);
            //$(e.target).toggleClass("is-favorite");
        }
        
        if (action === "remove"){
            $(`#${storyId}`).remove();
            User.deleteStory(storyId);
        }
    }
})

$submitStory.on("click", submitNewStory);

async function submitNewStory(e){
    e.preventDefault();
    let title = $title.val().trim();
    let newEntry = $newContent.val().trim();
    
    if (newEntry.length > 0){
        let newStory = await storyList.addStory(currentUser, {title: title, author: currentUser.name, content: newEntry, url: "https://www.google.com"});
        $title.val("");
        $newContent.val("");
    }
}