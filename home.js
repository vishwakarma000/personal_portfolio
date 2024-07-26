var left = document.getElementById("left-arrow") ;
var right = document.getElementById("right-arrow") ;

function rightClick() {
    window.scrollBy({
        left: 200, // Adjust the value to scroll more or less
        behavior: 'smooth'
    });
}

function leftClick() {
    window.scrollBy({
        left: -200, // Adjust the value to scroll more or less
        behavior: 'smooth'
    });
}

right.addEventListener('click', rightClick);
left.addEventListener('click', leftClick);
