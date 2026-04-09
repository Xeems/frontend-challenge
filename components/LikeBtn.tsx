import React from 'react'
import { cn } from '@/lib/utils'

type LikeBtnProps = {
    handleClick: () => void
    isLiked: boolean
}

export default function LikeBtn({handleClick, isLiked} : LikeBtnProps) {

  return (
    <button 
        className={cn(
           "absolute bottom-4 right-3 opacity-0 group-hover:opacity-100 transition-opacity",
            isLiked && 'opacity-100'
            )}
        onClick={handleClick}
    >
        <svg
            viewBox="-2 -2 44 41"
            className="size-10 cursor-pointer"
            >
            <path
                d="M29 0C25.52 0 22.18 1.62 20 4.18C17.82 1.62 14.48 0 11 0C4.84 0 0 4.84 0 11C0 18.56 6.8 24.72 17.1 34.08L20 36.7L22.9 34.06C33.2 24.72 40 18.56 40 11C40 4.84 35.16 0 29 0Z"
                className={cn(
                    "fill-transparent stroke-red-400 stroke-4 transition-all duration-200 hover:fill-red-400",
                    isLiked && "fill-red-500 stroke-red-500 hover:fill-red-500"
                )}
            />
        </svg>
    </button>
  )
}
