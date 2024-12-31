$(document).ready(function(){
    $('#Button1').hover(function(){
        $(this).text("Yes");
        $(this).css("background-color","rgb(54, 255, 47)");
        $('#Button2').text("No");
        $('#Button2').css("background-color","red");
    });
    $('#Button2').hover(function(){
        $(this).text("Yes");
        $(this).css("background-color","rgb(54, 255, 47)");
        $('#Button1').text("No");
        $('#Button1').css("background-color","red");
    });
    $("button").click(function(){
        alert("I KNEW IT!");
    })
})
