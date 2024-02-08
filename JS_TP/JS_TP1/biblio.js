/*============================================================================================
 Objectif: Utiliser des tableaux et des fonctions pour créer un gestionnaire de livres simple.
 ============================================================================================*/

// Créez une liste livres qui contient des objets avec les propriétés suivantes: titre, author, pages(nombre de pages) et read(un booléen indiquant si le livre a été lu ou non)


const jouer = (a, b) => {
    a = 2 * b; // 6
    b = 3 * a; // 18
    return { a, b };
};

console.log(jouer(2, 3));

let books = [
    { title: "1984", author: "George Orwell", pages: 326, read: true, rating: 5 },
    { title: "Le Hobbit", author: "J.R.R. Tolkien", pages: 310, read: false, rating: null },
    { title: "Fahrenheit 451", author: "Ray Bradbury", pages: 249, read: true, rating: 4 },
    { title: "Moby Dick", author: "Herman Melville", pages: 720, read: false, rating: null },
    { title: "La Ferme des animaux", author: "George Orwell", pages: 112, read: false, rating: null },
    { title: "Le Grand Gatsby", author: "F. Scott Fitzgerald", pages: 180, read: true, rating: 5 },
    { title: "Orgueil et Préjugés", author: "Jane Austen", pages: 279, read: false, rating: null },
    { title: "Les Misérables", author: "Victor Hugo", pages: 1463, read: true, rating: 3 },
    { title: "Dune", author: "Frank Herbert", pages: 412, read: false, rating: 1 },
    { title: "Brave New World", author: "Aldous Huxley", pages: 268, read: true, rating: 2 },
    { title: "Notre-Dame de Paris", author: "Victor Hugo", pages: 940, read: false, rating: null }
];

/*--------  Fonctionnalités à implémenter  ----------------*/

const displayArray = (arrayName) => {

    switch (arrayName) {
        case books:
            console.log('ETAT DU STOCK DU MAGASIN :');
            break;
        case cart:
            console.log('CONTENU DE VOTRE PANIER :');
            break;
        default:
            null;
            break;
    }
    console.table(arrayName);
};

displayArray(books);


/*-----------------------------------------------------------
displayBook(): affiche tous les livres
------------------------------------------------------------*/

const displayBooks = () => {
    console.log('Liste complète des livres :');
    console.table(books);
}

// Appel de la fonction pour afficher tous les livres :
displayBooks();


const toto = [{ film: 'titanic', annee: 2010 }];


const afficherLivre = (livres) => {
    // console.table(livres);

    return livres;
};

console.table(afficherLivre(books));





/*---------------------------------------------------------
addBook() : ajoute un livre au tableau "livres"
---------------------------------------------------------*/

const addBook = (title, author, pages, read = false, rating = null) => {
    books.push({ title, author, pages, read, rating });
    console.log(`Le livre "${title}" de l'auteur "${author}" a été ajouté !`);
    console.table(books);
}

addBook("Le Rouge et le Noir", "Stendhal", 576);
addBook("Les Fleurs du Mal", "Charles Baudelaire", 320, true);
addBook("Le Comte de Monte-Cristo", "Alexandre Dumas", 928, true, 4);
addBook("Le Comte de Monte-Cristo", "Alexandre Dumas", 928, true, 4);



/*---------------------------------------------------------
removeBook() : supprime un livre du tableau "livres"
---------------------------------------------------------*/

function removeBook2(bookTitle) {
    for (let i = 0; i < books.length; i++) {
        if (books[i].title === bookTitle) {
            books.splice(i, 1);
            return;
        }
    }
}

// boucle clasqqiue sans utiliser splice ni slice
function removeBook3(bookTitle) {
    let newBooks = [];
    for (let book of books) {
        if (book.title !== bookTitle) {
            newBooks.push(book);
        }
    }
    books = newBooks;
}

// ou bien sous forme fléchée :


const removeBook = (title) => {
    books = books.filter(book => book.title !== title);
    console.log(`Le livre "${title}" a été supprimé !`);
    console.table(books);
}

removeBook("Dune");


