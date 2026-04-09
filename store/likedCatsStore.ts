import { CatType } from "@/@types/CatType"
import { create } from "zustand"
import { persist } from "zustand/middleware"

type likedCatsStoreType = {
  cats: CatType[]
  likeCat: (cat: CatType) => void
  dislikeCat: (id: string) => void
  isLiked: (id: string) => boolean
}

export const useLikedCatsStore = create<likedCatsStoreType>()(
  persist(
    (set, get) => ({
      cats: [],
      likeCat: (cat) =>{
        set((state) => {
          if (state.cats.some((c) => c.id === cat.id)) {
            return state 
          }
          return {
            cats: [...state.cats, cat],
          }
        })
      },
      dislikeCat: (id) =>{
        console.log(id)
        set((state) => ({
          cats: state.cats.filter((cat) => cat.id !== id),
        }))},
      isLiked: (id) =>
        get().cats.some((cat) => cat.id === id),
    }),
    {
      name: 'favorite-cats',
    }
  )
)