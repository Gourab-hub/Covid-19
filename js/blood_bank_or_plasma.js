const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.Name.toLowerCase().includes(searchString) ||
            character.Region.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {
        const res = await fetch('https://fooddataapi.s3.ap-south-1.amazonaws.com/plasma.json');
        hpCharacters = await res.json();
 
        console.log(hpCharacters);

        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2><i class="fa fa-user-md"></i>Hospital:- ${character.hospital}</h2>
                <h3><i class="fa fa-phone" ></i> Phone No:- ${character.Phone}</h3>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();
