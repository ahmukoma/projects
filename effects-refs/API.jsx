function API({urlMain}){
    const newDeckUrl = 'https://deckofcardsapi.com/api/deck/new/';
    
    
    async function getData(url){
        let res = await axios.get(url);
        return res;
    }

    //getData(urlMain);

    return(
        <h1>{getData(urlMain).data}</h1>
    )
}

export default API;