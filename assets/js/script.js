function getData() {
    let data = {
        nama : document.getElementById('nama').value,
        email : document.getElementById('email').value,
        phone : document.getElementById('phoneNumber').value,
        subject : document.getElementById('subject').value,
        message : document.getElementById('message').value
    };

    let a = document.createElement('a');
    a.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}&su=${data.subject}&body=Halo, nama saya ${data.nama}. ${data.message} \n\n hubungi saya di nomor ini: ${data.phone}`;
    a.click();

}
const myEmail = 'andriyantoid10@gmail.com'
const btn = document.querySelector('button')
btn.addEventListener('click', getData)
