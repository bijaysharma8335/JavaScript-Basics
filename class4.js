class Customer{
	constructor(){
		this.name="Ramesh";
		this.age="20 years";
		this.mobile=999999999;

	}
}
	class Address extends Customer{
		constructor(){
			super();
			this.city="Bangalore";
			this.pincode=560012;
			this.fulladdress="Marathahalli";

		}
	}
		class Services extends Address{
			constructor()
			{
				super();
				this.services=["Mobile Repair","Laptop Repair","Bike Services"];
				this.date="12/12/2020";
				this.cost="Rs.5000";

			}
		}
class Bill extends Services{
	constructor(){
		super();
		this.billno=121212;

	}
	getBill=()=>
	{
		console.log("Bill No is:"+this.billno);
		console.log("Name is:"+this.name);
		console.log("Age is:"+this.age);
		console.log("Mobile is:"+this.mobile);
		console.log("City is:"+this.city);
		console.log("Pincode is:"+this.pincode);
		console.log("Address is:"+this.fulladdress);
		console.log("-----Services----");
		console.log("Services:"+this.services[2]);
		console.log("Services Date:"+this.date);
		console.log("Services Cost:"+this.cost);
		
	}
}
  const obj6=new Bill();
  obj6.getBill();
