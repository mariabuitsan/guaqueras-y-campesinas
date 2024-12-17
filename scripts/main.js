//load DOM
document.addEventListener('DOMContentLoaded', function () {
    //get the element
    const imageContainer = document.querySelector('.inside-image-1-narracion');

    //array of images
    const imageArray = [
        '/Users/mariabuitragosanchez/Desktop/Fall-2024/Thesis/guaqueras-y-campesinas/assets/img/agricultora-cafe-1.png',
        '/Users/mariabuitragosanchez/Desktop/Fall-2024/Thesis/guaqueras-y-campesinas/assets/img/agricultora-caña-objeto-1.png',
        '/Users/mariabuitragosanchez/Desktop/Fall-2024/Thesis/guaqueras-y-campesinas/assets/img/agricultora-caña-objeto-1.png',
        '/Users/mariabuitragosanchez/Desktop/Fall-2024/Thesis/guaqueras-y-campesinas/assets/img/agricultora-caña-objeto-1.png',
    ];

    let currentImageIndex = 0;

    //style for transition
    imageContainer.style.transition = 'background-image 0.9s ease-in-out';
    
    //event listener for mouse in
    imageContainer.addEventListener('mouseover', () => {
        imageContainer.style.boxShadow = '0 0 15px rgba(0, 255, 0, 0.7)';
        imageContainer.style.backgroundImage = `url("${imageArray[0]}")`;
    });
    //event listener for mouse out
    imageContainer.addEventListener('mouseout',  () => {
        imageContainer.style.boxShadow = 'none';
        
        //cycle through images 
        currentImageIndex = (currentImageIndex + 1) % imageArray.length;
        imageContainer.style.backgroundImage = `url("${imageArray[currentImageIndex]}")`;
    });

});
