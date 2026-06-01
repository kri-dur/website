description = "Hi, I'm Krishna Durgavarjhula. I'm an incoming freshman at UC Berkeley building a career in Computer Science. I'm currently working at the Lift & Shift Foundation as a Web Design Intern, using full-stack web development and collaborating with others in an existing architecture to build an IDE tailored for veterans re-entering the workforce. I have also presented and co-authored a publication in IEEE along with a team of two, covering a working prototype of an eco-friendly smart cane system for seniors with terrain profiling, fall detection, pulse tracking, thermoelectric generators, and a caretaker mobile app. My other experience includes working with Python ML libraries related to autonomous driving at UC Berkeley's ROAR Academy, developing an Android app Breathe for asthmatics, like me, to track respiratory triggers, and teaching a self-made curriculum introducing web development to a class of twenty middle-schoolers at the Coding Tomorrow Initiative. I'm proficient in languages such as Java, Python, C++, HTML/CSS/JS, and MATLAB, and have worked with Node.js, NumPy, Tensorflow, Keras, and React. Overall, my experience includes iterative project design, group publications, autonomous systems, and tons of debugging and testing."
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
