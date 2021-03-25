const nomePetShop = "PETSHOP GOOD VIBES";

const data = new Date();
//console.log(data.toLocaleDateString());

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
    vacinado: false,
    servicos: ["banho", "cortar as unhas"]
}

];

const listarPets = () => {
    for(let pet of pets) {
   // console.log(pets[i].nome);
    console.log(`O pet é ${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raça}`);
}
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
            for (let pet of pets) {
                if (pet.vacinado != true) {
                    pet.vacinado = true;
                    }
                vacinasTotal++;
                }
            
            console.log(`${vacinasTotal} foram vacinados nessa campanha`); 
    };
     
  const adicionarPet = (nome, tipo, idade, raça, peso, tutor, contato, vacinado, servicos) => {
     newPet = {
        nome, tipo , idade, raça, peso, tutor, contato, vacinado, servicos};
        pets.push(newPet) 
    };
   
   
const darBanhoPet = (pet) => {
        pet.servicos.push("banho");
    console.log(`O serviço de banho realizado no ${pet.nome} em`, data.toLocaleDateString())}

const tosarPet = (pet) => {
    pet.servicos.push("tosa");
    console.log(`A tosa foi realizada no ${pet.nome} em`, data.toLocaleDateString())}


const apararUnhas = (pet) => {
    pet.servicos.push("aparar unhas");
    console.log(`As unhas do ${pet.nome} foram aparadas em`, data.toLocaleDateString())}

   
   
  
   
  adicionarPet("Fred", "cachorro", 2, "Poodle", 3, "Júnior", "11 9887-0987", true, []);
   darBanhoPet(pets[3]);
    tosarPet(pets[3]);
    apararUnhas(pets[3]);
    console.log(pets);
   
   
   //listarPets();
   // vacinarPet(pets[0]);
    //campanhaVacina();
   