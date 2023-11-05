const $fromTask = document.getElementById('form-task');
const $template = document.getElementById('lists-post').content;
const $fragment = document.createDocumentFragment();
const $tasks = document.getElementById('tasks');




$fromTask.addEventListener('submit', e => {

    e.preventDefault();

    const task = e.target.addtarea.value;

    $template.querySelector('.task').innerHTML = `${task.toUpperCase()}`;
    $template.querySelector('.icons').innerHTML = `❌`;

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
    $tasks.appendChild($fragment);
    e.target.addtarea.value = '';
})



/* 
            Esto es la delegacion de eventos... 
*/

document.addEventListener('click', (e) => {
    /**
     * Aqui se detectan los eventos
     * 
     */

    //Buscamos que de click el padre
    if (e.target.matches('.task')) {
        //console.log('Puntar.....');
        e.target.classList.add('btn-deleteColor');
        e.target.classList.remove('task');

        e.stopPropagation();

    }
    // buscamos con nombre de la clase para eliminar el color...
    else if (e.target.matches('.btn-deleteColor')) {
        //console.log('eliminando color...');
        e.target.classList.remove('btn-deleteColor');
        e.target.classList.add('task');
    }

    // buscamos el icono para eliminar la trea 
    else if (e.target.matches('.icons')) {
        e.target.addEventListener('click', function () {
            // Obtén el elemento padre de e.target y luego elimínalo
            const elementoPadre = e.target.parentElement;
            elementoPadre.remove();
        });

    }

})


