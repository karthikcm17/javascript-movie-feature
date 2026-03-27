const movies = [
    {id: 1, title: "Inception", genre: "Thriller", year: 2010, rating: 8.8, img: "Assets/inception.jpg"},
    {id: 2, title: "Dark Knight", genre: "Action", year: 2011, rating: 9.0, img: "Assets/Dark night.jpg"},
    {id: 3, title: "Interstellar", genre: "Sci-Fi", year: 2014, rating: 8.6, img: "Assets/Interstellar.jpg"},
    {id: 4, title: "John Wick", genre: "Action", year: 2014, rating: 7.4, img: "Assets/John.jpg"},
    {id: 5, title: "Avengers", genre: "Action", year: 2012, rating: 8.0, img:  "Assets/Avengers.jpg"},
    {id: 6, title: "Titanic", genre: "Romance", year: 1997, rating: 7.9, img: "Assets/Titanic.jpg"},
    {id: 7, title: "Joker", genre: "Drama", year: 2019, rating: 8.5, img: "Assets/Joker.jpg"},
    {id: 8, title: "Avatar", genre: "Sci-Fi", year: 2009, rating: 7.8, img: "Assets/Avatar.jpg"},
    {id: 9, title: "Gladiator", genre: "Action", year: 2000, rating: 8.5, img: "Assets/Gladiator.jpg"},
    {id: 10, title: "The Matrix", genre: "Sci-Fi", year: 1999, rating: 8.7, img: "Assets/Matrix.jpg" },
    {id: 11, title: "Fight Club", genre: "Drama", year: 1999, rating: 8.8, img: "Assets/Fight.jpg" },
    {id: 12, title: "Forrest Gump", genre: "Drama", year: 1994, rating: 8.8, img: "Assets/Forest.jpg" },
    {id: 13, title: "Spider-Man", genre: "Action", year: 2002, rating: 7.4, img: "Assets/Spider.jpg"},
    {id: 14, title: "Doctor Strange", genre: "Action", year: 2016, rating: 7.5, img: "Assets/Doctor.jpg" },
    {id: 15, title: "Black Panther", genre: "Action", year: 2018, rating: 7.3, img: "Assets/Black.jpg" }
];

const container = document.getElementById("movie-container");

function displayMovies(data){
    const movieArray = Array.isArray(data) ? data : [data];

    if(movieArray.length === 0){
        container.innerHTML = `<h4 class="text-center text-danger">No Movies Found</h4>`;
        return;
    }

    container.innerHTML = movieArray.map(movie => `
        <div class="col-md-4">
            <div class="card h-100 shadow">
                <img src="${movie.img}" class="card-img">
                <div class="card-body">
                    <h5>${movie.title}</h5>
                    <p class="text-muted">${movie.genre} • ${movie.year}</p>
                    <p>⭐ <b>${movie.rating}</b></p>
                    <button class="btn btn-danger w-100">Watch Now</button>
                </div>
            </div>
        </div>
    `).join('');
}

function showAll(){
    displayMovies(movies);
}

function filterAction(){
    const actionMovies = movies.filter((movie) => {
        return movie.genre === "Action";
    });
    displayMovies(actionMovies);
}

function filterThriller(){
    const thrillerMovies = movies.filter((movie) => {
        return movie.genre === "Thriller";
    });
    displayMovies(thrillerMovies);
}

function filterAfter2012(){
    const after2012movies = movies.filter((movie) => {
        return movie.year > 2012;
    });
    displayMovies(after2012movies);
}

function filterRating8Plus(){
    const rating8Plus = movies.filter((movie) =>{
        return movie.rating >= 8;
    });
    displayMovies(rating8Plus);
}

function filterRating7Plus(){
    const rating7Plus = movies.filter((movie) =>{
        return movie.rating >=7 && movie.rating <8;
    });
    displayMovies(rating7Plus);
}
function findInception(){
    const trendingMovie = movies.find((movie) => {
        return movie.title === "Inception";
    });
    displayMovies(trendingMovie);
}

function searchMovie(){
    const input = document.getElementById("searchInput").value.trim().toLowerCase();

    if(input === ""){
        alert("Enter movie name");
        return;
    }
    const searchedMovie = movies.find((movie) => {
        return input === movie.title.toLowerCase();
    });
    displayMovies(searchedMovie);
}

showAll();