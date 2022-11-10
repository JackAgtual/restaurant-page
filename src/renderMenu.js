import soda       from './images/soda.jpeg'
import beer       from './images/beer.jpeg'
import macNcheese from './images/mac_n_cheese.jpeg'
import salad      from './images/salad.jpeg'
import pizza      from './images/pizza.jpeg'
import burger     from './images/hamburger.jpeg'
import iceCream   from './images/ice_cream.jpeg'
import cake       from './images/cake.jpeg'

export default function renderMenu(content) {
    const menu = [
        {
            category: 'Drinks',
            items: [
                {
                    title: 'Soda',
                    price: 3,
                    description: 'Any soda you want',
                    img: soda
                },
                {
                    title: 'Tap beer',
                    price: 8,
                    description: 'Ask the waiter for our beers on tap',
                    img: beer
                }
            ]
        },
        {
            category: 'Appetizers',
            items: [
                {
                    title: 'Mac n cheese',
                    price: 6,
                    description: 'Classic mac n cheese',
                    img: macNcheese
                },
                {
                    title: 'Salad', 
                    price: 22,
                    description: 'A plain salad',
                    img: salad
                }
            ]
            
        },
        {
            category: 'Main Dishes',
            items: [
                {
                    title: 'Pizza',
                    price: 12,
                    description: 'A cheese pizza',
                    img: pizza
                },
                {
                    title: 'Burger', 
                    price: 16,
                    description: 'Cheeseburger',
                    img: burger
                }
            ]
        },
        {
            category: 'Dessert',
            items: [
                {
                    title: 'Ice Cream',
                    price: 5,
                    description: 'Chocolate or vanilla ice cream',
                    img: iceCream
                },
                {
                    title: 'Cake',
                    price: 12,
                    description: 'Your choice of chocolate or red velvet cake',
                    img: cake
                }
            ]
        }
    ];

    const menuPage = document.createElement('div');
    menuPage.classList.add('display')

    menu.forEach(menuSection => {

        const sectionHeader = document.createElement('h2');
        sectionHeader.classList.add('grid-el', 'menu-section');
        sectionHeader.innerText = `${menuSection.category}`;
        menuPage.appendChild(sectionHeader);

        
        menuSection.items.forEach(item => {
            const gridEl = document.createElement('div');
            gridEl.classList.add('grid-el');
    
            gridEl.innerHTML = `
                <h2>${item.title}</h2>
                <p>$${item.price}</p>
                <p>${item.description}</p>
                <img src="${item.img}" alt="">
            `;
    
            menuPage.appendChild(gridEl)
        })

    });

    content.appendChild(menuPage)
}