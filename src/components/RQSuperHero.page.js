import { useParams } from "react-router-dom";
import { useSuperHeroData } from "../hooks/useSuperHeroData";

export default function RQSuperHero() {
  const { heroId } = useParams();
  const id = heroId
  const {data, isLoading, isError, error} = useSuperHeroData(id)
  console.log(data)
  
  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }


  return <div>{data?.data.name}</div>;
}
