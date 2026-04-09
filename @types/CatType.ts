import z from "zod"

export type CatType = {
    id: string
    url: string
    width: number
    height: number
}

export const CatTypeScheema = z.object({
    id: z.string(),
    url: z.string(),
    width: z.number(),
    height: z.number()
})

export const CatsArraySchema = z.array(CatTypeScheema)