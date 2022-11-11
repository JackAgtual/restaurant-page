export default function renderHomepage(content) {

    const homePage = document.createElement('div');
    homePage.classList.add('display');

    const grieElContent = [
        `
        <h1>My Restaurant</h1>
        `,
        `
        <h2>Hours</h2>
        <ul>
            <li>Day: 9:00 - 5:00</li>
            <li>Day: 9:00 - 5:00</li>
            <li>Day: 9:00 - 5:00</li>
            <li>Day: 9:00 - 5:00</li>
            <li>Day: 9:00 - 5:00</li>
            <li>Day: 9:00 - 5:00</li>
            <li>Day: 9:00 - 5:00</li>
        </ul>
        `,
        `
        <h2>Location</h2>
        <p>We are located in Convoy San Diego</p>
        <p>1234 Convoy St. San Diego CA</p>
        `
    ]

    grieElContent.forEach(htmlContent => {
        const gridEl = document.createElement('div');
        gridEl.classList.add('grid-el');
        gridEl.innerHTML = htmlContent;
        homePage.appendChild(gridEl);
    });

    content.appendChild(homePage);
}

