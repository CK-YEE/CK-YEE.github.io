let ellocate = document.getElementById("locate");
ellocate.addEventListener("click",function(){
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            let ellat = document.getElementById("lat");
            let ellong = document.getElementById("long");

            ellat.innerHTML = "Latitude: " + position.coords.latitude;
            ellong.innerHTML = "Longtitude: " + position.coords.longitude;
        });
    } else {
        alert("Geolocation is not supported by this browser.")
}
});