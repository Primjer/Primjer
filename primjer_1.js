const naslov=document.createElement("h2");
const tekst_naslova=document.createTextNode("Kolegij Uvod u Front - End development");
naslov.appendChild(tekst_naslova);
const odlomak=document.createElement("p");
const tekst_odlomka=document.createTextNode("Studenti: Frano Jurković, Luka Kutle, Nikola Pehar.");
odlomak.appendChild(tekst_odlomka);
document.body.appendChild(naslov);
document.body.appendChild(odlomak);
document.body.style.textAlign="center";