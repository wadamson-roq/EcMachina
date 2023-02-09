const prompt = require('prompt-sync')();

let command = '';
let entered = '';

let name = '';
let items = [];

while (entered != 'NO') {
    command = prompt('"Wanna play a game?" : ');
    entered = command.toUpperCase();

    if (entered == 'YES'){
        name = prompt('"What is your name"? : ');
        name = name.toUpperCase();
        console.log(`"Your name is ${name}. Please wear this name BADGE."`);
        command = prompt('Do you inspect the BADGE? : ');
        entered = command.toUpperCase();

        if ((entered == 'INSPECT') || (entered == 'YES')) {
            console.log('You inspect the BADGE and find your name was already engraved. You pin the BADGE to your shirt.');
            items.push ('BADGE');
            console.log(`Items: ${items}`);
            console.log('You win!');
        } 
        else {
            console.log('You faint from fear and wake up in your bed. It was all a dream...');
        }
    }
}