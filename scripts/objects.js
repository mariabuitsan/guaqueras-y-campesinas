//import arrays
import { objectsCollection } from './objectsArray.js';
document.addEventListener('DOMContentLoaded', function () {
 
  const imageContainer = document.querySelector('.image-objeto-slider');
  let currentImageIndex = 0;
  //style for transition
  imageContainer.style.transition = 'all 0.2s ease-in-out';

  //event listener for mouse over
  imageContainer.addEventListener('click', () => {
    imageContainer.style.backgroundImage = `url("${objectsCollection[0]}")`;
  });
  //event listener for mouse out
  imageContainer.addEventListener('mouseout',  () => {
  imageContainer.style.boxShadow = 'none';
    
    //cycle through images 
    currentImageIndex = (currentImageIndex + 1) % objectsCollection.length;
    imageContainer.style.backgroundImage = `url("${objectsCollection[currentImageIndex]}")`;
});
});

