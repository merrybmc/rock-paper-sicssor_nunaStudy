import './App.css';
import Box from './component/Box';
import sicssors from './asset/pika_v.jpg';
import rock from './asset/pika_rock.png';
import paper from './asset/pika_paper.jpg';
import { useState } from 'react';

const choice = {
  rock: {
    name: 'Rock',
    img: rock,
  },
  sicssors: {
    name: 'Sicssors',
    img: sicssors,
  },
  paper: {
    name: 'Paper',
    img: paper,
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerCoice = randomChoice();
    setComputerSelect(computerCoice);
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = itemArray[Math.floor(Math.random() * itemArray.length)];
    return choice[randomItem];
  };

  return (
    <div className='main'>
      <Box title='You' item={userSelect} />
      <Box title='Computer' item={computerSelect} />
      <div>
        <button onClick={() => play('sicssors')}>가위</button>
        <button onClick={() => play('rock')}>바위</button>
        <button onClick={() => play('paper')}>보</button>
      </div>
    </div>
  );
}

export default App;
