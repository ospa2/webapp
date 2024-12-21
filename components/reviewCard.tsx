'use client';
import { cn } from '@/lib/utils'
import React, { FC, ReactNode, useEffect, useState } from 'react'
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Circle, CircleChevronDown } from 'lucide-react';
import { type CarouselApi } from "@/components/ui/carousel"

interface cardProps {
  className?: string
  name: string
  review: string
  occup: string
  ebalo: ReactNode
}

const reviewslist = [
  {
    name: 'Вадим',
    review: 'sbdfgvhjknkmlhbjdgsvkmjnfsdgvljnkmsdgvkmljnfsdgvkLorem ipsum dolor sit amet consectetur. Nisi nulla adipiscing purus odio facilisis. Mauris sed turpis aenean placerat sed id. Phasellus aliquet ullamcorper feugiat at morbi. In faucibus nulla non sem id enim. Tempus at sed interdum magna pellentesque nunc mi lorem sed. Consectetur arcu proin non lacus pellentesque turpis. In diam molestie diam auctor.mljncvlnghnbfdjlkgndfjkb vlfksjdh bv;jkbnpsaikbn',
    evalo: <Image src='/magomed.png' className="rounded-[300px]"
      alt='бублик'
      width={200}
      height={200}/>,
    occup: "Криптоинфлюнсер"
  },
  {
    name: 'Артем',
    review: 'sbdfgvhjknkmlhbjdgsvkmjnfsdgvljnkmsdgvkmljnfsdgvkLorem ipsum dolor sit amet consectetur. Nisi nulla adipiscing purus odio facilisis. Mauris sed turpis aenean placerat sed id. Phasellus aliquet ullamcorper feugiat at morbi. In faucibus nulla non sem id enim. Tempus at sed interdum magna pellentesque nunc mi lorem sed. Consectetur arcu proin non lacus pellentesque turpis. In diam molestie diam auctor.mljncvlnghnbfdjlkgndfjkb vlfksjdh bv;jkbnpsaikbn',
    evalo: <Image src='/artem.png' className="rounded-[300px]"
      alt='бублик'
      width={200}
      height={200}/>,
    occup: "Менеджер"
  },
  {
    name: 'Максон',
    review: 'sbdfgvhjknkmlhbjdgsvkmjnfsdgvljnkmsdgvkmljnfsdgvkLorem ipsum dolor sit amet consectetur. Nisi nulla adipiscing purus odio facilisis. Mauris sed turpis aenean placerat sed id. Phasellus aliquet ullamcorper feugiat at morbi. In faucibus nulla non sem id enim. Tempus at sed interdum magna pellentesque nunc mi lorem sed. Consectetur arcu proin non lacus pellentesque turpis. In diam molestie diam auctor.mljncvlnghnbfdjlkgndfjkb vlfksjdh bv;jkbnpsaikbn',
    evalo: <Image src='/makson.png' className="rounded-[300px]"
      alt='бублик'
      width={200}
      height={200}/>,
    occup: "Ветеринар"
  },
  {
    name: 'Магомед',
    review: 'sbdfgvhjknkmlhbjdgsvkmjnfsdgvljnkmsdgvkmljnfsdgvkLorem ipsum dolor sit amet consectetur. Nisi nulla adipiscing purus odio facilisis. Mauris sed turpis aenean placerat sed id. Phasellus aliquet ullamcorper feugiat at morbi. In faucibus nulla non sem id enim. Tempus at sed interdum magna pellentesque nunc mi lorem sed. Consectetur arcu proin non lacus pellentesque turpis. In diam molestie diam auctor.mljncvlnghnbfdjlkgndfjkb vlfksjdh bv;jkbnpsaikbn',
    evalo: <Image src='/magomed.png' className="rounded-[300px]"
      alt='бублик'
      width={200}
      height={200}/>,
    occup: "Криптоинфлюнсер"
  },
  {
    name: 'Магомед',
    review: 'sbdfgvhjknkmlhbjdgsvkmjnfsdgvljnkmsdgvkmljnfsdgvkLorem ipsum dolor sit amet consectetur. Nisi nulla adipiscing purus odio facilisis. Mauris sed turpis aenean placerat sed id. Phasellus aliquet ullamcorper feugiat at morbi. In faucibus nulla non sem id enim. Tempus at sed interdum magna pellentesque nunc mi lorem sed. Consectetur arcu proin non lacus pellentesque turpis. In diam molestie diam auctor.mljncvlnghnbfdjlkgndfjkb vlfksjdh bv;jkbnpsaikbn',
    evalo: <Image src='/magomed.png' className="rounded-[300px]"
      alt='бублик'
      width={200}
      height={200}/>,
    occup: "Криптоинфлюнсер"
  },
  {
    name: 'Магомед',
    review: 'sbdfgvhjknkmlhbjdgsvkmjnfsdgvljnkmsdgvkmljnfsdgvkLorem ipsum dolor sit amet consectetur. Nisi nulla adipiscing purus odio facilisis. Mauris sed turpis aenean placerat sed id. Phasellus aliquet ullamcorper feugiat at morbi. In faucibus nulla non sem id enim. Tempus at sed interdum magna pellentesque nunc mi lorem sed. Consectetur arcu proin non lacus pellentesque turpis. In diam molestie diam auctor.mljncvlnghnbfdjlkgndfjkb vlfksjdh bv;jkbnpsaikbn',
    evalo: <Image src='/magomed.png' className="rounded-[300px]"
      alt='бублик'
      width={200}
      height={200}/>,
    occup: "Криптоинфлюнсер"
  },
  {
    name: 'Магомед',
    review: 'sbdfgvhjknkmlhbjdgsvkmjnfsdgvljnkmsdgvkmljnfsdgvkLorem ipsum dolor sit amet consectetur. Nisi nulla adipiscing purus odio facilisis. Mauris sed turpis aenean placerat sed id. Phasellus aliquet ullamcorper feugiat at morbi. In faucibus nulla non sem id enim. Tempus at sed interdum magna pellentesque nunc mi lorem sed. Consectetur arcu proin non lacus pellentesque turpis. In diam molestie diam auctor.mljncvlnghnbfdjlkgndfjkb vlfksjdh bv;jkbnpsaikbn',
    evalo: <Image src='/magomed.png' className="rounded-[300px]"
      alt='бублик'
      width={200}
      height={200}/>,
    occup: "Криптоинфлюнсер"
  },
  {
    name: 'Магомед',
    review: 'sbdfgvhjknkmlhbjdgsvkmjnfsdgvljnkmsdgvkmljnfsdgvkLorem ipsum dolor sit amet consectetur. Nisi nulla adipiscing purus odio facilisis. Mauris sed turpis aenean placerat sed id. Phasellus aliquet ullamcorper feugiat at morbi. In faucibus nulla non sem id enim. Tempus at sed interdum magna pellentesque nunc mi lorem sed. Consectetur arcu proin non lacus pellentesque turpis. In diam molestie diam auctor.mljncvlnghnbfdjlkgndfjkb vlfksjdh bv;jkbnpsaikbn',
    evalo: <Image src='/magomed.png' className="rounded-[300px]"
      alt='бублик'
      width={200}
      height={200}/>,
    occup: "Криптоинфлюнсер"
  },
  {
    name: 'Магомед',
    review: 'sbdfgvhjknkmlhbjdgsvkmjnfsdgvljnkmsdgvkmljnfsdgvkLorem ipsum dolor sit amet consectetur. Nisi nulla adipiscing purus odio facilisis. Mauris sed turpis aenean placerat sed id. Phasellus aliquet ullamcorper feugiat at morbi. In faucibus nulla non sem id enim. Tempus at sed interdum magna pellentesque nunc mi lorem sed. Consectetur arcu proin non lacus pellentesque turpis. In diam molestie diam auctor.mljncvlnghnbfdjlkgndfjkb vlfksjdh bv;jkbnpsaikbn',
    evalo: <Image src='/magomed.png' className="rounded-[300px]"
      alt='бублик'
      width={200}
      height={200}/>,
    occup: "Криптоинфлюнсер"
  },
  {
    name: 'Магомед',
    review: 'sbdfgvhjknkmlhbjdgsvkmjnfsdgvljnkmsdgvkmljnfsdgvkLorem ipsum dolor sit amet consectetur. Nisi nulla adipiscing purus odio facilisis. Mauris sed turpis aenean placerat sed id. Phasellus aliquet ullamcorper feugiat at morbi. In faucibus nulla non sem id enim. Tempus at sed interdum magna pellentesque nunc mi lorem sed. Consectetur arcu proin non lacus pellentesque turpis. In diam molestie diam auctor.mljncvlnghnbfdjlkgndfjkb vlfksjdh bv;jkbnpsaikbn',
    evalo: <Image src='/magomed.png' className="rounded-[300px]"
      alt='бублик'
      width={200}
      height={200}/>,
    occup: "Криптоинфлюнсер"
  }

]

