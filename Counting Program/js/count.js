//ask for dogs name pop-up and confirm then display it on html
var name=prompt("What's your dogs name");
$(".greet").text("Hi " + name + ", let me teach u how to count")
window.alert("are you sure the name '" + name + "' is what you really want to name your dog?")

//first input box on html -- counting by 1's
$(".button1").on("click", function() {
    var num = $(".count1").val()
        alert("really? " + num + " is all you got?")
        $(".numbers1").empty()
        for (var n = 0; n <= num; n++) {
        $(".numbers1").append( n + "<br>");
        }
})

//second input box on html -- counting by 2's
$(".button2").on("click", function() {
    var num = $(".count2").val()
    alert("do you really want me to count " + num + " by 2??? isn't that too much?")
    $(".numbers2").empty()
    for (var n = 0; n <= num; n+=2) {
        $(".numbers2").append( n + "<br>");
    }
})

//for the click here function -- everytime i click the 'here' word it adds 1
$(document).ready(function(){
    var i = 0;
    $("code").click(function() {
      $(".bilang").text(i += 1);
      $(".bilang").show();
    })
})


