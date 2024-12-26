document.addEventListener('DOMContentLoaded', function () {

function changeSpecificTranscriptionByClass (h1, index, newText) {
    const questions = document.getElementsByClassName(h1);
    if (questions [0]) {
        questions[0].textContent = newText;
    }
}
document.getElementById('transcripcion-2').addEventListener('click', function () {
    changeSpecificTranscriptionByClass('h1', 0, 'Aquí es un Paraíso');
});
});