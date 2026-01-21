

import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useCompleteTask() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: async (taskId: string) => {
      const res = await fetch(`/api/tasks/${taskId}/complete`, {
        method: 'POST',
      });
      return res.json();
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['tasks'] });
      qc.invalidateQueries({ queryKey: ['profile-stats'] });
    },
  });
}