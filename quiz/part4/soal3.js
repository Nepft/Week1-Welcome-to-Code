// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi 
// satu kalimat berikut: 
// "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

function processSentence(nama, umur, alamat, hobi) {
    return `Nama saya ${nama}, umur saya ${umur} tahun, alamat saya di ${alamat}, dan saya punya hobby yaitu ${hobi}`
}

let nama = "Agus";
let umur = 30;
let alamat = "Jln. Malioboro, Yogjakarta";
let hobi = "gaming";

console.log(processSentence(nama, umur, alamat, hobi))   