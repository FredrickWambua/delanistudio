$(document).ready(function(){
   $("#imagedesign").click(function(){
       $("#design").show(1500)
    //    $("#design").fadeOut()
   });
     $("#imagedev").click(function(){
       $("#dev").show(1500)
   });
   $("#imageproduct").click(function(){
    $("#product").show(1500)
});
});

$(document).ready(function(){
    $(".images").animate({
        opacity: 1
    });
    $(".images").hover(function(){
        $(this).stop().animate({opacity: .4},200);
    }, function(){
        $(this).stop().animate({opacity:1},500)
    });
    $()
});

$(document).ready(function(){
    $("form#theform").submit(function(event){
        var name = $("input#name").val();
        var email = $("input#email").val();
        var message = $("input#textmessage").val();
        if ($("input#name").val() && $("input#email").val()){
            alert(name + ", we have received your message. thank you for reaching out to us.");
        }
        else{
            alert("Please enter your name and email");
        }
        event.preventDefault();
    });
});