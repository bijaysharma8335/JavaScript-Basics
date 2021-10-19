console.log("The class is working");
class Test {

	constructor(){
	this.name="Apple";
	this.price=200;
	this.qty=5;

}
getInfo=()=>
{
	console.log(this.name);
	console.log(this.price);
	console.log(this.qty);
}
getBill=()=>
{
	console.log(this.name);
	console.log(this.price *this.qty);
	
}
}
const obj=new Test();

console.log(obj.name);
console.log(obj.price);
console.log(obj.qty);
console.log("---------------------------");
obj.getInfo();
obj.getBill();
console.log(obj.name);


/*
class:class is collection of member function and member variable

member varaiable:In a class all the variable
defined in a constructor using this operator,are called member variable

member function: All the function written by developer in a class are member function

Assets of class :all the member function and member variable of class

this:this called object of current class

object:object is instance(copy) of a class , but the new operator will not allow to copy the content ,just it 
share the address of contents from memory


*/