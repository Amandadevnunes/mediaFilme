const formfilme = document.getElementById("formfilme");
//const valores = [number1, nunber2, nunber3, number4];

let filmes = ['f1', 'f2', 'f3', 'f4'];

let nota = [[], [], [], []];


function darNota() {

    let filme = document.getElementById('filmes').value;
    let nota = parseFloat(document.getElementById('nota').value);


    //const f1 = document.getElementById("nota").value;
    //alert(nota=f1 + nota);

    //const f2 = document.getElementById("nota").value;
   // alert(nota=f2 + nota);

   // const f3 = document.getElementById("nota").value;
   //alert(nota=f3  + nota);

   // const f4 = document.getElementById("nota").value;
   // alert(nota=f4 + nota);
  


    if (nota >= 0 && nota <= 10) {
        nota[filmes - 1].push(nota);

        alert (filme == nota);


    //alert("o filme" + filmes[filmes - 1] + notas);

    } else {
       alert(" A nota deve estar entre 0 e 10");
   }
}