/*------------------------------------------------------------------------------------
searchBook() : recherche d'un livre par critère
 -----------------------------------------------------------------------------------*/

// Recherche et retourne les livres qui correspondent au critère de recherche.
// Le critère peut être basé sur le titre, l'auteur, ou d'autres propriétés des livres.
const searchBook = (criterion) => {
    let searchResult = books.filter(book =>
        book.title.includes(criterion) ||
        book.author.includes(criterion)
    );

    console.log(`Résultat de la recherche pour "${criterion}" :`);
    console.table(searchResult);
}
// Exemple d'utilisation de la fonction :
searchBook("Orwell");
searchBook('animaux');

// Avec un boucle classqiue for
function searchBook2(criterion) {
    let searchResult = [];
    for (let book of books) {
        if (book.title.includes(criterion) || book.author.includes(criterion)) {
            searchResult.push(book);
        }
    }
    console.log(`Résultat de la recherche pour "${criterion}" :`);
    console.table(searchResult);
}



/*------------------------------------------------------------------------------------
markAsRead() : si le livre a été lu alors la propriété read doit être passée à "true"
 -----------------------------------------------------------------------------------*/

const markAsRead2 = (bookTitle) => {
    for (let book of books) {
        if (book.title === bookTitle) {
            book.read = true;
            return;
        }
    }
}

// Avec une boucle for classique :
function markAsRead3(bookTitle) {
    for (let i = 0; i < books.length; i++) {
        if (books[i].title === bookTitle) {
            books[i].read = true;
            return;
        }
        // return books[i].title === bookTitle ? books[i].read = true : null
    }
}

// ou bien sous forme fléchée :

// Fonction fléchée qui permet de marquer un livre comme lu : 
const markAsRead = (bookTitle) => {
    books.filter(book => book.title === bookTitle).map(book => book.read = true);
    console.log(`Le livre "${bookTitle}" a été marqué comme lu !`);
}

markAsRead("Notre-Dame de Paris");
displayBooks();



/*------------------------------------------------------------------------------------
fonction générique qui permet de mettre à jour la qualification (rating) d'un livre 
et/ou d'indiquer si vous l'avez lu.
-------------------------------------------------------------------------------------*/

const updateBook = (title, options = {}) => {
    const book = books.find(b => b.title === title);

    if (!book) {
        console.error("Livre non trouvé !");
        return;
    }

    if (options.hasOwnProperty('rating')) {
        book.rating = options.rating;
    }

    if (options.hasOwnProperty('read')) {
        book.read = options.read;
    }

    console.log(`Le livre "${title}" a été mis à jour !`);
}

// plus simple sans utiliser hasOwnProperty
const updateBook2 = (title, options = {}) => {
    const book = books.find(b => b.title === title);

    if (!book) {
        console.error("Livre non trouvé !");
        return;
    }

    if (options.rating) {
        book.rating = options.rating;
    }

    if (options.read) {
        book.read = options.read;
    }

    console.log(`Le livre "${title}" a été mis à jour !`);
}

// sans tableau d'options
const updateBook3 = (title, rating, read) => {
    const book = books.find(b => b.title === title);

    if (!book) {
        console.error("Livre non trouvé !");
        return;
    }

    if (rating) {
        book.rating = rating;
    }

    if (read) {
        book.read = read;
    }

    console.log(`Le livre "${title}" a été mis à jour !`);
}

// application de la fonction générique :

updateBook("Les Fleurs du Mal", { rating: 4, read: true });
updateBook("Les Fleurs du Mal", { rating: 4 });
updateBook("Les Fleurs du Mal", { read: false });
updateBook("1984", { rating: 5, read: true });
displayBooks();



/*------------------------------------------------------------------------------------
rating() : qualification du livre entre 0 et 5
 -----------------------------------------------------------------------------------*/

const rating2 = (bookTitle, ratingValue) => {
    for (let i = 0; i < books.length; i++) {
        if (books[i].title === bookTitle) {
            books[i].rating = ratingValue;
            return;
        }
    }
}

// ou bien sous forme fléchée :

