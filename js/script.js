const arrTeam = [
    {
        image: 'img/wayne-barnett-founder-ceo.jpg',
        name: 'Wayne',
        lastName: 'Barnett',
        occupation: 'Founder & CEO',
    },
    {
        image: 'img/angela-caroll-chief-editor.jpg',
        name: 'Angela',
        lastName: 'Caroll',
        occupation: 'Chief Editor',
    },
    {
        image: 'img/walter-gordon-office-manager.jpg',
        name: 'Walter',
        lastName: 'Gordon',
        occupation: 'Office Manager',
    },
    {
        image: 'img/angela-lopez-social-media-manager.jpg',
        name: 'Angela',
        lastName: 'Lopez',
        occupation: 'Social Media Manager',
    },
    {
        image: 'img/scott-estrada-developer.jpg',
        name: 'Scott',
        lastName: 'Estrada',
        occupation: 'Developer',
    },
    {
        image: 'img/barbara-ramos-graphic-designer.jpg',
        name: 'Barbara',
        lastName: 'Ramos',
        occupation: 'Graphic Designer',
    },
]

const boxCards = document.querySelector('.cards_container');
boxCards.classList.add('bg-dark', 'text-white', 'p-5')

for (let key in arrTeam) {
    const eleCard = document.createElement('div');
    eleCard.classList.add('col-4', 'd-flex', 'g-3', 'flex-column');
    const eleCardContent = document.createElement('div');
    eleCardContent.classList.add('img-fluid', 'd-flex', 'flex-column');
    const eleCardContentName = document.createElement('div');
    eleCardContentName.classList.add('flex-column', 'text-center');
    const eleCardContentWork = document.createElement('div');
    eleCardContentWork.classList.add('flex-column', 'text-center');
    boxCards.append(eleCard);
    eleCard.append(eleCardContent);
    eleCard.append(eleCardContentName);
    eleCard.append(eleCardContentWork);
    eleCardContent.innerHTML = (`<img src="${arrTeam[key].image}">`);
    eleCardContentName.innerHTML = (`${arrTeam[key].name} ${arrTeam[key].lastName}`);
    eleCardContentWork.innerHTML = (`${arrTeam[key].occupation}`);
}

console.table(arrTeam);