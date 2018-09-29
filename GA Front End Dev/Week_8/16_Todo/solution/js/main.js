$(document).ready(function(){
    initTodo();

    $("#tasks").on("click", ".task", function(event){
        var actionType = event.target.className;
        switch(actionType){
            case("task-text"):
                //mark the task complete
                $(this).addClass("task-done");
                break;
            case("edit-task"):
                // grab the current task text and input
                var $taskText = $(this).find(".task-text");
                var $taskForm = $(this).find("form");
                var $taskInput = $taskForm.children("input");
                // get the value of the task
                var currentTaskText = $taskText.text();
                // set the input's value to that text
                $taskInput.val(currentTaskText);
                // swap the visibility of the text and the input
                $taskText.addClass("hidden");
                $taskForm.removeClass("hidden");
                // focus on the input
                $taskInput.focus();
                break;
            case("move-up"):
                //reorder by moving up
                $(this).prev().before(this);
                break;
            case("move-down"):
                //reorder by moving down
                $(this).next().after(this);
                break;
            case("complete"):
                //remove the task
                $(this).remove();
                break;
        }
    });

    // add a new delegate for submit events
    // this indicates that a task as been edited
    $("#tasks").on("submit", "form", function(event){
        event.preventDefault();
        // vanilla way of grabbing a form value. Note the name attribute
        var newTaskText = this["edit-task-text"].value;
        var $taskText = $(this).siblings(".task-text");
        $taskText.text(newTaskText);
        $(this).addClass("hidden");
        $taskText.removeClass("hidden");
    })

    $("form").on("submit", function(event){
        event.preventDefault();

        //get the value of #new-task and store it
        var newTaskText = $("#new-task").val();

        if (newTaskText !== ""){
            //add a new task item to #tasks
            //initalize a new jquery object from our template
            var templateText = $("#task-template").text();
            var $newTodoItem = $(templateText);
            //add the appropriate task text to the new item
            $newTodoItem.find(".task-text").text(newTaskText);
            //append the item
            $("ol").append($newTodoItem);

            $("#new-task").val("");
        }
    });

    $("#remove-completed").on("click", function(){
        var completedTasks = $(".task-done").remove();
    });

    $("#clear-list").on("click", function(){
        $("ol").empty();
    })
});

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