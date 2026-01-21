import { useQuery } from '@tanstack/react-query';

async function fetchLeaderboardStats() {
  const res = await fetch('/api/leaderboard', {
    cache: 'no-store',
  });
  return res.json();
}


export function useGetLeaderboardStats() {
  return useQuery({
    queryKey: ['leaderboard-stats'],
    queryFn: fetchLeaderboardStats,
    refetchInterval: 60_000,
  });
}
