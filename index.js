const nomePetShop = "PETSHOP GOOD VIBES";

let pets = [{
  nome: "Jolie",
  tipo:  "cachorro",
  idade: 4,
  raça: "Buldogue Francês",
  peso: 4,
  tutor: "Annie",
  contato: "(87) 97899-6545",
  vacinado: true,
  servicos: ["banho", "cortar as unhas"]
},
{
    nome: "Animago",
    tipo:  "cachorro",
    idade: 5,
    raça: "Vira-lata",
    peso: 4,
    tutor: "Sirius",
    contato: "(81) 98899-6555",
    vacinado: true,
    servicos: ["banho", "tosa"]
},
{
    nome: "Bichento",
    tipo:  "gato",
    idade: 3,
    raça: "Persa",
    peso: 3,
    tutor: "Hermione",
    contato: "(11) 98299-2545",
    vacinado: true,
    servicos: ["banho", "cortar as unhas"]
}

];

const listarPets = () => {
    for(let pet of pets) {
   // console.log(pets[i].nome);
    console.log(`O nome do pet é ${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raça}`);
}
}

listarPets();



