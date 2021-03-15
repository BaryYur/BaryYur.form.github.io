function myFunction() {
    var x = document.getElementById("inp2");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
};

$(document).ready(function(){
    $('.cros').click(function(event){
     $('.container').toggleClass('undef');
    });
});


$(document).ready(function(){
    $('.eye').click(function(event){
     $('.eye').toggleClass('find');
    });
});

$(document).ready(function(){
    $('.open_form').click(function(event){
     $('.container').toggleClass('sees');
    });
});