const ReviewCard: FC<cardProps> = ({ className, 
  name,
  review,
  ebalo,
  occup}) => {
  return(
    <>
      <div className={cn('mx-2 my-20 outline rounded-3xl relative', className)}>      
        <div className='text-5xl py-5 px-5 flex'>
          <div className='absolute -top-20 pl-4'>
            {ebalo}
          </div>
          <div className='ml-[256px]'>
            {name}
            <br/>
            <a className='text-xl'>
              {occup}
            </a>
          </div>
        </div>
        <div className='text-xl py-7 px-7'>
          {review}
        </div>
      </div>
    </>
  )
}
export const Reviews = () => {

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div>
      <Carousel opts={{
        align: "start",
        loop: true,
      }} setApi={setApi}>
        <CarouselContent>     
            {reviewslist.map((review, index)=>(
              <CarouselItem key={index} className="basis-1/2">
                <ReviewCard name={review.name} ebalo= {review.evalo} review={review.review} occup={review.occup}/>
              </CarouselItem>
            ))}         
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext/>
      </Carousel>
      <div className='flex justify-center'>
        {current===1 ? <CircleChevronDown /> : <Circle />}
        {current===2 ? <CircleChevronDown /> : <Circle />}
        {current===3 ? <CircleChevronDown /> : <Circle />}
        {current===4 ? <CircleChevronDown /> : <Circle />}
        {current===5 ? <CircleChevronDown /> : <Circle />}
        {current===6 ? <CircleChevronDown /> : <Circle />}
        {current===7 ? <CircleChevronDown /> : <Circle />}
        {current===8 ? <CircleChevronDown /> : <Circle />}
      </div>
    </div>
  )
}