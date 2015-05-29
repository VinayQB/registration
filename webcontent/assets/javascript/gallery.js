 $(document).ready(function(){
        $.getJSON('../assets/javascript/gallery.json', function(data) {
            // $("#destinations option").remove();
            destinations = data['Destinations'];

            $.each(destinations, function(id, destination) {
                // $('#destinations').append('<img id="slider" title="'+destination["caption"]+'"  src="'+destination["destinationName"]+'">');
                $('#destinations').append('<input onclick="showImage();" type="image" id="slider" "'+'" src="'+destination["destinationName"]+'">'+'<div id="loadingImage">'+'<img id="big_image" title="'+destination["caption"]+'" src="'+destination["destinationName"]+'">'+'</div>');
            });
        });
    });


function showImage(){
        document.getElementById('loadingImage').style.display="block";
    }