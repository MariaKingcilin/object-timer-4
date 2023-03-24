let user=parseInt(prompt("Enter the Time"))
let actual=new Date();
actual.setHours(user);
let time=actual.getHours();
if(6<=time&&time<12)
{
	console.log("Morning");
}
else if(12<=time&&time<18)
{
	console.log("Afternoon");
}
else
{
	console.log("Night");
}