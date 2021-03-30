//let lista = 
/*const bancoDeDados = require("./bancoDeDados.json");
let pets = bancoDeDados.pets



const atenderCliente = (pet, servico) => {
    console.log(`Olá, ${pet.nome}`);

    servico();
    console.log('Tchau, até mais!');
}

const darBanhoPet = () => {
    console.log('dando banho no pet...');
}

const apararUnhas = () => {
    console.log("Aparando unhas...")
}

atenderCliente(pets[1], darBanhoPet);
console.log("-----------")

atenderCliente(pets[2], apararUnhas)

/*const bancoDeDados = require("./pets.json");

const pets = bancoDeDados.pets;

const atenderCliente = (pet, servico) => {
    console.log(`Olá, ${pet.nome}`);
    //servico();
    (servico)? servico() : console.log("só vim dar uma olhadinha");
    console.log('Tchau, até mais!');
}

const darBanho = () => {
    console.log('dando banho no pet...');
}

const apararUnhasPet = () => {
    console.log('aparando unhas...');
}

atenderCliente(pets[0], darBanho);
console.log("---------------");
atenderCliente(pets[2]);*/

//desestruturação

let pessoa =  
{
    nome: "Iago",
    idade: 25,
    profissao: "dev",
    contato: "11 99999999",
    habilidades: ["node.js","mysql","js","html"]
}

let { nome, contato} = pessoa;

console.log(`${nome} - ${contato}`); // ou pessoa.nome e pessoa.contato