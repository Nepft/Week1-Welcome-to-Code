// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word = 'wow JavaScript is so cool';
let FirstWord = word.substring(0, 3);
let SecondWord = word.substring(4, 14);
let ThirdWord = word.substring(15, 17);
let FourWord = word.substring(18, 20);
let FifthWord = word.substring(21, 25);

console.log('First Word: ' + FirstWord);
console.log('Second Word: ' + SecondWord);
console.log('Third Word: ' + ThirdWord);
console.log('Four Word: ' + FourWord);
console.log('Fifth Word: ' + FifthWord);