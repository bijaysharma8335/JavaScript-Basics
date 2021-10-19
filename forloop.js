
//Ascending order for loop
for(var i=1; i<10;i++)
{
	console.log("The Counter is :"+i);

}

console.log("Descending order for loop");
for(var i=10; i>=1;i--)
{
	console.log("The Counter is :"+i);
	
}

console.log("Descending order for loop")
var start=100;
var end=1;
for(var i=start; i>=end;i--)
{
	console.log("The Counter is :"+i);
	
}

console.log("------------------------------------");
var abc="123ABCXYZ4567";
var str="";
var num="";
for(var i=0;i<abc.length;i++)
{
	console.log(abc[i]);
	if(isNaN(abc[i]))

	{
		str=str+abc[i];
	}
	else
	{
		num=num+abc[i];
	}
	
}
console.log(str+"length is:"+str.length);
console.log(num+":"+num.length);
