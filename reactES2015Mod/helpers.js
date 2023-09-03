function Choice(items){
    return items[Math.floor(Math.random() * items.length)];
}

function Remove(items, item){
    return items.splice(items.indexOf(item), 1);
}

export default {Choice, Remove};