export default function MoviesList() {
    // collection of objects representing movies
    const movies = [
        {
            id: 1,
            title: "The Shawshank Redemption",
            year: 1994,
            synopsis: "Two imprisoned men find redemption.",
        },
        {
            id: 2,
            title: "The Dark Knight",
            year: 2008,
            synopsis: "Batman fights the menace known as the Joker.",
        },
        {
            id: 3,
            title: "Interstellar",
            year: 2014,
            synopsis: "Explorers travel through a wormhole in space.",
        },
        {
            id: 4,
            title: "Momo Gusto",
            year: 2023,
            synopsis: "Exploring the matrix through culinary gusto.",
        },
    ];

    const MoviesList = movies.map(movie => (
        <li key={movie.id}>{movie.title}</li> // key prop is required for lists
        ))

    return (
        <div className="MoviesList componentBox">
            <ul> {/* iterate over each movie, print the title in a list */}
                {movies.map(movie => (
                    <li>{movie.title}</li>
                ))}
            </ul>
        </div>
    )
}
