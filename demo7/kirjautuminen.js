document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut() {
   
    let kirjautunut = 'kylla'; 
    if (kirjautunut === 'kylla') {
        document.getElementById('tervetulo_teksti').textContent += ' Jenni! ';
    }
}

function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value);
}