let menu=document.querySelector('.menu-icon');
let navbar=document.querySelector('.menu');
menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
    bell.classList.remove('active');
} 

let bell=document.querySelector('.notification');
document.querySelector('#bell-icon').onclick = () =>{
    bell.classList.toggle('active');
}

var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay:5000,
        disabledOnInteraction:false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });
  window.onscroll=function() {mufunction()};
  function mufunction() {
    var winScroll=document.body.scrollTop||document.documentElement.scrollTop;
    var height = document.dovumentElement.scrollHeight - document.document.documentElement.clientHeight;
    var scrolled = (winScroll/height)*100;
    document.getElementById('#scroll-bar').style.width=scrolled+'%';
  }
  var loader;

  function loadNow(opacity) {
      if (opacity <= 0) {
          displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function() {
            loadNow(opacity - 0.01);
         }, 50);
      }
 }
  
  function displayContent() {
      loader.style.display = 'none';
      document.getElementById('content').style.display = 'block';
  }
  
  document.addEventListener("DOMContentLoaded", function() {
      loader = document.getElementById('loader');
      loadNow(1);
  });

  
var popup=document.getElementById('popup');
function ClosseSlide(){
  popup.classList.remove("open-slide")
}

$(".info-item .btn").click(function(){

  $(".container").toggleClass("log-in");
  
  }); 
$(".container-form .btn").click(function(){ 
  $(".container").addClass("active"); });