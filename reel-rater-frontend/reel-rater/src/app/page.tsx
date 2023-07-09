import Movies from "./components/Movies";

export default function Home() {
  return (
    <main className="">
      <div className="flex justify-center items-center m-auto h-[50vh]">
        <Movies />
      </div>
      <div className="flex justify-evenly mx-auto">
        <h1>Trailer</h1>
        <h1>Review</h1>
      </div>
    </main>
  );
}
