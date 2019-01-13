

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:
1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)


2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)


3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/


var scores, roundScore, activePlayer ;

scores =[0,0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.dispaly='none';

document.getElementById('score-0').textContent = '0';

document.getElementById('current-1').textContent = '0';

document.getElementById('current-0').textContent = '0';

document.getElementById('score-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function (){
    //!. we need a random number(we don't need the dice outside the scope)
    
    var dice = Math.floor(Math.random() *6) + 1;

    //2.dispaly the result 
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+ dice + '.png';
    
    
    //3.update the score only if the number is not one ! 
    
    if (dice !==1) {
        
        //add the score 
        roundScore += dice; 
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

    } else {
        //next player 
        //this is a ternary operator 
       nextPlayer();
        
    }
    
    
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    
    //1.add the current score to gloabl score 
    
    scores[activePlayer] += roundScore;

    
    //2. update the UI
    
    document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];
    
    //3. next player 
     
    
    // check if the palyer won the game

    if (scores[activePlayer]>=20){
        
        document.querySelector('#name-' + activePlayer).textContent = "WINNER: ";
        document.querySelector('.dice').style.dispaly = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
        }else {
            
             nextPlayer();
        }
});


function nextPlayer (){
    
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;
        roundScore = 0; 
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        
       document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
        
    
    
}















