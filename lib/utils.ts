import { CatsArraySchema, } from "@/@types/CatType";
import clsx from "clsx";
import { ClassNameValue, twMerge } from "tailwind-merge";

type GetCatsProps ={
    page?: number,
    limit?: number
}

type GetCatsSuccess = {
  success: true
  data: CatType[]
}

type GetCatsError = {
  success: false
  error: string
}

type GetCatsResult = GetCatsSuccess | GetCatsError

export async function GetCats({ page = 0, limit = 6 }: GetCatsProps = {}): Promise<GetCatsResult>{
    const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key": `${process.env.CAT_API_KEY}`
    });

    try {
        const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&order=RANDOM&page=${page}&limit=${limit}`, 
        {
            method: "GET",
            headers: headers,
        })

        if(!response.ok) throw new Error('Ошибка сервера')

        const data = await response.json()

        const parsed = CatsArraySchema.parse(data)

        return {
            success: true,
            data: parsed
        }
    }
    catch(e){
        console.error(e)
        return {
            success: false,
            error: ''
        }
    }
}


export function cn(...inputs: ClassNameValue[]) {
    return twMerge(clsx(inputs))
}