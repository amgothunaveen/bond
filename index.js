const btnCalculate = document.getElementById("btn-calculate");
const inputOne = document.getElementById("inputone");
const inputTwo = document.getElementById("inputTwo");
const resultDiv = document.getElementById("result-div");

btnCalculate.addEventListener("click", function() {
  const nameOne = inputOne.value.trim().toUpperCase();
  const nameTwo = inputTwo.value.trim().toUpperCase();
  const loveScore = getLoveScore(nameOne, nameTwo);
  resultDiv.innerHTML = `${nameOne} and ${nameTwo} have a love score of ${loveScore}%`;
});

function getLoveScore(nameOne, nameTwo) {
  const combinedNames = nameOne + nameTwo;
  let loveScore = 0;
  for (let i = 0; i < combinedNames.length; i++) {
    loveScore += combinedNames.charCodeAt(i);
  }
  loveScore = loveScore % 101; // love score should be between 0 and 100
  return loveScore;
}