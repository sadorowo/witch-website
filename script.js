const difference = document.getElementById('difference');
const footer = document.querySelector('footer');
const witchDayDate = new Date('11/16/2023');
const now = new Date();

const plurals = {
    'dni': {
        1: 'dzień',
        _: 'dni'
    }
}

function plural(word, n) {
    return plurals[word][n] ?? plurals[word]['_']
}

const timeDifference = Math.abs(now - witchDayDate);
const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

difference.textContent = `Ten dzień był ${daysDifference} ${plural('dni', daysDifference)} temu.`;

document.addEventListener('contextmenu', e => {
    footer.dataset.clicked = footer.dataset.clicked === "false";

    if (footer.dataset.clicked === "false")
        footer.textContent = "A nie mówiłem? Możesz to jeszcze odwrócić."
    else
        footer.textContent = "Nie próbuj klikać prawego przycisku myszy! 😈"

    document.body.classList.toggle('lighter');
    e.preventDefault();
})