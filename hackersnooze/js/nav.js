"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
    console.debug("updateNavOnLogin");
    $(".main-nav-links").show();
    $navLogin.hide();
    $navLogOut.show();
    $toggleFavorites.show();
    $($submitStory).show();
    $navUserProfile.text(`${currentUser.username}`).show();
    toggleLinks();
}

function navNewStory(){
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    
    if (localStorage.getItem("token") && localStorage.getItem("username")){ //if user is logged in
        $storyTxt.toggle();
    }else{
        $storyTxt.hide();
    }
}

$logStory.on("click", navNewStory);
$toggleFavorites.on("click", () => storyCategory("favorites"));
$myStories.on("click", () => storyCategory("own"));
$all.on("click", () => storyCategory("all"));

function storyCategory(type){
    putStoriesOnPage(type);
}

function toggleLinks(){
    if (currentUser){
        $(".account-forms-container").hide();
        $(".logged-in").show();
        
    }else{
        $(".logged-in").show();
    }
}