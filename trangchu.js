let slideIndex = 1;
showSides(slideIndex);

function plushSlide(n){
    showSides(slideIndex += n);
}

function currentSlide(n){
    showSides(slideIndex = n);
}

function showSides(n){
    let i;
    let slides = document.getElementsByClassName("slide");
    let dost = document.getElementsByClassName("dot");
    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i < dost.length; i++){
        dost[i].className = dost[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dost[slideIndex - 1].className += " active";
}