import { ProductType } from "../../types";
import { formatPrice } from "../../utils/format-price";
import { getPreDiscountPrice } from "../../utils/get-pre-discount-price";

import styles from "./price.module.scss";

const CURRENCY = "€";

export const Price = ({ price, discount_percentage }: Partial<ProductType>) => {
  if (!price) return null;

  const formatedPrice = formatPrice(price, CURRENCY);
  if (!discount_percentage) {
    return <div className={styles.price}>{formatedPrice}</div>;
  }

  const preDiscountPrice = getPreDiscountPrice(price, discount_percentage);

  if (preDiscountPrice < 0) {
    return <div className={styles.price}>{formatedPrice}</div>;
  }

  return (
    <div className={styles.price}>
      <div className={styles.discountPrice}>
        {formatPrice(price, CURRENCY)}
      </div>
      <div className={styles.oldPrice}>{formatPrice(preDiscountPrice, CURRENCY)}</div>
    </div>
  );
};
