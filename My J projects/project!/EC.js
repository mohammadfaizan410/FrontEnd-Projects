$(function(){
    var i = 1;
    //width control
    var incrWidth="400px";
    var decrWidth="100px";
   // alert("working");
   //function to add images to each div 
   $("div").each(function(x){
     $(this).css("backgroundImage"," url(img"+i+".jpg)")
     i++;
    });

    //click function to expand clicked card
    $("div").click(function(){
        $("div").animate({"width" : "100px","border-radius" : "400px"},200);
       if($(this).css("width")=="100px"){
            //if div clicked revert previous and resize this one 
          
            $(this).animate({"width" : "400px","border-radius" : "0px"},1000);
       } 
      
    })


})