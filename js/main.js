function check() {
  var email = document.getElementById('exampleInputEmail1').value;
  var password = document.getElementById('exampleInputPassword1').value;

  if (email == '' || password == '') {
    swal('Oops!', 'Email dan Password tidak boleh kosong', 'error');
  } else {
    window.location.href = 'backend/index.html';
  }
}
