// Beginn von Maurice
const items = [
    "🍭", // Die vorhandenen Symbole die der Slotautomat darstellen kann
    "❌",
    "⛄",
    "🦄",
    "🍌",
    "💩",
    "👻",
    "😻",
    "💵",
    "🤡",
    "🦖",
    "🍎",
    "jackpot"
];

let spielerGuthaben = 500 // Startguthaben des Benutzers

window.onload = function() { // Laden der Funktion vor dem Aufrufen der Seite
    eingabeÜberprüfen()
    document.getElementById("guthaben").innerHTML = `Guthaben: ${spielerGuthaben}€` // Lesen der Guthaben-ID aus der HTML-Datei
};

function gewinnPruefen(slot1,slot2,slot3) { // Auslesung der Gewinnhöhe aus den resultierenden Symbole und der Gutschreibung des Gewinns auf das Guthaben des Spielers
    let einsatz = parseFloat(document.getElementById("einsatz").value)
    if(einsatz < 0) {
        einsatz = einsatz * -1
    }
    let gewinnNachricht = document.getElementById("jackpot_h1")
    let spielerGuthabenText = document.getElementById("guthaben")
    spielerGuthabenText.innerHTML = `Guthaben: ${spielerGuthaben - einsatz}€`
    spielerGuthaben = (spielerGuthaben -= einsatz).toFixed(2)
    gewinnNachricht.style.visibility = "visible"
    if(slot1 === slot2  || slot1  === slot3){ // Ausrechnung der Gewinne aus den resultierenden Symbolen
        switch (slot1){
            case "🍭":
                gewinnNachricht.innerHTML = `Herzlichen Glückwunsch | Gewinn: ${einsatz * 10}` // Darstellung der Gewinnnachricht
                spielerGuthaben += einsatz * 10 // Der jeweilige Einsatz wird mal 10x gerechnet und dem Guthaben des Spielers gutgeschrieben
                break;
            case "❌":
                gewinnNachricht.innerHTML = `Herzlichen Glückwunsch | Gewinn: ${einsatz * 1}`
                spielerGuthaben += einsatz * 1
                break;
            case "⛄":
                gewinnNachricht.innerHTML = `Herzlichen Glückwunsch | Gewinn: ${einsatz * 20}`
                spielerGuthaben += einsatz * 20
                break;
            case "🦄":
                gewinnNachricht.innerHTML = `Herzlichen Glückwunsch | Gewinn: ${einsatz * 50}`
                spielerGuthaben += einsatz * 50
                break;
            case "🍌":
                gewinnNachricht.innerHTML = `Herzlichen Glückwunsch | Gewinn: ${einsatz * 5}`
                spielerGuthaben += einsatz * 5
                break;
            case "💩":
                gewinnNachricht.innerHTML = `Herzlichen Glückwunsch | Gewinn: ${einsatz * 2}`
                spielerGuthaben += einsatz * 2
                break;
            case "👻":
                gewinnNachricht.innerHTML = `Herzlichen Glückwunsch | Gewinn: ${einsatz * 15}`
                spielerGuthaben += einsatz * 15
                break;
            case "😻":
                gewinnNachricht.innerHTML = `Herzlichen Glückwunsch | Gewinn: ${einsatz * 5}`
                spielerGuthaben += einsatz * 5
                break;
            case "💵":
                gewinnNachricht.innerHTML = `Herzlichen Glückwunsch | Gewinn: ${einsatz * 100}`
                spielerGuthaben += einsatz * 100
                break;
            case "🤡":
                gewinnNachricht.innerHTML = `Herzlichen Glückwunsch | Gewinn: ${einsatz * 3}`
                spielerGuthaben += einsatz * 3
                break;
            case "🦖":
                gewinnNachricht.innerHTML = `Herzlichen Glückwunsch | Gewinn: ${einsatz * 25}`
                spielerGuthaben += einsatz * 25
                break;
            case "🍎":
                gewinnNachricht.innerHTML = `Herzlichen Glückwunsch | Gewinn: ${einsatz * 10}`
                spielerGuthaben += einsatz * 10
                break;

            default:
                gewinnNachricht.innerHTML = `Herzlichen Glückwunsch | Einsatz zurück: ${einsatz}`
                spielerGuthaben += einsatz
                break;
        }
    }
    else {
        gewinnNachricht.innerHTML = `Leider kein Gewinn ` // Darstellung der Nachricht falls kein Gewinn erzielt wurde
    }
}
// Ende von Maurice


// Zusammenarbeit von Felix und Maurice

function eingabeÜberprüfen() { //

    let newSlot1 = items[Math.floor(Math.random() * 12)] // Ermöglichung der Zufallsgeneration von den 12 vorhandenen Symbolen
    let newSlot2 = items[Math.floor(Math.random() * 12)]
    let newSlot3 = items[Math.floor(Math.random() * 12)]
    let counter = 0; // Starteinsatz
    let slot1symbol = document.getElementById("slot1Symbol")
    let slot2symbol = document.getElementById("slot2Symbol")
    let slot3symbol = document.getElementById("slot3Symbol")
    let slotcontaienr = document.getElementsByClassName("flex-child")
    let spinBtn = document.getElementById("spinButton") //
    spinBtn.addEventListener("click", () => { // Auslösung des Spin-Buttons bei dem Klick des Benutzers
            gewinnPruefen(newSlot1, newSlot2, newSlot3);
            slot1symbol.style.transition = "0.2s" // Geschwindigkeit der Animation
            slot2symbol.style.transition = "0.2s"
            slot3symbol.style.transition = "0.2s"
            slot1symbol.style.top = "120px" // Verschiebung der Animation
            slot2symbol.style.top = "120px"
            slot3symbol.style.top = "120px"
            setTimeout(() => {
                slot1symbol.style.transition = "0s"
                slot2symbol.style.transition = "0s"
                slot3symbol.style.transition = "0s"
                slot1symbol.style.top = "-110px"
                slot2symbol.style.top = "-110px"
                slot3symbol.style.top = "-110px"

                slot1symbol.innerHTML = items[newSlot1] // Darstellung der Symbole in dem jeweiligen Slot
                slot2symbol.innerHTML = items[newSlot2]
                slot3symbol.innerHTML = items[newSlot3]
            }, "200")
            setTimeout(() => {
                slot1symbol.style.transition = "0.2s"
                slot2symbol.style.transition = "0.2s"
                slot3symbol.style.transition = "0.2s"
                slot1symbol.style.top = "0px"
                slot2symbol.style.top = "0px"
                slot3symbol.style.top = "0px"
                slot1symbol.innerHTML = items[Math.floor(Math.random() * 12)] // Generation eines Gewinnsymbols aus den 12 vorhandenen
                slot2symbol.innerHTML = items[Math.floor(Math.random() * 12)]
                slot3symbol.innerHTML = items[Math.floor(Math.random() * 12)]
            }, "500")
    });
}

// Ende der Zusammenarbeit von Felix und Maurice
