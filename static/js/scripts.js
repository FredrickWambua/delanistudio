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
    $("#work1").mouseover(function(){
        $("#overlay").show();
    });
    $("#work1").mouseout(function(){
        $("#overlay").hide()
    })
    $("#work2").mouseover(function(){
        $("#overlay1").show();
    });
    $("#work2").mouseout(function(){
        $("#overlay1").hide()
    })
    $("#work3").mouseover(function(){
        $("#overlay2").show();
    });
    $("#work3").mouseout(function(){
        $("#overlay2").hide()
    })
    $("#work4").mouseover(function(){
        $("#overlay3").show();
    });
    $("#work4").mouseout(function(){
        $("#overlay3").hide()
    })
    $("#work5").mouseover(function(){
        $("#overlay4").show();
    });
    $("#work5").mouseout(function(){
        $("#overlay4").hide()
    })
    $("#work6").mouseover(function(){
        $("#overlay5").show();
    });
    $("#work6").mouseout(function(){
        $("#overlay5").hide()
    })
    $("#work7").mouseover(function(){
        $("#overlay6").show();
    });
    $("#work7").mouseout(function(){
        $("#overlay6").hide()
    })
    $("#work8").mouseover(function(){
        $("#overlay7").show();
    });
    $("#work8").mouseout(function(){
        $("#overlay7").hide()
    })
})

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