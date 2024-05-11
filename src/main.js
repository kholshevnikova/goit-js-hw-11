import { searchPhoto } from "./js/pixabay-api";

const searchForm = document.querySelector('.search-form');
console.log(searchForm);
const searchInfo = document.querySelector('.js-search-input');
console.log(searchInfo);
// const searchBtn = document.querySelector('.form-search-btn');
// console.log(searchBtn);

searchForm.addEventListener('submit', onSearch);

function onSearch(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const searchQuery = form.elements.searchKeyword.value;
    console.log(searchQuery);
    searchPhoto(searchQuery).then(image => console.log(image))
}
