$(document).ready(function(){
    /* code by Shashidar reddy to loop and display the images */

    var image = document.getElementsByClassName("gallery");
    for(i=0;i<= images.length-1; i++) 
        image[0].innerHTML += `<img src="./images/square/${images[i].path}" alt="${images[i].title}"/>`;
    
        /* Code by Vinitha to create mouseenter handler */
           
        $("img").mouseenter(function(event){
            $(this).addClass("gray");
            var src=$(this).attr("src");
            var alt=$(this).attr("alt");
            var div = $("<div></div>").attr('id','preview');
            var img = $("<img></img>").attr('src',src.replace('square','medium')).attr('alt',alt);
            div.append(img);
            images.forEach(ele => {
                if (ele.title == $(this).attr('alt')) {
                    var p = $("<p></p>").html(ele.title+"</br>"+ele.city+", "+ele.country+" ["+ele.taken+"]");
                    div.append(p);
                }
            });
            
            $("body").append(div);

            $("#preview").css("left",event.pageX+30);
            $("#preview").css("top",event.pageY);
            $("#preview").fadeIn(1000); 
            
        });
 
     
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