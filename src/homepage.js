export default function renderHomepage(content) {

    const homePage = document.createElement('div');
    homePage.classList.add('display');

    const grieElContent = [
        `
        <h1 id="restaurant-name">My Restaurant</h1>
        `,
        `
        <h2>Hours</h2>
        <div class="hrs-container">
            <div class="day">Monday:</div><div class="time">9:00 - 5:00</div>
            <div class="day">Tuesday:</div><div class="time">9:00 - 5:00</div>
            <div class="day">Wednesday:</div><div class="time">9:00 - 5:00</div>
            <div class="day">Thursday:</div><div class="time">9:00 - 5:00</div>
            <div class="day">Friday:</div><div class="time">9:00 - 5:00</div>
            <div class="day">Saturday:</div><div class="time">9:00 - 5:00</div>
            <div class="day">Sunday:</div><div class="time">9:00 - 5:00</div>
        </div>
        `,
        `
        <h2>Location</h2>
        <p>We are located in Convoy San Diego</p>
        <p>1234 Convoy St. San Diego CA</p>
        `
    ]

    grieElContent.forEach(htmlContent => {
        const gridEl = document.createElement('div');
        gridEl.classList.add('home-item');
        gridEl.innerHTML = htmlContent;
        homePage.appendChild(gridEl);
    });

    content.appendChild(homePage);
}

