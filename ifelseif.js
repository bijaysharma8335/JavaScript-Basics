console.log("if else if example");
getCompare = (a=0 , b = 0 , c = 0)=>
{

if((a>b)&& (a>c)){
	console.log(a+ " :is bigger");

}
else if((b>a)&&(b>c)){
	console.log(b+ ":is bigger");


}

else{
	console.log(c+ " :is bigger");


}
}
getCompare(10,20,30);
getCompare(10,5,8);
getCompare(5,3,8);
getCompare(1,3);
getCompare(1,0,-1);
getCompare();
//create a file tes,js
//write an if else where check condition
//if 50 is greater than 30 then multiply itself
//else add itself