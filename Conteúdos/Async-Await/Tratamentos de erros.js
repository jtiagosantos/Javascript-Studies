const checkMovies = (movie) => {
    const movies = ['Star Wars III', 'Harry Potter VII', 'The Hobbit', 'Back To The Futue II'];

    return new Promise((resolve, reject) => {
        console.log('Analyzing movies...');
        setTimeout(() => {
            if(movies.includes(movie)) {
                resolve(`${movie} Available!`);
            }else {
                reject(`${movie} Unavailable!`);
            }
        }, 1500);   
    });
};


async function resultMovie() {
    try {
        let movieStatus = await checkMovies('Harry Potter VII');
        console.log(movieStatus);
    }
    catch(error) { //vai capturar erros de código e o que for retornardo pela promise como não resolvido.
        console.log(error);
    }
}

resultMovie();