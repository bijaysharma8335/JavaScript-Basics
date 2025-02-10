var arr=[1,2,[3,4],5,6];
var newarr=[];
for(var i=0;i<arr.length;i++){
    newarr=newarr.concat(arr[i]);
}
console.log(newarr);