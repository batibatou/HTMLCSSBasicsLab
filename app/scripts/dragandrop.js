draggableElement.addEventListener('dragstart', function(e) {

    e.dataTransfer.setData('text/plain', "Ce texte sera transmis à l'élément HTML de réception");

}, false);

var dragImg = new Image();
dragImg.src = '../images/dragandrop.png';
document.querySelector('*[draggable="true"]').addEventListener('dragstart', function(e) {


    e.dataTransfer.setDragImage(dragImg, 40, 40);


}, false);

document.querySelector('#dropper').addEventListener('dragover', function(e) {

    e.preventDefault();

}, false);

document.querySelector('#dropper').addEventListener('drop', function(e) {

    e.preventDefault();
    alert('Vous avez bien déposé votre élément !');

}, false);

ar dropper = document.querySelector('#dropper');
dropper.addEventListener('dragenter', function() {

    dropper.style.borderStyle = 'dashed';

}, false);

dropper.addEventListener('dragleave', function() {

    dropper.style.borderStyle = 'solid';

}, false);

document.addEventListener('dragend', function() {

    alert("Un Drag & Drop vient de se terminer mais l'événement dragend ne sait pas si c'est un succès ou non.");

}, false);

dropper.addEventListener('drop', function(e) {

    e.preventDefault();
    alert('Vous avez bien déposé votre élément !');
    dropper.style.borderStyle = 'solid';

}, false);
