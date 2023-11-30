const $facts = document.getElementById('facts');
const $fact = document.getElementById('fact');

const factList = [
    'Czarownice były często oskarżane o praktykowanie magii i czarów, które miały rzekomo wpływać na ludzi, zwierzęta i rośliny.',
    'W XV-XVII wieku w Europie miało miejsce około 40 000-60 000 egzekucji osób oskarżonych o czary, z których większość stanowiły kobiety.',
    'Jednym z najbardziej znanych procesów czarownic w historii były procesy salemzkie w 1692 roku w kolonii Massachusetts, gdzie oskarżono i skazano na śmierć 20 osób.',
    'W czasach polowań na czarownice stosowano różne metody wykrywania czarów, takie jak próba zanurzenia (osoba związana była zanurzana w wodzie, a jej unoszenie się na powierzchni miało świadczyć o winie) czy testy na znaki diabelskie na ciele.',
    'Czarownice często były przedstawiane z czarnym kotem jako swoim zwierzęcym pomocnikiem, którego rolą było przekazywanie wiadomości między czarownicą a diabłem.',
    'Wizerunek czarownicy z okresu polowań na czarownice często łączy się z latającą na miotle, chociaż latające miotły nie były powszechnie uważane za atrybut czarownic w tamtych czasach.',
    'W słowiańskiej mitologii czarownicą była postać nazywana Baba Jaga, starsza kobieta mieszkająca w głębi lasu w chacie na kaczych łapach, która miała zarówno pomocne, jak i szkodliwe moce.',
    'W średniowieczu i renesansie istniały podręczniki do łapania czarownic, takie jak „Malleus Maleficarum” („Młot na czarownice”) napisane przez dwóch niemieckich inkwizytorów Heinricha Kraemera i Jakoba Sprengera w 1486 roku.',
    'W folklorze afrykańskim istnieje wierzenie w czarownice zwane „adze”, które mogą zamieniać się w latające, świetliste stworzenia, takie jak ogniki lub połyskujące owady.',
    'Ostatnią spaloną na stosie „czarownicą” w Europie była Barbara Zdunk.'
]

let [touchStartX, touchEndX] = [-1, -1];
let index = 0;

function previous() {
    if (index - 1 < 0) index = factList.length;

    index--;
    $fact.textContent = factList[index];
}

function next() {
    if (index + 1 > factList.length - 1) index = -1;

    index++;
    $fact.textContent = factList[index];
}

function checkDirection() {
    if (touchEndX < touchStartX) previous()
    if (touchEndX > touchStartX) next()
}

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX
})

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX
    checkDirection()
})

$facts.addEventListener('wheel', e => {
    if (e.deltaY > 0) {
        index++;
        next()
    } else {
        index--;
        previous()
    }
})