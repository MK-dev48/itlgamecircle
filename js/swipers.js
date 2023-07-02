 'use strict';

 var img = new Array( //順番はこの順番
                      "images/slide4.png",
                      "images/slide1.png",
                      "images/slide2.png",
                      "images/slide3.png",
 );
 var element = document.getElementById("slideshow");
 var links = document.getElementById("slidelink");
 var count = -1;
 imgTimer();

 function imgTimer(){
   count++;
   if(count == img.length) count = 0;

   element.src = img[count];

   if(img[count] == "images/slide1.png"){
   links.href = "infomations.html";
 } else if (img[count] == "images/slide2.png") {
   links.href = "contents.html";
 }else if (img[count] == "images/slide3.png") {
  links.href = "contact.html";
 }else if (img[count] == "images/slide4.png") {
  links.href = "itlfest2023.html";
 }

 setTimeout("imgTimer()",7000);
 
}
