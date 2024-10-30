import React from 'react'
import { topCategoryStyles } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Progress } from './ui/progress';
const Category = ({ category }: CategoryProps) => {
  const {
    bg,
    circleBg,
    text: { main, count },
    progress: { bg: progressBg, indicator },
    icon,
  } = topCategoryStyles[category.name as keyof typeof topCategoryStyles] ||
    topCategoryStyles.default;
  return (
    <div className={cn(" flex pl-4 gap-[18px] rounded-xl", bg)}>
      <figure className={cn("flex-center size-10 rounded-full", circleBg)}>
        <Image src={icon} width={20} height={20} alt={category.name}
        />
      </figure>
      <div className="flex w-full gap-2 flex-1 flex-col">
        <div className="text-14 flex gap-3 justify-center">
          <h2 className={cn("font-medium", main)}>{category.name}</h2>
          <h3 className={cn("font-normal", count)}>{category.count}</h3>
        </div>
        <Progress value={(category.count / category.totalCount ) * 100} 
        className={cn('h-2 w-full',progressBg)}
        indicatorClassName={cn("h-2 w-full", indicator)}
        />
      </div>
    </div>



  )
}

export default Category
