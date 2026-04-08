import { CatType } from '@/@types/CatType'
import CatCard from './CatCard'

type CatListProps = {
    cats: CatType[]
}

export default function CatList({cats} : CatListProps) {
  return (
    <div className='flex justify-center m-[55px]'>
        <ul className='grid grid-cols-[repeat(auto-fit,225px)] w-full gap-[55px] justify-center items-center'>
            {cats.map((cat) => (
                <li key={cat.id} className='w-fit'> 
                    <CatCard cat={cat} />
                </li>
            ))}
        </ul>
    </div>
  )
}
