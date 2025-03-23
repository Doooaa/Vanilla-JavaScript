


var txt=document.getElementsByTagName("p")[0];
var ff=document.querySelectorAll("input[name=font]");
var align=document.querySelectorAll("input[name=text-align]");
var lineHeight=document.querySelectorAll("input[name=line-hieght]");
var letterSpacing=document.querySelectorAll("input[name=letter-spacing]");
var textindent=document.querySelectorAll("input[name=text-indent]");
var texttransform=document.querySelectorAll("input[name=text-transform]");
var textdecoration=document.querySelectorAll("input[name=text-decoration]");



ff.forEach((radio) => {
    radio.addEventListener("click", () => {
      txt.style.fontFamily = radio.value;
      radio.style.accentColor = "red";
    });
  });


align.forEach(function (radio){
     radio.addEventListener("click",function(){
            txt.style.textAlign=radio.value;
            radio.style.accentColor = "red";

    
     })
})

lineHeight.forEach(function (radio){
     radio.addEventListener("click",function(){
            txt.style.lineHeight=radio.value;
            radio.style.accentColor = "red";
    
     })
})
letterSpacing.forEach(function (radio){
     radio.addEventListener("click",function(){
            txt.style.letterSpacing=radio.value;
            radio.style.accentColor = "red";
    
     })
})
textindent.forEach(function (radio){
     radio.addEventListener("click",function(){
            txt.style.fontSize=radio.value;
            radio.style.accentColor = "red";
    
     })
})
texttransform.forEach(function (radio){
     radio.addEventListener("click",function(){
            txt.style.textTransform=radio.value;
            radio.style.accentColor = "red";
    
     })
})
textdecoration.forEach(function (radio){
     radio.addEventListener("click",function(){
            txt.style.textDecoration=radio.value;
            radio.style.accentColor = "red";
    
     })
})
