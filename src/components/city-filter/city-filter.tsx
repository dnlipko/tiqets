import { useCallback } from "react";
import cn from "classnames";

import { Dropdown } from "../../ui-kit/dropdown/dropdown";
import { City } from "../../types";

import styles from "./city-filter.module.scss";

const CITY_SELECTOR_FOR = "city-filter";
const CITY_PLACEHOLDER = "Choose the city";

type CityFilterProps = {
  cities?: City[];
  isDisabled?: boolean;
  onSelect: (cityId?: string) => void;
};

export const CityFilter = ({
  cities,
  isDisabled,
  onSelect,
}: CityFilterProps) => {
  const items = cities?.map(([value, name]) => ({ value, name }));

  return (
    <div
      className={cn(styles.citySelector, { [styles.isDisabled]: isDisabled })}
    >
      <label htmlFor={CITY_SELECTOR_FOR}>City</label>
      <Dropdown
        className={styles.dropdown}
        id={CITY_SELECTOR_FOR}
        items={items}
        onSelect={onSelect}
        placeholder={CITY_PLACEHOLDER}
      />
    </div>
  );
};
