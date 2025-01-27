const fig = document.getElementById("figurka");
const obr = document.getElementById("obrazek");
const txt = document.getElementById("text");

fig.style.left = "200px";
let pat = true;

document.onclick=function(event){
    fig.style.left=(event.clientX-fig.offsetWidth/2)+"px";
    fig.style.top=(event.clientY-fig.offsetHeight/2)+"px";
}

    // Přerušení standardní funkce pravého tlačítka
    fig.addEventListener('contextmenu', function(event) {
        event.preventDefault();
        console.log('Kontextová nabídka byla přerušena.');
    });

    // Přerušení standardní funkce levého tlačítka
    fig.addEventListener('mousedown', function(event) {
        if (event.button === 0) { // Levé tlačítko
            event.preventDefault();
            console.log('Standardní akce levého tlačítka byla přerušena.');
        }
    });

    // Překreslení obrázku (divu) do nové pozice určené souřadnicí myši
    document.onmousemove=function(event){
    if (event.buttons === 1 ) {
        fig.style.left=(event.clientX-fig.offsetWidth/2)+"px";
        fig.style.top=(event.clientY-fig.offsetHeight/2)+"px";
    }
}

obr.onclick=function(){
    pat = !pat;
    if (pat){ 
        obr.src="img/pat.png"; 
        txt.innerText="PAT";
    }
    else { 
        obr.src="img/mat.png";
        txt.innerText="MAT";
    }
}