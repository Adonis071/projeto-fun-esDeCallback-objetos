let personJSON;

window.printPersonInfoObject = function(jason) {
    const person = JSON.parse(jason);
    const output = document.getElementById(`output`);
    output.innerHTML +=
        `<h2> Informações da Pessoa</h2>
   <p><strong>Nome:</strong> ${person.name}</p>
   <p><strong>Idade:</strong> ${person.age}</p>
   <p><strong>Cidade Natal:</strong> ${person.city}</p>`;
}

document.addEventListener("DOMContentLoaded", function () {
    const book = {
        title: "Nas Asas de Um Beija-Flor",
        autor: "Léo de Oliveira Ruis Pantoja",
        year: 2000
    };
    function printBookInfo(book) {
        const output = document.getElementById("output");
        output.innerHTML = `
     <h2>Informações Do Livro</h2>
     <p><strong>Título:</strong> ${book.title}</p>
     <p><strong>Autor</strong> ${book.autor}</p>
     <p><strong>Ano:</strong> ${book.year}</p>`;
    }

    printBookInfo(book);
});

document.addEventListener("DOMContentLoaded", function(){
    personJSON = `{"name": "Leleco", "age": 60, "city": "Belém"}`;
});
