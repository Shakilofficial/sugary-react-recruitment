interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: JSX.Element;
  isLoading?: boolean;
}

const StatCard = ({
  title,
  value,
  description,
  icon,
  isLoading,
}: StatCardProps) => {
  return (
    <div className="bg-white dark:bg-yellow-500/15 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-5 transition-all hover:shadow-md hover:border-yellow-200 dark:hover:border-yellow-900/50 group">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {title}
          </p>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-1 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
            {isLoading ? (
              <div className="h-8 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            ) : (
              value
            )}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {description}
          </p>
        </div>
        <div className="p-2 bg-yellow-100 dark:bg-yellow-900/20 rounded-full">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
