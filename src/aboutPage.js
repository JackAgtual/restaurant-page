export default function renderAboutPage(content) {
    const aboutPage = document.createElement('div');
    aboutPage.classList.add('about');

    aboutPage.innerHTML = '<p>This is just a restaurant.</p>';

    content.appendChild(aboutPage);
}