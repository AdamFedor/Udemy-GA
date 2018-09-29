$(document).ready(function(){
  initTodo();
  $("#tasks").on("click", ".task", function(event){
    var actionType = event.target.className;
    switch(actionType){
      case("task-text"):
        $(this).addClass("task-done");
        break;
      case("move-up"):
        $(this).prev().before(this);
        break;
      case("move-down"):
        $(this).next().after(this);
        break;
      case("complete"):
        $(this).remove();
        break;
    }
  });
  $("form").on("submit",function(event){
    event.preventDefault();
    // get value of #new-task and store it
    var newTaskText = $("#new-task").val();
    // add a new task item to #tasks
    if (newTaskText !== "" ){
      // initialize a new jQuery object from template
      var templateText = $("#task-template").text();
      var $newToDoItem = $(templateText);
      // add the appriorite task text to the new item
      $newToDoItem.find(".task-text").text(newTaskText);
      //append the item
      $("ol").append($newToDoItem);
      $("#new-task").text("");
    };
  });
  $("remove-complete").on("click",function(){
    $("task-done").remove();
  });
  $("#clear-list").on("click", function(){
    $("ol").empty();
  })
}); // unless images or js and images are loaded, this isn't needed if it's loaded at the bottom of the page.

function initTodo(){
  var testTasks = ["Eat a pizza", "Drive a car", "Run a marathon"];
  testTasks.forEach(function(taskText){
      var templateText = $("#task-template").text();
      var $newTodoItem = $(templateText);
      //add the appropriate task text to the new item
      $newTodoItem.find(".task-text").text(taskText);
      //append the item
      $("ol").append($newTodoItem);
  });
}
