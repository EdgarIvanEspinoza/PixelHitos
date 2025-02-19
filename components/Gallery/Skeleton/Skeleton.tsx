import { Card, Skeleton } from '@heroui/react';

export const SkeletonComponent = () => {
  return (
    <Card className="space-y-5 p-4" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-60 rounded-lg bg-default-300" />
      </Skeleton>
      <div className="flex space-between gap-6">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-1/2 rounded-lg">
          <div className="h-3 w-1/2 rounded-lg bg-default-200" />
        </Skeleton>
      </div>
    </Card>
  );
};
