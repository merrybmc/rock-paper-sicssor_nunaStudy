import React from 'react';

export default function Box({ title, item }) {
  console.log(item);
  return (
    <div className='box'>
      <h1>{title}</h1>
      <img className='item-img' src={item && item.img} alt='' />
      <h2>WIN</h2>
    </div>
  );
}
