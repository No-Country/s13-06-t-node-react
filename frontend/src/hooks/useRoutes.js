import { useQuery } from 'react-query';
import { fetchRoutes } from '../services/Routes';

export function useRoutes() {
  return useQuery(['routes'], () => fetchRoutes(), {
    // example, onSuccess you can do something
    onSuccess: (data) => {
      console.log(data);
    },
    // example, onError you can do something
    onError: (error) => {
      return error;
    }
  });
}
