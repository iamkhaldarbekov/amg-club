function scrollToElem() {
  document.querySelector('#content-start').scrollIntoView({
    behavior: 'smooth',
  });
}

function load() {
  const el = document.querySelector('.main__img-block_hidden');
  const button = document.querySelector('.main__button');
  el.classList.remove('main__img-block_hidden');
  button.style.display = 'none';
}
