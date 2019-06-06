function hideAllImg(){
  $(".fishinfo").hide();
  $(".birdinfo").hide();
  $(".spiderinfo").hide();
};
var testint;

function animalChoice(testInt) {
if (testInt === 1) {
  hideAllImg();
  $(".fishinfo").show();
} else if (testInt === 2) {
  hideAllImg();
  $(".birdinfo").show();
} else if(testInt === 3) {
  hideAllImg();
  $(".spiderinfo").show();
}
};

$(document).ready(function() {

$("img#fish").click(function(){
  testint = 1;
  animalChoice(testint);
});

$("img#bird").click(function(){
  testint = 2;
  animalChoice(testint);
});

$("img#spider").click(function(){
  testint = 3;
  animalChoice(testint);
});




});
