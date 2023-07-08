const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
    str = str.trim().toLowerCase();
	let results = [];
    if (str.length === 0){
        return results;
    }
    
    
    
    fruit.forEach(function(value){
        let index = value.toLowerCase().indexOf(str);
        if (index > -1){
            let subStr = value.slice(index, index + str.length);
            let matched = value.replace(subStr, `<b>${subStr}</b>`);
            results.push(matched);
        }
    });

	return results;
}

function searchHandler(e) {
    
    let matched = search(input.value);
    showSuggestions(matched, input.value);
}

function showSuggestions(results, inputVal) {
    suggestions.innerHTML = "";
    
    results.forEach(function(val){
        let li = document.createElement("li");
        li.className = "highlight";
        
        li.innerHTML = val;
        suggestions.append(li);
    });
}

function useSuggestion(e) {
    input.value = e.target.innerText;
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);