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
        image: `img/wayne-barnett-founder-ceo.jpg`,
        name: 'Wayne',
        lastName: 'Barnett',
        occupation: 'Founder & CEO',
    },
    {
        image: `img/angela-caroll-chief-editor.jpg`,
        name: 'Angela',
        lastName: 'Caroll',
        occupation: 'Chief Editor',
    },
    {
        image: `img/walter-gordon-office-manager.jpg`,
        name: 'Walter',
        lastName: 'Gordon',
        occupation: 'Office Manager',
    },
    {
        image: `img/angela-lopez-social-media-manager.jpg`,
        name: 'Angela',
        lastName: 'Lopez',
        occupation: 'Social Media Manager',
    },
    {
        image: `img/scott-estrada-developer.jpg`,
        name: 'Scott',
        lastName: 'Estrada',
        occupation: 'Developer',
    },
    {
        image: `img/barbara-ramos-graphic-designer.jpg`,
        name: 'Barbara',
        lastName: 'Ramos',
        occupation: 'Graphic Designer',
    },
]

console.table(arrTeam);
