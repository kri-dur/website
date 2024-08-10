description = "I am a rising 11th grader focused on acquiring knowledge and experience in engineering, mathematics, and graphic design to pursue a career in computer science. I'm passionate about volunteering with a strong work ethic and organizational & leadership qualities. I pursue personal projects to not only build my experience, but also help the community around me."
var i = 0;
var speed = 25;
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);

function typing(){
  if (i<description.length){
    var char = description.charAt(i);
    document.getElementById("descript").innerHTML += char;
    i+=1;
    if (char == "."){
      setTimeout(typing, 75);
    }else if (char == " "){
      setTimeout(typing, 50);
    }else{
      setTimeout(typing, 25);
    }
  }
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000);
}

window.addEventListener("scroll", function() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.getElementById("header").style.boxShadow = "0 2px 4px 0 rgba(0,0,0,.2)";
  } else {
    document.getElementById("header").style.boxShadow = "none";
  }
});