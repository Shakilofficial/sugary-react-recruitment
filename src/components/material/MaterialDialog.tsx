import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Material } from "@/types";

import { ShoppingBag } from "lucide-react";

interface MaterialDialogProps {
  material: Material | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const MaterialDialog = ({
  material,
  open,
  onOpenChange,
}: MaterialDialogProps) => {
  if (!material) return null;

  const imageUrl = material.CoverPhoto
    ? `https://d1wh1xji6f82aw.cloudfront.net/${material.CoverPhoto}`
    : "/placeholder.svg?height=400&width=600";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[300px] md:max-w-md px-4 mx-auto rounded-md border-2 border-primary/20 dark:border-primary/80">
        <DialogHeader>
          <DialogTitle>{material.Title}</DialogTitle>
          <DialogDescription>{material.BrandName}</DialogDescription>
        </DialogHeader>

        <div className="relative aspect-video overflow-hidden rounded-md mb-4">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={material.Title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 py-2">
          <div>
            <h4 className="text-sm font-medium text-muted-foreground">
              Price (USD)
            </h4>
            <p className="text-lg font-bold">
              ${material.SalesPriceInUsd.toFixed(2)}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-muted-foreground">
              Price (BDT)
            </h4>
            <p className="text-lg font-bold">
              {material.SalesPrice.toFixed(2)} BDT
            </p>
          </div>

          {material.VariantTitle && (
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">
                Variant
              </h4>
              <p>{material.VariantTitle}</p>
            </div>
          )}

          <div>
            <h4 className="text-sm font-medium text-muted-foreground">
              Material ID
            </h4>
            <p>{material.Id}</p>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
          <Button className="flex items-center gap-2">
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MaterialDialog;
