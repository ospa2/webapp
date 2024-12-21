'use client';

import React, { FC, useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';

interface Props {
  question: string;
  ans: string;
}

export const QA: FC<Props> = ({ question, ans }) => {
  const [height, setHeight] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = document.getElementById('answer');

    const updateheight = () => {
      if (element){
        setHeight(ans.length*192/element.scrollWidth || 16)
        console.log(ans.length*64/element.scrollWidth)
        }    
      }

    updateheight(); // Инициализация ширины при монтировании
    window.addEventListener('resize', updateheight);
    return () => {
      window.removeEventListener('resize', updateheight);
    };
  });

  /**
   * Toggle the visibility of the answer.
   */
  function changeVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <div className="relative">
      <div className="flex outline rounded-xl justify-between px-6 items-center">
        {question}
        <Button onClick={changeVisibility} variant={'default'} className='bg-blue-500'>
          <Plus />
        </Button>
      </div>
      <div
        id="answer"
        className={`transition-all duration-500 break-words absolute top-10 left-0 w-full ${
          isVisible ? 'opacity-100 translate-y-5' : 'opacity-0 -translate-y-5 pointer-events-none'
        }`}
      >
        {ans}
      </div>
      <div
        style={{ marginTop: isVisible ? `${height}px` : '-0.5rem' }}
        className="transition-all duration-500 pointer-events-none opacity-0"
      >
        мурзилка
      </div>
    </div>
  );
};
