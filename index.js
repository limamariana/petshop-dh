fs = require("fs");
const name = "bancoDeDados.json";
const nomePetShop = "PETSHOP GOOD VIBES";
const bancoDeDados = require("./bancoDeDados.json");
const data = new Date();

let pets = bancoDeDados.pets;

const listarPets = () => {
  for (let pet of pets) {
    console.log(`O pet é ${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raça}`);
    console.log(
      `O ${pet.nome} ${pet.vacinado ? "foi vacinado" : "não foi vacinado"}`
    );
  }
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
  for (let pet of pets) {
    if (pet.vacinado != true) {
      pet.vacinado = true;
    }
    vacinasTotal++;
  }

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
  console.log("Até mais!");
};

// atenderCliente(pets[2], darBanhoPet);
// listarPets();
// console.log(pets);

//adicionarPet("Fred", "cachorro", 2, "Poodle", 3, "Júnior", "11 9887-0987", true, []);
//darBanhoPet(pets[3]);
//tosarPet(pets[3]);
//apararUnhas(pets[3]);
//campanhaVacina();

vacinarPet(pets[2]);

fs.writeFileSync(name, JSON.stringify(bancoDeDados, null, "\t"));
