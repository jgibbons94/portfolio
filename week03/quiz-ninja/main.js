const quiz = [
  ["What is Superman's real name?", "Clark Kent"],
  ["What is Wonder Woman's real name?", "Diana Prince"],
  ["What is Batman's real name?", "Bruce Wayne"]
];
function start(quiz){
  let score = 0;
  for (const [question, answer] of quiz){
    const response = ask(question);
    score += check(response, answer)
  }
  gameOver()
  function ask(question){
    return prompt(question);
  }
  function check(response, answer){
    if(response === answer){
      alert(`correct!`);
      return 1;
    } else {
      alert(`Wrong! the correct answer was ${answer}`);
      return 0;
    }
  }
  function gameOver(){
    alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
  }
}
start(quiz)
