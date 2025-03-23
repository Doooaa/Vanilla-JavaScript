function  getCookie(cookieName){
    if(arguments.length==0) throw "Error-> cookieName must be known";
    if(arguments.length>1) throw "Error-> enter cookieName only";
    var allcookies=document.cookie.split(';');
    for(var i=0;i<allcookies.length;i++){
     var cookie=allcookies[i].trim();;
     var Name=cookie.substring(0,cookie.indexOf('='));
     var Value=cookie.substring(cookie.indexOf('=')+1);
     
     if(cookieName==Name){ //name=v19;
        return  Name+'='+Value+';';
     }
    }
}

function setCookie(cookieName,cookieValue,{expiryDate})
{
    if(arguments.length==0) throw "Error-> cookie Name and value  must be known";
    if(arguments.length>3) throw "Error-> cookie Name and value and expiry date only"; 
    // var date=new Date();
    //  var ex=date.getTime()-expiryDate;
     document.cookie=cookieName+'='+cookieValue;
     if(expiryDate) document.cookie += '; expires='+expiryDate;
}


function deleteCookie(cookieName){
    if(arguments.length==0) throw "Error-> cookie Name must be known";
    if(arguments.length>1) throw "Error-> enter cookieName only";
   if( !hasCookie(cookieName)) throw "Error-> there is no cookie named"+cookieName;
    setCookie(cookieName, '', new Date(0));
}
function allCookieList(){
    if(arguments.length>0) throw "Error-> not needed arguments  for allCookieList";
    var arr=[];
   var allcookies=document.cookie.split(';');
   if(allcookies.length==0)throw "Error-> there is no cookies just now!";
   for(var i=0;i<allcookies.length;i++){
    var cookie=allcookies[i];
                                    //start ---end
    var cookieName=cookie.substring(0,cookie.indexOf('='));
    var cookieValue=cookie.substring(cookie.indexOf('=')+1);
    // console.log(cookieName+':'+cookieValue);
    arr.push({"name":cookieName, "value":cookieValue});
   }
    return arr;
}


function  hasCookie(cookieName){
   
//     var allcookies=document.cookie.split(';').trim();
//    for(var i=0;i<allcookies.length;i++){
//     var cookie=allcookies[i];
//     var Name=cookie.substring(0,cookie.indexOf('='));
//     if(Name==cookieName) return true;
//    }
//    return false;
if(arguments.length==0) throw "Error-> cookie Name must be known";
if(arguments.length>1) throw "Error-> enter cookieName only";

    var listCookies= allCookieList();
    if(listCookies.length==0)throw "Error-> there is no cookies just now!";
    for(i in listCookies)
    {
        if(i.name==cookieName) return true ;
    }
    return false;

}

