// for the landing animation
        $("#background2").animate({right: '0px',
        bottom:'0px',
        width: '50%',
        opacity:'10%'},1000);       
        
        function forBG3(){
            $("#background3").animate({left:'0',
        top: '150px',
        opacity: '7%',
        height: '45%'
        },500);

       
        $("#background3").animate({
            top: "0px",
            opacity: '10%',
            height:'60%'
        }, 500);
        }

        setTimeout(forBG3, 800);

        var video = document.getElementById("myVideo");
        var btn = document.getElementById("myBtn");

        
        // for hamburger menu
        function myMenu() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
}

        //video pause button
        function myFunction() {
        if (video.paused) {
            video.play();
            btn.innerHTML = "<i class='fas fa-pause-circle'></i>";
            btn.title="Pause";
        } else {
            video.pause();
            btn.innerHTML = "<i class='fas fa-play-circle'></i>";
            btn.title="Play";
        }
        }

        //Get the button
        var mybutton = document.getElementById("myBtn2");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
        }

        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        }

        $( document ).ready(function() {
            new WOW().init();
          });