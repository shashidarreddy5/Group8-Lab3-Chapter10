$(document).ready(function(){
    /* code by Shashidar reddy to loop and display the images */

    var image = document.getElementsByClassName("gallery");
    for(i=0;i<= images.length-1; i++) 
        image[0].innerHTML += `<img src="./images/square/${images[i].path}" alt="${images[i].title}"/>`;
    
     
    /* Code by Shashidar reddy for mousemove and mouseleave events */
        $(".gallery img").mousemove(function(event){  
            $("#preview").css("left",event.pageX+30);
            $("#preview").css("top",event.pageY);
          
        });
        
        $(".gallery img").mouseleave(function(){
            $("#preview").remove();
            $(this).removeClass("gray");
        }); 
    });