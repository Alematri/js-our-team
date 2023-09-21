// 1: Creazione dell'array di oggetti per i membri del team
const teamMembers = [
  {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: "img/wayne-barnett-founder-ceo.jpg"
  },
  {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "img/angela-caroll-chief-editor.jpg"
  },
  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "img/walter-gordon-office-manager.jpg"
  },
  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "img/angela-lopez-social-media-manager.jpg"
  },
  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "img/scott-estrada-developer.jpg"
  },
  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "img/barbara-ramos-graphic-designer.jpg"
  }
];

// 2: Funzione per stampare le informazioni su console (Milestone 1)
function stampaInformazioniConsole() {
  for (const member of teamMembers) {
    console.log("Nome:", member.nome);
    console.log("Ruolo:", member.ruolo);
    console.log("Foto:", member.foto);
  }
}

// 3: Creare una sezione nel file HTML per visualizzare le informazioni (Milestone 2)

// 4: Funzione per creare elementi HTML e aggiungerli al DOM (Milestone 2)
function creaElementiNelDOM() {
  const teamInfoDiv = document.getElementById("team-info");

  for (const member of teamMembers) {

    // Creazione di un elemento <div> per la card
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card"); // Applicazione di stili per la card

    // Creazione di un elemento <img> per la foto
    const fotoImg = document.createElement("img");
    fotoImg.src = member.foto;
    

    // Creazione di un elemento <h2> per il nome
    const nomeHeader = document.createElement("h2");
    nomeHeader.textContent = member.nome;

    // Creazione di un elemento <p> per il ruolo
    const ruoloParagrafo = document.createElement("p");
    ruoloParagrafo.textContent = "Ruolo: " + member.ruolo;


    // Aggiunta degli elementi al div della card
    cardDiv.appendChild(fotoImg);
    cardDiv.appendChild(nomeHeader);
    cardDiv.appendChild(ruoloParagrafo);


    // Aggiunta della card al div principale "team-info"
    teamInfoDiv.appendChild(cardDiv);
  }
}

// Chiamata alla funzione
creaElementiNelDOM();
