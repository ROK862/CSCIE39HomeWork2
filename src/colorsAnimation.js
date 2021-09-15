const APP = document.getElementsByClassName("App-header")[0];

setInterval(() => {
	const colors = ["#b10000","#6db100","#041031","#575a63","#000000"];
	const rndInt = Math.floor(Math.random() * colors.length) + 1
    	console.log(rndInt)
	if (APP) APP.style.background=colors[rndInt];
}, 2000);
