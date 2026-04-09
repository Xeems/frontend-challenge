import CatList from "@/components/CatList";
import { GetCats } from "@/lib/utils";

export default async function Home() {
  const parsedCats = await GetCats({limit: 30})

  if(!parsedCats.success) return(<span>Что то пошло не так.</span>)

  return (
    <main >
      <CatList cats={parsedCats.data}/>
    </main>
  );
}
