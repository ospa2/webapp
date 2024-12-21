'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

interface blink {
  name: string;
  href: string;
}

const links: blink[] = [
  { name: "Возможности", href: "/possibillities" },
  { name: "FAQ", href: "/faq" },
  { name: "Тарифы", href: "/planes" },
  { name: "Отзывы", href: "/reviews" },
  { name: "Новости", href: "/news" },
  { name: "Контакты", href: "/contacts" },
];


/**
 * The main navigation bar of the website.
 *
 * @returns A component with the navigation bar.
 */
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};

export const TopBar = () => {

  const isMobile = useIsMobile()

  return (
    <div className='inline-flex pt-3 w-full justify-between'>
      <div className='inline-flex '>
        <b className='text-2xl ml-4'>Webapp</b>      
      </div>    
      {!isMobile && <div className='inline-flex items-center justify-center w-full'>    
          {links.map((element, index)=>(
            <Link key={index} className='px-2 flex' href={element.href}>{element.name}</Link>
          ))}
        </div>}   
      <div className='w-content flex justify-end'>
      <a className='pt-2 pr-2 inline-flex'>
          RU
          <ChevronDown/>
        </a>
        <Button className='bg-blue-500 rounded-xl'>Вход</Button>
        <Button variant={'outline'} className='rounded-xl ml-4 mr-5'>Регистрация</Button>
      </div>
    </div>
  )
}