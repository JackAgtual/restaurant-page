import './styles.css'
import renderHomepage from './homepage'
import renderMenu from './renderMenu';
import clearScreen from './clearScreen';

const content = document.querySelector('#content');
const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');

renderHomepage(content);

homeBtn.addEventListener('click', () => {
    clearScreen(content)
    renderHomepage(content)
});
menuBtn.addEventListener('click', () => {
    clearScreen(content)
    renderMenu(content)
});