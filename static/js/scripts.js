$(document).ready(function(){
   $("#imagedesign").click(function(){
       $("#design").show();
       $("#dev").hide();
       $("#product").hide();
   });
     $("#imagedev").click(function(){
       $("#dev").show();
       $("#design").hide();
       $("#product").hide();
   });
   $("#imageproduct").click(function(){
    $("#product").show();
    $("#dev").hide();
    $("#design").hide();
});
});

// $(document).ready(function(){
//     $(".images").hover(function(){
//         $(this).stop().animate({opacity: .4},200);
//         $(".text").show();
//     }, function(){
//         $(this).stop().animate({opacity:1},500);
       
//     });
  
// });

$(document).ready(function () {
    $(".portfolio .images").hover(function () {
        $(this).stop().animate({
            opacity: .4
        }, 200);
        $(".text").removeClass("hide");
    }, function () {
        $(this).stop().animate({
            opacity: 1
        }, 500);
        $(".hide").addClass("text");
    });
    
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