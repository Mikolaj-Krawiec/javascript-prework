{
    function printHand(msg){
        let div = document.createElement('div');
        if(msg === 'kamień') {
            div.innerHTML = '<i class="far fa-hand-rock"></i>';
        }
        if(msg === 'papier') {
            div.innerHTML = '<i class="far fa-hand-paper"></i>';
        }
        if(msg === 'nożyce') {
            div.innerHTML = '<i class="far fa-hand-peace"></i>';
        }
        document.getElementById('hands').appendChild(div);
    }

    function clearHands(){
        document.getElementById('hands').innerHTML = '';
    }

    const getMoveName = function(argMoveId) {
    if(argMoveId === 1){
        return 'kamień';
        }else if(argMoveId === 2) {
            return 'papier';
        }else if(argMoveId === 3) {
            return 'nożyce';
        }
    return 'nieznany ruch';
    }

    const displayResult = function(argComputerMove, argPlayerMove) {
        if(argComputerMove === argPlayerMove) {
            printMessage('Remis!','messages');
        }else if(argComputerMove === 'kamień' && argPlayerMove === 'papier') {
            printMessage('Ty wygrywasz!','messages');
            clearMessages('scorePlayer');
            printMessage( ++scorePlayer,'scorePlayer');
        }else if(argComputerMove === 'papier' && argPlayerMove === 'nożyce') {
            printMessage('Ty wygrywasz!','messages');
            clearMessages('scorePlayer');
            printMessage( ++scorePlayer,'scorePlayer');
        }else if(argComputerMove === 'nożyce' && argPlayerMove === 'kamień') {
            printMessage('Ty wygrywasz!','messages');
            clearMessages('scorePlayer');
            printMessage( ++scorePlayer,'scorePlayer');
        }else if(argPlayerMove === 'nieznany ruch') {
            printMessage('Przegrałeś walkowerem!','messages');
            clearMessages('scoreComputer');
            printMessage( ++scoreComputer,'scoreComputer');
        }else{
            printMessage('Wygrywa computer!','messages');
            clearMessages('scoreComputer');
            printMessage( ++scoreComputer,'scoreComputer');
        }
    }

    const playGame = function(playerInput) {

        clearMessages('messages');
        clearHands();

        let randomNumber = Math.floor(Math.random() * 3 + 1);

        console.log('Wylosowana liczba to: ' + randomNumber);

        let computerMove = getMoveName(randomNumber);

        printHand(computerMove);

        //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

        console.log(playerInput);

        let playerMove = getMoveName(playerInput);

        printHand(playerMove);

        displayResult(computerMove, playerMove);
    }

    let scoreComputer = 0;
    let scorePlayer = 0;

    document.getElementById('play-rock').addEventListener("click", () => {playGame(1);});
    document.getElementById('play-paper').addEventListener("click", () => {playGame(2);} );
    document.getElementById('play-scissors').addEventListener("click", () => {playGame(3);} );
}