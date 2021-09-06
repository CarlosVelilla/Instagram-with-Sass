const PASSWORDINPUT = document.getElementById('password-input')

PASSWORDINPUT.addEventListener('keyup', toggleDisableLogin)

function toggleDisableLogin() {
  const LOGINBTN = document.getElementById('login-btn')
  PASSWORDINPUT.value.length > 8 ? LOGINBTN.classList.remove('password-unvalid') : LOGINBTN.classList.add('password-unvalid')
}