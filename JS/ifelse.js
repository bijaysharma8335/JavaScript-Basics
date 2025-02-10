var findLength =(name="",city="")=>
{
	if (name.length > city.length)
			{

			console.log(name+":  is bigger: "+city);
			}
	else
		{
			console.log(city+": is bigger: "+name);
		}
}
findLength("ramesh","Delhi");
findLength("Ravi","Mumbai");
findLength("Alex","Chennai");
findLength("Ganesh");