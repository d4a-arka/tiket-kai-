let totalbayar = 0; 
function hitungtotal() {
    const harga = document.getElementById('classs').value;
    const penumpang = parseInt(document.getElementById('penumpang').value);

    if (harga === "Ekonomi") {
        totalbayar = 15000 * penumpang;
    } else if (harga === "Bisnis") {
        totalbayar = 80000 * penumpang;
    } else if (harga === "Eksekutif") {
        totalbayar = 110000 * penumpang;
    }

    document.getElementById('totalb').innerHTML = "Total Harga: Rp " + totalbayar.toLocaleString();
}

function bayar() {
    const bayarwoi = parseInt(document.getElementById('np').value);
    const kembali = bayarwoi - totalbayar;

    if (bayarwoi < totalbayar) {
        document.getElementById('Kembali').innerHTML = "Mohon maaf, uang anda kurang!";
    } else {
        document.getElementById('Kembali').innerHTML = "Kembalian: Rp " + kembali.toLocaleString();
    }
}

