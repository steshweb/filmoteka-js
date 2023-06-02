import { fetchFilmById } from "./fetchApi";
import { creatCardMarkup } from "./markup";
import { refs } from "./refs";

export function openModal(evt) {
  window.addEventListener('keydown', closeModalEsc);

  refs.backdrop.addEventListener('click', evt => {
    if (evt.target.className === 'backdrop') {
      refs.backdrop.classList.add('is-hidden');
    }
  });

  const filmId = Number(evt.target.dataset.id);

  if (!filmId) {
    return;
  }
  refs.backdrop.classList.remove('is-hidden');

  refs.modalBtns.forEach(item => {
    item.setAttribute('data-id', filmId);
  });

  fetchFilmById(filmId)
    .then(data => {
      const markup = creatCardMarkup(data);
      refs.modalBox.innerHTML = markup;
    })
    .catch(console.log);

  
}

export function closeModal() {
  refs.backdrop.classList.add('is-hidden');
  refs.modalBtns.forEach(item => {
    item.removeAttribute('data-id');
  });
  window.removeEventListener('keydown', closeModalEsc);
}

function closeModalEsc(evt) {
  if (evt.code === 'Escape') {
    closeModal();
  }
}