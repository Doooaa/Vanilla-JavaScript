
 var btn=document.getElementById("gen");


btn.addEventListener("click", function(){
var checkedRadio = document.querySelector("input[name=cardChoice]:checked");
var txt=document.getElementById("txt").value;
    if (checkedRadio&&txt) {
        console.log("Checked radio button:", checkedRadio);
       setCookie("img",`gws${checkedRadio.value}.jpg`,2/22/2033);
       setCookie("txt",txt,2/22/2033);

    } else {
        console.log("No radio button is selected.");
    }
   // var name=document.getElementById("").value;
    window.open("cardwindow.html");
   
});


