import './GameOver.css';

const GameOver = ({ retry }) => {
  return (
    <div className="">
      <h1>Game</h1>
      <button onClick={retry}>Restart jogo</button>
    </div>    
  )
}

export default GameOver;