const button = document.querySelector('button');
const h1 = document.querySelector('h1');
button.addEventListener('click', function() {
    const newColor = randomRGB();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

const randomRGB = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function centerElem() {
    document.body.style.display = 'flex';
    document.body.style.flexDirection = 'column';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.height = '100vh';
    document.body.style.margin = '0';
    document.body.style.textAlign = 'center';
}

centerElem();