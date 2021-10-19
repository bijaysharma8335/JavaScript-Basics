function addNumber()//function without parameter
{
    var a=100;
    var b=200;
    c=a+b;
    console.log("The Addition is:"+c);


}



function addmyNumber(a,b)//function required parameter
{
    
    c=a+b;
    console.log("The Addition is:"+c);


}
function  addThree(a=null,b=null,c=null)//function with optional parameter
{
    var d=a+b+c;
    console.log(d);
}

addmyNumber(10,20);
addNumber();
addThree(10,20,30);
addThree(10,20);
addThree(10);
addThree();
