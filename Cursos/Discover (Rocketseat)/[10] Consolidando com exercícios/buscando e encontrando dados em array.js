/*  ### Buscando e contando dados em array

baseado no array de livros por categoria abaixo, faça os seguintes desafios:
    - Contar o número de categorias e o número de livros em cada categoria;
    - Contar o número de autores;
    - Mostrar livros do autor Augusto Cury;
    - Transformar a função acima em uma função que irá receber o nome do autor
      e devolver os livros desse autor;

*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Marv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            }
        ],
    },
    {
        category: "Inteligencia Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

// Contar o número de categorias e o número de livros em cada categoria;
countCategoriesAndBooks = () => {
    const numberCategory = booksByCategory.length;
    console.log(`Número de categorias: ${numberCategory}`);

    let nameCategory;
    let numberBooks;

    for(let item of booksByCategory) {
    nameCategory = item.category;
    numberBooks = item.books.length;

    console.log(`Categoria ${nameCategory}: ${numberBooks} livros`);
    }
}

countCategoriesAndBooks();


// Contar o número de autores;
countAuthors = () => {
    let arrayAuthors = new Array;

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(arrayAuthors.indexOf(book.author) === -1) {
                arrayAuthors.push(book.author);
            }
        }
    }
    console.log(`Total de autores: ${arrayAuthors.length}`);
}

countAuthors();


// Mostrar livros do autor Augusto Cury;
booksByAugustoCury = () => {
    let booksAugustoCury = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === "Augusto Cury") {
                booksAugustoCury.push(book.title);
            }
        }
    }
    
    console.log("Livros do autor Augusto Cury:");
    for(let title of booksAugustoCury) {
        console.log(`> ${title}`);
    }
}

booksByAugustoCury();


// Transformar a função acima em uma função que irá receber o nome 
//do autore devolver os livros desse autor;
booksByAuthor = (author) => {
    let booksOfAuthor = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                booksOfAuthor.push(book.title);
            }
        }
    }
    
    console.log(`Livros do autor ${author}:`)
    if(booksOfAuthor.length !== 0) {
        for(let title of booksOfAuthor) {
            console.log(`> ${title}`);
        }
    }else {
        console.log(`O autor ${author} não possui livros.`);
    }
}

booksByAuthor("Stephen R. Covey"); 