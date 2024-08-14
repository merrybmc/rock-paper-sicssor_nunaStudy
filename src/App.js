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
  const [result, setResult] = useState('');

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerCoice = randomChoice();
    setComputerSelect(computerCoice);
    judgement(choice[userChoice], computerCoice);
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = itemArray[Math.floor(Math.random() * itemArray.length)];
    return choice[randomItem];
  };

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return setResult('tie');
    } else if (user.name === 'Rock')
      return computer.name === 'Scissors' ? setResult('win') : setResult('lose');
    else if (user.name === 'Sicssors')
      return computer.name === 'Paper' ? setResult('win') : setResult('lose');
    else if (user.name === 'Paper')
      return computer.name === 'Rock' ? setResult('win') : setResult('lose');
  };

  return (
    <div className='main'>
      <h1>Rock-Paper-Sicssors</h1>
      <div className='box-Group'>
        <Box title='You' item={userSelect} result={result} />
        <Box title='Computer' item={computerSelect} result={result} />
      </div>
      <div className='button-Group'>
        <button onClick={() => play('sicssors')}>가위</button>
        <button onClick={() => play('rock')}>바위</button>
        <button onClick={() => play('paper')}>보</button>
      </div>
    </div>
  );
}

export default App;
