fs = require("fs");
const name = "bancoDeDados.json";
const nomePetShop = "PETSHOP GOOD VIBES";
let bancoDeDados = require("./bancoDeDados.json");
const data = new Date();



let pets = bancoDeDados.pets;


// forEach
const listarPets = () => {
  pets.forEach((pet) => {
    //for (let pet of pets) {
      let {nome, idade, tipo, raça, vacinado} = pet;
      console.log(`O pet é ${nome}, ${idade}, ${tipo}, ${raça}`);
      console.log(
        `O ${pet.nome} ${vacinado ? "foi vacinado" : "não foi vacinado"}`);
    }) 

};



//desafio find
const buscarPet = (nomePet) => {
 
  let findPet = pets.find((pet) => {
    return pet.nome == nomePet;
  });
  
  return findPet ? findPet : `Eita, não encontramos nenhum pet com o nome ${nomePet}`;
};

//filter

const filtrarTipoPet = (tipo) => {
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
  
const contatoTutor = (pet) => {
  let {nome, tutor, contato} = pet;
  return `Tutor: ${tutor}
          Contato: ${contato}
          Pet: ${nome}`;
        
};

const filtrarTutor = (nomeTutor) => {
  let petsTutor = bancoDeDados.pets.filter((pet) => {
      return pet.tutor == nomeTutor;
  });
  
  console.log(`Pets do tutor ${nomeTutor}:`)
  petsTutor.forEach((pet) => {
      console.log(`${pet.nome} - ${pet.tipo}`)
  })
}
 
  
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


/*const adicionarPet = (
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
};*/
// spread operator v1
/*const adicionarPet = (newPet) => {
  pets.push(...newPet);
  //atualizarBanco();
  newPet.forEach((pet)=> {
      console.log(`${pet.nome} foi adicionado com sucesso!`);
  })
}*/
const adicionarPet = (...newPets) => {
  newPets.forEach((newPet) => {
    pets.push(newPet);
  })

  
  newPets.forEach((pet) => {
      
    console.log(`${pet.nome} foi adicionado com sucesso!`);
  })
}



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

//console.log(contatoTutor(bancoDeDados.pets[1]));
//filtrarTutor("Annie")
//console.log(contatoTutor("Annie"));
//atenderCliente(pets[4], darBanhoPet);
listarPets();
// console.log(pets);

adicionarPet(
  {
    "nome": "Amoedo",
			"tipo": "cachorro",
			"idade": 5,
			"raça": "Akita",
			"peso": 4,
			"tutor": "Vlad",
			"contato": "(51) 98899-6555",
			"vacinado": true,
			"servicos": [
				"banho",
				]
  },
  {
    "nome": "Lion",
			"tipo": "cachorro",
			"idade": 5,
			"raça": "Pitbull",
			"peso": 4,
			"tutor": "Doug",
			"contato": "(61) 98899-6555",
			"vacinado": false,
			"servicos": [
				"banho",
				
			]
  })
//darBanhoPet(pets[3]);
//tosarPet(pets[3]);
//apararUnhas(pets[4]);
//campanhaVacina();

//vacinarPet(pets[4]);
//clientePremium("Sirius");
//console.log(buscarPet("Draco"));
//filtrarTipoPet("gato");
fs.writeFileSync(name, JSON.stringify(bancoDeDados, null, "\t"));
