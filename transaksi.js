function formtransaksi(){
    namabuku = document.getElementById('namabuku');
    tglpinjam = document.getElementById('tglpinjam');
    tglkembali = document.getElementById('tglkembali');

    if(namabuku.value==''){
        alert('Masukkan nama buku');
        namabuku.focus();
        return false;
    }else if(tglpinjam.value==''){
        alert('tanggal tidak diketahui');
        tglpinjam.focus();
        return false;
    }else if(tglkembali.value==''){
        alert('tanggal tidak diketahui');
        tglkembali.focus();
        return false;
    }else{
        alert('Data Tersimpan')
        return true;
    }
}