class Movie {
    constructor(title, director, year) {
        this.title = title;
        this.director = director;
        this.year = year;
    }
}
const defaultMovies = [
    {
        title: "Jurassic Park",
        director: "John Doe",
        year: "1990"
    },
    {
        title: "The Avengers",
        director: "Joss Whedon",
        year: "2012"
    },
    {
        title: "The Dead Pool",
        director: "Matthew Albison",
        year: "2014"
    }
]

class UI {
    static addMovie = (m) => {
        const list = document.getElementById("tbod")
        const row = document.createElement("tr")
        row.dataset.movieId = m.id
        row.innerHTML = `<td>${m.title}</td><td>${m.director}</td><td>${m.year}</td><td><button class="btn btn-danger delete-btn">Delete</button></td>`
        list.appendChild(row)
    }
    static displayMovies = () => {
        defaultMovies.forEach(m => UI.addMovie(m))
    }
}

UI.displayMovies()
function collect_data (e) {
    e.preventDefault();
    const title = document.getElementById("title").value
    const director = document.getElementById("director").value
    const year = document.getElementById("year").value
    const movie = new Movie(title, director, year)
    UI.addMovie(movie)
}
document.getElementById("submit").addEventListener("click", collect_data)

function deleteMovie (e) {
    if (e.target && e.target.matches("button.delete-btn")) {
        Delete(e.target.closest("tr").dataset.movieId)
    }
}

function Delete (movieId) {
    movieElement = document.querySelector(`tr[data-movie-id ="${movieId}"]`)
    if (movieElement) {
        movieElement.remove()
    }
}
document.getElementById("tbod").addEventListener("click", deleteMovie)