import '../scss/style.scss';

document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.getElementById('sidebar');
  const cancel_button = document.getElementById('cancel-button');
  const hamburger = document.getElementById('ham-burger');
  const body = document.body;

  function toggleSidebar() {
    sidebar.classList.toggle('active');
    body.classList.toggle('sidebar-open');
  }

  cancel_button.onclick = toggleSidebar;

  hamburger.onclick = toggleSidebar;
});

document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggle__button');
  const moreBrands = document.querySelectorAll('.grid__item--hidden');
  console.log(moreBrands);
  //moreBrands is a NodeList of all elements with the class 'grid-item' and 'hidden'. it behaves like an array of DOM elements.

  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      const isHidden =
        moreBrands[0] && moreBrands[0].classList.contains('grid__item--hidden');
      console.log(moreBrands[0]);
      //1. trying to access the first element in that array.
      //2. If the first operand (moreBrands[0]) is truthy, then the second operand (moreBrands[0].classList.contains('hidden')) is evaluated.
      //3. This part will only be evaluated if moreBrands[0] is truthy (due to the && operator).

      moreBrands.forEach((brand) => {
        // iterating over each element in the moreBrands NodeList.
        if (isHidden) {
          brand.classList.remove('grid__item--hidden');
          brand.classList.add('grid__item');
          toggleButton.querySelector('span').textContent = 'Show Less';
        } else {
          brand.classList.remove('grid__item');
          brand.classList.add('grid__item--hidden');

          toggleButton.querySelector('span').textContent = 'Show More';
        }
      });
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const readMoreBtn = document.getElementById('read-more');
  const moreText = document.getElementById('more-text');
  const readMoreTxt = document.getElementById('read__more--btn');
  readMoreBtn.addEventListener('click', () => {
    console.log(moreText);
    if (moreText.style.display === 'none') {
      moreText.style.display = 'flex';
      readMoreTxt.textContent = 'Read less';
    } else {
      moreText.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggle__button--second');
  const moreBrands = document.querySelectorAll('.grid__item__second--hidden');
  console.log(moreBrands);
  //moreBrands is a NodeList of all elements with the class 'grid-item' and 'hidden'. it behaves like an array of DOM elements.

  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      const isHidden =
        moreBrands[0] &&
        moreBrands[0].classList.contains('grid__item__second--hidden');
      console.log(moreBrands[0]);
      console.log(isHidden);
      //1. trying to access the first element in that array.
      //2. If the first operand (moreBrands[0]) is truthy, then the second operand (moreBrands[0].classList.contains('hidden')) is evaluated.
      //3. This part will only be evaluated if moreBrands[0] is truthy (due to the && operator).

      moreBrands.forEach((brand) => {
        // iterating over each element in the moreBrands NodeList.
        if (isHidden) {
          brand.classList.remove('grid__item__second--hidden');
          brand.classList.add('grid__item--second');
          toggleButton.querySelector('span').textContent = 'Show Less';
        } else {
          brand.classList.remove('grid__item--second');
          brand.classList.add('grid__item__second--hidden');

          toggleButton.querySelector('span').textContent = 'Show More';
        }
      });
    });
  }
});
