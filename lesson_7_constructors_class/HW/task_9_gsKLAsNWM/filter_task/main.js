// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter


Array.prototype.myFilter = function(callback) {
    const result = [];
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }

    return result;
}



let numbersArr = [1, 53, 5, 6, 8, 114, 3];

let filteredArr = numbersArr.myFilter(num => num > 7);

console.log(filteredArr);