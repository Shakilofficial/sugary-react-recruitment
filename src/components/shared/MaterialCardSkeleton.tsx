const MaterialCardSkeleton = () => {
  return (
    <div className="bg-white dark:bg-yellow-500/15 rounded-lg border border-gray-200 dark:border-primary/20 overflow-hidden h-full flex flex-col">
      <div className="aspect-square bg-gray-200 dark:bg-gray-700 animate-pulse" />
      <div className="p-2">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-1" />
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-3/4 mb-2" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-1/3" />
      </div>
    </div>
  );
};

export default MaterialCardSkeleton;
