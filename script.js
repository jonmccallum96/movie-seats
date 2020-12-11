const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const filmSelect = document.getElementById('movie');
const screen = document.querySelector('.screen');

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
  }
}

//HANDLE FILM SELECTION
filmSelect.addEventListener('change', (e) => {
  seatPrice = +e.target.value;
  setFilmData(e.target.selectedIndex, e.target.value);
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

//INIT COUNT/TOTAL
updateSelectedCount()