function guessingGame(g) {
    let random = Math.floor(Math.random() * 99), gameOver = false;
    return function guess(g){
        let out = `You guessed ${g}. `;
        if (gameOver) return "The game is already over";
        
        if (g < random){
            out += "Your guess too low";
        }else if (g > random){
            out += "Your guess too high";
        }else{
            out += "You guessed correctly. Game over";
            gameOver = true;
        }
        
        return out;
    }
}

module.exports = { guessingGame };
