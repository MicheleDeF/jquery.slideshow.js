#jquery.slideshow.js

>SlideShow is a jQuery plug-in for  animated photo gallery.

###How to get started

>HTML Code

        <div id="box_slide">   
            
        <img src="image1.jpg" class="attuale">
        <img src="image2.jpg">
        <img src="image3.jpg">
        <img src="image4.jpg">
        <img src="image5.jpg">
            
        <ol class="indicators">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
       </ol>    
            
       </div>
       
       

>The images are contained in a div#box_slide and the first image is applied to the class ".attuale" and have a size of 700x400px, the list ol contains indicators of the number of the displayed image, add to the html version of the recent jquery and plug-in jquery.slideshow.js

    <script src="jquery-1.10.2.js"></script>
    <script src="jquery.slideshow.js"></script>

>and the style sheet _**style.css**_

>CSS Code

        div#box_slide{
        position: relative;
        width: 700px;
        height: 400px;
        margin-left: auto;
        margin-right: auto;
        border: 10px solid #fff;
       -moz-border-radius: 3px;
       -webkit-border-radius: 3px;
        border-radius: 3px;
       -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
        -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
                     }
                
        div#box_slide img{
        display: none;
        position: absolute;
        top: 0;left: 0;
        } 
                
       .attuale{}
              
       .sfondo{background-color: #fff;}
                  
        ol.indicators{
        position: absolute;
        list-style: none;
        }
                  
         ol.indicators li{
         float: left;
         border: 1px  solid #fff;
         width: 8px;
         height: 8px;
         margin-right: 5px;
        -moz-border-radius: 20px;
        -webkit-border-radius: 20px;
         border-radius: 20px;
         }

>JS Code         

    $(document).ready(function(){
    $('#box_slide').slideshow();
    });

>default speed of the time of appearance of an image and another is 4000 milliseconds, you can choose a different time interval using the value "in_speed" of the variable "default" of "jquery.slideshow.js ":

     $(document).ready(function(){
     $('#box_slide').slideshow({in_speed:2000});
     });
     
 
#Demo

[http://codepen.io/MicheleDeF/pen/JoOZaJ](http://codepen.io/MicheleDeF/pen/JoOZaJ)   
     
     
