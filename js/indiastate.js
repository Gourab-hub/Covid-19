const charactersList = document.getElementById('data');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [];



searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.region.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {
        // const res = await fetch('https://hp-api.herokuapp.com/api/characters');

        // hpCharacters = await res.json();

        const res = await fetch('https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true');
        fruits = await res.json();
        hpCharacters = fruits.regionData;
        
        console.log(hpCharacters)
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {




    // const htmlString = characters
    //     .map((character) => {
    //         return `
    //         // <li class="character">
    //         //     <h2>${character.region}</h2>
    //         //     <p>dead: ${character.deceased}</p>
    //         //     <p>activeCases :${character.activeCases}</p>
    //         // </li>

    //     `;
    //     })
    //     .join('');

    var temp = "";

    characters.forEach((u) => {
        temp += "<tr>";
        temp += "<td class='region' data-label='State'>" + u.region;
        temp += "<td class='totalInfected' data-label='Total Infected'>" + u.totalInfected;
        temp += "<td class='recovered' data-label='Recovered'>" + u.recovered;
        temp += "<td class='activeCases' data-label='ActiveCases'>" + u.activeCases;
        temp += "<td class='deceased' data-label='Deceased'>" + u.deceased + "</tr>";
    })

    document.getElementById("data").innerHTML = temp;



    // charactersList.innerHTML = htmlString;
};

loadCharacters();
