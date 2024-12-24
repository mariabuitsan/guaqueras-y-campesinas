//load DOM
document.addEventListener('DOMContentLoaded', function () {
  let dialogBox = document.querySelector('.dialogue-box')
    document.querySelector('.clickable-region').addEventListener('click', () => {
        dialogBox.style.display = 'block';
      });
});