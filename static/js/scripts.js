$(document).ready(function(){
   $("#imagedesign").click(function(){
       $("#design").show(1000)
    //    $("#design").fadeOut()
   });
     $("#imagedev").click(function(){
       $("#dev").show(1000)
   });
   $("#imageproduct").click(function(){
    $("#product").show(1000)
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
    $('.images').hover(function () {
        $(this).stop().animate({
            opacity: .4
        }, 200);
        $("#overlay").removeClass('hide');
    }, function () {
        $(this).stop().animate({
            opacity: 1
        }, 500);
        $('.text').addClass('hide');
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