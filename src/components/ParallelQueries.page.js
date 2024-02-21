import axios from "axios";
import { useQuery } from "react-query";

  const fetchSuperHeroes = () => {
    return axios.get("http://localhost:4000/superheroes");
  };
  const fetchFriends = () => {
    return axios.get("http://localhost:4000/friends");
  };
export default function ParallelQueries() {
  const {data: superHeroes} = useQuery("super-heroes", fetchSuperHeroes)
  const { data: friends } = useQuery("friends", fetchFriends);
  return (
    <>
      <div>
        {superHeroes.data.map((hero) => (
          <p>{hero.name}</p>
        ))}
      </div>
      <p>------------------------------------</p>
      <div>
        {friends.data.map((friend) => (
          <p>{friend.name}</p>
        ))}
      </div>
    </>
  );
}
