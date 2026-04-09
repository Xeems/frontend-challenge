'use client'

import { CatType } from '@/@types/CatType'
import CatCard from './CatCard'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { useRef, useState, useEffect } from 'react'
import { GetCats } from '@/lib/utils'

type CatListProps = {
    cats: CatType[]
    variant?: 'default' | 'liked'
}

export default function CatList({cats, variant = 'default'} : CatListProps) {
    const [catsList, setCatsList] = useState(cats)
    const [page, setPage] = useState(0)
    const observerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        setCatsList(cats)
    }, [cats])

    useIntersectionObserver({
        targetRef: observerRef,
        onIntersect: async () => await loadMoreCats()
    })

    const loadMoreCats = async() => {
        const result = await GetCats({ page })

        if (result.success) {
            setCatsList(prev => {
                const newCats = result.data.filter(
                    newCat => !prev.some(cat => cat.id === newCat.id)
                )
                return [...prev, ...newCats]
            })
            setPage(prev => prev + 1)
        }
    }

  return (
    <div className='flex flex-col justify-center m-[55px]'>
        <ul className='grid grid-cols-[repeat(auto-fit,225px)] w-full gap-[55px] justify-center items-center'>
            {catsList.map((cat) => (
                <li key={cat.id} className='w-fit'> 
                    <CatCard cat={cat} />
                </li>
            ))}
        </ul>
        {variant ==='default' && 
            <div ref={observerRef} className='flex items-center justify-center my-4'>Ждем новых котиков...</div>
        }
    </div>
  )
}
