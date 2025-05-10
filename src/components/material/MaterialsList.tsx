/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-hooks/exhaustive-deps */
import { getMaterials } from "@/services/materialService";
import { Material } from "@/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import { ShoppingBag } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import MaterialCardSkeleton from "../shared/MaterialCardSkeleton";
import MaterialCard from "./MaterialCard";
import MaterialDialog from "./MaterialDialog";

interface MaterialsListProps {
  limit?: number;
  filters?: {
    search?: string;
    tags?: number[];
    areas?: number[];
    sort?: "price-asc" | "price-desc" | "name-asc" | "name-desc";
  };
}

const MaterialsList = ({ limit = 12, filters = {} }: MaterialsListProps) => {
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(
    null
  );
  const [dialogOpen, setDialogOpen] = useState(false);
  const observerTarget = useRef<HTMLDivElement>(null);

  // Extract filter values with defaults
  const { search = "", tags = [], areas = [], sort = "price-asc" } = filters;

  // Fetch materials with infinite query
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ["materials", { limit, search, tags, areas }],
    queryFn: ({ pageParam = 0 }) =>
      getMaterials({
        // @ts-ignore
        skip: pageParam,
        limit,
        SearchTerm: search || undefined,
        TagIds: tags.length ? tags : undefined,
        DeliveryAreaIds: areas.length ? areas : undefined,
      }),
    getNextPageParam: (lastPage, allPages) => {
      // @ts-ignore
      if (lastPage.RemainingCount > 0) {
        return allPages.length * limit;
      }
      return undefined;
    },
    // @ts-ignore
    keepPreviousData: true,
  });

  // Setup intersection observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  // Handle material click
  const handleMaterialClick = (material: Material) => {
    setSelectedMaterial(material);
    setDialogOpen(true);
  };

  // Get all materials from all pages
  // @ts-ignore
  const allMaterials = data?.pages.flatMap((page) => page.Materials) || [];

  // Apply client-side sorting
  const sortedMaterials = [...allMaterials].sort((a, b) => {
    switch (sort) {
      case "price-asc":
        return a.SalesPriceInUsd - b.SalesPriceInUsd;
      case "price-desc":
        return b.SalesPriceInUsd - a.SalesPriceInUsd;
      case "name-asc":
        return a.Title.localeCompare(b.Title);
      case "name-desc":
        return b.Title.localeCompare(a.Title);
      default:
        return 0;
    }
  });

  if (isLoading && !data) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {Array.from({ length: limit > 12 ? 12 : limit }).map((_, index) => (
          <MaterialCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-red-700 dark:text-red-400">
        <p>Error loading materials: {(error as Error).message}</p>
      </div>
    );
  }

  if (sortedMaterials.length === 0) {
    return (
      <div className="text-center py-10 border rounded-lg bg-muted/30">
        <div className="flex justify-center mb-4">
          <div className="relative h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
            <ShoppingBag className="h-6 w-6 text-primary-foreground" />
          </div>
        </div>
        <h3 className="text-lg font-medium">No materials found</h3>
        <p className="text-muted-foreground">
          Try adjusting your search or filter criteria
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {sortedMaterials.map((material) => (
          <MaterialCard
            key={material.Id}
            material={material}
            onClick={() => handleMaterialClick(material)}
          />
        ))}

        {isFetchingNextPage &&
          Array.from({ length: 6 }).map((_, index) => (
            <MaterialCardSkeleton key={`loading-more-${index}`} />
          ))}

        <div
          ref={observerTarget}
          className={`h-4 w-full col-span-full ${!hasNextPage ? "hidden" : ""}`}
        />
      </div>

      <MaterialDialog
        material={selectedMaterial}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
};

export default MaterialsList;
