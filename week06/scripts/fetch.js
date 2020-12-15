function GetBookings() {
    let url = 'https://api.sheety.co/7fe143c5313620abca554c156af3ebf6/bookingApp/bookings';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.bookings);
        });
}