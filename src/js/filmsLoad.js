import { pagination } from "..";
import { fetchApi, fetchSearch } from "./fetchApi";
import { creatMarkup } from "./markup";
import { refs } from "./refs";

let serchFilmWork = '';

export function onSearch(evt) {
  evt.preventDefault();
  refs.searchFormText.style.visibility = 'hidden';
  serchFilmWork = '';
  const searchFilm = evt.currentTarget.elements.searchFilm.value.trim();
  loadSearchFilm(searchFilm);
}

export function loadTrendFilms(page) {
  fetchApi(page)
    .then(data => {
      const totalItem = data.total_results;
      pagination.setTotalItems(totalItem);

      const items = data.results;
      const markup = creatMarkup(items);
      refs.filmList.innerHTML = markup;
    })
    .catch(console.log);
}

function loadSearchFilm(searchFilm, page = 1) {
  fetchSearch(searchFilm, page)
    .then(data => {
      if (page === 1) {
        pagination.reset();
      }

      const items = data.results;
      if (!items[0]) {
        refs.searchFormText.style.visibility = 'visible';
        refs.inputSearch.value = '';
        return;
      }

      serchFilmWork = searchFilm;
      const totalItem = data.total_results;
      pagination.setTotalItems(totalItem);

      refs.filmList.innerHTML = '';
      const markup = creatMarkup(items);
      refs.filmList.innerHTML = markup;
    })
    .catch(console.log);
}