import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

const fetchSuperHero = ({ queryKey }) => {
  console.log(queryKey);
  const heroId = queryKey[1];
  console.log(heroId);
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export const useSuperHeroData = (id) => {
  const queryClient = useQueryClient();
  return useQuery(["super-heroes", id], fetchSuperHero, {
    // cacheTime: 5000, //5sec, Default 5 min
    // staleTime: 30000, //Default 0 sec
    refetchOnMount: true, // Default true
    refetchOnWindowFocus: true, // Default true
    refetchInterval: false, // Default false
    refetchIntervalInBackground: false, // Default false
    enabled: true,
    initialData: () => {
      const hero = queryClient
        .getQueryData("super-heroes")
        ?.data?.find((hero) => hero.id === parseInt(id));
      if (hero) {
        return {
          data: hero,
        };
      } else {
        return undefined;
      }
    },
    // select: (data) => {
    //   const superHeroNames = data.data.map((hero) => hero.name);
    //   return superHeroNames;
    // },
  });
};
