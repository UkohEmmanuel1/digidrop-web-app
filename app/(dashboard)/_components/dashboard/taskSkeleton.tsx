export function TaskSkeleton() {
  return (
    <div className="space-y-3 animate-pulse">
      <div className="h-6 w-2/3 bg-muted rounded" />
      <div className="h-4 w-1/3 bg-muted rounded" />
      <div className="h-8 w-24 bg-muted rounded" />
    </div>
  );
}