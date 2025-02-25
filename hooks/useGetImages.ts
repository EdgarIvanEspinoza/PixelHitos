import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useGetImages = ({ id }: { id?: string }) => {
  const url = id ? `/api/assets?id=${id}` : '/api/assets';
  const { data, isLoading } = useSWR(url, fetcher);
  return { data, isLoading };
};
