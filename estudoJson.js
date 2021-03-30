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

/*let pessoa =  
{
    nome: "Iago",
    idade: 25,
    profissao: "dev",
    contato: "11 99999999",
    habilidades: ["node.js","mysql","js","html"]
}

let { nome, contato} = pessoa;

console.log(`${nome} - ${contato}`); // ou pessoa.nome e pessoa.contato*/

let turma1 = ['Ana', "José", "Fulano"];
let turma2 = ["Beltrano", "Zezinho", "Criatura"];

//let turmasAvanade = [turma1, turma2];
//let turmasAvanade = [...turma1, ... turma2] // uniu as duas listas em uma só. o spread pega cada elemnto da lista, e não a lista inteira. Sem os ... vai aidcionar só a lista toda, no outro. Não farão partes, serão elementos de lista distintas

turma1.push(...turma2); //pega os elementos do turma 2 e adiciona no turma1.
console.log(turma1);
//console.log(turmasAvanade);