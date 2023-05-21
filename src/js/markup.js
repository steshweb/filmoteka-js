export { creatMarkup, creatCardMarkup };
const GENERS_LOCAL = 'genres';

function creatMarkup(items) {
  const elements = items.filter(el => el.backdrop_path);
  const genresLocal = JSON.parse(localStorage.getItem(GENERS_LOCAL));

  const markup = elements
    .map(({ title, poster_path, id, genre_ids, genres }) => {
      const genrsArr = [];
      if (genre_ids) {
        genre_ids.forEach(id => {
          genresLocal.forEach(el => {
            if (el.id === id) {
              genrsArr.push(el.name);
            }
          });
        });
      } else {
        genres.forEach(el => {
          genrsArr.push(el.name);
        });
      }
      const genrsStr = genrsArr.join(', ') || 'No ganres';
      return `
        <li class="film-list__item" data-id="${id}">
          <img 
            src="https://image.tmdb.org/t/p/w500${poster_path}" 
            alt="${title}" 
            class="film-list__img"
            data-id="${id}"
          >
          <h2 class="film-list__title" data-id="${id}">${title}</h2>
          <p class="film-list__text" data-id="${id}">${genrsStr}</p>
        </li>
        `;
    })
    .join('');
  return markup;
}

function creatCardMarkup({
  overview,
  popularity,
  poster_path,
  original_title,
  vote_average,
  vote_count,
  release_date,
  genres,
}) {
  const genresLocal = JSON.parse(localStorage.getItem(GENERS_LOCAL));
  const genrsArr = [];
  genres.forEach(el => {
    genrsArr.push(el.name);
  });
  const genrsStr = genrsArr.join(', ') || 'No ganres';
  const voteAverage = vote_average;

  const markup = `
        <img src="https://image.tmdb.org/t/p/w500${poster_path}" class="modal-img" alt="${original_title}" loading="lazy">
        <div class="modal-content-box">
            <h2 class="modal-title">${original_title}</h2>

            <ul class="modal-list">
                <li class="modal-list__item">
                    <p class="modal-list__text">Vote / Votes</p>

                    <div class="modal-list__box">
                      <span class="modal-list__vote">${vote_average.toFixed(
                        1
                      )}</span>
                      <span class="modal-list__text">/</span>
                      <span class="modal-list__value modal-list__value_one">${vote_count}</span>
                    </div>
                </li>

                <li class="modal-list__item">
                    <p class="modal-list__text">Popularity</p>

                    <div class="modal-list__box">
                      <span class="modal-list__value">${popularity.toFixed(
                        1
                      )}</span>
                    </div>
                </li>

                <li class="modal-list__item">
                    <p class="modal-list__text">Original Title</p>

                    <div class="modal-list__box">
                      <span class="modal-list__value">${original_title}</span>
                    </div>
                </li>

                <li class="modal-list__item">
                    <p class="modal-list__text">Genres</p>

                    <div class="modal-list__box">
                      <span class="modal-list__value">${genrsStr}</span>
                    </div>
                </li>
            </ul>
            <h3 class="modal-sub-title">About</h3>
            <p class="modal-text">${overview}</p>
        </div>
    `;
  return markup;
}
