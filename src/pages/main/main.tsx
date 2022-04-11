import { useState, useCallback } from "react";

import { BasePage } from "../base";
import { ProductsFilters } from "../../components/products-filters";
import { Products } from "../../components/products";
import { HorizontalSeparator } from "../../components/horizontal-separator";
import { ProductsFiltersType, FiltersType } from "../../types";

export const MainPage = () => {
  const [filters, setFilters] = useState<ProductsFiltersType>({
    date: undefined,
    cityId: undefined,
  });
  const addFilter = useCallback(
    (name: FiltersType, value: string | undefined) => {
      setFilters(
        (filters?: ProductsFiltersType) =>
          ({
            ...filters,
            [name]: value,
          } as ProductsFiltersType)
      );
    },
    []
  );

  return (
    <BasePage>
      <ProductsFilters addFilter={addFilter} />
      <HorizontalSeparator />
      <Products filters={filters} />
    </BasePage>
  );
};
