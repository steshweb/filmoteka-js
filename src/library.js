import { createQueueCollection, createWarchedCollection, removeFilmQueue, removeFilmWatched } from './js/localStorage';
import { closeModal, openModal } from './js/modal';
import { refs } from './js/refs';

refs.btnQueueCol.addEventListener('click', createQueueCollection);
refs.btnWatchedCol.addEventListener('click', createWarchedCollection);
refs.filmList.addEventListener('click', openModal);
refs.closeModalBtn.addEventListener('click', closeModal);
refs.btnRemoveWatched.addEventListener('click', removeFilmWatched);
refs.btnRemoveQueue.addEventListener('click', removeFilmQueue);

createWarchedCollection();