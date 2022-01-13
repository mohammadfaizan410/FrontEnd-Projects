$(function(){
    var numArr= $(".num");
    var i = 0;
    //console.log(numArr);
    numArr[0].style.backgroundColor = "blue";
    
    $("#nxt").click(function(){
        if(i < 3){
            numArr[i].style.backgroundColor = "white";
            numArr[i+1].style.backgroundColor = "blue";
            i++;
        }
    })
    $("#prev").click(function(){
        if(i > 0){
            numArr[i].style.backgroundColor = "white";
            numArr[i-1].style.backgroundColor = "blue";
            i--;
        }
    })
})