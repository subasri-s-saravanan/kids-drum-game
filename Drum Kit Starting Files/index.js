var nums=document.querySelectorAll(".drum").length;
for(var i=0;i<nums;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
    var bitoons=this.innerHTML;
    switch(bitoons){
    case "w":
        new Audio("sounds/tom-1.mp3").play();
        this.style.color="white";
        break;
     case "a":
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
        this.style.color="white";
        break;
     case"s":
        new Audio("sounds/tom-3.mp3").play();
        this.style.color="white";
         break;
    case"d":
        new Audio("sounds/tom-4.mp3").play();
        this.style.color="white";
        break;
    case "j":
        new Audio("sounds/crash.mp3").play();
        this.style.color="white";
        break;
    case"k":
        new Audio("sounds/kick-bass.mp3").play();
        this.style.color="white";
        break;
    case"l":
        new Audio("sounds/snare.mp3").play();
        this.style.color="white";
        break;
        default:
            console.log("unknow button");
    }});
}



