class customer{
	
	constructor(){
		this.name="Sasi";
		this.age="20 years";
		this.number="12121212212";
		
	}
	about = () =>{
		var data="<h2>About customer</h2>";
		data=data+"<p>customer Name:"+this.name+"</p>";
		data=data+"<p>Mobile No:"+this.number+"</p>";
		data=data+"<p>Customer Age:"+this.age+"</p>";
		document.getElementById("customer").innerHTML=data;
	}
}
	
class Address extends customer{
	
	constructor(){
		super();
		this.city="Rampur";
		this.pincode="56005635";
		this.fulladdress="Sami chowk";
	}
	getAddress = () =>{
		var data  ="<h2>About Address</h2>";
		data = data +"<p> city :" +this.city+"</p>";
		data = data +"<p> pincode :" +this.pincode+"</p>";
		data = data +"<p> Address:" +this.fulladdress+"</p>";
		document.getElementById("customer").innerHTML=data;
		
	}
}
class services extends Address{
	constructor(){
		super();
		this.services=["Mobile Repaier, Laptop Repaire, Bike service"];
		this.date="56/00/5635";
		this.cost="Rs,500000";
	}
	getServices = () =>{
		
		var data  ="<h2>About Services</h2>";
		data = data +"<p> Services :" +this.services+"</p>";
		data = data +"<p> Date :" +this.date+"</p>";
		data = data +"<p> Cost:" +this.cost+"</p>";
		document.getElementById("customer").innerHTML=data;
	}
}
class Bill extends(services){
	
	constructor(){
		super();
		this.billno=121231;
	}
	getBill = () =>{
		var data  ="<h2>Customer billing detail</h2>";
		data=data+"<p> Bill No:"+this.billno+"</p>";
		
		data=data+"<p>Name:"+this.name+"</p>";
		data=data+"<p>Age:"+this.age+"</p>";
		data=data+"<p>Mobile:"+this.number+"</p>";
		data=data+"<p>City:"+this.city+"</p>";
		data=data+"<p>Pincode:"+this.pincode+"</p>";
		data=data+"<p>Address:"+this.fulladdress+"</p>";
		data=data+"<p>---Services---"+"</p>";
		data=data+"<p>Services:"+this.services[2]+"</p>";
		data=data+"<p>Date:"+this.date+"</p>";
		
		data=data+"<p>Cost:"+this.cost+"</p>";
		data=data+"<p><button onclick='window.print'>Print</button></p>";
		document.getElementById('customer').innerHTML=data;
		
	}
}
const obj7 = new Bill();
