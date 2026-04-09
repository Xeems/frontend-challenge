'use client'

import React from 'react'
import { useLikedCatsStore } from '@/store/likedCatsStore'
import CatList from '@/components/CatList'

export default function LikedPage() {
  const likedCats = useLikedCatsStore((s) => s.cats) 

  return (
    <main>
      <CatList cats={likedCats} variant='liked'/>
    </main>
  )
}
