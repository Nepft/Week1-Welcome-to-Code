// Problem buatlah bintang seperti berikut
// let input = 5
//hasilnya
//*
//**
//***
//****
//*****

// Bintang
let bintang = ""
let input = 5
for(i = 1; i<=input; i++){
    for(j = 1; j <= i; j++){
        bintang += "*";
    }if( i !== input){
        bintang += "\n"
    }
}
console.log(bintang)