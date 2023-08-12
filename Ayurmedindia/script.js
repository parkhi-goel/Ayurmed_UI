

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("Slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
  })
}

if (close) {
  close.addEventListener('click', () => {
      nav.classList.remove('active');
})
}

var testimonialItems = document.querySelectorAll(".item label");
var timer;
function cycleTestimonials(index) {
   timer = setTimeout(function() {
    var evt;
    if (document.createEvent){
      //If browser = IE, then polyfill
      evt = document.createEvent('MouseEvent');
      evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    } else {
      //If Browser = modern, then create new MouseEvent
      evt = new MouseEvent("click", {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: 20
          });
    }
    var ele = "." + testimonialItems[index].className;
    var ele2 = document.querySelector(ele)
    ele2.dispatchEvent(evt);
    index++; // Increment the index
    if (index >= testimonialItems.length) {
      index = 0; // Set it back to `0` when it reaches `3`
    }
    cycleTestimonials(index); // recursively call `cycleTestimonials()`
    document.querySelector(".testimonials").addEventListener("click", function() {
      clearTimeout(timer); //stop the carousel when someone clicks on the div
    });
  }, 2000); //adjust scroll speed in miliseconds
}
//run the function
cycleTestimonials(0);

function changeText() {
  var mrp = document.getElementById("mrp");
  if (mrp.innerHTML === "<h5>MRP:&nbsp;<strike>₹400</strike>&nbsp;&nbsp;₹200</h5>") {
    mrp.innerHTML = "<h5>MRP:&nbsp;<strike>₹800</strike>&nbsp;&nbsp;₹400</h5>";
  }
  else if(mrp.innerHTML === "<h5>MRP:&nbsp;<strike>₹1200</strike>&nbsp;&nbsp;₹800</h5>"){
    mrp.innerHTML = "<h5>MRP:&nbsp;<strike>₹800</strike>&nbsp;&nbsp;₹400</h5>";
  }
}
function changeText1() {
  var mrp = document.getElementById("mrp");
  if(mrp.innerHTML === "<h5>MRP:&nbsp;<strike>₹1200</strike>&nbsp;&nbsp;₹800</h5>"){
    mrp.innerHTML = "<h5>MRP:&nbsp;<strike>₹400</strike>&nbsp;&nbsp;₹200</h5>";
  }
  else if(mrp.innerHTML === "<h5>MRP:&nbsp;<strike>₹800</strike>&nbsp;&nbsp;₹400</h5>")
  {
    mrp.innerHTML = "<h5>MRP:&nbsp;<strike>₹400</strike>&nbsp;&nbsp;₹200</h5>";
  }

}
function changeText2() {
  var mrp = document.getElementById("mrp");
  if(mrp.innerHTML === "<h5>MRP:&nbsp;<strike>₹400</strike>&nbsp;&nbsp;₹200</h5>"){
    mrp.innerHTML = "<h5>MRP:&nbsp;<strike>₹1200</strike>&nbsp;&nbsp;₹800</h5>";
  }

  else if(mrp.innerHTML === "<h5>MRP:&nbsp;<strike>₹800</strike>&nbsp;&nbsp;₹400</h5>")
  {
    mrp.innerHTML = "<h5>MRP:&nbsp;<strike>₹1200</strike>&nbsp;&nbsp;₹800</h5>";
  }
}

var cartItems = [];

function addToCart() {
	var item = {
		name: 'Product Name',
		price: 10
	};
	cartItems.push(item);
	alert('Item added to cart!');
	console.log(cartItems);
}



function show(){
  let image = document.getElementById("image");
  imgage.scr = "nweb/Ayurmed-Calcium-Mockup-1-600x600-removebg-preview.png"
}


var a;
function show_hide()
{
  if (a==1)
  {
    document.getElementById("product1").style.display="inline";
    return a=0;
  }
  else{
    document.getElementById("product1").style.display="none";
    return a=1;
  }
}


$(document).ready(function(){
var $list = $(".card-product-box .card").hide()
})














