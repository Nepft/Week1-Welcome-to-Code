// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word = 'wow JavaScript is so cool';
let FirstWord = word.substring(0, 3);
let SecondWord = word.substring(4, 14);
let ThirdWord = word.substring(15, 17);
let FourWord = word.substring(18, 20);
let FifthWord = word.substring(21, 25);

let FirstWordLength = FirstWord.length;
let SecondWordLength = SecondWord.length;
let ThirdWordLength = ThirdWord.length;
let FourWordLength = FourWord.length;
let FifthWordLength = FifthWord.length;

console.log('First Word: ' + FirstWord + ', with length: ' + FirstWordLength);
console.log('Second Word: ' + SecondWord + ', with length: ' + SecondWordLength);
console.log('Third Word: ' + ThirdWord + ', with length: ' + ThirdWordLength);
console.log('Four Word: ' + FourWord + ', with length: ' + FourWordLength);
console.log('Fifth Word: ' + FifthWord + ', with length: ' + FifthWordLength);