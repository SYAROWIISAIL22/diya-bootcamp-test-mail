let bulan = [
  "jan",
  "feb",
  "mar",
  "apr",
  "mei",
  "jun",
  "jul",
  "agu",
  "sep",
  "okt",
  "nov",
  "des",
];
let cek = " 11 12 2004";
let getbulan = "";
let statusnya = "";
for (let j = 0; j < cek.length; j++) {
  if (
    parseInt(cek[0] + cek[1]) > 12 ||
    parseInt(cek[cek.length - 2] + cek[cek.length - 1])
  ) {
    statusnya = "ya";
    break;
  } else if (j <= 2) {
    getbulan += cek[j];
  } else {
    statusnya = "tidak";
    break;
  }
}
for (let k = 0; k < bulan.length; k++) {
  if (bulan[k].includes(getbulan)) {
    statusnya = "ya";
    break;
  }
}
console.log(statusnya);
