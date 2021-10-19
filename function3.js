///function with parameter
function one(a)
{
	console.log("From one:"+a);
}
 var two=function(a)
{
	console.log("From 2nd :"+a);
}
three = (a) => 
{
	console.log("From 3rd :"+a);
}
//inline method
four=(a)=> console.log("from 4th :"+a);
five=a=> console.log("from 5th :"+a);//if 1 value
six=(a,b)=> console.log("from 4th :"+(a+b));
one(10);
two(20);
three(30);
four(40);
five(50);
six(50,60);
