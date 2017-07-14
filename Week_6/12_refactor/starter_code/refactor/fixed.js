//Use variables example
var first_name="William";
var last_name="Neely";
$("body").append("<img src='images/Will.png' alt='"+first_name+"\'s picture'><p>The instructor for this course is "+first_name+" "+last_name+". "+first_name+" has a degree in Physics from Southwestern College.</p>");

//Use functions example
function createLi(myLiText){
	$("#container>ol").prepend("<li>"+myLiText+"</li>");
}

createLi("Milk");
createLi("Cookies");
createLi("Sugar");
createLi("Bananas");
createLi("Gatorade");

//Use Arrays
var groceries=["Milk","Cookies","Sugar","Bananas","Gatorade"];
groceries.forEach(createLi);




//Combine jQuery selectors
$("#container,#main").css("width","960px");






//Combine multiple jQuery css, attr, etc changes
$("#container,#main").css({
    "width":"960px",
    "background":"red",
    "color":"purple"
});

//Chain jQuery function calls
$("input").css("width","200px").attr("placeholder","My placeholder").before("<label>My input</label>");
