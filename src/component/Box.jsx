import React, { useEffect, useState } from 'react';

export default function Box({ title, item, result }) {
  const [computerResult, setComputerResult] = useState(null);

  useEffect(() => {
    result === 'tie' && setComputerResult('tie');
    result === 'win' && setComputerResult('lose');
    result === 'lose' && setComputerResult('win');
  }, [result]);

  return (
    <div className='box'>
      <h1>{title}</h1>
      <img className='item-img' src={item && item.img} alt='' />
      <h2>{title === 'You' ? result : computerResult}</h2>
    </div>
  );
}
