window.onload = init;

// canvas and context variables
var canvas;
var context;

// center of the pattern
var centerX, centerY;


function init() {
    
        canvas = document.getElementById("testCanvas");
        context = canvas.getContext("2d");

        centerX = canvas.width / 2;
        centerY = canvas.height / 2;
        
        // draw the initial pattern
        drawPattern();
}


// called whenever the slider value changes
function drawPattern() {
    // clear the drawing area
    context.clearRect(0, 0, canvas.width, canvas.height);
	var i;
	var c=0; // c is counter
	var radius = document.getElementById("radius").value;
	for(i=200; i>0; i-=radius)
	{
		c++;
		if((c % 2) == 0) 
			context.fillStyle = '#000066'; // even numbered circles will be filled BLUE
		else
			context.fillStyle = '#FF0000'; // odd numbered circles will be filled RED
	// draw the pattern1
    context.beginPath();
    context.arc(centerX, centerY, i, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
	}
 
 }