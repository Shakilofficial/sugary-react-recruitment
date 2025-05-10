import { Material } from "@/types";
import { Eye } from "lucide-react";

interface MaterialCardProps {
  material: Material;
  onClick: () => void;
}

const MaterialCard = ({ material, onClick }: MaterialCardProps) => {
  const imageUrl = material.CoverPhoto
    ? `https://d1wh1xji6f82aw.cloudfront.net/${material.CoverPhoto}`
    : "/placeholder.svg?height=200&width=200";

  return (
    <div
      className="bg-white dark:bg-yellow-500/15 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden group hover:shadow-md transition-all hover:border-primary/30 dark:hover:border-primary/30 h-full flex flex-col"
      onClick={onClick}
    >
      <div className="aspect-square relative overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={material.Title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          className="absolute bottom-2 right-2 p-1.5 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 hover:bg-primary hover:text-primary-foreground"
        >
          <Eye className="h-3 w-3" />
        </button>
      </div>

      <div className="p-2 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-800 dark:text-white line-clamp-1 group-hover:text-primary dark:group-hover:text-primary transition-colors">
          {material.Title}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
            {material.BrandName}
          </p>
        </div>
        <p className="text-sm font-bold text-gray-800 dark:text-white mt-1 group-hover:text-primary dark:group-hover:text-primary transition-colors">
          ${material.SalesPriceInUsd.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default MaterialCard;
