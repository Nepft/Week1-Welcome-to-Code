// SOAL 1

// algoritma
// 1. Membuat 2 variable yaitu variable 'nama' untuk menginput nama dan 'peran' untuk menginput peran
// 2. lalu dibuat sebuah kondisi untuk memberikan peringatan jika nama/peran tidak diisi
// 3. kemudian menampilkan hasil inputan dari variable nama dan peran.
// 4. setelah itu agar dapat mengeluarkan respon dari peran yang dipilih tadi dibuatlah suatu kondisi
//    jika menginput peran (Ksatria / Tabib / Penyihir) akan mengeluarkan respon yang berbeda beda sesuai
//    perannya masing masing, jika peran yang diinputkan tidak ada/kosong maka keluarlah statement 
//    "kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada".


// membuat varible nama dan peran
let nama = "Hanif", peran = "Ksatria";

// untuk memberikan peringatan

if(nama === "") {
    nama = "(nama wajib diisi)"
} if(peran === "") {
    peran = "(pilih peranmu untuk memulai game)"
}

// untuk mengeluarkan hasil inputan variable nama dan peran

console.log("Nama : " + nama)
console.log("Peran : " + peran)

// untuk memberikan salah satu respon terdahap variable yang diisi

if(peran === "Ksatria"){
    console.log("halo Ksatria" + " " + nama + ", kamu dapat menyerang dengan senjatamu!")
} else if (peran === "Tabib") {
    console.log("halo Tabib" + " " + nama + ", kamu dapat membantu temanmu yang terluka")
} else if (peran === "Penyihir"){
    console.log("halo Penyihir" + " " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!")
} else {
    console.log("kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada")
}