const textElement = document.getElementById('text');
const text = `
*** DOCUMENT CONFIDENTIEL ***

Date: 04-07-2024
De: Conne-sœur Compagnonne
À: Initié(e)

Sous l'éclat ténu de la lune décroissante, alors que les ombres dansent et chuchotent leurs secrets, je t'écris cette missive avec une urgence que seuls les cœurs initiés peuvent comprendre. Les murmures des anciens se sont intensifiés, d’étranges phénomènes dont l'ampleur menace notre fragile équilibre semblent se préparer.

Nous devons nous retrouver, loin des <b>regard</b>s curieux, dans le sanctuaire oublié de la Crypte Étoilée, au premier soupir du crépuscule, lorsque l'astre du jour cèd<b>e</b> sa place aux étoiles bienveillantes au </b>z<b>énith. Apporte avec toi les outils sa<b>c</b>rés et les symboles de notre ordre ; ils seront nos guides à travers le labyrint<b>he</b> des ténèbres. 

Le silence et la discrétion sont de mise, car des forces obscures guettent à l’hori<b>z</b>on et nous devons demeurer invisibles. L'avenir de notre fraternité repose sur notre <b>art</b> à déjouer les plans du Mal<b>i</b>n. Viens sans hésitation, car le temps presse et chaque seconde qui s'écoule rapproche le monde de l'ombre éternelle.

Que la lumière de notre savoir éclaire ton chemin et te <b>g</b>uide vers n<b>o</b>tre réunion secrète.

Avec espoir et détermination,
Ta conne-sœur compagnonne
`;

let index = 0;

function typeText() {
    if (index < text.length) {
        if (text.charAt(index) === '\n') {
            textElement.innerHTML += '<br>';
        } else {
            textElement.innerHTML += text.charAt(index);
        }
        index++;
        setTimeout(typeText, 50);
    }
}

window.onload = typeText;

