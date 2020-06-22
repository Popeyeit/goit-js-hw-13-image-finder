import { refs } from './refs';
import template from '../template/template.hbs';

export function markUp(data) {
  refs.list.insertAdjacentHTML('beforeend', template(data));
}
