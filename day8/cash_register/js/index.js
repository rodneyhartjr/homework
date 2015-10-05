var total = 0;
// var howMuch;

// Step 1: Read user input to be added to total

// when newEntry form is submitted then call the addTotal function

$('#entry').submit(function(e){
	e.preventDefault();
	addTotal();
});

// Step 2: Add input to be added to overall total


// addTtotal function will add the input to the total and update the screen
function addTotal() {

	// get the user input and save it to a variable
	var inputValue = $('#newEntry').val();
		inputValue = parseFloat(inputValue);

	// add value to screen
	$('#entries').append("<tr><td>"+"$"+inputValue+"</td></tr>");

	// set the input value to blank
	$('#newEntry').val("");

	// add totals
	$("#total").text(function() {
		total += inputValue;
		$("#total").text("$"+total)
	});
};