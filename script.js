var makePolitician = function(name, partyColor){

var politician = {};
politician.name = name;
politician.electionResults = null;
politician.totalVotes = 0;
politician.partyColor = partyColor;

politician.tallyVotes = function(){
  for(i=0; i<this.electionResults.length; i++){
    this.totalVotes = this.totalVotes + this.electionResults[i];
  }
};

return politician;
};

var eleanor = makePolitician("Eleanor Rigby", [132,17,11]);
var jane = makePolitician("Jane Goodall", [245,141,136]);

eleanor.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
jane.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

//Voting number fixes
eleanor.electionResults[4] = 17;
jane.electionResults[4] = 38;

eleanor.electionResults[9] = 1;
jane.electionResults[9] = 28;

eleanor.electionResults[43] = 11;
jane.electionResults[43] = 27;

//end of voting number fixes

var setStateResults = function(state){

  theStates[state].winner = null;
  if (eleanor.electionResults[state] > jane.electionResults[state]) {
    theStates[state].winner = eleanor;
  } else if (eleanor.electionResults[state] < jane.electionResults[state]) {
    theStates[state].winner = jane;
  }

  var stateWinner = theStates[state].winner;
  if (stateWinner !== null){
    theStates[state].rgbColor = stateWinner.partyColor;
  } else {
    theStates[state].rgbColor = [11,32,57];
  }

  //State Results table
  var stateResults = document.getElementById("stateResults");

  var header = stateResults.children[0].children[0];
  var stateName = header.children[0];
  stateName.innerText = theStates[state].nameFull;
  var stateAbbrev = header.children[1];
  stateAbbrev.innerText = theStates[state].nameAbbrev;

  var rowPolitOne = stateResults.children[1].children[0];
  var politOneName = rowPolitOne.children[0];
  politOneName.innerText = eleanor.name;
  var politOneResults = rowPolitOne.children[1];
  politOneResults.innerText = eleanor.electionResults[state];

  var rowPolitTwo = stateResults.children[1].children[1];
  var politTwoName = rowPolitTwo.children[0];
  politTwoName.innerText = jane.name;
  var politTwoResults = rowPolitTwo.children[1];
  politTwoResults.innerText = jane.electionResults[state];

  var rowWinner = stateResults.children[1].children[2];
  var winnerResults = rowWinner.children[1];
  if (eleanor.electionResults[state] > jane.electionResults[state]){
    winnerResults.innerText = eleanor.name;
  } else if (eleanor.electionResults[state] < jane.electionResults[state]){
    winnerResults.innerText = jane.name;
  } else {winnerResults.innerText = "TIE"}


};

eleanor.tallyVotes();
jane.tallyVotes();

var winner = "";
if (eleanor.totalVotes > jane.totalVotes){
  winner = eleanor.name;
} else if (eleanor.totalVotes < jane.totalVotes){
  winner = jane.name;
} else { winner = "Tie!"};

console.log("The winner is: " + winner + "!");

//Country table info
var countryResults = document.getElementById("countryResults");

var rowOne = countryResults.children[0].children[0];
rowOne.children[0].innerText = eleanor.name;
rowOne.children[1].innerText = eleanor.totalVotes;

rowOne.children[2].innerText = jane.name;
rowOne.children[3].innerText = jane.totalVotes;

rowOne.children[5].innerText = winner;
