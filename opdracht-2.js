// _Tip_: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon een oude vertrouwde for-loop voor!

// * **Opdracht 2a:** Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
let soldTv = 0;
for (let i = 0; i < inventory.length; i++) {
    soldTv += inventory[i].sold;
}

console.log(soldTv);

// * **Opdracht 2b:** Zorg ervoor dat dit aantal _in het groen_ wordt weergegeven op de pagina.
const displaySoldTv = document.getElementById("sold-tv");
displaySoldTv.innerHTML = `<p>${soldTv}</p>`;

// * **Opdracht 2c:** Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
let originalStockTv = 0;
for (let i = 0; i < inventory.length; i++) {
    originalStockTv += inventory[i].originalStock;
}

console.log(originalStockTv);

// * **Opdracht 2d:** Zorg ervoor dat dit aantal _in het blauw_ wordt weergegeven op de pagina.
const displayOriginalStockTv = document.getElementById("original-stock-tv");
displayOriginalStockTv.innerHTML = `<p>${originalStockTv}</p>`;

// * **Opdracht 2e:** Geef _in het rood_ weer hoeveel tv's er nog verkocht moeten worden.
let sellTv = originalStockTv - soldTv;
const displaySellTv = document.getElementById("sell-tv");
displaySellTv.innerHTML = `<p>${sellTv}</p>`;