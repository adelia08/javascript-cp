// Dari kode di bawah ini

let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

// buat kode untuk manipulasi data dalam objek berdasarkan instruksi berikut

// 1. Tulis perintah untuk menambahkan bahasa "Go" ke akhir array languages.
programming.languages.push("Go");
// 2. Ubah difficulty menjadi 7.
programming.difficulty = 7;
// 3. Menggunakan kata kunci delete, tulis perintah untuk menghapus key jokes dari objek programming.
delete programming.jokes;
// 4. Tulis perintah untuk menambahkan key baru yang disebut isFun dan nilai true ke objek programming.
programming.isFun = true;
// 5. Menggunakan loop, iterasi array languages dan console.log semua bahasa.
for (var i = 0; i < programming.languages.length; i++) {
  console.log("languages programming : " + programming.languages[i]);
}
// 6. Menggunakan loop, console.log semua key dalam objek pemrograman.
for (var key in programming) {
  console.log("nilai key : " + key);
}
// 7. Menggunakan loop, console.log semua value dalam objek pemrograman.
for (var value in programming) {
  console.log("nilai value: " + programming[value]);
}

// TODO: answer here
