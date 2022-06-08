//get file name function
console.log("test")

function getFileName(inputaddress) {
    if (inputaddress) {
        var startIndex = (inputaddress.indexOf('\\') >= 0 ? inputaddress.lastIndexOf('\\') : inputaddress.lastIndexOf('/'));
        var filename = inputaddress.substring(startIndex);
        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
            filename = filename.substring(1);
        }
    }
}
//slider work

//Get Image
var imgSliderArry = new Array(6);
for (var i = 0; i < imgSliderArry.length-1; i++){
    imgSliderArry[i]= "./images/slid"+i+".jpg";
}
// check work arry
// for (var i = 1; i < imgArry.length; i++){
//     console.log(imgArry[i]);
// }
// imgSliderArry[0] = "./imgs/slid1.jpg";
// imgSliderArry[1] = "./imgs/slid2.jpg";
// imgSliderArry[2] = "./imgs/slid3.jpg";
// imgSliderArry[3] = "./imgs/slid4.jpg";
// imgSliderArry[4] = "./imgs/slid5.jpg";
// imgSliderArry[5] = "./imgs/slid6.jpg";


//fill slider with imgs
var sliderImgs = document.getElementById("sliderImgs");
var slider_show = document.getElementById("slider_show");
var imgID = 0;
var slider_timer;

//always play 
function Play_img() {
    sliderImgs.setAttribute("src", imgSliderArry[imgID]);
    imgID++;
    if (imgID == imgSliderArry.length-1) {
        imgID = 0;
    }
    slider_timer = setTimeout("Play_img()", 7000)
}
//
// slider_show.addEventListener('mouseover', Play_img);
//prev--btun work
var prevbtn = document.getElementById("prevbtn");
function pre_img() {
    imgID--;
    sliderImgs.setAttribute("src", imgSliderArry[imgID]);

    if (imgID <= 0) {
        imgID =imgSliderArry.length-1;
    }
}
prevbtn.addEventListener("click", pre_img);


//Nxt Image
var nextbtn = document.getElementById("nextbtn");
function nxt_img() {
    imgID++;
     sliderImgs.setAttribute("src", imgSliderArry[imgID]);

    if (imgID == imgSliderArry.length) {
        imgID =1;
    }
}
nextbtn.addEventListener("click", nxt_img);



//Get the button:
mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {

  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}












