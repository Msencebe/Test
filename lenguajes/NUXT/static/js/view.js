function view(columnWidth) {
    // Seleccionar todas las columnas en la galería
    const columnas = document.querySelectorAll('#yacht > div');

    // Actualizar la clase de columna
    columnas.forEach(columna => {
        columna.className = `col-12 col-md-${columnWidth} yacht-container` ;
    });
}



function toggleIcons(selectedButton) {
    // Obtener todos los botones
    const buttons = document.querySelectorAll('.btn-group .btn');

    buttons.forEach(button => {
        const selectedIcon = button.querySelector('.selected');
        const unselectedIcon = button.querySelector('.unselected');

        if (button === selectedButton) {
            // Mostrar el icono seleccionado y ocultar el no seleccionado
            selectedIcon.style.display = 'block';
            unselectedIcon.style.display = 'none';
        } else {
            // Ocultar el icono seleccionado y mostrar el no seleccionado
            selectedIcon.style.display = 'none';
            unselectedIcon.style.display = 'block';
        }
    });
}
