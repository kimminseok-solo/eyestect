let imageSlideIndex = 1;
showImageSlides(imageSlideIndex);


function imageSlideTimer(){
    plusImageSlides(1);
}

let imageTimer = setInterval(imageSlideTimer,3000)

function plusImageSlides(n){
    clearInterval(imageTimer);
    imageTimer = setInterval(imageSlideTimer,3000);
   //imageslideIndex에 인자로 전돨된 n값을 더해줌
    showImageSlides(imageSlideIndex += n);
}
function currentImageSlide(n){
    clearInterval(imageTimer);
    imageTimer = setInterval(imageSlideTimer,3000);
    showImageSlides(imageSlideIndex = n);
}
//인자값으로 전달된 n값을 보고 적절한 슬라이드를 보여줌
//슬라이드 방식: 모든 슬라이드 none처리
//이미지 슬라이 인덱스에 해당되는 것만 보여줌
function showImageSlides(n){
    let slides = document.getElementsByClassName('image-slide');
    let dots = document.getElementsByClassName('dot');
    //마지막 슬라이드에서 다음 벝느을 눌렀을 때 => 첫 번재 슬라이드로 이동
    //슬라이드 5개m n값 6이면 이미지 슬라이드 값 1로 초기화
    if(n > slides.length){
        imageSlideIndex = 1;
    }
    // 첫 번째 슬라이드에서 이전 버튼을 눌렀을 때 => 마지막 (다섯 번재)슬라이드로 이동
    //n이 1값보다 작다면 5번째 슬라이드 (마지막)인덱스가 보여짐
    if(n < 1){imageSlideIndex = slides.length}
    //슬라이드 방식: 모든 슬라이드 none처리
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    //dot의 i번재 인덱스요소에 class name에
    //active라는 클래스가 있다면 공백으로 제거한 후에 다시 넣어줌
    for(i=0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace('active', '');
    }
    
    slides[imageSlideIndex -1].style.display = "block";
    dots[imageSlideIndex -1].classList.add('active');

}






document.getElementById('imagePrev').addEventListener('click', function() {
    plusImageSlides(-1); });
document.getElementById('imageNext').addEventListener('click', function() { plusImageSlides(1); });

document.getElementById('firstDot').addEventListener('click', function() {
currentImageSlide(1); });
document.getElementById('secondDot').addEventListener('click', function() {
currentImageSlide(2); });
document.getElementById('thirdDot').addEventListener('click', function() {
currentImageSlide(3); });
document.getElementById('forthDot').addEventListener('click', function() {
currentImageSlide(4); });
document.getElementById('fifthDot').addEventListener('click', function() {
currentImageSlide(5); });

        




let img1 =  document.querySelector(".inng1");
let img2 =  document.querySelector(".inng2");
let img3 =  document.querySelector(".inng3");
let img4 =  document.querySelector(".inng4");
let read1 =  document.querySelector(".rd1");
let read2 =  document.querySelector(".rd2");
let read3 =  document.querySelector(".rd3");
let read4 =  document.querySelector(".rd4");
let find = document.querySelector(".find");

function clickbtn1() {
    find.style.display="none"

    read1.style.display="block"
    read2.style.display="none"
    read3.style.display="none"
    read4.style.display="none"

    img1.style.display = "block"
    img2.style.display = "none"
    img3.style.display = "none"
    img4.style.display = "none"
}
function clickbtn2() {
    find.style.display="none"

    read1.style.display="none"
    read2.style.display="block"
    read3.style.display="none"
    read4.style.display="none"

    img1.style.display = "none"
    img2.style.display = "block"
    img3.style.display = "none"
    img4.style.display = "none"
}
function clickbtn3() {
    find.style.display="none"

    read1.style.display="none"
    read2.style.display="none"
    read3.style.display="block"
    read4.style.display="none"

    img1.style.display = "none"
    img2.style.display = "none"
    img3.style.display = "block"
    img4.style.display = "none"
}
function clickbtn4() {
    find.style.display="none"

    read1.style.display="none"
    read2.style.display="none"
    read3.style.display="none"
    read4.style.display="block"

    img1.style.display = "none"
    img2.style.display = "none"
    img3.style.display = "none"
    img4.style.display = "block"
}