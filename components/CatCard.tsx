import { CatType } from '@/@types/CatType'
import Image from 'next/image'
import LikeBtn from './LikeBtn'
import { memo, useState } from 'react'
import { useLikedCatsStore } from '@/store/likedCatsStore'


type CatCardProps = {
    cat: CatType
}

function CatCard({cat} : CatCardProps) {
    const [loaded, setLoaded] = useState(false)
    const store = useLikedCatsStore()
    const isLiked = store.isLiked(cat.id)

    return (
        
        <div className='group relative aspect-square size-[225px] hover:scale-113 duration-100'>
            {!loaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}

            <Image 
                src={cat.url} 
                alt={cat.id} 
                sizes="full" 
                onLoad={() => setLoaded(true)} 
                className="aspect-square object-cover" 
                fill
            />
            
            <LikeBtn 
                isLiked={isLiked}
                handleClick={() => {
                    if(isLiked) 
                        store.dislikeCat(cat.id)
                    else 
                        store.likeCat(cat)
                }}  
            />
        </div>
    )
}

export default memo(CatCard)
