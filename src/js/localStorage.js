import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchFilmsCol, fetchGenre } from "./fetchApi";
import { closeModal } from './modal';
import { refs } from './refs';
import { creatMarkup } from './markup';

export const LOCAL = {
  gener: 'genres',
  watched: 'watched',
  queue: 'queue'
}

export function loadGenre() {
  fetchGenre()
    .then(data => {
      const genres = JSON.stringify(data.genres);
      localStorage.setItem(LOCAL.gener, genres);
    })
    .catch(console.log);
}

export function addQueue(evt) {
  const id = Number(evt.target.dataset.id);
  const arrQ = JSON.parse(localStorage.getItem(LOCAL.queue));
  const arrW = JSON.parse(localStorage.getItem(LOCAL.watched));

  if (arrW) {
    if (arrW.includes(id)) {
      Notify.warning('The movie is already in the Watched');
      return;
    }
  }

  if (!arrQ) {
    const arr = [];
    arr.push(id);
    localStorage.setItem(LOCAL.queue, JSON.stringify(arr));
    Notify.success('Movie added to Queue');
    closeModal();
    return;
  }

  if (!arrQ.includes(id)) {
    arrQ.push(id);
    localStorage.setItem(LOCAL.queue, JSON.stringify(arrQ));
    Notify.success('Movie added to Queue');
    closeModal();
    return;
  }
  Notify.warning('The movie is already in the Queue');
}

export function addWatched(evt) {
  const id = Number(evt.target.dataset.id);
  const arrW = JSON.parse(localStorage.getItem(LOCAL.watched));
  const arrQ = JSON.parse(localStorage.getItem(LOCAL.queue));

  if (arrQ) {
    if (arrQ.includes(id)) {
      Notify.warning('The movie is already in the Queue');
      return;
    }
  }

  if (!arrW) {
    const arr = [];
    arr.push(id);
    localStorage.setItem(LOCAL.watched, JSON.stringify(arr));
    Notify.success('Movie added to Watched');
    closeModal();
    return;
  }

  if (!arrW.includes(id)) {
    arrW.push(id);
    localStorage.setItem(LOCAL.watched, JSON.stringify(arrW));
    Notify.success('Movie added to Watched');
    closeModal();
    return;
  }
  Notify.warning('The movie is already in the Watched');
}

export function createQueueCollection() {
  refs.btnQueueCol.classList.add('header-lib-btn_active');
  refs.btnWatchedCol.classList.remove('header-lib-btn_active');

  const filmsQueue = JSON.parse(localStorage.getItem(LOCAL.queue));
  if (filmsQueue) {
    fetchFilmsCol(filmsQueue)
      .then(data => {
        const markup = creatMarkup(data);
        refs.filmList.innerHTML = markup;
      })
      .catch(console.log);
  }
  refs.filmList.innerHTML = '';
}

export function createWarchedCollection() {
  refs.btnQueueCol.classList.remove('header-lib-btn_active');
  refs.btnWatchedCol.classList.add('header-lib-btn_active');
  const filmsWatched = JSON.parse(localStorage.getItem(LOCAL.watched));
  if (filmsWatched) {
    fetchFilmsCol(filmsWatched)
      .then(data => {
        const markup = creatMarkup(data);
        refs.filmList.innerHTML = markup;
      })
      .catch(console.log);
  }
  refs.filmList.innerHTML = '';
}

export function removeFilmWatched(evt) {
  const id = Number(evt.target.dataset.id);
  const arrW = JSON.parse(localStorage.getItem(LOCAL.watched));

  if (arrW) {
    if (arrW.includes(id)) {
      const idxOf = arrW.indexOf(id);
      arrW.splice(idxOf, 1);
      localStorage.setItem(LOCAL.watched, JSON.stringify(arrW));
      createWarchedCollection();
      Notify.success('Movie removed from Watched');
      closeModal();
      return;
    }
  }
  Notify.warning('The movie is not in the Watched');
}

export function removeFilmQueue(evt) {
  const id = Number(evt.target.dataset.id);
  const arrQ = JSON.parse(localStorage.getItem(LOCAL.queue));

  if (arrQ) {
    if (arrQ.includes(id)) {
      const idxOf = arrQ.indexOf(id);
      arrQ.splice(idxOf, 1);
      localStorage.setItem(LOCAL.queue, JSON.stringify(arrQ));
      Notify.success('Movie removed from Queue');
      createQueueCollection();
      closeModal();
      return;
    }
  }
  Notify.warning('The movie is not in the Queue');
}
