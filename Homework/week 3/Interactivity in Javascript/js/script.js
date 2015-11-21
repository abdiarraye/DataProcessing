//get data 
var rawdata = document.getElementById("rawdata").value;

var parse = JSON.parse(rawdata);

console.log(parse);

//data scheiden en in een lijst pushen

datum = [];
temp = [];

for (i = 0; i < parse.length; i++){
    linetemp = temp.push(parseInt(parse[i][1]));
        linedatum = datum.push((parse[i][0]));
}

var canvas = document.getElementById("chart");
var ctx = canvas.getContext("2d");

ctx.lineWidth = 1;
ctx.lineJoin = "round";
ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(50,650);
ctx.lineTo(650,650);
ctx.stroke();
ctx.font = "30px Arial";
ctx.fillText("Maximum temperature in De Bilt (NL)",100,50);
ctx.font = "10px Arial";
ctx.fillText("Temperature",0,200);

function createTransform(domain, range){
	// domain is a two-element array of the domain's bounds
	// range is a two-element array of the range's bounds
	// implement the actual calculation here
    var alpha = (range[1] - range[0])/ (domain[1] - domain[0]) ;
    var beta = range[0] - (alpha * domain[0])

	return function(x){
		return alpha * x + beta;
	};
}

// to use this for instance:
var xtransform = createTransform([1, 365], [50,650]);
var ytransform = createTransform([-50,350], [650,50]);


ctx.moveTo(xtransform(1),ytransform(126));
for (var i = 1; i < 365; i++)
{
    var ded = ctx.lineTo(xtransform(i),ytransform(temp[i]));
}
ctx.stroke();



/*
lijn positie 

ctx.lineWidth = 1;
ctx.lineJoin = "round";
ctx.beginPath();
ctx.moveTo(400,50);
ctx.lineTo(400,650);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(50,400);
ctx.lineTo(650,400);
ctx.stroke();

*/

 function writeMessage(canvas, message) {
        var context = canvas.getContext('2d');
      }
      function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }
      var canvas = document.getElementById('canvas');
      var context = canvas.getContext('2d');

      canvas.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        writeMessage(canvas, message);
        console.log(mousePos.x,mousePos.y);
      }, false);
      
 function createTransform(domain, range){
	// domain is a two-element array of the domain's bounds
	// range is a two-element array of the range's bounds
	// implement the actual calculation here
    var alpha = (range[1] - range[0])/ (domain[1] - domain[0]) ;
    var beta = range[0] - (alpha * domain[0])

	return function(x){
		return alpha * x + beta;
	};
}

// to use this for instance:
var xtransform = createTransform([1, 365], [50,650]);
var ytransform = createTransform([-50,350], [650,50]);






