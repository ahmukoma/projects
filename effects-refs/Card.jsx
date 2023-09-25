function Card ({cardDrawn}){
    if (!cardDrawn) return;
    return (
        <div className="Card">
            <img src = {cardDrawn.cards[0]['image']}/>
        </div>
    )
}

export default Card;