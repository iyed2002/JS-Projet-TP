/*========================================================================================
BIBLIOTHEQUE
==========================================================================================*/

/* ----------------------------------------------------------------------------------------
 NE PAS MODIFIER CE CODE :
---------------------------------------------------------------------------------------- */

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



/*----------------------------------------------------------------------------------------
VOTRE CODE EST A ECRIRE CI-DESSOUS :
------------------------------------------------------------------------------------------*/

















/*------------------------------------------------------------------------------------------
VOICI LE CODE QUE VOUS DEVEZ TESTER : NE SURTOUT RIEN CHANGER AU CODE CI-DESSOUS
------------------------------------------------------------------------------------------*/

displayBooks();
addBook("Le Rouge et le Noir", "Stendhal", 576);
addBook("Les Fleurs du Mal", "Charles Baudelaire", 320, true);
addBook("Le Comte de Monte-Cristo", "Alexandre Dumas", 928, true, 4);
removeBook("Dune");
displayBooks();
searchBook("Orwell");
searchBook('animaux');
markAsRead("Notre-Dame de Paris");
displayBooks();
updateBook("1984", { rating: 5, read: true });
displayBooks();
rating("Orgueil et Préjugés", 5);
displayBooks();
averageRate();
bookPerAuthor("George Orwell");
HighlyRatedBooks();


