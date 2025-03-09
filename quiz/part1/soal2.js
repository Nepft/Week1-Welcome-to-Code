// SOAL 2

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
