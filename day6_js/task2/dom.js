      //center style
      var centerDiv = document.getElementById("header").parentNode;
      centerDiv.style.border = "3px solid blue";
      centerDiv.style.width = "100%";
       
      // header 
      var header =centerDiv.firstElementChild;

      //navigationDiv
      var navigationDiv=header.nextElementSibling;
      navigationDiv.style.textAlign="center";

      //image style
      var im=document.firstElementChild;
      im.style.position="relative";
      im.style.textAlign="end";
      
     
      var ulNode = navigationDiv.firstElementChild;
      if (ulNode && ulNode.tagName === "UL") {
          ulNode.style.listStyleType = "circle";
      } else {
          console.log("The first child is not a <ul> element.");
      }
   
      var nImg=document.createElement("img");
      nImg.src="dom.jpg";
      nImg.style.position="relative";
      nImg.style.paddingRight="1300px";
      centerDiv.append(nImg);