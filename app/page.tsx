import CatList from "@/components/CatList";

const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key": `${process.env.CAT_API_KEY}`
});


export default async function Home() {
  const respone = await fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&order=RANDOM&page=0&limit=30", {
    method: "GET",
    headers: headers,
  })

  const data = await respone.json()

  return (
    <main >
      <CatList cats={data}/>
    </main>
  );
}
