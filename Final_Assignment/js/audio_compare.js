// function navigation bar collapsing
$(function(){
  $('#lookingDownOnYou').data('size','big');
});
// navigation bar collapsing details
$(window).scroll(function(){ /*working draft, looking for alternative for .scroll()*/
  if($(document).scrollTop() > 0) /*working draft, looking for alternative for .scrollTop()*/
{
  if($('#lookingDownOnYou').data('size') == 'big')
    {
    $('#lookingDownOnYou').data('size','small');
    $('#lookingDownOnYou').stop().animate({ /*experimental, looking for alternative for .animate()*/
      'padding-top' : 0,
      height:'90px'
    },300);
  }
}
else
  {
    if($('#lookingDownOnYou').data('size') == 'small')
      {
      $('#lookingDownOnYou').data('size','big');
      $('#lookingDownOnYou').stop().animate({ /*experimental, looking for alternative for .animate()*/
        'padding-top' : '25px',
        height:'141.219px'
      },100);
    }
  }
});

// run function for selection template
$(document).ready(function(){
  selectionHigh();
  selectionMed();
  selectionLow();
});

// function for selection template loaded
function selectionHigh(){
  var selectionTemplateVar = $("#selectionTop").text();
  var $selectionTopText = $(selectionTemplateVar);
  $(".replaceThisTop").append($selectionTopText);
}
function selectionMed(){
  var selectionTemplateVar = $("#selectionButtons").text();
  var $selectionTopText = $(selectionTemplateVar);
  $(".replaceThisMiddle").append($selectionTopText);
}
function selectionLow(){
  var selectionTemplateVar = $("#selectionBottom").text();
  var $selectionTopText = $(selectionTemplateVar);
  $(".replaceThisBottom").append($selectionTopText);
}
