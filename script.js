 $(document).ready(function() {
	generateGrid(40, 1);

	$(".button:first").click(function() {
		newGrid(1);
	});

	$(".button:nth-child(2)").click(function() {
		newGrid(2);
	});

	$(".button:nth-child(3)").click(function() {
		newGrid(3);
	});

	$(".button:nth-child(4)").click(function() {
		if ( background ) {
			$("#container > div > div").css("opacity", "0");
		}
		else {
			$("#container > div > div").css("background-color", "#F5F5F5");
		}
	});
});
var background = false;

// Creates a number of new divs depending on the input
// It fills up the 600px by 600px #container
function generateGrid(size, mode) {
	var grid = 600 / size;
	for ( i = 0; i < size; i++) {
		$("#container").append("<div></div>");
	}
	$("#container > div").css({"height": grid});
	for ( j = 0; j < size; j++) {
		$("#container > div").append("<div></div>");
	}
	$("#container > div > div").css({"height": grid, "width": grid, "display": "inline-block",
		"vertical-align": "top"});
	colorMode(mode);
}

// Depending on the input changes the mouse over properties of the created divs
function colorMode(mode) {
	if ( mode === 3) {
		$("#container > div > div").css({"background-color": "black", "opacity": "0"});
	}
	$("#container > div > div").mouseenter(function() {
	if ( mode === 1 ) {
		background = false;
		$(this).css("background-color", "#f88379");
	}
	else if ( mode === 2) {
		background = false;
		var random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
		$(this).css("background-color", random);
	}
	else if (mode === 3) {
		background = true;
		$(this).css("opacity", "+=0.1");
	}
	});
}

// Creates a new grid with a prompt for grid size and colormode linked to buttons
function newGrid(mode) {
	$("#container").empty();
		var gridsize = +prompt("How many rows would you like to generate?");
		generateGrid(gridsize, mode);
}