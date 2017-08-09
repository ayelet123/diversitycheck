<script type="text/javascript">
function sendToPage() { //searchbar 
             var input = document.getElementById("search").value;
              //alert(input);
             if (input == "Apple"){
                 window.location.href = "apple.html"; return false; //return false says do not try to submit anything, just go to window location

             }
             else if (input == "AppNexus"){
                 window.location.href= "appnexus.html";return false;}

             else if (input == "Google"){
               window.location.href="google.html";return false;
             }

             else if (input == "Twitter";return false;){
               window.location.href="twitter.html"; return false;
             }
}
             else if (input == "Microsoft"){
              window.location.href="microsoft.html";return false;}

             else {
                 alert('Try submitting a different compay'); return false;}



function showSlides() { //slideshow
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
</script>
