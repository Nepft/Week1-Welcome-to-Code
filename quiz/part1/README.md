# Conditional Statement | Part 1

oke kawan-kawan, disini kalian akan belajar yang namanya Conditional Statement, Logical Operator, dan Comparisons Operator.

singkatnya sih disini belajar if else, namun nanti ada soal yang dimana kamu harus belajar cara membaca dokumentasi dan cara belajar mandiri, yaitu soal bertema Switch hehe.

yak Buka aja W3school dan kerjakan soal soal berikut

## Soal 1:
```js
// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

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
```

## Soal 2
```js
// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

// 1. Membuat Variable tanggal, bulan, tahun

let tanggal = 4; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 12; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 1995; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

// 2. Mengubah hasil inputan integer agar menjadi string sesuai nama bulan

switch(bulan){
    case 1:
        bulan = "Januari";
        break;

    case 2:
        bulan = "Februari";
        break;
    
    case 3:
        bulan = "Maret";
        break;

    case 4:
        bulan = "April";
        break;

    case 5:
        bulan = "Mei";
        break;

    case 6:
        bulan = "Juni";
        break;

    case 7:
        bulan = "Juli";
        break;

    case 8:
        bulan = "Agustus";
        break;

    case 9:
        bulan = "September";
        break;

    case 10:
        bulan = "Oktober";
        break;

    case 11:
        bulan = "November";
        break;

    case 12:
        bulan =  "Desember";
        break;
}

// 3. untuk menampilkan output
console.log(tanggal + " " + bulan + " " + tahun)
```

---
video biar rada paham lah, soalnya ini awal kepahitan ngoding wkwk:

[Video tutor by Harkon](https://youtu.be/-YlMePibR6Y)

*sisanya kalian googling aja ya ges yak*
