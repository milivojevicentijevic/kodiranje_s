// varijable za prikaze
var jsView = document.querySelector('#jsView');
var phpView = document.querySelector('#phpView');
var wpView = document.querySelector('#wpView');
var jsViewImg = document.querySelector('#jsViewImg');
var phpViewImg = document.querySelector('#phpViewImg');
var wpViewImg = document.querySelector('#wpViewImg');

// funkcije
function showJsView() {
    jsView.style.display = "block";
    phpView.style.display = "none";
    wpView.style.display = "none";
    jsViewImg.style.display = "block";
    phpViewImg.style.display = "none";
    wpViewImg.style.display = "none";
}
function showPhpView() {
    phpView.style.display = "block";
    jsView.style.display = "none";
    wpView.style.display = "none";
    phpViewImg.style.display = "block";
    jsViewImg.style.display = "none";
    wpViewImg.style.display = "none";
}
function showWpView() {
    wpView.style.display = "block";
    phpView.style.display = "none";
    jsView.style.display = "none";
    wpViewImg.style.display = "block";
    phpViewImg.style.display = "none";
    jsViewImg.style.display = "none";
}