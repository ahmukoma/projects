import Reacy, { useState, useEffect, useRef } from "react";
import CardPack from './Card';
import './Cards.css';

function Cards(){
    const newDeckUrl = 'https://deckofcardsapi.com/api/deck/new/';
    const shuffleUrl = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

    const [deck, setDeck] = useState(null);
    const [cardDrawn, setCardDrawn] = useState(null);

    let [trueShuffle, toggleTrueShuffle] = useState(true);

    useEffect(() => {
        newDeck();
    }, []);
    
    async function shuffle(){
        if (trueShuffle){
            toggleTrueShuffle(false);
            let res = await axios.get(shuffleUrl);
            setDeck(res.data);
            setCardDrawn(null);
            toggleTrueShuffle(true);
        }
    }

    async function newDeck(){
        let res = await axios.get(newDeckUrl);
        setDeck(res.data);
    }

    async function drawCard(deckId){
        if (cardDrawn){
            if (cardDrawn.remaining === 0){
                alert("Error: no cards remaining!");
                return;
            }
        }

        const drawUrl = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
        let res = await axios.get(drawUrl);
        setCardDrawn(res.data);
    }

    return(
        <div className="DeckOfCards-cards">
            <div className="DeckOfCards-container">
                <CardPack cardDrawn={cardDrawn}/>
            </div>
            <button onClick={() => drawCard(deck.deck_id)} className="DeckOfCards-btn">Draw card</button>
            <button onClick={() => shuffle(deck.deck_id)} className="DeckOfCards-btn">Shuffle</button>
        </div>
    )
}

export default Cards;