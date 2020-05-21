$(document).ready(function () {
let world=$('#changeFont');
 world.css('color','#34e5eb');
 let  fontFamilys=['Cursive','monospace','fangsong', 'fantasy','serif','system-ui']
 var  index=0;
function getRandomFont(){
     if(index===fontFamilys.length){
         index=0;
     }
    world.css("font-family",fontFamilys[index]);
     index++;
setInterval(getRandomFont,3000);

 }
 getRandomFont()


 
});