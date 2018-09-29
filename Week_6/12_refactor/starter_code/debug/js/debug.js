//error thrown example
$("body").append("<h1>Hi world!</h1>");
//console.log example, log each of the pies and the index before the switch
var pies=["Cherry","Pumpkin","Banana","Rhubarb"];
$("body").append("There are "+pies.length+" total pies.<br>");
pies.forEach(function(element,index){
	debugger;
	switch(element){
		case "Cherry": $("body").append(index+1+") "+element+": Yum!<br>");
		break;
		case "Rhubarb": $("body").append(index+1+") "+element+": Yuck<br>");
		break; // this is why a switch is better than an if statement.
		case "Banana": // this makes both Banana and Pumpkin have the same response
		case "Pumpkin": $("body").append(index+1+") "+element+": meh<br>");
		break;
	}
});
//breakpoint example, put inside the function
function doSomething(){
	$("body").append("<p>Paragraph</p>");
}
doSomething();
