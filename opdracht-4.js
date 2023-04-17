// Maak deze gehele opdracht eerst alsof je het voor één tv doet. We gaan één tv weergeven in het volgende format:
//
//     ```
//   Philips 43PUS6504/12 - 4K TV
//   €379,-
//   43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
//   ```
//
//     * **Opdracht 4a:** Maak een herbruikbare functie die een string genereert voor de naam van één tv en deze teruggeeft in het format `[merk] [type] - [naam]` zoals `Philips 43PUS6504/12 - 4K TV` of `NIKKEI NH3216SMART - HD smart TV`.

function nameTV(tv) {
    return `${tv.brand} ${tv.type} - ${tv.name}`;
}

console.log(nameTV(inventory[0]));

// Dit is de optie voor alle tv's:
// function nameTV(tvobjects) {
//     return tvobjects.map((tvname) => {
//         return `${tvname.brand} ${tvname.type} - ${tvname.name}`;
//     })
// }
//
// console.log(nameTV(inventory));


// * **Opdracht 4b:** Maak een herbruikbare functie die de prijs van één tv als parameter verwacht (zoals `379` of `159`) teruggeeft in het format `€379,-` of `€159,-`.
function priceTV(tv) {
    return `€ ${tv.price},-`;
}

console.log(priceTV(inventory[0]));


// * **Opdracht 4c:** Maak een herbruikbare functie die een string genereert voor alle beschikbare schermgroottes van één tv. De functie geeft dit terug in het format `[schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm)`
// etc. Als een tv maar één schermgrootte heeft (`[32]`) wordt de output `32 inch (81 cm)`. Wanneer een tv vier
// schermgroottes heeft (`[43, 50, 55, 58]`) wordt de output `43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)`. _Let op:_ om één string te genereren uit een array van schermgroottes zul je een for-loop voor moeten gebruiken.

function convertToCM(inch) {
    return Math.round(inch * 2.54);
}
function screensizeTV(tv) {
    return tv.availableSizes.map((size) => {
        return `${size} inch (${convertToCM(size)} cm)`;
    }).join(' | ');
}

console.log(screensizeTV(inventory[5]));

// * **Opdracht 4d:** Schrijf een script die de informatie van de Philips 43PUS6504/12 tv weergeeft op de pagina zoals onderstaand voorbeeld. Gebruik de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.
//
//     ```
//   Philips 43PUS6504/12 - 4K TV
//   €379,-
//   43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
//   ```

function getTV(tv) {
    return `${nameTV(tv)} <br> ${priceTV(tv)} <br> ${screensizeTV(tv)}`;
}

const singleTV = document.getElementById("single-tv");
singleTV.innerHTML = `${getTV(inventory[4])}`;

// * **Opdracht 4e:** Maak een herbruikbare functie die de informatie van **alle** tv's weergeeft op de pagina. Gebruik hiervoor de map-methode in combinatie met de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.

function listTV(tvobjects) {
    return inventory.map((tvinfo) => {
       return  `${nameTV(tvinfo)} <br> ${priceTV(tvinfo)} <br> ${screensizeTV(tvinfo)} <br>`;
    }).join('<br>');
}

const allTV = document.getElementById("all-tv");
allTV.innerHTML = `${listTV(inventory)}`;