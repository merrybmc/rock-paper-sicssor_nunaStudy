import React, { Component } from 'react';
import BoxClass from './component/BoxClass';
import sicssors from './asset/pika_v.png';
import rock from './asset/pika_rock.png';
import paper from './asset/pika_paper.png';

const choice = {
  rock: {
    name: 'Rock',
    img: rock,
  },
  scissors: {
    name: 'Scissors',
    img: sicssors,
  },
  paper: {
    name: 'Paper',
    img: paper,
  },
};

export default class AppClass extends Component {
  constructor() {
    super();
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: '',
    };
  }

  play = (userChoice) => {
    let computerChoice = this.randomChoice();
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(choice[userChoice], computerChoice),
    });
  };
  randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };
  judgement = (user, computer) => {
    if (user.name === computer.name) {
      return 'tie';
    } else if (user.name === 'Rock') return computer.name === 'Scissors' ? 'win' : 'lose';
    else if (user.name === 'Scissors') return computer.name === 'Paper' ? 'win' : 'lose';
    else if (user.name === 'Paper') return computer.name === 'Rock' ? 'win' : 'lose';
  };

  render() {
    return (
      <div className='main'>
        <h1>Rock-Paper-Sicssors</h1>
        <div className='box-Group'>
          <BoxClass title='You' item={this.state.userSelect} result={this.state.result} />
          <BoxClass title='Computer' item={this.state.computerSelect} result={this.state.result} />
        </div>
        <div className='button-Group'>
          <button onClick={() => this.play('scissors')}>가위</button>
          <button onClick={() => this.play('rock')}>바위</button>
          <button onClick={() => this.play('paper')}>보</button>
        </div>
      </div>
    );
  }
}
