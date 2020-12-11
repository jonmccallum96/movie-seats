const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const filmSelect = document.getElementById('movie');
const screen = document.querySelector('.screen');

const posters = [
  'https://images-na.ssl-images-amazon.com/images/I/51WAC7SFK9L._AC_SY400_.jpg',
  'https://1.bp.blogspot.com/-X0aR4mhW_04/Vvqc4_ajuHI/AAAAAAAAiws/USZdZTPPrhEgV_dOvnoK7z6x_9x7fW5dg/s1600/american%2Bwerewolf%2Bin%2Blondon%2B1981%2Buk%2Bquad%2Bposter.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Starship_Troopers_-_movie_poster.jpg/220px-Starship_Troopers_-_movie_poster.jpg',
  'https://resizing.flixster.com/bXadsjlcLBeT2UYzjzsByvPWBI4=/206x305/v2/https://flxt.tmsimg.com/assets/p31044_p_v10_af.jpg'
]

populateApp();

let seatPrice = +filmSelect.value;

//SAVE SELECTED MOVIE INDEX + SEAT PRICE

function setFilmData(filmIndex, filmPrice) {
  localStorage.setItem('selectedFilmIndex', filmIndex);
  localStorage.setItem('selectedFilmPrice', filmPrice);
}

//UPDATE SEAT SELECTION COUNT AND TOTAL PRICE
function updateSelectedCount() {
  const seatsSelected = document.querySelectorAll('.row .seat.selected');

  const seatsIndex = [...seatsSelected].map(seat => [...seats].indexOf(seat));

  localStorage.setItem('seatsSelected', JSON.stringify(seatsIndex));

  const countseatsSelected = seatsSelected.length;
  const totalPrice = countseatsSelected * seatPrice;
  count.innerText = countseatsSelected;
  total.innerText = totalPrice;

}

//POPULATE APP FROM LOCALSTORAGE
function populateApp() {
  const seatsSelected = JSON.parse(localStorage.getItem('seatsSelected'));

  if (seatsSelected !== null && seatsSelected.length > 0) {
    seats.forEach((seat, index) => {
      if (seatsSelected.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    })
  }
  const selectedFilmIndex = localStorage.getItem('selectedFilmIndex');

  if (selectedFilmIndex !== null) {
    filmSelect.selectedIndex = selectedFilmIndex;
    changePoster(selectedFilmIndex);
  }
}

//HANDLE FILM SELECTION
filmSelect.addEventListener('change', (e) => {
  seatPrice = +e.target.value;
  const chosenFilm = e.target.selectedIndex;
  changePoster(chosenFilm)
  setFilmData(chosenFilm, e.target.value);
  updateSelectedCount();
})

//HANDLE SEAT CLICKS
container.addEventListener('click', (e) => {
  const classList = e.target.classList;
  if (classList.contains('seat') && !classList.contains('occupied')) {
    classList.toggle('selected');
    updateSelectedCount();
  }
});

//CHANGES FILM POSTER
function changePoster(posterIndex) {
  screen.style.backgroundImage = `url(${posters[posterIndex]})`;
}

//INIT COUNT/TOTAL
updateSelectedCount()