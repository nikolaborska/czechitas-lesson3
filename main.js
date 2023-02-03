// tady je místo pro náš program

// zjištění jména a jeho výpis do HTML

let jmeno = document.querySelector(".jmeno");
let jmenoUzivatele = prompt("Zadej své celé jméno: ");

jmeno.innerHTML = jmenoUzivatele;

// zjištění věku a jeho výpis do HTML
let vek = document.querySelector(".vek");
let vekUzivatele = Number(prompt("Zadej svůj věk: "));

vek.innerHTML = vekUzivatele;

//výpis věty do HTML 
document.body.innerHTML += "<p>" + "Jméno a příjmení: " + ", " + jmenoUzivatele + " " + "Věk: " + vekUzivatele + "</p>";