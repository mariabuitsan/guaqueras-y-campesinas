document.addEventListener('DOMContentLoaded', function () {

function changeSpecificTranscriptionByClass (className, index, newText) {
    const elements = document.getElementsByClassName(className);
    if (elements [index]) {
        elements[index].textContent = newText;
    }
}
    let questionsTerritorio = document.getElementById('transcripcion-2');
    questionsTerritorio.addEventListener('click', function () {
    changeSpecificTranscriptionByClass('questions', 0, 'Aquí es un Paraíso');
});
});