const tombol = document.getElementById('tombol');


function buatBaris(nama, email, alamat) {
    const inputNama = document.createElement('td');
    const inputEmail = document.createElement('td');
    const inputAlamat = document.createElement('td');

    inputNama.append(nama);
    inputEmail.append(email);
    inputAlamat.append(alamat);

    const divAksi = document.createElement('div');
    divAksi.append(hapusData(), editData());

    const tr = document.createElement('tr');
    tr.append(inputNama, inputEmail, inputAlamat, divAksi);

    const tabel = document.querySelector('.data');
    tabel.append(tr);

}



function hapusData() {
    return buatTombolHapus('red', function(event) {
        hapusSelesai(event.target.parentElement.parentElement);
    });
}
function editData() {
    return buatTombolEdit('green', function(event) {
        edit(event.target.parentElement.parentElement);
    });
}

function buatTombolHapus(buttonTypeClass, eventListener) {
    const button = document.createElement('input');
    button.setAttribute('type', 'submit');
    button.setAttribute('value', 'Hapus');
    button.classList.add(buttonTypeClass);
    button.addEventListener('click', function(event) {
        eventListener(event);
    });
    return button;
}
function buatTombolEdit(buttonTypeClass, eventListener) {
    const button = document.createElement('input');
    button.setAttribute('type', 'submit');
    button.setAttribute('value', 'Edit');
    button.classList.add(buttonTypeClass);
    button.addEventListener('click', function(event) {
        eventListener(event);
    });
    return button;
}

function hapusSelesai(taskElement) {
    taskElement.remove();
    alert('Data berhasil dihapus!');
}
function edit(taskElement) {
    // taskElement.remove();

    console.log(taskElement);

    const td1 = taskElement.querySelector('td:nth-child(1)').innerText;
    const td2 = taskElement.querySelector('td:nth-child(2)');
    const td3 = taskElement.querySelector('td:nth-child(3)');
    console.log(td1);
    console.log(td2);
    console.log(td3);


    const button = document.createElement('input');
    button.setAttribute('type', 'submit');
    button.setAttribute('value', 'Edit');




    const tombol = document.querySelector('input');
    // const nama = document.getElementById('nama').value;
    // const email = document.getElementById('email').value;
    // const alamat = document.getElementById('alamat').value;
    // console.log(tombol);
    
}







tombol.addEventListener('click', function(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const alamat = document.getElementById('alamat').value;

    // console.log(nama, email, alamat);

    buatBaris(nama, email, alamat);
});

