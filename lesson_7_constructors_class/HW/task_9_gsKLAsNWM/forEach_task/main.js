// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter


Array.prototype.myForEach = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

let array = [100, 200, 300];

array.myForEach((element, index) => {
    console.log(`Елемент масиву - ${element}, індекс цього елементу - ${index}`);
})

