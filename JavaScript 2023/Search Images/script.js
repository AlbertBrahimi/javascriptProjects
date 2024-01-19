const apiKey = 'Z9M3EyhBOj2D5SCna-WDNHw_-rjLeqds3edzc9PW_yU';
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const imageResults = document.getElementById('image-results');
// kemi krijuar 4 variabla, 1 per te marre vleren e API key, 1 per te marre vleren e search form dhe 1 per te marre vleren e search input

searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    performSearch(); // performSearch eshte nje funksion qe do te krijojme me poshte
}); // kemi krijuar nje event listener per te bere submit te search form

function performSearch() {
    const searchTerm = searchInput.value;
    if (searchTerm) {
        searchImages(searchTerm);
    } // if statement per te bere search vetem nese ka nje vlere ne search input
} // kemi krijuar nje funksion per te bere search te images

async function searchImages(query) {
    const apiUrl = `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}&per_page=12`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        displayImages(data.results); // displayImages eshte nje funksion qe do te krijojme me poshte, data.results eshte nje array qe permban te gjitha rezultatet e search-it, results eshte nje property e data, pra njera nga vlerat e data, data eshte nje objekt qe permban te gjitha vlerat e response.
    } catch (error) {
        console.error('Error fetching images:', error);
    }
} 

function displayImages(images) {
    imageResults.innerHTML = '';

    images.forEach(image => {
        const imageCard = document.createElement('div');
        imageCard.classList.add('image-card');

        const img = document.createElement('img');
        img.src = image.urls.small;
        img.alt = image.alt_description;

        imageCard.appendChild(img);
        imageResults.appendChild(imageCard);
    });
}
