//Scrivere un programma che stampi in console i numeri da 1 a 100
//per i multipli di 3 stampi fizz
//per i multipli di 5 stampi buzz
//per i multipli di 3 e 5 stampi fizzbuzz
//crare container per il dom
//appendere l'elemento html
//aplicare stili differenti ai vari multipli

//Contenitore principale
const container = document.getElementById('main_container');
console.log(container);

//Scrivere un programma che stampi i numeri
/*for (let i = 1; i < 101; i++){
    const square = document.createElement('div');
    container.append(square);
    square.classList.add('number_square');
    console.log(i);

    //Per i multipli di 3 r 5 stampi fizzbuzz
    if(i % 15 === 0){
        square.classList.add("square_fizzbuzz")
        square.append("fizzbuzz");
    }
        //per i multipli di 3 stampi fizz
        else if (i % 3 === 0){
            square.classList.add("square_fizz")
        }

        //per i multipli di 5 stampi buzz
        else if (i % 5 === 0){
            square.classList.add("square_buzz")

            } else{
                square.append(i)
            }
}*/

//Scrivere un programma che stampa i numeri
for (let i = 1; i < 101; i++){

    const square = document.createElement('div');
    square.classList.add('box');
    container.append(square);

    //Per i multipli di 3 e 5 stampa fizzbuzz:
    if ( i % 15 === 0){
        square.classList.add('square_fizzbuzz');
        square.append('fizzbuzz');
    }   
        //Per i multipli di 5 stampi buzz:
        else if ( i % 5 === 0){
            square.classList.add('square_buzz');
            square.append('buzz')
    }   
        //Per i multipli di 3 stampi fizz:
        else if ( i % 3 === 0){
        square.classList.add('square_fizz');
        square.append('fizz');
        
    }   //Altrimenti scrivi il numero
        else {
            square.append(i);
    }
}
