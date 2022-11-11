import soda        from './images/soda.jpeg'
import beer        from './images/beer.jpeg'
import appleJuice  from './images/appleJuice.jpeg'
import orangeJuice from './images/orangeJuice.jpeg'
import macNcheese  from './images/mac_n_cheese.jpeg'
import garlicFries from './images/garlicFries.jpeg'
import salad       from './images/salad.jpeg'
import pizza       from './images/pizza.jpeg'
import burger      from './images/hamburger.jpeg'
import hotDog      from './images/hotDog.jpeg'
import iceCream    from './images/ice_cream.jpeg'
import cake        from './images/cake.jpeg'

export default function renderMenu(content) {
    const picSize = 5; // rem
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
                },
                {
                    title: 'Apple juice',
                    price: 3,
                    description: 'Fresh apple juice',
                    img: appleJuice
                },
                {
                    title: 'Orange juice',
                    price: 4,
                    description: 'Fresh squeezed orange juice',
                    img: orangeJuice
                }
            ]
        },
        {
            category: 'Appetizers',
            items: [
                {
                    title: 'Mac n\' cheese',
                    price: 6,
                    description: 'Classic mac n\' cheese',
                    img: macNcheese
                },
                {
                    title: 'Salad', 
                    price: 22,
                    description: 'A plain salad',
                    img: salad
                },
                {
                    title: 'Garlic fries',
                    price: 9,
                    description: 'Crispy garlic fries',
                    img: garlicFries
                }
            ]
            
        },
        {
            category: 'Main Dishes',
            items: [
                {
                    title: 'Pizza',
                    price: 12,
                    description: 'Pepperoni pizza with bazil and extra mozzarella',
                    img: pizza
                },
                {
                    title: 'Burger', 
                    price: 16,
                    description: 'McDonald\'s burger',
                    img: burger
                },
                {
                    title: 'Hot dog',
                    price: 8,
                    description: 'Steamed hot dog',
                    img: hotDog
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
                    description: 'Chocolate or red velvet cake',
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
            gridEl.classList.add('menu-item');
    
            gridEl.innerHTML = `
                <div class="menu-description">
                    <h2>${item.title}</h2>
                    <p>${item.description}</p>
                    <p>$${item.price}</p>
                </div>
                <div class="menu-img" 
                    style="
                        padding: ${picSize}rem;
                        background: url(${item.img});
                        background-repeat: no-repeat;
                        background-size: contain;
                        background-position: center;
                    "
                ></div>
            `;
    
            menuPage.appendChild(gridEl)
        })

    });

    content.appendChild(menuPage)
}