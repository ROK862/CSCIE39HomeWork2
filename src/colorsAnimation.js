setInterval(() => {
	const colors = ["#b10000","#6db100","#041031","#575a63","#000000"];
	
	Object.keys(colors).forEach(e => {
		if (Math.random() > 0.5) {
			const app = document.getElementsByClassName("App-header")[0];
			if (app){app.style.background=colors[e];console.log(colors[e]);}
		}
	});
}, 2000);
