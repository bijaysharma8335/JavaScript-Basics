class user
{
	constructor(){
		this.fullname="Ganesh";
		this.mobile=9999999999;
		this.city="Bangalore";
		this.age="25 years";

	}
	userInfo=()=>
	{
		console.log("\n---About User-------\n");
		console.log("Full  Name is:"+ this.fullname);
		console.log("Mobile No is:"+ this.mobile);
		console.log("City is:"+ this.city);
		console.log("Age  is:"+ this.age);
		
		
	}
}
const obj4=new user();
const obj5=new user();
obj4.userInfo();
obj5.userInfo();

obj5.fullname="Ramesh";
obj4.mobile=121212121212;
console.log("---------------------------------------");

obj4.userInfo();
obj5.userInfo();
