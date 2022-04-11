import React from "react";

import { ProductType } from "../../types";
import { Price } from "../price";

import styles from "./product-card.module.scss";

export const ProductCard = ({
  product: { product_url, image, title, price, discount_percentage, summary },
}: {
  product: ProductType;
}) => {
  return (
    <a
      href={product_url}
      className={styles.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <article className={styles.card}>
        <img className={styles.image} src={image} alt={title} loading="lazy" />
        <div className={styles.info}>
          <div className={styles.header}>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{summary}</div>
          </div>
          {!!price && (
            <div className={styles.price}>
              <Price price={price} discount_percentage={discount_percentage} />
            </div>
          )}
        </div>
      </article>
    </a>
  );
};
