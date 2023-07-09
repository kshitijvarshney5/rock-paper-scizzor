let totalscore = {playerscore: 0,computerscore: 0}
function getComputerChoice() {
  let rpschoice =['Rock','Paper','Scissors']
   let choice= Math.floor(Math.random()*3)
  return rpschoice[choice]
}


function getResult(playerChoice, computerChoice) {
  
  let score
   if(playerChoice==computerChoice)
   score = 0
  else if(playerChoice=='Rock'&& computerChoice=='Scissors')  
  score= 1
  else if( playerChoice=='Paper'&& computerChoice=='Rock')
  score=1
  else if(playerChoice=='Scissors'&& computerChoice=='Paper')
  score =1
  else
  score= -1
  
   return score
  
}

function showResult(score, playerChoice, computerChoice) {
  
   
  let resultdiv = document.getElementById('result')
  let handsdiv = document.getElementById('hands')
  let playerscorediv = document.getElementById('player-score')
  switch (score) {
    case -1:
      result.innerText = `You Lose!`
      break;
    case 0:
      result.innerText = `It's a Draw!`
      break;
    case 1:
      result.innerText = `You Win!`
      break;
  }
  hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
  
  playerscorediv.innerText=  `YourScore : ${totalscore.playerscore} And ComputerScore : ${totalscore.computerscore}` 
      
}

function onClickRPS(playerChoice) {
  console.log({playerChoice})
  let computerChoice = getComputerChoice()
  console.log({computerChoice})
  let point = getResult(playerChoice,computerChoice)
  if(point==1)
  totalscore['playerscore']+=point
  else if(point==-1)
  totalscore['computerscore']+=Math.abs(point)
  console.log({point})
  console.log(totalscore)
  showResult(point,playerChoice, computerChoice)

}



function playGame() {
  
  let rpsButtons = document.querySelectorAll('.rpsButton')
  
  rpsButtons.forEach(rpsButton=>{
    rpsButton.onclick = ()=>onClickRPS(rpsButton.value)
 })

 const endgamebutton = document.getElementById('endGameButton')
 endgamebutton.onclick=()=>endGame()
  
  
}

function endGame() {
  totalscore['playerscore']=0
  totalscore['computerscore']=0

  let resultdiv = document.getElementById('result')
  let handsdiv = document.getElementById('hands')
  let playerscorediv = document.getElementById('player-score')
  resultdiv.innerText=''
  handsdiv.innerText=''
  playerscorediv.innerText=''


}

playGame()