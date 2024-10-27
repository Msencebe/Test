function setColumnView(columns, button) {
    // Alternar entre íconos seleccionados y no seleccionados
    document.querySelectorAll('.icon-view .btn').forEach(btn => {
        const selectedImg = btn.querySelector('.selected');
        const unselectedImg = btn.querySelector('.unselected');

        // Si el botón es el clicado, mostrar el seleccionado, ocultar el no seleccionado
        if (btn === button) {
            selectedImg.style.display = 'block';
            unselectedImg.style.display = 'none';
        } else {
            // Para otros botones, ocultar el seleccionado y mostrar el no seleccionado
            selectedImg.style.display = 'none';
            unselectedImg.style.display = 'block';
        }
    });


}