/* eslint-disable @typescript-eslint/no-explicit-any */
import { MaterialsFilter, MaterialsResponse } from "@/types";
import { axiosInstance } from "./axiosInstance";

interface GetMaterialsParams {
  skip?: number;
  limit?: number;
  SearchTerm?: string;
  TagIds?: number[];
  DeliveryAreaIds?: number[];
}

export const getMaterials = async ({
  skip = 0,
  limit = 12,
  SearchTerm,
  TagIds,
  DeliveryAreaIds,
}: GetMaterialsParams): Promise<MaterialsResponse> => {
  const filter: MaterialsFilter = {
    Skip: skip,
    Limit: limit,
    Types: [1],
  };

  if (SearchTerm) filter.SearchTerm = SearchTerm;
  if (TagIds?.length) filter.TagIds = TagIds;
  if (DeliveryAreaIds?.length) filter.DeliveryAreaIds = DeliveryAreaIds;

  const base64 = btoa(JSON.stringify(filter));

  try {
    const res = await axiosInstance.get(`/Materials/GetAll/?q=${base64}`);
    return res.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || "Failed to fetch materials"
    );
  }
};
