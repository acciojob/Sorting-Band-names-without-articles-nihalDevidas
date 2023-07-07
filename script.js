//your code here
function Sortingband(arr){
	let sorted_array = arr.sort((x,y)=>{
		if(x > y){
			return 1;
		}
		return -1;
	});

  return sorted_array;
}
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

let output = Sortingband(touristSpots);

output.forEach((value)=>{

	const elemento = document.creatElement("li");
	document.getElementById("band").appendChild(elemento);
})