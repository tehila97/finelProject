
import './App.css'

function App() {
  const player = {
    name: "tehila",
    currttentScore: 0
  }
  const targetScore = 50;

  function throwDice () {
    const num1 = Math.floor(Math.random() * 6 + 1);
    console.log('num1', num1);
    const num2 = Math.floor (Math.random () * 6 + 1);
    console.log('num2',num2);
    return [num1, num2];
  }

function handleDiceThrow () {
  const [num1, num2] = throwDice();
  // console.log('num1', num1);
  // console.log('num2', num2);
  player.currttentScore += (num1 + num2);
  // console.log('player.currttentScore' ,player.currttentScore);
  if  (player.currttentScore >= targetScore) {
  // console.log(`currttent Score: ${player.currttentScore} is bigger then ${targetScore}. game over`);
  }
}

  return (
    <>
    <button onClick={handleDiceThrow}> handleDiceThrow</button>
    </>
  )
}

export default App
