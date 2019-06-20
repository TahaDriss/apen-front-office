$(document).ready(function(){
    $(".test").css({"color":"#0b1216","height":"50px","font-weight":"bold"})
    $("button").css({"padding":"30px","max-height":"100px","marginLeft":"0px"});
    

    $("button").hover(function(){

        $(this).css({"background-color": "#0088c3"}).animate({
        "fontSize": "20px"        
       
    });
        }, 
        function(){
        $("button").css("background-color","#0b1216").animate({
        "fontSize": "16px"        
       
    });
        
        
    });
});