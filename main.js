// set the elements that we need to variabels
// var ourtext1 = document.getElementById("ourtext");
// var ourtext2 = document.getElementById("ourtext2");
// var home = document.getElementById("home");
// ourtext1.classList.add('hidden');
// ourtext2.classList.add('hidden2');

// function showDropdown() {
//   ourtext1.style.display = "block";
// }

// function closeDropdown() {
//   if (home.onmouseover == true && li.onmouseover == true ) {
//     ourtext1.style.display = "none";

//   }
// }

// start view dropdown
// var button = document.getElementById('dropdown-trigger'),
//     dropdown = document.getElementById('transdiv'),
//     dropdown_ = document.getElementById('ourtext');
// button.onmouseover = displayDropdown;
// button.onmouseout = removeDropdown;
// for(var i = 0; i < dropdown_.length; i++){

//     if(dropdown_[i].className === 'dropdown_'){
//         dropdown_[i].onmouseover = function(){
//             var drop = this.getElementById('transdiv')[0];
//             // drop.className = 'sub-dropdown';
//         }
//         dropdown_[i].onmouseout = function(){
//             var drop = this.getElementById('transdiv')[0];
//             // drop.className = 'sub-dropdown none';
//         }
//     }
// }
// function displayDropdown() {
//   dropdown.className = 'transdiv';
// }
// function removeDropdown() {
//   dropdown.className = 'transdiv none';
// }
// end view dropdown

var app = new Vue({
  el: "#app",
  data: {
    listOne: false,
    listTwo: false,
    listThree: false,
    listFour: false,
    listFive: false,
    listsix: false,
  },
});

// home.onmouseover = showDropdown ;
// home.onmouseleave = closeDropdown ;

// document.addEventListener("mouseover" , showDropdown)
// document.addEventListener("mouseleave" , closeDropdown)

// function showDropdown() {
//   if (home.onmouseover == true){
//       ourtext1.classList.remove('hidden');
//       ourtext1.style.display = "block";
//   }
// }
// function closeDropdown(){
//   if (home.onmouseleave == true){
//       ourtext1.classList.add('hidden');
//       ourtext1.style.display = "none";
//   }
//  }
// // toggle the class hidden for ourtext element
// function myFunction() {
//   ourtext1.classList.toggle("hidden");
// }

// // toggle the class hidden for ourtext2 element
// function myFunction2() {
//   ourtext2.classList.toggle("hidden2");
// }

// // whenever the user click an element that is not include in the li (link1, link2 and their childrens) in the nav this will fire
// document.addEventListener('click', (e) => {
//   if (!e.target.matches('.l2') && !e.target.matches('.l') && !e.target.matches('.l2 a') && !e.target.matches('.l a')) {
//     ourtext1.classList.add('hidden');
//     ourtext2.classList.add('hidden2');
//   }
// })

// document.addEventListener('click', (e) => {
//   if (!e.target.matches('.l2') && !e.target.matches('.l') && !e.target.matches('.l2 a') && !e.target.matches('.l a')) {
//     ourtext1.classList.add('hidden');
//     ourtext2.classList.add('hidden2');
//   }
// })

// ourtext1.onmouseover = function(){
//   if (e.target('.l2') && e.target('.l2 a')) {
//   ourtext2.classList.remove('hidden2');
//   }
// }
// ourtext2.onclick = function(){
//   ourtext1.classList.remove('hidden');
// }
// document.addEventListener('hover', (e) => {
//   if (e.target.matches('.l2') && e.target.matches('.l2 a')) {
//     ourtext1.classList.remove('hidden');
//     // ourtext2.classList.add('hidden2');
//   }
// })

// function myFunction() {
//     document.getElementById("ourtext").classList.toggle("hidden");
//   }
// window.onclick = function(e) {
//     if (!e.target.matches('.l')) {
//     var myDiv= document.getElementById("ourtext");
//       if (!myDiv.classList.contains('hidden')) {
//         myDiv.classList.add('hidden');
//       }
//     }
//   }
//   myFunction2();
//   function myFunction2() {
//     document.getElementById("ourtext2").classList.toggle("hidden2");
//   }
// window.onclick = function(e) {
//     if (!e.target.matches('.l2')) {
//     var myDiv= document.getElementById("ourtext2");
//       if (!myDiv.classList.contains('hidden2')) {
//         myDiv.classList.add('hidden2');
//       }
//     }
//   }

//
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 10000); // Change image every 2 seconds
}
