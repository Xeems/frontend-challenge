'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
    { name: 'Все котики', href: '/' },
    { name: 'Любимые котики', href: '/liked' },
  ] as const

export default function Header() {
    const path = usePathname()
  return (
    <header className='h-16 bg-[#2196f3] flex items-center px-17'>
        <nav className='flex flex-row h-full'>
            {navLinks.map((link) => {
                const isActive = path === link.href;
                return (
                <Link 
                    href={link.href} 
                    className={`${isActive && 'bg-[#1e88e5]'} px-5 line-clamp-1 h-full flex items-center justify-center text-white font-normal`}
                    key= {link.href}
                >
                {link.name}
            </Link>
            )})}
       </nav>
    </header>
  )
}
