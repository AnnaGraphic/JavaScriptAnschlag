var test = 1;

function myfunction(){
	test += 1;
	var y = document.getElementById("versuch");
	//alert("dings" + test);
	y.children[0].innerText = "Foo Bar";
	var anzahl = y.children.length;
	//alert(anzahl);
	console.log(anzahl);
	sdgsfg();
}