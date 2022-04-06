// Pengecekan angka positif, negatif, atau 0 dengan nested if

const angka = parseInt(prompt("Masukan nilai: "));

// TODO: answer here
if (angka > 0) {
  console.log("Bilangan positif");
} else if (angka === 0) {
  console.log("Bilangan nol");
} else {
  console.log("Bilangan negatif");
}
