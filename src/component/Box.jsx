import React, { useEffect, useState } from 'react';
import question from '../asset/pika_question.png';

export default function Box({ title, item, result }) {
  const [computerResult, setComputerResult] = useState(null);

  useEffect(() => {
    result === 'tie' && setComputerResult('tie');
    result === 'win' && setComputerResult('lose');
    result === 'lose' && setComputerResult('win');
  }, [result]);

  return (
    <div className='box-container'>
      <h1>{title}</h1>
      <p>{item ? item.name : ' '}</p>
      <img
        className={`item-img box ${result}`}
        src={item ? item.img : question}
        alt={item && title + item.img}
      />
      <h2>{title === 'You' ? result : computerResult}</h2>
    </div>
  );
}
