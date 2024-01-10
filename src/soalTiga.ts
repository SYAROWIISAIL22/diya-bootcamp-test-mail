let antrian = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let waktu = [2, 3, 3, 7, 1, 2, 2, 1, 5, 2];

let Kasir1 = [1, 4];
let totalKasir1 = 0;
for (let i = 0; i < antrian.length; i++) {
  for (let j = 0; j < Kasir1.length; j++) {
    if (antrian[i] === Kasir1[j]) {
      totalKasir1 += waktu[i];
    }
  }
}
let Kasir3 = [3, 6, 8, 10];
let totalKasir3 = 0;
for (let i = 0; i < antrian.length; i++) {
  for (let j = 0; j < Kasir3.length; j++) {
    if (antrian[i] === Kasir3[j]) {
      totalKasir3 += waktu[i];
    }
  }
}

console.log(`total kasir satu = ${totalKasir1}`);
console.log(`totalKasir tiga = ${totalKasir3}`);