const rating = (bookTitle, ratingValue) => {
    books.filter(book => book.title === bookTitle).map(book => book.rating = ratingValue);
    console.log(`La qualification du livre "${bookTitle}" est désormais : ${ratingValue}`);
}

rating("Orgueil et Préjugés", 5);
displayBooks();


/*------------------------------------------------------------------------------------
averageRate() : affiche la moyenne des notes des livres
 -----------------------------------------------------------------------------------*/

const averageRate2 = () => { // fonction qui calcule la moyenne des notes des livres
    let total = 0;
    for (let book of books) {
        total += book.rating;
    }
    return total / books.length;
}

// ou bien sous forme fléchée :

const averageRate = () => {
    const average = books.reduce((acc, book) => acc + book.rating, 0) / books.length;
    console.log(`La moyenne des notes des livres est de : ${average.toFixed(2)}`);
}

averageRate();





/*----------------------------------------------------------------
bookPerAuthor() : retourne la liste des livres du même auteur
------------------------------------------------------------------*/

const bookPerAuthor = (authorName) => {
    const filteredBVooks = books.filter(book => book.author === authorName);
    console.log(`Les livres de ${authorName} sont :`);
    console.table(filteredBVooks);
}

bookPerAuthor("George Orwell");


/*------------------------------------------------------------------------------------
Recoomandation de livres -----------------------------------------------------------------------------------*/

// Fonction qui recommande un livre en fonction de la note attribuée par l'utilisateur :

const HighlyRatedBooks = () => {
    let recommandation = books.filter(book => book.rating >= 4);
    console.log('Les livres recommandés sont :');
    console.table(recommandation);
}

HighlyRatedBooks();



/*------------------------------------------------------------------------------------
Ajouter commentaire
-----------------------------------------------------------------------------------*/

books.forEach(book => book.comments = []);

// Étape 2: Mise à jour de la fonction addBook
const addBook2 = (title, author, pages, read = false, rating = null, comments = []) => {
    books.push({ title, author, pages, read, rating, comments });
}

const addComment = (bookTitle, comment) => {
    const book = books.find(b => b.title === bookTitle);
    if (book) {
        book.comments.push(comment);
        console.log(`Le commentaire "${comment}" a été ajouté au livre "${bookTitle}"`);
    } else {
        console.error("Livre non trouvé pour ajouter un commentaire !");
    }
}

addComment("Les Fleurs du Mal", "Un livre magnifique !");
addComment("Les Fleurs du Mal", "Un livre à lire absolument !");
addComment("Les Fleurs du Mal", "Un livre très intéressant !");

displayBooks();


/*------------------------------------------------------------------------------------
sortByBookName (): afficher la liste des livres par ordre alphabétique
 -----------------------------------------------------------------------------------*/

// localeCompare() est une méthode intégrée de la classe String en JavaScript.
// Elle est utilisée pour comparer deux chaînes de caractères tout en tenant compte des règles de tri spécifiques à une langue ou à une région.

function sortByBookName() {
    return books.sort((a, b) => a.title.localeCompare(b.title));
}

// Sous forme de fonction fléchée :
sortByBookName = () => {
    return books.sort((a, b) => a.title.localeCompare(b.title));
}

sortByBookName();

// résultat de la fonction :
console.log('Les livres par ordre alphabétique sont :');
console.table(sortByBookName());


/*------------------------------------------------------------------------------------
sortByProperty(): afficher la liste des livres par ordre alphabétique en choisissant 
la propriété sur laquelle s'effectue le trie.
 -----------------------------------------------------------------------------------*/
function sortByProperty(property) {
    return books.sort((a, b) => {
        if (typeof a[property] === 'string') {
            return a[property].localeCompare(b[property]);
        } else {
            return a[property] - b[property];
        }
    });
}

// Sous forme de fonction fléchée :

sortByProperty = (property) => {
    return books.sort((a, b) => {
        if (typeof a[property] === 'string') {
            return a[property].localeCompare(b[property]);
        } else {
            return a[property] - b[property];
        }
    });
}

sortByProperty("pages");

// résultat de la fonction :
console.log('Les livres par ordre croissant selon le nombre de pages :');
console.table(sortByProperty("pages"));







