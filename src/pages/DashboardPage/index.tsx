import MaterialsList from "@/components/material/MaterialsList";
import StatCard from "@/components/material/StatCard";
import LoadingSkeleton from "@/components/shared/LoadingSkeleton";
import { useAuth } from "@/context/AuthContext";
import { getMaterials } from "@/services/materialService";
import { useQuery } from "@tanstack/react-query";
import { MapPin, Package, Tag } from "lucide-react";
import { Suspense } from "react";

const DashboardPage = () => {
  const { user } = useAuth();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["materials-summary"],
    queryFn: () => getMaterials({ skip: 0, limit: 1 }),
  });

  if (isError) {
    return (
      <div className="text-red-600 bg-red-50 p-4 rounded-md border border-red-200 dark:bg-red-900/10 dark:text-red-400">
        Error loading dashboard: {(error as Error).message}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
          Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Welcome back,{" "}
          <span className="text-yellow-600 dark:text-yellow-400 font-medium">
            {user?.FullName || "User"}
          </span>
        </p>
      </div>

      <Suspense fallback={<LoadingSkeleton />}>
        <div className="grid gap-4 md:grid-cols-3">
          <StatCard
            title="Total Materials"
            value={data?.TotalCount || "—"}
            description="Available in the catalog"
            icon={
              <Package className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            }
            isLoading={isLoading}
          />
          <StatCard
            title="Delivery Areas"
            value={data?.DeliveryAreas?.length || "—"}
            description="Available for shipping"
            icon={
              <MapPin className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            }
            isLoading={isLoading}
          />
          <StatCard
            title="Available Tags"
            value={data?.Tags?.length || "—"}
            description="For categorizing materials"
            icon={
              <Tag className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            }
            isLoading={isLoading}
          />
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            All Materials
          </h2>
          <MaterialsList />
        </div>
      </Suspense>
    </div>
  );
};

export default DashboardPage;
