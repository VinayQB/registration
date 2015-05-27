 $(document).ready(function(){
        $.getJSON('../assets/javascript/gallery.json', function(data) {
            // $("#destinations option").remove();
            destinations = data['Destinations'];

            $.each(destinations, function(id, destination) {
                $('#destinations').append('<img id="slider" src="'+destination["destinationName"]+'">');
            });
        });
    });
