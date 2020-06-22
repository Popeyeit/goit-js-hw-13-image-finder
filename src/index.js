import './styles.css';
import API from './js/API';
import { markUp } from './js/markup';
import { refs } from './js/refs';
import debounce from 'lodash.debounce';
refs.form.addEventListener('input', debounce(handleInput, 500));
refs.btn.addEventListener('click', handleClick);

function handleInput(e) {
  API.resetPage();
  chanchedStateBtn();
  refs.list.innerHTML = '';
  API.query = e.target.value;
  callFetch();
}

function handleClick() {
  callFetch();
}

function callFetch() {
  if (API.query) {
    API.makeFetch()
      .then(data => {
        markUp(data);
        window.scrollTo({
          top: document.documentElement.offsetHeight,
          behavior: 'smooth',
        });
        chanchedStateBtn(data);
      })
      .catch(err => console.log(err));
  }
}

function chanchedStateBtn(data) {
  if (API.pageNumber > 1 && data.length > 0) {
    refs.btn.classList.remove('hidden');
    return;
  }
  refs.btn.classList.add('hidden');
}
