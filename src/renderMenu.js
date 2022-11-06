export default function renderMenu(content) {
    const menuItems = [
        {
            title: 'Pizza',
            price: 12,
            description: 'A cheese pizza'
        },
        {
            title: 'Salad', 
            price: 22,
            description: 'A plain salad'
        }
    ];

    const menuPage = document.createElement('div');
    menuPage.classList.add('display')

    menuItems.forEach(item => {

        const gridEl = document.createElement('div');
        gridEl.classList.add('grid-el');

        gridEl.innerHTML = `
            <h2>${item.title}</h2>
            <p>${item.price}</p>
            <p>${item.description}</p>
        `;

        menuPage.appendChild(gridEl)
    });

    content.appendChild(menuPage)
}