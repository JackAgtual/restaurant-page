export default function renderMenu(content) {
    const menu = [
        {
            category: 'Drinks',
            items: [
                {
                    title: 'Soda',
                    price: 3,
                    description: 'Any soda you want'
                },
                {
                    title: 'Tap beer',
                    price: 8,
                    description: 'Ask the waiter for our beers on tap'
                }
            ]
        },
        {
            category: 'Appetizers',
            items: [
                {
                    title: 'Mac n cheese',
                    price: 6,
                    description: 'Classic mac n cheese'
                },
                {
                    title: 'Salad', 
                    price: 22,
                    description: 'A plain salad'
                }
            ]
            
        },
        {
            category: 'Main Dishes',
            items: [
                {
                    title: 'Pizza',
                    price: 12,
                    description: 'A cheese pizza'
                },
                {
                    title: 'Burger', 
                    price: 16,
                    description: 'Cheeseburger'
                }
            ]
        },
        {
            category: 'Dessert',
            items: [
                {
                    title: 'Ice Cream',
                    price: 5,
                    description: 'Chocolate or vanilla ice cream'
                },
                {
                    title: 'Cake',
                    price: 12,
                    description: 'Your choice of chocolate or red velvet cake'
                }
            ]
        }
    ];

    const menuPage = document.createElement('div');
    menuPage.classList.add('display')

    menu.forEach(menuSection => {

        const sectionHeader = document.createElement('h2');
        sectionHeader.classList.add('grid-el');
        sectionHeader.innerText = `${menuSection.category}`;
        menuPage.appendChild(sectionHeader);

        
        menuSection.items.forEach(item => {
            const gridEl = document.createElement('div');
            gridEl.classList.add('grid-el');
    
            gridEl.innerHTML = `
                <h2>${item.title}</h2>
                <p>$${item.price}</p>
                <p>${item.description}</p>
            `;
    
            menuPage.appendChild(gridEl)
        })

    });

    content.appendChild(menuPage)
}