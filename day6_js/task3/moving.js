var img1 = document.images[0];
var img2 = document.images[1];
var img3 = document.images[2];
var reset = document.getElementById("reset");
var stop = document.getElementById("stop");
var timer;
let direction = 1, direction1 = 1, direction2 = 1;

function atuoPlay() {
    var l1 = parseInt(getComputedStyle(img1).left);
    var l2 = parseInt(getComputedStyle(img2).left);
    var t3 = parseInt(getComputedStyle(img3).top);
    let maxlength =520;
    let maxlength1 =440;
    let maxlength2 =420;
  timer =setInterval(function () {
    l1+=10*direction;
    
    if(l1>=maxlength) direction=-1;
    if(l1<=0) direction=1;
    img1.style.left = l1 + "px";



    //t2
    l2+=10*direction1;
    if(l2>=maxlength1) direction1=-1;
    if(l2<=-80) direction1=1;
    img2.style.left = l2 + "px";

    //t3
    t3+=10*direction2;
    if(t3>=maxlength2) direction2=-1;
    if(t3<=0) direction2=1;
    img3.style.top = t3 + "px";
  }, 50);
}
stop.addEventListener('click',function(){
  var e = document.getElementById("stop");
  if( e.innerHTML != "Play")
{  clearInterval(timer);}
  else 
 {
    atuoPlay() ;
 }
  e.innerHTML = e.innerHTML === "Play"? "Stop" : "Play";

});
reset.addEventListener("click",()=>{
   img1.style.left= "0px";
   img2.style.left= "440px";
   img3.style.top= "420px";
    clearInterval(timer);
   atuoPlay() ;
 
});

atuoPlay() ;
