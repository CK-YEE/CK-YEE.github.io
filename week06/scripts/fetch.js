function GetBookings() {
    let url = 'https://api.sheety.co/7fe143c5313620abca554c156af3ebf6/bookingApp/bookings';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.bookings);
            let bookingList = document.getElementById("bookingList");
            bookingList.innerHTML = "";
            for (let i = 0; i < json.booking.length; i++) {
                let gName = json.bookings[i].name;
                let gEmail = json.bookings[i].email;
                let gPax = json.bookings[i].pax;
                let gId = json.bookings[i].id;

                bookingList.innerHTML += gId + "-" + gName + ", " +
                    gEmail + ", pax:" + pax + "<br>";
            }
        });
}

let getBookingBtn = document.getElementById("getBooking");
getBookingBtn.addEventListener("click", function () {
    GetBookings();
});