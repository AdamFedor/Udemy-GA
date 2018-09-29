function updateAnimation(){
  var form = document.forms[0];
  var animationElement = document.querySelector(".thing-to-spin");

  var animationIterationCount = form["iteration-count"].value;
  var animationDirection = form["direction"].value;
  var animationDuration = form["duration"].value;
  var animationTimingFunction = form["timing-function"].value;
  var animationPlayState = form["play-state"].value;
  var animationFillMode = form["fill-mode"].value;

  animationElement.style.animationIterationCount = animationIterationCount;
  animationElement.style.animationDirection = animationDirection;
  animationElement.style.animationDuration = animationDuration; 
  animationElement.style.animationTimingFunction = animationTimingFunction;
  animationElement.style.animationPlayState = animationPlayState;
  animationElement.style.animationFillMode = animationFillMode;
}

document.forms[0].addEventListener("change", updateAnimation)
document.forms[0].addEventListener("submit", function(event){
  event.preventDefault();
  updateAnimation();
});