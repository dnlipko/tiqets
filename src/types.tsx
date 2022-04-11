export type City = [number, string];
export type Countries = Record<string, City[]>;

export type FiltersType = "date" | "cityId";
export type ProductsFiltersType = Record<FiltersType, string | undefined>;

export type ProductType = {
  product_url: string;
  image: string;
  id: number;
  title: string;
  price: number;
  discount_percentage: number;
  summary: string;
  city_id: number;
  available_dates: string[];
}
