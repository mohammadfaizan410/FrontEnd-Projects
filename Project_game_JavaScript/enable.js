$(function(){
    //timer for initial count!
    localStorage.clear();
    //Problems : for some reason, if I play fast enough, the number of black tiles decrease! Since my Macbook uses F5 differently I changed it to restart using "Enter" key! 
    var timer = setInterval(decrCounter, 1000);
    var tdArray=$("td");
    var prevScore = localStorage.getItem("#highScore");
    prevScore = prevScore === null ? 0 : prevScore ;
    $("#highScore").text(prevScore);

    var barArray = [1,2,3,4,5];
    var clkScore;
    var total = 0;
    var gameTime = 15;
    console.log(barArray);
    $("#initCount").text(counter);
    
    var counter = 3;
            var a = Math.floor(Math.random() * 15);
            var b = Math.floor(Math.random() * 15);
            var c = Math.floor(Math.random() * 15);
            while(a==b ){
                a = Math.floor(Math.random() * 15);
                //b = Math.floor(Math.random() * 15);
                //c = Math.floor(Math.random() * 15);
            }
            while(a==c ){
                c = Math.floor(Math.random() * 15);
                //b = Math.floor(Math.random() * 15);
                //c = Math.floor(Math.random() * 15);
            }

            while(b==c ){
                b = Math.floor(Math.random() * 15);
                //b = Math.floor(Math.random() * 15);
                //c = Math.floor(Math.random() * 15);
            }
            tdArray[a].style.backgroundColor = "black";
            tdArray[b].style.backgroundColor = "black";
            tdArray[c].style.backgroundColor = "black";
    function decrCounter(){
        gameTime--;
        $("#initCount").text(counter);
        if(counter > -1)
        counter--;    
        if(counter == -1){
            let width = parseInt($("#inner").css("width"));
            tdArray = $("td");
            if(width!=0){
            $("#container").fadeOut(100);
            $("#second").fadeIn(2000);
            $("#scores").fadeIn(2000);
            $("#tap").fadeOut(2000);
           
        
            $("#time").text(gameTime);
            $("#Score").text(total);

            }
            
            if(width > 0 || gameTime==0){
                var newWidth = parseInt(width) - 80;
                $("#inner").css("width",+ newWidth +"px");

                $("td").click(function(){
                        
                        
                        if($(this).is(tdArray[a])){
                            
                            $(this).animate({backgroundColor : "rgb(152,251,152)"},300);
                            $(this).animate({backgroundColor : "white"},500); 
                            $(this).text("+" + newWidth/40)
                            setTimeout(() => {$(this).text("")}, 500);
                            //$(this).text("")  
                            a = Math.floor(Math.random() * 15);
                            while(a == b || a==c ){
                                a = Math.floor(Math.random() * 15);
                            }
                            tdArray[a].style.backgroundColor = "black";
                            $("#inner").css("width","400px");
                            total += newWidth/40;
                            $("#Score").text(total); 
                              
                        }
                        if($(this).is(tdArray[b])){
                           
                            $(this).animate({backgroundColor : "rgb(152,251,152)"},300);
                            $(this).animate({backgroundColor : "white"},300); 
                            $(this).text("+" + newWidth/80 )
                            setTimeout(() => {$(this).text("")}, 300);
                           // $(this).text("")

                        b = Math.floor(Math.random() * 15);
                        while(b == a || b == c ){
                           b = Math.floor(Math.random() * 15);
                        }
                        tdArray[b].style.backgroundColor = "black";
                        $("#inner").css("width","400px");
                        total += newWidth/40;
                        $("#Score").text(total);
                        
                        }
                        if($(this).is(tdArray[c])){
                            
                            $(this).animate({backgroundColor : "rgb(152,251,152)"},300);
                            $(this).animate({backgroundColor : "white"},500);
                            $(this).text("+" + newWidth/80 );
                            setTimeout(() => {$(this).text("")}, 300);
                            //$(this).text("") 

                        c = Math.floor(Math.random() * 15);
                       while(c == a || c==b){
                            c = Math.floor(Math.random() * 15);
                        }
                        tdArray[c].style.backgroundColor = "black";
                        $("#inner").css("width","400px");
                        total += newWidth/40; 
                        $("#Score").text(total);


                        }


                })
                    
                }

                if(width==0 || gameTime==0){
                    $("#second").fadeOut(2000);
                    $("#scores").fadeOut(2000);
                if(total > localStorage.getItem("#highScore")){
                    localStorage.setItem("#highScore", total)
                    $("#highScore").text(total);
                    $("#highMsg").fadeIn();
                    $("#playAgain").fadeIn();
                    $.confetti.start();
                    setTimeout(() => {
                     $.confetti.stop();
                    }, 2000)
                    $(this).remove()


                }
                else{
                localStorage.setItem("#highScore", prevScore)
                $("#highScore").text(prevScore);
                $("#timeup").fadeIn();
                $("#playAgain").fadeIn();

                }  

                    clearInterval(timer);
                    timer = null;
                    if(timer==null){
                        document.addEventListener("keypress",function(event){
                            if(event.code=="Enter")
                                location.reload();
                        })
                    }        

            }
        }
    }
        

    

    


})