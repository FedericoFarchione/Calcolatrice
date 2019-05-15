/*la funzione scrivi ha all'interno la variabile calc che prende un elemento dal
  suo identificativo ID cioè 'input_calcolo', quindi il valore della funzione (CALC.VALUE)
  sarà il valore digitato con input_calcolo*/
function scrivi(val) {
  var calc = document.getElementById("input_calcolo");
  calc.value += val;
}


/* la funzione calc prende ha sempre la stessa variabile che prende sempre lo stesso ID ma
   il valore della stessa sarà il valore dei dei selezionati*/
function calc() {
var aritm = document.getElementById("input_calcolo");
aritm.value = eval(aritm.value);
}


/*Premuto il tasto C sul calcolatore al quale è assegnato questa funzione semplicemente
  scriverà una stringa vuota nella text area, per riniziare.*/
function cancella() {
var del = document.getElementById("input_calcolo");
del.value ="";
}
