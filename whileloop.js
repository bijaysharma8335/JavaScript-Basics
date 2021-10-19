 var a=1;
 while(a<=10)
 {
 	console.log(a);
 	a++;
 }
 console.log("----------------------");
 var a=10;
 while(a>=1)
 {
 	console.log(a);
 	a--;
 }
 console.log("----------------------");
 var city="Bangalore";
 var i=0;
 while(i<city.length)
 {
 	console.log(city[i]);
 	i++;

 }
 console.log("----------------------");
 var city="Bangalore";
 var i=city.length-1;
 var newcity="";

 while(i>=0)
 {
 newcity=newcity+city[i];
 
 	i--;

 }
 console.log(city +"   "+newcity);