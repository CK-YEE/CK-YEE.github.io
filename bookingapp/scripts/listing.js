function GetBookings() {
    let url = 'https://api.sheety.co/7fe143c5313620abca554c156af3ebf6/bookingApp/bookings';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            //console.log(json.bookings);
            let bookingList = document.getElementById("booking-list");
            let bookingIds = [];

            //clear the table rows
            for (let k = bookingList.rows.length - 1; k > 0; k--) {
                bookingList.deleteRow(k);
            }

            for (let i = 0; i < json.bookings.length; i++) {
                let gName = json.bookings[i].name;
                let gEmail = json.bookings[i].email;
                let gPhoneNumber = json.bookings[i].phone;
                let gCity = json.bookings[i].city;
                let gState = json.bookings[i].state;
                let gPostcode = json.bookings[i].postcode;
                let gDate = json.bookings[i].date;
                let gTime = json.bookings[i].time;
                let gRemarks = json.bookings[i].remarks;
                let buttonId = "delete" + gId;

                let row = bookingList.insertRow(bookingList.rows.length);
                row.insertCell(0).innerHTML = gId;
                row.insertCell(1).innerHTML = gName;
                row.insertCell(2).innerHTML = gEmail;
                row.insertCell(3).innerHTML = gPhoneNumber;
                row.insertCell(4).innerHTML = gCity;
                row.insertCell(5).innerHTML = gState;
                row.insertCell(6).innerHTML = gPostcode;
                row.insertCell(7).innerHTML = gDate;
                row.insertCell(8).innerHTML = gTime;
                row.insertCell(9).innerHTML = gRemarks;
                row.insertCell(10).innerHTML = "<button id='" +
                    buttonId + "' class='btn btn-danger'>Delete</button>";

                bookingIds.push(buttonId);

            }

            for (let j = 0; j < bookingIds.length; j++) {
                let el = document.getElementById(bookingIds[j]);
                el.addEventListener("click", function () {
                    let theId = bookingIds[j].replace("delete", "");
                    DeleteBooking(theId);
                });
            }
        });
}

window.addEventListener("load", function () {
    document.getElementById("refreshList").addEventListener("click", function () {
        GetBookings();
    });
})

function DeleteBooking(id) {
    let url = 'https://api.sheety.co/7fe143c5313620abca554c156af3ebf6/bookingApp/bookings/' + id;
    fetch(url, {
        method: 'DELETE',
    })
        .then((response) => {
            GetBookings();
        });
}   