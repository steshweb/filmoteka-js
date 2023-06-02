import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import { addQueue, addWatched, loadGenre } from './js/localStorage';
import { refs } from './js/refs';
import { loadTrendFilms, onSearch } from './js/filmsLoad';
import { closeModal, openModal } from './js/modal';

refs.searchForm.addEventListener('submit', onSearch);
refs.filmList.addEventListener('click', openModal);
refs.closeModalBtn.addEventListener('click', closeModal);
refs.modalBtnQueue.addEventListener('click', addQueue);
refs.modalBtnWatched.addEventListener('click', addWatched);
refs.searchFormText.style.visibility = 'hidden';

const options = {
  totalItems: 1000,
  itemsPerPage: 20,
  visiblePages: 10,
  page: 1,
};

export const pagination = new Pagination(refs.container, options);

pagination.on('afterMove', event => {
  const page = event.page;

  if (refs.serchFilmWork) {
    loadSearchFilm(serchFilmWork, page);
    window.scrollTo(0, 0);
    return;
  }
  loadTrendFilms(page);
  window.scrollTo(0, 0);
});

loadTrendFilms();
loadGenre();