class Test2{

	 static about=()=>
	{
		console.log("--------About Us----------");
		console.log("sdf sdf sdf sdf sdf sdf sdf sdf sdfs sdfss sdfsss sdfssss sdfsssss sdf");
	}

	contact=()=>{
		console.log("------Contact Us-----");
		console.log("sdf sdf sdf sdf sdf sdf sdf sdf sdf sdfs sdfss sdfsss sdfssss sdfsssss");
	}

}


/* if function is static in a class  ,then it  can call without object*/

const obj2=new Test2();
Test2.about();
console.log("-------------------------------------");
obj2.contact();