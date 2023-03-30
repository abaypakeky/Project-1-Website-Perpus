function formbuku(){
    idanggota = document.getElementById('idanggota');
    namabuku = document.getElementById('namabuku');
    namapengarang = document.getElementById('namapengarang');
    namapenerbit = document.getElementById('namapenerbit');

    if(idanggota.value==""){
        alert('Id tidak boleh kosong');
        namabuku.focus();
        return false;
    }else  if(namabuku.value==''){
        alert('Masukkan nama buku');
        namabuku.focus();
        return false;
    }else  if(namapengarang.value==''){
        alert('Masukkan nama buku');
        namapengarang.focus();
        return false;
    }else  if(namapenerbit.value==''){
        alert('Masukkan nama buku');
        namapenerbit.focus();
        return false;
    }
}