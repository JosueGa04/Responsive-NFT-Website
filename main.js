// Código existente
document.querySelectorAll('.donut').forEach(function(donut) {
    donut.addEventListener('click', function(event) {
        event.stopPropagation(); // Evita que el evento de clic se propague al documento

        // Si el segmento ya está seleccionado, deseleccionarlo
        if (donut.classList.contains('selected')) {
            donut.classList.remove('selected');
            donut.classList.add('unselected');
        } else { // Si el segmento no está seleccionado, seleccionarlo
            donut.classList.add('selected');
            donut.classList.remove('unselected');
        }

        // Agregar la clase 'unselected' a todos los segmentos no seleccionados
        document.querySelectorAll('.donut:not(.selected)').forEach(function(otherDonut) {
            otherDonut.classList.add('unselected');
        });

        // Si todos los segmentos están deseleccionados, eliminar la clase 'unselected' de todos los segmentos
        if (document.querySelectorAll('.donut.selected').length === 0) {
            document.querySelectorAll('.donut').forEach(function(donut) {
                donut.classList.remove('unselected');
            });
        }
    });
});

// Nueva funcionalidad
document.querySelectorAll('.category a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evita que el enlace navegue a su href

        // Obtén la categoría del enlace en el que se hizo clic
        var category = link.getAttribute('data-category');

        // Agrega la clase 'unselected' a todos los segmentos
        document.querySelectorAll('.donut').forEach(function(donut) {
            donut.classList.add('unselected');
        });

        // Encuentra el segmento que corresponde a la categoría y elimina las clases 'selected' y 'unselected'
        var donut = document.querySelector('.donut[data-category="' + category + '"]');
        donut.classList.remove('selected', 'unselected');
    });
});

