import { CatType } from '@/@types/CatType'
import Image from 'next/image'
import LikeClicked from '../public/LikeClicked.svg'
import Like from '../public/Like.svg'

type CatCardProps = {
    cat: CatType
}

export default function CatCard({cat} : CatCardProps) {
  return (
    <div className='group relative aspect-square size-[225px] hover:scale-113 duration-75'>
        <Image 
            src={cat.url} 
            alt={cat.id} 
            sizes="full"  
            className="aspect-square object-cover" 
            fill
        />
        <button className='absolute bottom-4 right-3 opacity-0 group-hover:opacity-100 transition-opacity'>
            <Image src={Like} alt='like'/>
        </button>
    </div>
  )
}
