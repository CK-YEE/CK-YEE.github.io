function BookNow(guestName, guestEmail, guestPhone, guestCity, guestState, guestPostcode, guestDate, guestTime, guestRemarks) {
    let url = 'https://api.sheety.co/7fe143c5313620abca554c156af3ebf6/bookingApp/bookings';
    let body = {
        booking: {
            name: guestName,
            email: guestEmail,
            phone: guestPhone,
            city: guestCity,
            state: guestState,
            postcode: guestPostcode,
            date: guestDate,
            time: guestTime,
            remarks: guestRemarks
        }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then(json => {
            alert(json.booking.name + " added!");
        });
}

window.addEventListener("load", function () {
    document.getElementById("bookNow").addEventListener("click", function () {
        let userName = document.getElementById("userName").value;
        let userEmail = document.getElementById("userEmail").value;
        let userPhone = document.getElementById("userPhone").value;
        let userCity = document.getElementById("userCity").value;
        let userState = document.getElementById("userState").value;
        let userPostcode = document.getElementById("userPostcode").value;
        let userDate = document.getElementById("userDate").value;
        let userTime = document.getElementById("userTime").value;
        let userRemarks = document.getElementById("userRemarks").value;

        BookNow(userName, userEmail, userPhone, userCity, userState, userPostcode, userDate, userTime, userRemarks);
    });
});