import { cn } from '@/lib/utils'
import React, { FC, ReactNode } from 'react'

interface Props {
  className?: string
  title: string
  text: string
  icon?: ReactNode
}

export const OutlineBox: FC<Props> = ({ className, title, text, icon }) => {
  return (
    <div className={cn('outline rounded-xl',className)}>
        <div className='text-5xl py-5 px-5 flex justify-between'>
            {title}
            {icon}
        </div>
        <div className='text-md pb-5 px-5'>
            {text}  
        </div>
    </div>
  )
}