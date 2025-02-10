//required parameter
var addMyNumber=(a,b,c)=>{
var d=a+b+c;
console.log("Your addition is :"+d);

}

addMyNumber(10,20,30);
addMyNumber(10,20);//is NaN-is not a number
addMyNumber(10);//is NaN

//optional parameter
var addNumber= (a=null,b=null,c=null)=>{
var d = a+b+c;
console.log("Your addition is :"+d);
}
addNumber(10,20,30,40);
addNumber(10,20);
addNumber(10);
addNumber();
