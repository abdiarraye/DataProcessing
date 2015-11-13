//get data 
var rawdata = document.getElementById("rawdata").value;
console.log(rawdata)

var res = rawdata.split('\n')
console.log(res)
// scheid de data en push het in een array 
var datum = [];
var temp = [];

     for (var i = 1; i < res.length; i++){
         
        linetemp = temp.push(parseInt(res[i].split(',')[1]));
        linedatum = datum.push(new Date(res[i].split(',')[0]));
     }
     
console.log(temp)
console.log(datum)

//tekenen van de x en y as 

var canvas = document.getElementById("chart");
var ctx = canvas.getContext("2d");

ctx.lineWidth = 2;
ctx.lineJoin = "round";
ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(50,650);
ctx.lineTo(650,650);
ctx.stroke();




function createTransform(domain, range){
	// domain is a two-element array of the domain's bounds
	// range is a two-element array of the range's bounds
	// implement the actual calculation here
	var ex = domain[1] - domain[0]
	var beta = range[0] ;
	var alpha = (range[1] - range[0])/ (domain[1] - domain[0]) ;

	return function(x){
		return alpha * (x - ex) + beta;
	};
}

// to use this for instance:
var xtransform = createTransform([0, 365], [650,650]);
var ytransform = createTransform([-50,350], [650,650]);




