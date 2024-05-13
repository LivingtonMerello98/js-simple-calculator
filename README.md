Riprendiamo l'esercizio della calcolatrice fatto con HTML e CSS e rendiamo il tutto funzionale.

:avviso: Attenzione: la nostra calcolatrice deve fare dei semplici calcoli tra due numeri interi. Quindi l'utente inserisce le cifre del primo numero, dopo dovrà cliccare sull'operazione, poi inserirà le cifre del secondo numero e infine dovrà cliccare sul tasto = per vedere il risultato. Non si può applicare più di un'operazione alla volta.

MILESTONE 1
Aggiungere event listener a tutti i numeri (0-9): quando si clicca su un numero, concatenarlo al numero visualizzato in alto

MILESTONE 2
aggiungere event listener a tutti gli operatori: quando si clicca su un operatore, salvare l'operatore cliccato e il primo operando, quindi resettare il numero in alto

MILESTONE 3
aggiungere event listener al pulsante "=": quando si clicca su =, salvare il secondo operando, effetuare il calcolo corretto in base all'operatore selezionato e visualizzare il risultato in alto

MILESTONE 4
pulsante canc: cliccando il pulsante si resetta il calcolo
:stella2: BONUS
verificare che non si stia cercando di dividere per 0
Se non avete completato il layout della calcolatrice potete usare il codice di partenza che vi invio in allegato.


• Dichiarazione delle costanti e delle variabili
In questa sezione vengono dichiarate costanti e variabili utilizzate nel programma, come l'elemento di visualizzazione dell'input (inputDisplay), i container per i numeri e gli operatori, nonché i pulsanti per l'eliminazione e il calcolo.


    const inputDisplay = document.getElementById('result');
    const numberContainer = document.querySelector('.numbers');
    const operatorContainer = document.querySelector('.operators');
    const eraser = document.getElementById('erase');
    const equal = document.getElementById('equal');
    let btnValue;
    let firstOperand = '';
    let operator = '';
    let secondOperand = '';


• Funzione per gestire i numeri
Questa funzione handleNumber(btnValue) gestisce il comportamento quando un numero viene cliccato. Controlla se l'input ha già raggiunto il limite massimo di caratteri e se c'è già un operatore presente. In base a queste condizioni, aggiunge il numero al primo o al secondo operando.

    --funzione gestita cons switch case 
    // Funzione per gestire i numeri
    function handleNumber(btnValue) {
        switch (true) {
            case contenuto dispaly.length >= 8:
                console.log(`Limite massimo di caratteri raggiunto`);
                return;
            case operator !== '':
                // Se c'è un operatore, aggiungi il numero al secondo operando
                operatore2 += btnValue;
                contenuto dispaly..textContent = secondOperand;
                break;
            default:
                // Altrimenti, aggiungi il numero al primo operando
                firstOperand += btnValue;
                inputDisplay.textContent = firstOperand;
                break;
        }
    }

• Funzione per gestire gli operatori
La funzione handleOperator(operatorValue) viene chiamata quando un operatore viene cliccato. Essa imposta il valore dell'operatore nella variabile operator.

    function handleOperator(operatorValue) {
    operator = operatorValue;
}

• Event Listener per i numeri
Questo event listener ascolta i clic sui pulsanti numerici e chiama la funzione handleNumber() passando il valore del numero cliccato.

    numberContainer.addEventListener("click", function(e){
    let btnValue = e.target.value;
    console.log(`${btnValue} è stato premuto`)
    handleNumber(btnValue);
    });

• Event Listener per gli operatori
Questo event listener ascolta i clic sui pulsanti degli operatori e chiama la funzione handleOperator() passando il valore dell'operatore cliccato.

    operatorContainer.addEventListener("click", function(e){
    let operatorValue = e.target.value;
    console.log(`${operatorValue} è stato premuto`);
    handleOperator(operatorValue);
    });

• Event Listener per il pulsante '='
Quando il pulsante '=' viene cliccato, questo event listener esegue il calcolo chiamando la funzione calculate() solo se sono presenti sia un operatore che un secondo operando. Successivamente, aggiorna l'input display con il risultato calcolato e resetta le variabili per la prossima operazione.

   equal.addEventListener("click",function(e){
    // Esegui l'operazione solo se ci sono sia un operatore che un secondo operando
    if (operator !== '' && secondOperand !== '') {
        let result = calculate();
        inputDisplay.textContent = '';
        // Resetta le variabili per la prossima operazione
        firstOperand = result;
        operator = '';
        secondOperand = '';
    }
    }); 

• Event Listener per il pulsante 'C' (eraser)
Questo event listener ricarica la pagina quando il pulsante 'C' viene cliccato, ripristinando così le impostazioni iniziali della calcolatrice.

    eraser.addEventListener("click",function(e){

    // Ricarica la pagina
   location.reload();
    });

• Funzione per calcolare il risultato
La funzione calculate() calcola il risultato dell'operazione in base all'operatore selezionato. Gestisce anche il caso in cui il secondo operando sia zero, restituendo un messaggio di errore. Infine, restituisce il risultato del calcolo.

    function calculate() {
    let num1 = parseFloat(firstOperand);
    let num2 = parseFloat(secondOperand);
    let result = 0;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            // Verifica se il secondo operando è zero
            if (num2 === 0) {
                console.log("Errore: divisione per zero");
                // mex errore
                return "Errore";
            }
            result = num1 / num2;
            break;
        case '%':
            // Verifica se il secondo operando è zero
            if (num2 === 0) {
                console.log("Errore: divisione per zero");
                // mex errore
                return "Errore";
            }
            result = num1 % num2;
            break;
    }
    return result;
}




