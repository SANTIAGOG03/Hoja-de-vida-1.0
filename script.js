// Mostrar el modal al cargar la página
window.onload = function() {
    // Hacer que los elementos con la clase 'fade-in' sean visibles
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element) => {
        element.classList.add('visible');
    });

    // Si quieres mostrar un modal (descomentar si se necesita)
    // var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    // myModal.show();
};