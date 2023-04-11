//array methoden

// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.
// map()-methode die type-naam uit de inventory array filtert

const tvName = inventory.map((name) => {
    return name.name;
});

console.log(tvName);

// Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.
// filter gebruiken om alleen de juiste tv's eruit te halen
// originalStock - sold === 0 wanneer hij is uitverkocht

const soldOut = inventory.filter((sold) => {
    return sold.originalStock - sold.sold === 0;
});

console.log(soldOut);

// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.
// filter op options: ambilight en deze returnen

const ambilight = inventory.filter((tv) => {
    return tv.options.ambiLight;

    // zie hierboven de versimpelde weergave van dit statement
    // if (tv.options.ambiLight === true) {
    //     return true;
    // }
});

console.log(ambilight);

// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.
// sort methode, a, b

const sortedArray = inventory.sort((a,b) => {
    return a.price - b.price;
});

console.log(sortedArray);
