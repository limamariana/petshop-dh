fs = require("fs");
const name = "bancoDeDados.json";
const nomePetShop = "PETSHOP GOOD VIBES";
const bancoDeDados = require("./bancoDeDados.json");
const data = new Date();

let pets = bancoDeDados.pets;


// forEach
const listarPets = () => {
  pets.forEach(pet => {
    for (let pet of pets) {
      console.log(`O pet é ${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raça}`);
      console.log(
        `O ${pet.nome} ${pet.vacinado ? "foi vacinado" : "não foi vacinado"}`);
    } 
  });
};


//desafio find
const buscarPet = () => {
 
  let busca = pets.find(pet => pet.peso === 4);

console.log(busca);
}

//filter

const filtarTipoPet = (tipo) => {
  let filter = pets.filter(function(pet) {
    return pet.tipo === tipo;
  });
 console.log(filter)
};

// reduce
const clientePremium = (tutor) => { //vc coloca o parametro e declara que ele faz parte da função. Mas precisa fazer algo com ele.
  const listaDePets = pets.filter(function(pet) {
    return pet.tutor === tutor;
  })
  let servicosContador = 0;
  for(const pet of listaDePets) {
    const numeroDeServicos = pet.servicos.reduce((acumulador) => {
      return acumulador + 1;
    }, 0)
    servicosContador += numeroDeServicos;
  }
 
  console.log(`Parabéns! Você realizou ${servicosContador} serviços! Tem 10% de desconto no próximo, hein`)
};
  

  const vacinarPet = (pet) => {
  if (pet.vacinado === true) {
    console.log(`${pet.nome} foi vacinado com sucesso.`);
  } else {
    pet.vacinado = true;
    console.log(`${pet.nome} foi vacinado com sucesso.`);
  }
};

const campanhaVacina = () => {
  vacinasTotal = 0;
  // for 
 /* for (let pet of pets) {
    if (pet.vacinado != true) {
      pet.vacinado = true;
    }
    vacinasTotal++;
  } */

  //  map
  pets.map(function(pet) {
    if (pet.vacinado != true) {
      pet.vacinado = true;
    }
    vacinasTotal++;
  });
  
  
  console.log(`${vacinasTotal} foram vacinados nessa campanha`);
};


const adicionarPet = (
  nome,
  tipo,
  idade,
  raça,
  peso,
  tutor,
  contato,
  vacinado,
  servicos
) => {
  newPet = {
    nome,
    tipo,
    idade,
    raça,
    peso,
    tutor,
    contato,
    vacinado,
    servicos,
  };
  pets.push(newPet);
};

const darBanhoPet = (pet) => {
  pet.servicos.push("banho");
  //console.log(`O serviço de banho realizado no ${pet.nome} em`, data.toLocaleDateString())}
  console.log(`${pet.nome} tomou banho!`);
};

const tosarPet = (pet) => {
  pet.servicos.push("tosa");
  console.log(
    `A tosa foi realizada no ${pet.nome} em`,
    data.toLocaleDateString()
  );
};

const apararUnhas = (pet) => {
  pet.servicos.push("aparar unhas");
  console.log(
    `As unhas do ${pet.nome} foram aparadas em`,
    data.toLocaleDateString()
  );
};

const atenderCliente = (pet, servico) => {
  console.log(`Olá, ${pet.nome}!`);
  servico ? servico(pet) : console.log("Só passei para dar uma espiadinha!");
  console.log("Até mais! Espero que você volte mais vezes!");
};

//atenderCliente(pets[4], darBanhoPet);
//listarPets();
// console.log(pets);

//adicionarPet("Cristal", "gato", 5, "Selvagem", 3, "Zé", "21 9987-0977", false, []);
//darBanhoPet(pets[3]);
//tosarPet(pets[3]);
//apararUnhas(pets[4]);
//campanhaVacina();

//vacinarPet(pets[4]);
clientePremium("Sirius");
//buscarPet();
//filtarTipoPet();
fs.writeFileSync(name, JSON.stringify(bancoDeDados, null, "\t"));
