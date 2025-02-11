Array.prototype.mymap = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i]));
    }
    return temp;
};
const arr = [2, 3, 4, 5];
const result = arr.mymap((num) => {
    return num * 5;
});
console.log("result", result);
