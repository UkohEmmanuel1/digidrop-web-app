// hooks/useStartTask.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useStartTask() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: async (taskId: string) => {
      const res = await fetch(`/api/tasks/${taskId}/start`, {
        method: 'POST'
      });
      return res.json();
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
}
