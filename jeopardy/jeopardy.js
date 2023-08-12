// categories is the main data structure for the app; it looks like this:

/*[
    { title: "Math",
      clues: [
        {question: "2+2", answer: 4, showing: null},
        {question: "1+1", answer: 2, showing: null}
      ],
    },
    { title: "Literature",
      clues: [
        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
        {question: "Bell Jar Author", answer: "Plath", showing: null},
      ],
    },
]*/

const $jeopardy = $("#jeopardy");
const $start = $("#start");

$start.on("click", function(){
    setupAndStart(readyLoad);
})

$jeopardy.on("click", function(e){
    handleClick(this);
})

function reset(){
    currentCategory;
    gameIsRunning = false;

    categoryIndex = 0;
    clueIndex = 0;
    catComplete = false;
    categories = [];
}

let allCategories = [];
let categories = [];
let currentCategory;
let gameIsRunning = false;

let categoryIndex = 0;
let clueIndex = 0;
let catComplete = false;

let readyLoad = true;

/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

async function jeopardyCategories(){
    try{
        const results = await axios.get("https://jservice.io//api/clues");
        let array = results.data;
        let categories = [];
        
        for(let item of results.data){
            sortCategories(item);
        }
        
        function sortCategories(dataObj){
            let {category, question, answer} = dataObj;
            let index = undefined;
            
            categories.forEach((val, i) => {
                if (val.title === category.title){
                    index = i;
                }
            });
            
            if (index > -1){
                categories[index].clues.push({question: question, answer: answer, showing: null})
            }else{
                categories.push({
                    title: category.title,
                    clues: [
                        {question: question, answer: answer}
                    ]
                })
            }
        }
        
        allCategories = categories;
    }catch(e){
        console.log("An error occured: ", e);
    }
}

function getCategoryIds() {
    const maxCats = 6;
    let noRepeatIds = [];
    randomCategory(1);
    
    function randomCategory(count){
        let randIndex = Math.floor(Math.random() * allCategories.length);
        if (count <= maxCats){
            if (noRepeatIds.indexOf(randIndex) < 0){
                noRepeatIds.push(randIndex);
                let currentCategory = {...allCategories[randIndex]};
                while(currentCategory.clues.length > 2){
                    currentCategory.clues.splice(Math.floor(Math.random() * currentCategory.clues.length), 1);
                }
                
                categories.push(currentCategory)
                count++;
            }
            
            randomCategory(count);
        }
    }
}

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare"},
 *      {question: "Bell Jar Author", answer: "Plath"},
 *      ...
 *   ]
 */


function getCategory(getNextQuestion = false) {
    if (categoryIndex === categories.length){
        alert("Game Over. Please reload.")
        return;
    }
    
    let cat = categories[categoryIndex];
    clueIndex = getNextQuestion ? clueIndex + 1 : clueIndex;
    
    if (clueIndex === 2 || clueIndex >= cat.clues.length){
        categoryIndex++;
        clueIndex = 0;
    }
    
    return cat;
}

/** Fill the HTML Card#jeopardy with the categories & cells for questions.
 *
 * - It should contain Card Container div and inside this it contain
 * - Card header div where Category title will be prsent
 * - The it should contain Card body div that contain Category Question,
 * - And in last ist should contain Footer div where it should contain answer which will appear on click.
 * 
 */

async function fillCard(catId, q) {
    let html = `<div class='card'>
                    <h2 class='category'>${catId.title}</h2>
                    <p id='que'>${catId.clues[clueIndex].question}</p>
                    <p class='answer hidden'>${catId.clues[clueIndex].answer}</p>
                </div>`
    $jeopardy.html(html);
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses showed property on category Index to determine what to show:
 * - if currently null, show question & set showed to "true" and render card with current index
 * - if currently true, show answer & set index to index+1"
 * */


function handleClick(evt) {
    if (catComplete){
        currentCategory = getCategory();
        
        if (currentCategory){
            fillCard(currentCategory);
            catComplete = false;
        }
        
        return;
    }
    
    $(".hidden").removeClass("hidden");
    catComplete = true;
    
    currentCategory = getCategory(true);
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {
    $("#spin-container").css("display", "block");
    $("#jeopardy").html("");
}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
    $("#spin-container").css("display", "none");
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart(initialLoad) {
    if (initialLoad){
        await jeopardyCategories();
        readyLoad = false;
    }
    
    if (!gameIsRunning){
        gameIsRunning = true;
        $start.text("Restart!")
        hideLoadingView();
        
        getCategoryIds();
        currentCategory = getCategory();
        fillCard(currentCategory);
    }else{
        gameIsRunning = false;
        reset();
        setupAndStart();
    }
}

/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

// TODO