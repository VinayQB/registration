


    $(document).ready(function(){
        $.getJSON('../assets/javascript/gallery.json', function(data) {
            // $("#destinations option").remove();
            destinations = data['Destinations'];

            $.each(destinations, function(id, destination) {
                $('#destinations').append('<a href = "javascript:void(0)" onclick = "popup('+destination["id"]+')" >'+'<img id="slider" title="'+destination["caption"]+'" src="'+destination["destinationName"]+'">'+'</a>');
                $('#popupContainer').append('<div id="'+destination["id"]+'" class="white_content"><a class="closeImg" href = "javascript:void(0)" onclick ="closeP('+destination["id"]+')" >Close</a><img class="popupImg" title="'+destination["caption"]+'" src="'+destination["destinationName"]+'"></div>');

            });
        });
    });

function popup(x){
 
document.getElementById(x).style.display='block';
document.getElementById('fade').style.display='block';
}
function closeP(y){
 
  document.getElementById(y).style.display='none';
  document.getElementById('fade').style.display='none';
}
