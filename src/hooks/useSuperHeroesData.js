import { useQuery, useMutation, useQueryClient } from "react-query";
import { request } from "../utils/axios-utils";

const fetchSuperHeroes = () => {
  return request({url: "/superheroes"});
};

const addSuperHero = (hero) => {
  return request({ url: "/superheroes", method: "post", data: hero });
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchSuperHeroes, {
    // cacheTime: 5000, //5sec, Default 5 min
    // staleTime: 30000, //Default 0 sec
    refetchOnMount: true, // Default true
    refetchOnWindowFocus: true, // Default true
    refetchInterval: false, // Default false
    refetchIntervalInBackground: false, // Default false
    enabled: true,
    onError: onError,
    onSuccess: onSuccess,
    // select: (data) => {
    //   const superHeroNames = data.data.map((hero) => hero.name);
    //   return superHeroNames;
    // },
  });
};

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    // onSuccess: (data) => {
    //   // queryClient.invalidateQueries("super-heroes")
    // queryClient.setQueryData("super-heroes", (oldQueryData)=> {
    //   return {
    //     ...oldQueryData, data:[...oldQueryData.data, data.data]
    //   }
    // })
    // }
    onMutate: async (newHero) => {
      await queryClient.cancelQueries("super-heroes");
      const previusHeroData = queryClient.getQueryData("super-heores");
      queryClient.setQueryData("super-heroes", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [
            ...oldQueryData.data,
            { id: oldQueryData?.data?.length + 1, ...newHero },
          ],
        };
      })
      return {
        previusHeroData,
      }
    },
    onError: (_error, _hero, context) => {
      queryClient.setQueryData("super-heroes", context.previusHeroData)
    },
    onSettled: () => {
      queryClient.invalidateQueries("super-heroes")
    },
  });
};
