import React, { FC } from 'react'
import { Separator } from './ui/separator'
import { SquareCheck, SquareX } from 'lucide-react'

interface Props {
  linkMax: string,
  api: boolean,
  lim: boolean,
  bot: boolean,
  log: boolean
}

export const PriceCard: FC<Props> = ({linkMax,api,lim,bot,log}) => {
  return (
    <div className='outline rounded-xl px-4 py-4 w-[15%] items-center grid place-items-center mx-3'>
     <div className='my-3'>{linkMax}</div>
     <Separator className="opacity-25"/>

     {api && <SquareCheck className='my-3'/> || <SquareX className='my-3'/> }
     <Separator className="opacity-25"/>
     {lim && <SquareCheck className='my-3'/> || <SquareX className='my-3'/> }
     <Separator className="opacity-25"/>
     {bot && <SquareCheck className='my-3'/> || <SquareX className='my-3'/> }
     <Separator className="opacity-25"/>
     {log && <SquareCheck className='my-3'/> || <SquareX className='my-3'/> }
     <div className='bg-white text-black rounded-xl inline-block px-6 mx-2 my-1 font-bold'>$45 в час</div>   
    </div>
  )
}