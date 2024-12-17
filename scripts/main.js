//load DOM
document.addEventListener('DOMContentLoaded', function () {
    //get the element
    const imageContainer = document.querySelector('.inside-image-1-narracion');

    //array of images
    const imageArray = [
        'https://raw.githubusercontent.com/mariabuitsan/debt-disobedience/refs/heads/main/assets/img/bankruptcy-meme.png',
        'https://raw.githubusercontent.com/mariabuitsan/guaqueras-y-campesinas/refs/heads/main/assets/img/background-1-fura-y-tena-blanco-negro.JPG',
        'https://raw.githubusercontent.com/mariabuitsan/debt-disobedience/refs/heads/main/assets/img/cant_wont_square_2__100__gallery.png',
        'https://raw.githubusercontent.com/mariabuitsan/debt-disobedience/refs/heads/main/assets/img/betty-la-fea-patricia-fernandez.gif',
        'https://raw.githubusercontent.com/mariabuitsan/debt-disobedience/refs/heads/main/assets/img/money-i-used-to-owe.jpeg',
    ];

    let currentImageIndex = 0;

    //style for transition
    imageContainer.style.transition = 'background-image 0.9s ease-in-out';
    imageContainer.style.cursor = 'pointer';
    
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
