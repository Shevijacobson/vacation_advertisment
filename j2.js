
let arr_vacation2 = localStorage.getItem('arr');
arr_vacation2 = JSON.parse(arr_vacation2)


let icon='';
let strparam = location.search;
let newparams = new URLSearchParams(strparam);
let item = arr_vacation2[newparams.get('id')];

let details_vacation = `<h1>${item.name}</h1>`;
let container_slide= "";
let i = 0;
let string = "";
for (i = 0; i < item.img_arr.length; i++)
  container_slide+=
    `<div class="mySlides">
  <img src="${item.img_arr[i]}" style="width:100%">
  </div>`

for (i = 0; i < item.img_arr.length; i++)
  string +=
    ` <div class="column">
  <img class="demo cursor" src="${item.img_arr[i]}" style="width:100%" onclick="currentSlide(${i + 1})" alt="${item.alt_img[i]}">
</div>`

details_vacation += `<p class="description">${item.description} </p>
        <br>
        <p>
        מחיר ללילה:
        ${item.price} <br><br>
            ליצירת קשר
            <br>
            ${item.phone}
            <br>
            ${item.email}
        </p>
        `
if (item.AirConditioning == 1)
  icon = `<span><i class="fa-regular fa-snowflake"></i>&nbsp;מיזוג אויר </span>`
if (item.accessible == 1)
  icon += `<span> <i class="fa-solid fa-wheelchair"></i>&nbsp; מקום מונגש </span>`
if (item.wifi == 1)
  icon += `<span><i class="fa-solid fa-wifi"></i>&nbsp; wifi חינם </span>`
if (item.view == 1)
  icon += `<span><i class="fa-sharp fa-regular fa-eye"></i>&nbsp; נוף </span>`
if (item.pool == 1)
  icon += `<span><i class="fa-solid fa-water-ladder"></i>&nbsp;בריכת שחיה </span>`
document.querySelector('.details_vacation_page').innerHTML += details_vacation;
document.querySelector('#container_icons').innerHTML += icon;
document.querySelector('.container').innerHTML += container_slide;
document.querySelector('.row').innerHTML += string;


let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

const placeTypeSelect = document.getElementById('placeType');
placeTypeSelect.options[0].disabled = true;

const citySelect = document.getElementById('city');
citySelect.options[0].disabled = true;






