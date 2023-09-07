class Colors{
    constructor(){
        this.recordKeeper = {};
    }

    setColors(updatedRecord = {}){
        this.recordKeeper = updatedRecord;
    }

    getColors(){
        return this.recordKeeper;
    }

    getSingleColor(){
        let arr = Object.keys(this.recordKeeper);
        return arr[Math.floor(Math.random() * arr.length)];
    }
}

const ColorsArr = new Colors();

export default ColorsArr;