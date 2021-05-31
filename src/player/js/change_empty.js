let counterEmpty = 0;


export default function changeEm() {
  if (counterEmpty % 2 == 0) {
  document.querySelector(".table__empty").style.background = "#fff";
  counterEmpty++;
  }
  else {
    document.querySelector(".table__empty").style.background = "#C4C4C4";
    counterEmpty++;
  }
};