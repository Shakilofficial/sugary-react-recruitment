/* eslint-disable @typescript-eslint/no-explicit-any */

export interface User {
  Id: string;
  FullName: string;
  Email: string;
  RoleId: number;
  Avatar: string;
  [key: string]: any;
}

export interface Material {
  Id: number;
  TypeId?: number;
  StoreId?: number;
  VariantId?: number;
  CoverPhoto: string | null;
  VariantCoverPhoto?: string | null;
  Title: string;
  SubTitle?: string | null;
  VariantTitle?: string | null;
  BrandName: string;
  TaxPercentage?: number | null;
  MinSalesPrice?: number;
  SalesPrice: number;
  SalesPriceInUsd: number;
  DripPrice?: number;
  DripPriceInUsd?: number;
  MinDripPrice?: number | null;
  MinDripPriceInUsd?: number | null;
  Height?: number | null;
  Width?: number | null;
  Depth?: number | null;
  IsInHouse?: boolean;
  ECardGradient1?: string;
  ECardGradient2?: string;
  ECardIconPath?: string;
}

export interface Tag {
  Id: number;
  Title: string;
}

export interface DeliveryArea {
  Id: number;
  Name: string;
  CityId?: number;
}

export interface MaterialsFilter {
  Skip: number;
  Limit: number;
  Types: number[];
  SearchTerm?: string;
  TagIds?: number[];
  DeliveryAreaIds?: number[];
}

export interface MaterialsResponse {
  TotalCount: number;
  RemainingCount: number;
  Tags: Tag[];
  DeliveryAreas: DeliveryArea[];
  Materials: Material[];
}

export type SortOption = "price-asc" | "price-desc" | "name-asc" | "name-desc";

export interface FilterState {
  search: string;
  tags: number[];
  areas: number[];
  sort: SortOption;
}

export type FilterAction =
  | { type: "SET_SEARCH"; payload: string }
  | { type: "TOGGLE_TAG"; payload: number }
  | { type: "TOGGLE_AREA"; payload: number }
  | { type: "SET_SORT"; payload: SortOption }
  | { type: "RESET_FILTERS" };
