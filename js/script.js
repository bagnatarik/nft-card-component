const imageContainer = document.getElementById('image-container');
const secondImage = document.getElementById('view');

imageContainer.addEventListener('mouseover', () => {
    secondImage.style.opacity = 1;
});


imageContainer.addEventListener('mouseleave', () => {
    secondImage.style.opacity = 0;
});
