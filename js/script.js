// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede
// Consigli del giorno:
// Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice.
// E ricordiamoci che console.log() è nostro amico!

const arrTeam = [
    {
        image: `<img src="img/wayne-barnett-founder-ceo.jpg" alt="">`,
        name: 'Wayne',
        lastName: 'Barnett',
        occupation: 'Founder & CEO',
    },
    {
        image: `<img src="img/angela-caroll-chief-editor.jpg" alt="">`,
        name: 'Angela',
        lastName: 'Caroll',
        occupation: 'Chief Editor',
    },
    {
        image: `<img src="img/walter-gordon-office-manager.jpg" alt="">`,
        name: 'Walter',
        lastName: 'Gordon',
        occupation: 'Office Manager',
    },
    {
        image: `<img src="img/angela-lopez-social-media-manager.jpg" alt="">`,
        name: 'Angela',
        lastName: 'Lopez',
        occupation: 'Social Media Manager',
    },
    {
        image: `<img src="img/scott-estrada-developer.jpg" alt="">`,
        name: 'Scott',
        lastName: 'Estrada',
        occupation: 'Developer',
    },
    {
        image: `<img src="img/barbara-ramos-graphic-designer.jpg" alt="">`,
        name: 'Barbara',
        lastName: 'Ramos',
        occupation: 'Graphic Designer',
    },
]

const boxCards = document.querySelector('.cards_container');

for (let key in arrTeam) {
    const eleCard = document.createElement('div');
    eleCard.classList.add('col-4', 'd-flex', 'img-fluid', 'g-3');
    const eleCardContent = document.createElement('div');
    eleCardContent.classList.add('img-fluid', 'd-flex', 'flex-column');
    boxCards.append(eleCard);
    eleCard.append(eleCardContent);
    eleCardContent.innerHTML = (`${arrTeam[key].image} ${arrTeam[key].name} ${arrTeam[key].lastName} ${arrTeam[key].occupation}`);
}

console.table(arrTeam);