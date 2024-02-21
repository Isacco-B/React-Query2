import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

export default function Heroes() {
  const { data, isError, isLoading, error, refetch } = useSuperHeroesData();

  if (isError) {
    console.log(error.message);
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {data.map((hero) => (
        <p key={hero}>{hero}</p>
      ))}
      <button onClick={refetch}>Refetch Heroes</button>
    </>
  );
}
