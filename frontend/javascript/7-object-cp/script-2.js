// Buat kalkulator objek dengan 5 methods:
// - read() meminta (prompt) dua nilai dan menyimpannya sebagai properti objek.
// - sum() mengembalikan jumlah nilai yang disimpan.
// - substract() mengurangi jumlah nilai yang disimpan.
// - multiply() mengalikan nilai yang disimpan.
// - division() membagi nilai yang disimpan.

let calculator = {
  // Tulis kode di sini
  // TODO: answer here
  read() {
    var prompt = require("prompt-sync")();
    this.a = prompt("Masukkan nilai a : ");
    this.b = prompt("Masukkan nilai b : ");
  },

  sum() {
    return parseInt(this.a) + parseInt(this.b);
  },

  substract() {
    return parseInt(this.a) - parseInt(this.b);
  },

  multiply() {
    return parseInt(this.a) * parseInt(this.b);
  },

  division() {
    return parseInt(this.a) / parseInt(this.b);
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.substract());
console.log(calculator.multiply());
console.log(calculator.division());
