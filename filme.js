function enviarNotas() {
    const filme1 = parseFloat(document.querySelector('#filme1').value);
    const filme2 = parseFloat(document.querySelector('#filme2').value);
    const filme3 = parseFloat(document.querySelector('#filme3').value);
    const filme4 = parseFloat(document.querySelector('#filme4').value);

    const media = ((filme1 + filme2 + filme3 + filme4) / 4);
    console.log("Média das notas é: " + parseFloat(media));


    alert("Média das notas é: " + parseFloat(media));

};



/*let notaMaxima = 0;


if (filme1 == filme2 == filme3 == filme4) {
    alert("Você deu a mesma nota para dois filmes");
} 
if (filme1 >= filme2 && filme1 >= filme3 && filme1 >= filme4) {
   notaMaxima = filme1;
    alert("O filme com a maior nota é Titanique com nota " + notaMaxima);
} else if (filme2 >= filme3 && filme2 >= filme4) {
    notaMaxima = filme2;
    alert("O filme com a maior nota é O Rei Leão com nota " + notaMaxima);
} else if (filme3 >= filme4) {
    notaMaxima = filme3;
    alert("O filme com a maior nota é As Branquelas com nota " + notaMaxima);
} else {
    notaMaxima = filme4;
    alert("O filme com a maior nota é Meu primeiro Amor com nota " + notaMaxima);
}*/
