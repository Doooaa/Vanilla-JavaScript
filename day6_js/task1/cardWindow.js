

onload=function()
{
   //img
    var img = document.createElement("img"); 
    img.style.width="300px";
    img.src = "CardMaker/" + getCookie("img");
    console.log(img);//C:\Users\Doaa Gamal\Desktop\html_css_taskes\day1\day6_js\task1\CardMaker
    document.body.append(img);


   //txt
  
   var txt = document.createElement("p"); 
   txt.innerHTML = `${getCookie("txt")} <br>`;
   document.body.append(txt); 

   
    var btnClose=document.createElement("button");
    btnClose.innerHTML="Close";
    btnClose.id="close";
    document.body.append(btnClose);
    //close func
    btnClose.addEventListener("click", function(){
    deleteCookie("txt");
    window.close();});
      
     

}
//   var h1=document.createElement("div").innerHTML="</br>";
//     document.body.append(h1);  <button style="display: block;" id="close">Close</button>








