#jquery.slideshow.js

>SlideShow è un plug-in jquery per fotogallery animata.

###Come iniziare

> Codice HTML

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
       
       

> Le immagini sono contenute in un div#box_slide e alla prima immagine viene applicata la classe ".attuale" ed hanno una dimensione di 700x400px, l'elenco ol contiene gli indicatori del numero dell'immagine visualizzata, aggiungere alla pagina html la versione recente di jquery e il plug-in jquery.slideshow.js

    <script src="jquery-1.10.2.js"></script>
    <script src="jquery.slideshow.js"></script>

> e il foglio di stile _**style.css**_

> Codice css

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

> Codice JS          

    $(document).ready(function(){
    $('#box_slide').slideshow();
    });

> di default la velocità dell'intervallo di tempo di apparizione di un'immagine ed un'altra è 4000 millisecondi, si può scegliere un intervallo di tempo diverso tramite il valore "in_speed" della variabile di "default" di "jquery.slideshow.js":

     $(document).ready(function(){
     $('#box_slide').slideshow({in_speed:2000});
     });
     
     
     
     
Demo

[fotogallery.html](http://micheledefalco.altervista.org/slideshow/fotogallery.html)
