const wait = (t) => new Promise(resolve => setTimeout(resolve, t * 1000));
const plurals = {
    'dni': {
        1: 'dzień',
        _: 'dni'
    }
}

const loadingContainer = document.getElementById('loading-container');
const container = document.getElementById('container');

const difference = document.getElementById('difference');
const witchDayDate = new Date('11/16/2023');
const now = new Date();

function plural(word, n) {
    return plurals[word][n] ?? plurals[word]['_']
}

const timeDifference = Math.abs(now - witchDayDate);
const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

difference.textContent = `Ten dzień był ${daysDifference} ${plural('dni', daysDifference)} temu.`;

document.addEventListener('DOMContentLoaded', async () => {
    await wait(0.5);
    loadingContainer.style.opacity = 0;
    await wait(0.2);
    container.style.opacity = 1;
})

document.addEventListener('contextmenu', e => e.preventDefault())