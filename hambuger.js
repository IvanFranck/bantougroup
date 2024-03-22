let isMenuOpen = false
const ham = document.getElementById('ham')
const menu = document.getElementById('menu')

ham.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen
  if (isMenuOpen === true) {
    ham.classList.remove('ham')
    ham.classList.add('ham__active')
    menu.classList.add('menu__active')
    menu.classList.remove('menu')
  } else {
    ham.classList.remove('ham__active')
    ham.classList.add('ham')
    menu.classList.add('menu')
    menu.classList.remove('menu__active')
  }
})
