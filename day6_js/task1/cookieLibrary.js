function  getCookie(cookieName){

    var allcookies=document.cookie.split(';');
    for(var i=0;i<allcookies.length;i++){
     var cookie=allcookies[i].trim();;
     var Name=cookie.substring(0,cookie.indexOf('='));
     var Value=cookie.substring(cookie.indexOf('=')+1);
     
    //  if(cookieName==Name){ //name=v19;
    //     return  Name+'='+Value+';';
    //  }
     if(cookieName==Name){ //name=v19;  //==> v19
        return  Value;
     }
    }
}

function setCookie(cookieName,cookieValue,{expiryDate})
{
    // var date=new Date();
    //  var ex=date.getTime()-expiryDate;
     document.cookie=cookieName+'='+cookieValue;
     if(expiryDate) document.cookie += '; expires='+expiryDate;
}


function deleteCookie(cookieName){
    setCookie(cookieName, '', new Date(0));
}
function allCookieList(){
    var arr=[];
   var allcookies=document.cookie.split(';');
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
    var listCookies= allCookieList();
    for(i in listCookies)
    {
        if(i.name==cookieName) return true ;
    }
    return false;

}

