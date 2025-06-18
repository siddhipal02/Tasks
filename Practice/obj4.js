let cinema = {
    name: "MovieTime",
    shows: [
        { movie: "Inception", seatsAvailable: 20 },
        { movie: "Dune", seatsAvailable: 5 }
    ],
    bookTicket: function(movieName, seats) {
        // Reduce available seats
        cinema.shows.forEach(i => {
            if(i.movie === movieName)
            {
                i.seatsAvailable = i.seatsAvailable - seats
            }
        })
        console.log(cinema.shows);
    }
};
//Implement bookTicket() method.
cinema.bookTicket("Inception", 2);

//Check which movies have more than 10 seats left.
for(let i of cinema.shows)
{
    if(i.seatsAvailable > 10)
        console.log(i.movie);
}

//Add a new movie.
cinema.shows[2] = {
    movie: "Baby's day out",
    seatsAvailable: 7
}
console.log(cinema.shows);