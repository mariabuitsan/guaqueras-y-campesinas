//load DOM
document.addEventListener('DOMContentLoaded', function () {
    //get the element for images rotation
    const imageContainer = document.querySelector('.image-1-narracion');
    // get the element for scrolling
    //array of images
    const imageArray = [
        'https://github.com/mariabuitsan/guaqueras-y-campesinas/blob/main/assets/img/agricultora-cafe-1.png?raw=true',
        'https://github.com/mariabuitsan/guaqueras-y-campesinas/blob/main/assets/img/SB-Recorrido-Foto-Cacao-7-2024.png?raw=true',
        'https://github.com/mariabuitsan/guaqueras-y-campesinas/blob/main/assets/img/agricultora-ca%C3%B1a-objeto-1.png?raw=true',
        'https://github.com/mariabuitsan/guaqueras-y-campesinas/blob/main/assets/img/agricultora-cafe-1.png?raw=true',
    ];

    let currentImageIndex = 0;

    //style for transition
    imageContainer.style.transition = 'background-image 0.5s ease-in-out';
    
    //event listener for mouse in
    imageContainer.addEventListener('mouseover', () => {
        imageContainer.style.backgroundImage = `url("${imageArray[0]}")`;
    });
    //event listener for mouse out
    imageContainer.addEventListener('mouseout',  () => {
        imageContainer.style.boxShadow = 'none';
        
        //cycle through images 
        currentImageIndex = (currentImageIndex + 1) % imageArray.length;
        imageContainer.style.backgroundImage = `url("${imageArray[currentImageIndex]}")`;
    });
    
    document.querySelector('.scroller').addEventListener('click', function() {
         //Scroll down by one viewport height
        window.scrollBy({
          top: window.innerHeight,
         behavior: 'smooth'  // Smooth scroll effect
        });
    });
});
