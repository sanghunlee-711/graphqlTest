
export let movies = [
    {   
        id: 0,
        name: "Lee1",
        score: 128,
    },
    {
        id: 1,
        name: "Lee2",
        score: 148,
        gender: "Female2"
    },
    {
        id: 2,
        name: "Lee3",
        score: 183,

    },
    {
        id: 3,
        name: "Lee4",
        score: 118,
    },
    {
        id: 4,
        name: "Lee5",
        score: 135,
    }

]

export const getMovies = () => movies;

export const getById = (id: number)=>{
    const filteredMovie = movies.filter(movie => movie.id === (id)); 
    console.log(filteredMovie[0])
    return filteredMovie[0];
}

export const deleteMovie = (id: number) => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true
    }else{
        false;
    }
}

export const addMovie= (name,score) => {
    const newMovie = {
        id:movies.length+1,
        name: name,
        score: score
    };
    movies.push(newMovie);
    return newMovie
}