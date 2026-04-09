import { useEffect } from 'react'

type UseIntersectionObserverProps = {
    targetRef: React.RefObject<Element | null>
    hasMore?: boolean
    onIntersect: () => void
    rootMargin?: string
    threshold?: number
}

export function useIntersectionObserver({
    targetRef,
    hasMore = true,
    onIntersect,
    rootMargin = '0px',
    threshold = 1.0,
}: UseIntersectionObserverProps) {
    useEffect(() => {
        if (!hasMore) return
        const el = targetRef.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) onIntersect()
            },
            { root: null, rootMargin, threshold },
        )

        observer.observe(el)

        return () => observer.unobserve(el)
    }, [hasMore, onIntersect, rootMargin, threshold, targetRef])
}
