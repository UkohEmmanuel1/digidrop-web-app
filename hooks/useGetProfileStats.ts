import { useQuery } from '@tanstack/react-query';

async function fetchProfileStats() {
  const res = await fetch('/api/profile/stats', {
    cache: 'no-store',
  });
  console.log("response:", res)
  return res.json();
}


export function useProfileStats() {
  return useQuery({
    queryKey: ['profile-stats'],
    queryFn: fetchProfileStats,
    refetchInterval: 60_000,
  });
}
