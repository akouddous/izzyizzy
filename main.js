let button = document.querySelector('button');
let image = document.querySelector('img');

function showImage() {
    image.style.display = 'block';
    button.style.display = 'none';
}
button.onclick = showImage;