import { useState, useEffect } from "react";
import { getProductsApi } from "../network";
import { ProductType, ProductsFiltersType } from "../types";

const getListId = ({ date, cityId }: ProductsFiltersType) => `${date}${cityId}`;

export const useProducts = ({ date, cityId }: ProductsFiltersType) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [memoProducts, setMemoProducts] = useState<
    Record<string, ProductType[]>
  >({});

  useEffect(() => {
    if (date && cityId) {
      const listId = getListId({ date, cityId });

      if (memoProducts[listId]) {
        setProducts(memoProducts[listId]);
      } else {
        setProducts([]);
        const addNewProductList = async () => {
          const data = await getProductsApi({ date, cityId });
          setMemoProducts((products: Record<string, ProductType[]>) => {
            products[listId] = data;
            return products;
          });
          setProducts(data);
        };

        addNewProductList();
      }
    }
  }, [date, cityId]);

  return { products };
};
