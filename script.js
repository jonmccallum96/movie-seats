const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const filmSelect = document.getElementById('movie');

const seatPrice = +filmSelect.value;


//UPDATE SEAT SELECTION COUNT AND TOTAL PRICE
function updateSelectedCount() {
  const seatsSelected = document.querySelectorAll('.row .seat .selected');
}

container.addEventListener('click', (e) => {

  const classList = e.target.classList;

  if (classList.contains('seat') && !classList.contains('occupied')) {
    classList.toggle('selected');

    updateSelectedCount();
  }

});