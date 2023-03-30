function formanggota1(){
    idanggota = document.getElementById('idanggota');
    namaanggota = document.getElementById('namaanggota');

    if(idanggota.value==''){
        alert('Id tidak boleh kosong')
        idanggota.focus();
        return false;
    }else if(namaanggota.value==''){
        alert('nama tidak boleh kosong');
        namaanggota.focus();
        return false;
    }else if(namaanggota.value.length <= 3){
        alert('Minimal 3 Karakter');
        namaanggota.focus();
        return false;
    }else{
        alert('Data Tersimpan')
        return true;
    }
}