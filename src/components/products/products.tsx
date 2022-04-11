import React from "react";
import cn from "classnames";
import { useProducts } from "../../hooks/use-products";
import { ProductCard } from "../product-card";

import styles from "./products.module.scss";
import { ProductsFiltersType, ProductType } from "../../types";

const NO_FILTERS_TEXT = "Select filters first";
const EMTY_LIST_TEXT = "Nothing found, please try a different date";

export const Products = ({ filters }: { filters: ProductsFiltersType }) => {
  const { products } = useProducts(filters);

  if (!filters.date || !filters.cityId) {
    return <div className={styles.message}>{NO_FILTERS_TEXT}</div>;
  }

  if (!products?.length) {
    return <div className={styles.message}>{EMTY_LIST_TEXT}</div>;
  }

  return (
    <div className={cn(styles.products)}>
      {products.map((product: ProductType) => (
        <ProductCard product={product} key={`${product.id}`} />
      ))}
    </div>
  );
};
