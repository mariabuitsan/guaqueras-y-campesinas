import {objectsCollection} from './objectsArray.js';
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
    document.getElementById("transcripcion").addEventListener("click", function() {
        window.location.href = 'entrevistas.html';  
    });
    
    document.querySelectorAll('.scroller').forEach(function(element) {
        element.addEventListener('click', function() {
            // Scroll down by one viewport height
            window.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth' // Smooth scroll effect
            });
        });
   });
    let changePhoto = document.getElementById("grid-item-2");
    currentImageIndex = (currentImageIndex + 0) % objectsCollection.length;
    changePhoto.style.backgroundImage = `url("${objectsCollection[currentImageIndex]}")`;

    let changePhoto2 = document.getElementById("grid-item-3");
    currentImageIndex = (currentImageIndex + 1) % objectsCollection.length;
    changePhoto2.style.backgroundImage = `url("${objectsCollection[currentImageIndex]}")`;

    let changePhoto3 = document.getElementById("grid-item-4");
    currentImageIndex = (currentImageIndex + 2) % objectsCollection.length;
    changePhoto3.style.backgroundImage = `url("${objectsCollection[currentImageIndex]}")`;

    let changePhoto4 = document.getElementById("grid-item-5");
    currentImageIndex = (currentImageIndex + 3) % objectsCollection.length;
    changePhoto4.style.backgroundImage = `url("${objectsCollection[currentImageIndex]}")`;

    let changePhoto5 = document.getElementById("grid-item-6");
    currentImageIndex = (currentImageIndex + 4) % objectsCollection.length;
    changePhoto5.style.backgroundImage = `url("${objectsCollection[currentImageIndex]}")`;

    document.getElementById("show-about").addEventListener('click', function() {
        //hide things
        let hidePhoto = document.querySelector('.image-1-narracion');
        hidePhoto.style.display = "none";

        let hideStory = document.querySelector('.intro');
        hideStory.style.display = "none";
        //change div to display
        let showAbout = document.getElementById("about");
        showAbout.style.display = "block";
    });
});
 