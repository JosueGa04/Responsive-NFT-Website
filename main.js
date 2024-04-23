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