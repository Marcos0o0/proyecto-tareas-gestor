document.getElementById('formulariotareas').addEventListener('submit', function(e) {
    e.preventDefault();
    const description = document.getElementById('descripcion').value;
    const dueDate = document.getElementById('fecha').value;
    const prioridad = document.getElementById('prioridad').value;

    const itemTarea = document.createElement('li');
    itemTarea.innerHTML = `<div class="tarea-pendiente"><strong>${description}</strong> - Vence el ${dueDate} - Prioridad: ${prioridad} <div class="btn-container">
            <button class="btn-mover">Mover a En Progreso</button> 
            <button class="btn-eliminar">Eliminar tarea</button>
        </div></div>`;
    document.getElementById('pendientes-container').appendChild(itemTarea);
    document.getElementById('c-pendiente').textContent = parseInt(document.getElementById('c-pendiente').textContent) + 1;
    this.reset();

    itemTarea.querySelector('.btn-eliminar').addEventListener('click', function() {
        itemTarea.remove();
        document.getElementById('c-pendiente').textContent = parseInt(document.getElementById('c-pendiente').textContent) - 1;
    });

    itemTarea.querySelector('.btn-mover').addEventListener('click', function() {
        const tareaEnProgreso = document.createElement('li');
        tareaEnProgreso.innerHTML = `<div class="tarea-progreso">${description} - Vence el ${dueDate} - Prioridad: ${prioridad} <div class="btn-container">
                <button class="btn-mover">Mover a Completada</button>
                <button class="btn-eliminar">Eliminar tarea</button>
            </div></div>`;
        document.getElementById('en-progreso-container').appendChild(tareaEnProgreso);
        document.getElementById('c-pendiente').textContent = parseInt(document.getElementById('c-pendiente').textContent) - 1;
        document.getElementById('c-progreso').textContent = parseInt(document.getElementById('c-progreso').textContent) + 1;
        itemTarea.remove();

        tareaEnProgreso.querySelector('.btn-eliminar').addEventListener('click', function() {
            tareaEnProgreso.remove();
            document.getElementById('c-progreso').textContent = parseInt(document.getElementById('c-progreso').textContent) - 1;
        });

        tareaEnProgreso.querySelector('.btn-mover').addEventListener('click', function() {
            const tareaCompletada = document.createElement('li');
            tareaCompletada.innerHTML = `<div class="tarea-completado">${description} - Vence el ${dueDate} - Prioridad: ${prioridad} <div class="btn-container">
                    <button class="btn-eliminar">Eliminar tarea</button>
                </div></div>`;
            document.getElementById('completadas-container').appendChild(tareaCompletada);
            document.getElementById('c-progreso').textContent = parseInt(document.getElementById('c-progreso').textContent) - 1;
            document.getElementById('c-completadas').textContent = parseInt(document.getElementById('c-completadas').textContent) + 1;
            tareaEnProgreso.remove();

            tareaCompletada.querySelector('.btn-eliminar').addEventListener('click', function() {
                tareaCompletada.remove();
                document.getElementById('c-completadas').textContent = parseInt(document.getElementById('c-completadas').textContent) - 1;
            });
        });
    });
});